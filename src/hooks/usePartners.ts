import { useEffect, useState } from 'react';
import partnersData from '@/data/partners.json';
import type { Partner } from '@/types';

/**
 * Hook pour recuperer les partenaires.
 */
export function usePartners() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        // TODO: Remplacer par fetch Strapi API
        setPartners(partnersData as Partner[]);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return { partners, loading, error };
}
