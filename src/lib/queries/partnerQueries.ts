import { useQuery } from '@tanstack/react-query';
import { partnerService } from '@/services/api';
import { isStrapiConfigured, fetchPartners } from '@/lib/strapi';
import { isSupabaseConfigured, fetchPartnersFromSupabase } from '@/lib/supabase';

export const partnerKeys = {
  all: ['partners'] as const,
  lists: () => [...partnerKeys.all, 'list'] as const,
};

export function usePartnersQuery() {
  return useQuery({
    queryKey: partnerKeys.lists(),
    queryFn: isStrapiConfigured
      ? fetchPartners
      : isSupabaseConfigured
        ? fetchPartnersFromSupabase
        : () => partnerService.getAll(),
  });
}
