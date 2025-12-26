import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props generiques de typographie.
 */
export interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * Titre principal.
 */
export function H1({ className, ...props }: TypographyProps) {
  return (
    <h1
      className={cn('font-display text-5xl md:text-7xl text-nature-dark tracking-tight', className)}
      {...props}
    />
  );
}

/**
 * Titre de section.
 */
export function H2({ className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn('font-display text-4xl md:text-5xl text-nature-dark', className)}
      {...props}
    />
  );
}

/**
 * Sous-titre.
 */
export function H3({ className, ...props }: TypographyProps) {
  return (
    <h3
      className={cn('font-display text-2xl md:text-3xl text-nature-dark', className)}
      {...props}
    />
  );
}

/**
 * Paragraphe.
 */
export function Paragraph({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('font-serif text-base md:text-lg text-nature-text', className)} {...props} />
  );
}
