import type { VercelRequest, VercelResponse } from "@vercel/node";

import type { DemoResponse } from "../shared/api";
import { getEnv } from "./_lib/env";

export default function handler(_req: VercelRequest, res: VercelResponse) {
  getEnv();
  const body: DemoResponse = { message: "Hello from Vercel Functions" };
  res.status(200).json(body);
}
