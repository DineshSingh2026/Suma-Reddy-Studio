import { ButtonLink } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { RemoteImage } from '@/components/ui/remote-image';
import { sectionImages } from '@/lib/images';

export function SareeShowcase() {
  return (
    <section className="container-luxe py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        {/* tall image */}
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md">
            <RemoteImage src={sectionImages.sareeMain} alt="Designer saree editorial" sizes="(max-width: 1024px) 100vw, 40vw" />
          </div>
        </Reveal>

        {/* copy + stacked images */}
        <div className="flex flex-col justify-center gap-8 lg:col-span-7">
          <Reveal>
            <span className="eyebrow">Designer Saree Showcase</span>
            <h2 className="text-display-md mt-5 max-w-xl text-ink">
              The Saree, Reimagined As Modern Couture
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-ink-muted">
              Nine yards of heritage, draped for the woman of today. Our saree atelier marries age-old weaving
              traditions with contemporary embellishment — pre-stitched drapes, sculpted blouses, and featherlight
              finishes that move effortlessly from ceremony to celebration.
            </p>
            <div className="mt-7">
              <ButtonLink href="/collections/silk-edit" variant="outline" size="md">
                Explore The Silk Edit
              </ButtonLink>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Reveal delay={1}>
              <div className="relative aspect-square w-full overflow-hidden rounded-md">
                <RemoteImage src={sectionImages.sareeA} alt="Saree fabric detail" sizes="(max-width: 1024px) 50vw, 30vw" />
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="relative aspect-square w-full overflow-hidden rounded-md">
                <RemoteImage src={sectionImages.sareeB} alt="Bridal jewellery styling" sizes="(max-width: 1024px) 50vw, 30vw" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
