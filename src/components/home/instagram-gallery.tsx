import { Instagram } from 'lucide-react';
import { instagramTiles } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { RemoteImage } from '@/components/ui/remote-image';

export function InstagramGallery() {
  return (
    <section className="container-luxe py-20 lg:py-28">
      <SectionHeading
        eyebrow="@sumareddystudio"
        title="Follow The Atelier"
        description="A feed of brides, behind-the-scenes craft, and styling inspiration."
        align="center"
        cta={{ label: 'Follow Us', href: 'https://www.instagram.com/sumareddystudio' }}
      />

      <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
        {instagramTiles.map((t, i) => (
          <Reveal key={t.id} delay={i % 6} className="group">
            <a
              href="https://www.instagram.com/sumareddystudio"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label={`Instagram post ${t.caption}`}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-md">
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
                  <RemoteImage src={t.image} alt={`Suma Reddy Studio ${t.caption}`} sizes="(max-width: 768px) 50vw, 16vw" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-white" />
                  <span className="px-2 text-center text-[10px] uppercase tracking-wide2 text-white">{t.caption}</span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
