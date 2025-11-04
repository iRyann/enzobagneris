import { z } from "zod";

export const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.string().optional(),
  PING_MESSAGE: z.string().optional(),
});

export type Env = z.infer<typeof EnvSchema>;

export function parseEnv(src: Record<string, string | undefined>): Env {
  const { data, error } = EnvSchema.safeParse(src);
  if (error) {
    console.error("[env] Invalid configuration:", error.issues);
    throw new Error("Invalid environment configuration");
  }
  return data!;
}
