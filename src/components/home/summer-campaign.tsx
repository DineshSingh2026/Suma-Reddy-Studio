'use client';

import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/button';
import { RemoteImage } from '@/components/ui/remote-image';
import { sectionImages } from '@/lib/images';

export function SummerCampaign() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <RemoteImage src={sectionImages.summer} alt="Summer Crush Collection" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-lavender-royal/35 to-transparent" />
      </div>

      <div className="container-luxe relative">
        <div className="flex min-h-[60vh] max-w-xl flex-col justify-center py-24 lg:min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow text-pink">Seasonal Campaign</span>
            <h2 className="text-display-lg mt-6 text-white">Summer Crush Collection</h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              Featherlight organzas, sun-washed pastels, and breathable silks made for long celebrations under warm
              skies. A collection that moves the way summer should — easy, luminous, unforgettable.
            </p>
            <div className="mt-9">
              <ButtonLink href="/collections/organza-edit" variant="pink" size="lg">
                Explore Collection
              </ButtonLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
