import React from 'react';
import { X } from 'lucide-react';
import type { NavigationItem } from '@/config/navigation.config';
import { NavItem } from './NavItem';

/**
 * Props du menu mobile.
 */
interface MobileMenuProps {
  items: ReadonlyArray<NavigationItem>;
  onClose: () => void;
}

/**
 * Menu mobile plein ecran.
 */
export function MobileMenu({ items, onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-nature-light z-50 animate-in slide-in-from-top duration-300">
      <div className="p-6 flex justify-between items-center border-b border-nature-dark/10">
        <span className="font-display font-bold text-xl text-nature-dark">MENU</span>
        <button onClick={onClose} aria-label="Fermer le menu">
          <X className="w-8 h-8 text-nature-dark" />
        </button>
      </div>
      <div className="flex flex-col py-12 px-8 space-y-8">
        {items.map((item) => (
          <NavItem
            key={item.label}
            item={item}
            isActive={false}
            isScrolled={false}
            onClick={onClose}
            variant="mobile"
          />
        ))}
      </div>
    </div>
  );
}
