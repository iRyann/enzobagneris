import { useEffect } from 'react';
import type { DependencyList } from 'react';

/**
 * Hook pour remettre le scroll en haut.
 */
export function useScrollToTop(deps: DependencyList = []) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, deps);
}
