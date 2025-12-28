import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props du composant Badge.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Variant visuel.
   * @default 'default'
   */
  variant?: 'default' | 'accent' | 'soft';
}

/**
 * Badge pour libelles courts.
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-nature-dark/10 text-nature-dark',
      accent: 'bg-nature-accent text-nature-light',
      soft: 'bg-nature-soft/20 text-nature-dark',
    };

    return (
      <span
        ref={ref}
        className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-bold', variants[variant], className)}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
