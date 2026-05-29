import { useQuery } from '@tanstack/react-query';
import { activities as staticActivities } from '@/data/activities';
import { isSupabaseConfigured, fetchActivitiesFromSupabase } from '@/lib/supabase';

export const activityKeys = {
  all: ['activities'] as const,
  lists: () => [...activityKeys.all, 'list'] as const,
};

export function useActivitiesQuery() {
  return useQuery({
    queryKey: activityKeys.lists(),
    queryFn: isSupabaseConfigured
      ? fetchActivitiesFromSupabase
      : () => Promise.resolve(staticActivities),
  });
}
