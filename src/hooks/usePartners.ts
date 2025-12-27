import { useEffect, useState } from 'react';
import { partnerService } from '@/services/api';
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
        const data = await partnerService.getAll();
        setPartners(data);
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
