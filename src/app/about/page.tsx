import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/page-header';
import { ButtonLink } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { RemoteImage } from '@/components/ui/remote-image';
import { pageHeaderImages, miscImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Our Story — A Luxury Indian Couture House',
  description:
    'The story of Suma Reddy Studio — founder vision, heritage craftsmanship, and a journey from a single Hyderabad atelier to a celebrated couture house.',
  alternates: { canonical: '/about' },
};

const values = [
  { title: 'Craftsmanship', text: 'Every piece is hand-finished by master artisans, with techniques refined over generations.' },
  { title: 'Heritage', text: 'We preserve India’s textile traditions — handloom, zardozi, gota — by keeping them alive in modern couture.' },
  { title: 'Design Integrity', text: 'No templates, no shortcuts. Each silhouette is sketched in-house and produced in limited numbers.' },
  { title: 'The Client', text: 'From a first appointment to a final fitting, we design around the woman who will wear it.' },
];

const timeline = [
  { year: '2014', title: 'The First Atelier', text: 'Suma Reddy opens a single studio in Hyderabad, dressing a handful of brides by referral.' },
  { year: '2017', title: 'The Bridal House', text: 'A dedicated bridal couture line launches, built entirely on made-to-measure craftsmanship.' },
  { year: '2020', title: 'Going National', text: 'Boutiques open in Bangalore and Mumbai as the house gains a devoted following.' },
  { year: '2026', title: 'A Global Couture House', text: 'Worldwide delivery and a digital flagship bring the atelier to clients across the globe.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The House"
        title="Where Tradition Meets Timeless Elegance"
        description="A luxury Indian ethnic fashion house, designed and crafted with devotion since 2014."
        image={pageHeaderImages.about}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Our Story' }]}
      />

      {/* founder */}
      <section className="container-luxe py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md">
              <RemoteImage src={miscImages.aboutFounder} alt="Suma Reddy, Founder & Creative Director" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="eyebrow">Founder’s Note</span>
              <h2 className="text-display-md mt-5 text-ink">A Vision Stitched By Hand</h2>
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-ink-muted">
                <p>
                  I grew up surrounded by fabric — the rustle of silk, the quiet patience of an embroiderer at his frame.
                  Suma Reddy Studio began as a love letter to that world, and a promise that luxury could feel personal
                  again.
                </p>
                <p>
                  We don’t chase trends. We build heirlooms — pieces a woman reaches for at the most important moments of
                  her life, and one day passes on. That belief shapes every thread we choose and every artisan we work
                  with.
                </p>
                <p className="font-serif text-2xl italic text-lavender-royal">— Suma Reddy, Founder &amp; Creative Director</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* vision / mission */}
      <section className="bg-lavender-mist/40 py-20 lg:py-28">
        <div className="container-luxe grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal className="rounded-md bg-white p-8 lg:p-10">
            <span className="eyebrow">Our Vision</span>
            <p className="mt-5 font-serif text-2xl leading-snug text-ink sm:text-3xl">
              To be the most loved couture house for the modern Indian woman — where heritage feels effortless and luxury
              feels like home.
            </p>
          </Reveal>
          <Reveal delay={1} className="rounded-md bg-white p-8 lg:p-10">
            <span className="eyebrow">Our Mission</span>
            <p className="mt-5 font-serif text-2xl leading-snug text-ink sm:text-3xl">
              To craft ethical, hand-made ensembles that honour Indian artisanship while empowering the women who keep
              these traditions alive.
            </p>
          </Reveal>
        </div>
      </section>

      {/* values */}
      <section className="container-luxe py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto justify-center">What We Stand For</span>
          <h2 className="text-display-md mt-5 text-ink">The Atelier Code</h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i % 4} className="flex flex-col gap-3 bg-cream p-8">
              <span className="font-serif text-4xl text-pink">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-serif text-xl text-ink">{v.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* timeline */}
      <section className="bg-ink py-20 text-white lg:py-28">
        <div className="container-luxe">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mx-auto justify-center text-pink">The Journey</span>
            <h2 className="text-display-md mt-5 text-white">From One Atelier To The World</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i % 4} className="border-t border-white/15 pt-6">
                <span className="font-serif text-4xl text-pink">{t.year}</span>
                <h3 className="mt-3 font-serif text-xl text-white">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="container-luxe py-20 text-center lg:py-28">
        <h2 className="text-display-md mx-auto max-w-2xl text-ink">Experience The Atelier For Yourself</h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <ButtonLink href="/collections/signature" variant="primary" size="lg">Shop The Collection</ButtonLink>
          <ButtonLink href="/contact" variant="outline" size="lg">Book An Appointment</ButtonLink>
        </div>
      </section>
    </>
  );
}
