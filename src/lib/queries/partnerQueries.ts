import { useQuery } from '@tanstack/react-query';
import { partnerService } from '@/services/api';
import { isStrapiConfigured, fetchPartners } from '@/lib/strapi';

export const partnerKeys = {
  all: ['partners'] as const,
  lists: () => [...partnerKeys.all, 'list'] as const,
};

export function usePartnersQuery() {
  return useQuery({
    queryKey: partnerKeys.lists(),
    queryFn: isStrapiConfigured ? fetchPartners : () => partnerService.getAll(),
  });
}
