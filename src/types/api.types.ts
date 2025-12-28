import type { APIError } from './error.types';

export interface EndpointConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
}

export interface RequestOptions {
  signal?: AbortSignal;
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean>;
}

export interface APIResponse<T> {
  data: T;
  meta?: {
    timestamp: string;
    requestId: string;
  };
  error?: APIError;
}
