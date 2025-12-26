import { useEffect, useState } from 'react';
import servicesData from '@/data/services.json';
import type { ServiceItem } from '@/types';

/**
 * Hook pour recuperer les services.
 */
export function useServices() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        // TODO: Remplacer par fetch Strapi API
        setServices(servicesData as ServiceItem[]);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
}
