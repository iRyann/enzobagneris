import "dotenv/config";
import { parseEnv } from "../shared/env";

export const env = parseEnv(process.env);
