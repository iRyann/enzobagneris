import { useMemo } from 'react';
import type { z } from 'zod';
import { useDebounce } from './useDebounce';

type FieldErrors<T> = Partial<Record<keyof T, string>>;

export function useFormValidation<T extends Record<string, unknown>>(
  values: T,
  schema: z.ZodSchema<T>,
  delay: number = 500,
): { errors: FieldErrors<T>; isValid: boolean } {
  const debouncedValues = useDebounce(values, delay);

  return useMemo(() => {
    const result = schema.safeParse(debouncedValues);

    if (result.success) {
      return { errors: {}, isValid: true };
    }

    const fieldErrors: FieldErrors<T> = {};

    for (const issue of result.error.issues) {
      const key = issue.path[0] as keyof T | undefined;
      if (key && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }

    return { errors: fieldErrors, isValid: false };
  }, [debouncedValues, schema]);
}
