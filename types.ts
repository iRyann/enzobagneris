export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  reverseLayout?: boolean;
  ctaText?: string;
}

export interface Partner {
  name: string;
  logo: string; // URL placeholder
}

export interface NavItem {
  label: string;
  href: string;
}