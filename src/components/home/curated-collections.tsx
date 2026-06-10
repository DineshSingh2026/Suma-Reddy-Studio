import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { curatedCollections } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { RemoteImage } from '@/components/ui/remote-image';

export function CuratedCollections() {
  return (
    <section className="bg-lavender-veil py-20 lg:py-28">
      <div className="container-luxe">
      <SectionHeading
        eyebrow="The Edits"
        title="Curated Collections"
        description="Hand-selected by our design team — fabric stories and signature series worth exploring."
        align="center"
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {curatedCollections.map((c, i) => (
          <Reveal key={c.slug} delay={i % 3} className="group">
            <Link
              href={`/collections/${c.slug}`}
              className="flex items-center gap-5 rounded-md border border-ink/8 bg-white p-4 transition-all duration-300 hover:border-lavender-royal/30 hover:shadow-card"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md sm:h-28 sm:w-28">
                <RemoteImage src={c.image!} alt={c.title} sizes="112px" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-luxe text-lavender-royal">{c.subtitle}</p>
                <h3 className="mt-1 font-serif text-xl text-ink">{c.title}</h3>
                <p className="mt-1 truncate text-xs text-ink-muted">{c.description}</p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lavender-mist text-lavender-royal transition group-hover:bg-pink group-hover:text-ink">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  );
}
