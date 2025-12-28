import { Link } from 'react-router-dom';
import type { NavigationItem } from '@/config/navigation.config';
import { cn } from '@/lib/utils';

/**
 * Props pour un item de navigation.
 */
export interface NavItemProps {
  item: NavigationItem;
  isActive: boolean;
  isScrolled: boolean;
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
}

/**
 * Item de navigation reutilisable.
 */
export function NavItem({
  item,
  isActive,
  isScrolled,
  onClick,
  variant = 'desktop',
}: NavItemProps) {
  if (variant === 'mobile') {
    return (
      <Link
        to={{ pathname: item.to, hash: item.hash }}
        onClick={onClick}
        className="text-nature-dark font-display text-3xl tracking-widest border-b border-nature-dark/5 pb-4 hover:text-nature-accent"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <Link
      to={{ pathname: item.to, hash: item.hash }}
      onClick={onClick}
      className={cn(
        'font-serif text-sm tracking-widest transition-colors hover:text-nature-accent',
        isActive && item.hash === ''
          ? 'text-nature-accent font-bold'
          : isScrolled
          ? 'text-nature-light'
          : 'text-nature-text'
      )}
    >
      {item.label.toUpperCase()}
    </Link>
  );
}
