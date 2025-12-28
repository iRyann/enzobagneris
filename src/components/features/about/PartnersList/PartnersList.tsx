import { usePartners } from '@/hooks';

/**
 * Liste des partenaires.
 */
export function PartnersList() {
  const { partners } = usePartners();

  return (
    <div className="flex flex-wrap justify-center gap-12 mb-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="flex items-center justify-center px-6 py-3 border border-nature-dark/10 rounded-full bg-white/40"
        >
          <span className="font-display font-bold text-nature-dark text-sm">{partner.name}</span>
        </div>
      ))}
    </div>
  );
}
