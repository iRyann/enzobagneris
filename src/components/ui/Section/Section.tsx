import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props du composant Section.
 */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Variant visuel.
   * @default 'default'
   */
  variant?: 'default' | 'dark' | 'light';
}

/**
 * Section de page reutilisable.
 */
export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'py-24',
      dark: 'py-24 bg-nature-dark text-nature-light',
      light: 'py-24 bg-nature-light',
    };

    return <section ref={ref} className={cn(variants[variant], className)} {...props} />;
  }
);

Section.displayName = 'Section';
