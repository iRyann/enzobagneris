import { useQuery } from '@tanstack/react-query';
import { serviceItemService } from '@/services/api';
import { isStrapiConfigured, fetchServiceItems } from '@/lib/strapi';

export const serviceKeys = {
  all: ['services'] as const,
  lists: () => [...serviceKeys.all, 'list'] as const,
};

export function useServicesQuery() {
  return useQuery({
    queryKey: serviceKeys.lists(),
    queryFn: isStrapiConfigured ? fetchServiceItems : () => serviceItemService.getAll(),
  });
}
