'use client';

import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/button';
import { RemoteImage } from '@/components/ui/remote-image';
import { sectionImages } from '@/lib/images';

const stats = [
  { value: '180+', label: 'Hours per bridal piece' },
  { value: '24', label: 'Master artisans' },
  { value: '3', label: 'Flagship ateliers' },
];

export function BridalShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 lg:left-1/2">
        <RemoteImage src={sectionImages.bridal} alt="Bridal couture by Suma Reddy Studio" sizes="(max-width: 1024px) 100vw, 50vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-lavender-royal/40 to-transparent lg:from-ink/95 lg:via-lavender-royal/30" />
      </div>

      <div className="container-luxe relative">
        <div className="flex min-h-[80vh] max-w-xl flex-col justify-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow text-pink">Bridal Couture</span>
            <h2 className="text-display-lg mt-6">A Bridal House For The Forever Moment</h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              Made-to-measure bridal couture, sculpted to you across private appointments. From the first sketch to the
              final fitting, every heirloom is built by hand to be worn once and treasured for generations.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-y border-white/15 py-7">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-3xl text-pink sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide2 text-white/60">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="/collections/bridal-couture" variant="pink" size="lg">
                View Bridal Collection
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghostLight" size="lg">
                Book An Appointment
              </ButtonLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
