/**
 * Image migration script — uploads static assets to Supabase Storage and
 * updates URLs in components_shared_image_assets.
 *
 * Usage:
 *   cd cms
 *   SUPABASE_SERVICE_ROLE_KEY=<key> npx tsx scripts/migrate-images.ts
 *
 * Requires: @supabase/supabase-js (add temporarily to cms/package.json
 * devDependencies if not present, or install globally via pnpm add -g @supabase/supabase-js)
 */

import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://clqmmnauggoxlpabwqpj.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET = "media";
const REPO_ROOT = path.resolve(process.cwd(), "..");
const PUBLIC_DIR = path.join(REPO_ROOT, "public");

if (!SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Missing SUPABASE_SERVICE_ROLE_KEY env var");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const MIME: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

async function run() {
  // Fetch all image asset rows
  const { data: rows, error } = await supabase
    .from("components_shared_image_assets")
    .select("id, url");

  if (error) throw error;

  let uploaded = 0;
  let skipped = 0;
  let failed = 0;

  for (const row of rows ?? []) {
    const url: string = row.url;

    // Only migrate paths that start with /assets/
    if (!url.startsWith("/assets/")) {
      skipped++;
      continue;
    }

    const localPath = path.join(PUBLIC_DIR, url);

    if (!fs.existsSync(localPath)) {
      console.warn(`  ⚠ File not found locally: ${localPath}`);
      failed++;
      continue;
    }

    const storagePath = url.slice(1).normalize("NFD").replace(/[̀-ͯ]/g, "");
    const ext = path.extname(localPath).toLowerCase();
    const contentType = MIME[ext] ?? "application/octet-stream";

    const fileBuffer = fs.readFileSync(localPath);

    // Upload (upsert = overwrite if already exists)
    const { error: uploadErr } = await supabase.storage
      .from(BUCKET)
      .upload(storagePath, fileBuffer, { contentType, upsert: true });

    if (uploadErr) {
      console.error(
        `  ✗ Upload failed for ${storagePath}: ${uploadErr.message}`,
      );
      failed++;
      continue;
    }

    const newUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${storagePath}`;

    const { error: updateErr } = await supabase
      .from("components_shared_image_assets")
      .update({ url: newUrl })
      .eq("id", row.id);

    if (updateErr) {
      console.error(
        `  ✗ DB update failed for id=${row.id}: ${updateErr.message}`,
      );
      failed++;
      continue;
    }

    console.log(`  ✓ ${url} → ${newUrl}`);
    uploaded++;
  }

  console.log(
    `\nDone: ${uploaded} uploaded, ${skipped} skipped, ${failed} failed.`,
  );
}

run().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
