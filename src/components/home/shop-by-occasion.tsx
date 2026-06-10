import Link from 'next/link';
import { occasions } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { RemoteImage } from '@/components/ui/remote-image';

export function ShopByOccasion() {
  return (
    <section className="container-luxe py-20 lg:py-28">
      <SectionHeading
        eyebrow="Dressed For The Moment"
        title="Shop By Occasion"
        description="From the haldi to the reception, find the ensemble that fits the feeling."
        align="center"
      />

      <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {occasions.map((o, i) => (
          <Reveal key={o.slug} delay={i % 4} className="group">
            <Link href={`/collections/${o.slug}`} className="block">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md">
                <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                  <RemoteImage src={o.image!} alt={`${o.title} occasion wear`} sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="absolute inset-0 flex items-end justify-center p-4 text-center">
                  <h3 className="font-serif text-lg text-white sm:text-xl">{o.title}</h3>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
