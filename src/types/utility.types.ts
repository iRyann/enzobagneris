import type { APIError } from './error.types';

export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: APIError };

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface SearchFilters {
  query?: string;
  category?: string;
  tags?: string[];
  dateFrom?: string;
  dateTo?: string;
  sortBy?: 'date' | 'title' | 'relevance';
  sortOrder?: 'asc' | 'desc';
}
