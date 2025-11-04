import { parseEnv } from "../../shared/env";

export function getEnv() {
  return parseEnv(process.env as Record<string, string | undefined>);
}
