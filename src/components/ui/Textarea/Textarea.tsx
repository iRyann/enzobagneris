import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props du composant Textarea.
 */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Variant visuel.
   * @default 'default'
   */
  variant?: 'default' | 'underline';
}

/**
 * Champ multiligne reutilisable.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default:
        'w-full rounded-2xl border border-nature-dark/20 bg-white px-5 py-3 font-serif text-nature-text focus:border-nature-accent focus:outline-none',
      underline:
        'w-full border-b border-nature-dark/30 bg-transparent px-1 py-2 font-serif text-nature-text focus:border-nature-accent focus:outline-none',
    };

    return <textarea ref={ref} className={cn(variants[variant], className)} {...props} />;
  }
);

Textarea.displayName = 'Textarea';
