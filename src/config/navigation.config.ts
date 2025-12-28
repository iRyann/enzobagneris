/**
 * Configuration des items de navigation.
 */
export const navigationConfig = [
  { label: 'Accueil', to: '/', hash: '#home' },
  { label: 'À propos', to: '/about', hash: '' },
  { label: 'Activités', to: '/services', hash: '' },
  { label: 'Portfolio', to: '/portfolio', hash: '' },
  { label: 'Blog', to: '/blog', hash: '' },
  { label: 'Contact', to: '/', hash: '#contact' },
] as const;

export type NavigationItem = (typeof navigationConfig)[number];
