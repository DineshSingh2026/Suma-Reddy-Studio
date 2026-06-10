import Link from 'next/link';
import { Instagram, Facebook, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './logo';

const columns = [
  {
    heading: 'Shop',
    links: [
      { label: 'Sarees', href: '/collections/sarees' },
      { label: 'Lehengas', href: '/collections/lehengas' },
      { label: 'Anarkalis', href: '/collections/anarkalis' },
      { label: 'Gowns', href: '/collections/gowns' },
      { label: 'New Arrivals', href: '/collections/new-arrivals' },
    ],
  },
  {
    heading: 'Collections',
    links: [
      { label: 'Bridal Couture', href: '/collections/bridal-couture' },
      { label: 'The Silk Edit', href: '/collections/silk-edit' },
      { label: 'Organza Edit', href: '/collections/organza-edit' },
      { label: 'Festive', href: '/collections/festive' },
      { label: 'Signature', href: '/collections/signature' },
    ],
  },
  {
    heading: 'House',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Boutiques', href: '/stores' },
      { label: 'Contact', href: '/contact' },
      { label: 'Book an Appointment', href: '/contact' },
      { label: 'Careers', href: '/about' },
    ],
  },
  {
    heading: 'Client Care',
    links: [
      { label: 'Shipping', href: '/contact' },
      { label: 'Returns & Exchanges', href: '/contact' },
      { label: 'Size Guide', href: '/contact' },
      { label: 'Privacy Policy', href: '/contact' },
      { label: 'Terms of Service', href: '/contact' },
    ],
  },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/sumareddystudio' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Twitter, label: 'X', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="brand-ribbon h-1 w-full" />
      <div className="container-luxe py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              A luxury Indian ethnic fashion house where heritage craftsmanship meets modern couture. Designed in our
              ateliers, made to be worn and remembered.
            </p>
            <div className="mt-7 flex flex-col gap-3 text-sm text-white/70">
              <a href="tel:+919618755757" className="link-underline inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-pink" /> +91 96187 55757
              </a>
              <a href="mailto:sumareddy.official@gmail.com" className="link-underline inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-pink" /> sumareddy.official@gmail.com
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-pink" /> Hyderabad · Bangalore · Mumbai
              </span>
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="mb-5 text-[11px] uppercase tracking-luxe text-pink">{col.heading}</p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="link-underline text-sm text-white/65 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">© {2026} Suma Reddy Studio. Crafted with care in India.</p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-pink hover:text-pink"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
