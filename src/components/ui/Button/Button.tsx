import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props du composant Button.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variant visuel du bouton.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /**
   * Taille du bouton.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Etat de chargement.
   */
  loading?: boolean;
  /**
   * Largeur pleine.
   */
  fullWidth?: boolean;
}

/**
 * Composant Button reutilisable avec variants.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = [
      'inline-flex items-center justify-center',
      'font-display tracking-widest uppercase',
      'transition-all duration-300',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
    ].join(' ');

    const variants = {
      primary:
        'bg-nature-dark text-nature-light hover:bg-nature-accent focus:ring-nature-dark',
      secondary:
        'bg-nature-accent text-nature-light hover:bg-nature-dark focus:ring-nature-accent',
      outline:
        'border-2 border-nature-dark text-nature-dark hover:bg-nature-dark hover:text-nature-light focus:ring-nature-dark',
      ghost: 'text-nature-dark hover:bg-nature-dark/10 focus:ring-nature-dark',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-12 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Chargement...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
