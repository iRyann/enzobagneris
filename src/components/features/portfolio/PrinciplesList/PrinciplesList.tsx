import React from 'react';

/**
 * Props du composant PrinciplesList.
 */
export interface PrinciplesListProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  accentClass: string;
  borderClass: string;
  titleClassName?: string;
}

/**
 * Liste de principes avec titre.
 */
export function PrinciplesList({
  title,
  icon,
  items,
  accentClass,
  borderClass,
  titleClassName,
}: PrinciplesListProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <div className={`p-2 rounded-full ${accentClass}`}>{icon}</div>
        <h4 className={`font-bold font-display tracking-wide uppercase text-sm ${titleClassName || ''}`}>
          {title}
        </h4>
      </div>
      <ul className={`space-y-2 pl-2 border-l-2 ${borderClass}`}>
        {items.map((principle, i) => (
          <li key={i} className="text-nature-muted text-sm pl-4 leading-relaxed relative">
            {principle}
          </li>
        ))}
      </ul>
    </div>
  );
}
