import { useQuery } from '@tanstack/react-query';
import { serviceItemService } from '@/services/api';

export const serviceKeys = {
  all: ['services'] as const,
  lists: () => [...serviceKeys.all, 'list'] as const,
};

export function useServicesQuery() {
  return useQuery({
    queryKey: serviceKeys.lists(),
    queryFn: () => serviceItemService.getAll(),
  });
}
