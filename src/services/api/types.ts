export class DataServiceError extends Error {
  endpoint: string;
  cause?: unknown;

  constructor(message: string, endpoint: string, cause?: unknown) {
    super(message);
    this.name = 'DataServiceError';
    this.endpoint = endpoint;
    this.cause = cause;
  }
}
