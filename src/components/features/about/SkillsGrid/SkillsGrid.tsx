
/**
 * Item de competence.
 */
export interface SkillItem {
  icon: React.ElementType;
  label: string;
  className?: string;
}

/**
 * Liste de competences principales.
 */
export function SkillsGrid({ items }: { items: SkillItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="flex items-center gap-4">
            <Icon className={item.className || 'text-nature-dark'} />
            <span className="font-serif text-nature-muted">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
