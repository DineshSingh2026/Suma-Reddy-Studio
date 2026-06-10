import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { featuredCollections } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { RemoteImage } from '@/components/ui/remote-image';

export function FeaturedCollections() {
  return (
    <section className="container-luxe py-20 lg:py-28">
      <SectionHeading
        eyebrow="Curated For You"
        title="Featured Collections"
        description="Six worlds of couture, each crafted around a moment worth dressing for."
        align="center"
      />

      <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {featuredCollections.map((c, i) => (
          <Reveal key={c.slug} delay={i % 3} className="group">
            <Link href={`/collections/${c.slug}`} className="block">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md">
                <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                  <RemoteImage src={c.image!} alt={c.title} sizes="(max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-luxe text-pink">{c.subtitle}</p>
                    <h3 className="mt-1 font-serif text-xl text-white sm:text-2xl">{c.title}</h3>
                    <p className="mt-1 hidden max-w-[24ch] text-xs text-white/70 sm:block">{c.description}</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-pink group-hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
