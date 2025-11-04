import type { VercelRequest, VercelResponse } from "@vercel/node";

import { getEnv } from "./_lib/env";

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const env = getEnv();
  res.status(200).json({
    ok: true,
    message: env.PING_MESSAGE ?? "pong",
  });
}
