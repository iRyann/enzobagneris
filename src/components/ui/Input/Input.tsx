import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props du composant Input.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Variant visuel.
   * @default 'default'
   */
  variant?: 'default' | 'underline';
}

/**
 * Champ de saisie reutilisable.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default:
        'w-full rounded-full border border-nature-dark/20 bg-white px-5 py-3 font-serif text-nature-text focus:border-nature-accent focus:outline-none',
      underline:
        'w-full border-b border-nature-dark/30 bg-transparent px-1 py-2 font-serif text-nature-text focus:border-nature-accent focus:outline-none',
    };

    return <input ref={ref} className={cn(variants[variant], className)} {...props} />;
  }
);

Input.displayName = 'Input';
