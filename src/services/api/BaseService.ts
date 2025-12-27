import { DataServiceError } from './types';

export abstract class BaseService<T> {
  protected abstract endpoint: string;

  protected abstract getStaticData(): T[];

  protected async fetchData(): Promise<T[]> {
    try {
      return this.getStaticData();
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected handleError(error: unknown): DataServiceError {
    if (error instanceof DataServiceError) {
      return error;
    }

    if (error instanceof Error) {
      return new DataServiceError(error.message, this.endpoint, error);
    }

    return new DataServiceError('Unknown data service error', this.endpoint, error);
  }
}
