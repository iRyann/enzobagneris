import type { Partner } from '@/types';
import { usePartnersQuery } from '@/lib/queries/partnerQueries';

/**
 * Hook pour recuperer les partenaires.
 */
export function usePartners() {
  const { data, isLoading, error } = usePartnersQuery();

  return {
    partners: (data || []) as Partner[],
    loading: isLoading,
    error: error as Error | null,
  };
}
