import Link from 'next/link';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { stores } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { RemoteImage } from '@/components/ui/remote-image';

export function StoreExperience() {
  return (
    <section className="container-luxe py-20 lg:py-28">
      <SectionHeading
        eyebrow="The Boutique Experience"
        title="Visit Our Ateliers"
        description="Step into a Suma Reddy boutique for private styling, bridal appointments, and the full sensory pleasure of couture."
        align="center"
        cta={{ label: 'All Stores', href: '/stores' }}
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {stores.map((s, i) => (
          <Reveal key={s.id} delay={i} className="group">
            <Link
              href="/stores"
              className="flex h-full flex-col overflow-hidden rounded-md border border-ink/8 bg-white transition-all duration-300 hover:shadow-card"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                  <RemoteImage src={s.image!} alt={`${s.city} boutique`} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                {s.flagship && (
                  <span className="absolute left-3 top-3 bg-pink px-2.5 py-1 text-[9px] uppercase tracking-wide2 text-ink">
                    Flagship
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-ink">{s.city}</h3>
                  <ArrowUpRight className="h-5 w-5 text-lavender-royal transition group-hover:text-pink" />
                </div>
                <p className="mt-3 flex items-start gap-2 text-sm text-ink-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lavender-royal" />
                  {s.address}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-ink-muted">
                  <Clock className="h-4 w-4 shrink-0 text-lavender-royal" />
                  {s.hours}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
