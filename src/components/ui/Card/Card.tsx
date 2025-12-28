import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props du composant Card.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variant visuel de la carte.
   * @default 'default'
   */
  variant?: 'default' | 'bordered' | 'elevated';
}

/**
 * Composant Card reutilisable.
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-white rounded-3xl',
      bordered: 'bg-white rounded-3xl border border-nature-dark/10',
      elevated: 'bg-white rounded-3xl shadow-xl',
    };

    return <div ref={ref} className={cn(variants[variant], className)} {...props} />;
  }
);

Card.displayName = 'Card';
