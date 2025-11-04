declare module "@vercel/node" {
  import type { IncomingMessage, ServerResponse } from "http";

  export interface VercelRequest extends IncomingMessage {
    query: Record<string, string | string[]>;
    cookies: Record<string, string>;
    body?: unknown;
  }

  export interface VercelResponse extends ServerResponse {
    status(code: number): VercelResponse;
    send(body: unknown): void;
    json(body: unknown): void;
  }
}
