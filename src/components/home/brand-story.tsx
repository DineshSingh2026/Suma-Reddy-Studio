import { ButtonLink } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { RemoteImage } from '@/components/ui/remote-image';
import { sectionImages } from '@/lib/images';

const pillars = [
  { title: 'Heritage Inspired', text: 'Rooted in centuries of Indian craft traditions.' },
  { title: 'Modern Craftsmanship', text: 'Ancestral techniques, refined for today.' },
  { title: 'Designer-Led', text: 'Every piece sketched in-house, never templated.' },
  { title: 'Premium Couture House', text: 'Made-to-treasure quality, in limited numbers.' },
];

export function BrandStory() {
  return (
    <section className="container-luxe py-20 lg:py-28">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md sm:aspect-[5/4] lg:aspect-[4/5]">
            <RemoteImage src={sectionImages.brandStory} alt="Inside the Suma Reddy Studio atelier" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="text-display-md mt-5 text-ink">Where Tradition Meets Timeless Elegance</h2>
            <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-ink-muted">
              <p>
                Suma Reddy Studio was born from a simple belief — that the women of today deserve heirlooms made with
                the same devotion as those of generations past. What began in a single Hyderabad atelier has grown into
                a couture house that dresses brides and celebrations across the world.
              </p>
              <p>
                We work hand-in-hand with master weavers and embroiderers, many carrying skills passed down through
                families. Every saree, every lehenga is a slow collaboration between heritage and a modern design
                sensibility — luxurious, feminine, and unmistakably ours.
              </p>
            </div>
          </Reveal>

          <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i % 2}>
                <p className="font-serif text-lg text-ink">{p.title}</p>
                <p className="mt-1 text-sm text-ink-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-9">
            <ButtonLink href="/about" variant="lavender" size="md">
              Discover Our Journey
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
