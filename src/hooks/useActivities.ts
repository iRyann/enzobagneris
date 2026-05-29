import type { Activity } from '@/types';
import { useActivitiesQuery } from '@/lib/queries/activityQueries';

/**
 * Hook pour récupérer le catalogue des activités.
 */
export function useActivities() {
  const { data, isLoading, error } = useActivitiesQuery();

  return {
    activities: (data || []) as Activity[],
    loading: isLoading,
    error: error as Error | null,
  };
}
