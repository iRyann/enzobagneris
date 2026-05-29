import { useQuery } from '@tanstack/react-query';
import { serviceItemService } from '@/services/api';
import { isStrapiConfigured, fetchServiceItems } from '@/lib/strapi';
import { isSupabaseConfigured, fetchServiceItemsFromSupabase } from '@/lib/supabase';

export const serviceKeys = {
  all: ['services'] as const,
  lists: () => [...serviceKeys.all, 'list'] as const,
};

export function useServicesQuery() {
  return useQuery({
    queryKey: serviceKeys.lists(),
    queryFn: isStrapiConfigured
      ? fetchServiceItems
      : isSupabaseConfigured
        ? fetchServiceItemsFromSupabase
        : () => serviceItemService.getAll(),
  });
}
