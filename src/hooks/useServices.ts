import type { ServiceItem } from '@/types';
import { useServicesQuery } from '@/lib/queries/serviceQueries';

/**
 * Hook pour recuperer les services.
 */
export function useServices() {
  const { data, isLoading, error } = useServicesQuery();

  return {
    services: (data || []) as ServiceItem[],
    loading: isLoading,
    error: error as Error | null,
  };
}
