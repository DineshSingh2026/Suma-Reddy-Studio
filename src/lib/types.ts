export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  collection: string;
  occasion: string[];
  fabric: string;
  color: string;
  colorHex: string;
  embroidery: string;
  image: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  tone: number; // 0-5 → drives the placeholder gradient variant
  description: string;
  story: string;
  care: string[];
  styling: string[];
};

export type Collection = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tone: number;
  image?: string;
};

export type Occasion = {
  slug: string;
  title: string;
  tone: number;
  image?: string;
};

export type Store = {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
  image?: string;
  flagship?: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  context: string;
};

export type NavItem = {
  label: string;
  href: string;
  columns?: { heading: string; links: { label: string; href: string }[] }[];
  featured?: { title: string; href: string; tone: number; image?: string };
};
