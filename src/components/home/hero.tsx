'use client';

import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/button';
import { RemoteImage } from '@/components/ui/remote-image';
import { sectionImages } from '@/lib/images';

const easing = [0.22, 1, 0.36, 1] as const;

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: easing, delay: 0.15 + i * 0.12 } }),
};

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      {/* background image */}
      <div className="absolute inset-0">
        <RemoteImage src={sectionImages.hero} alt="Suma Reddy Studio luxury ethnic fashion" priority sizes="100vw" position="50% 28%" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-lavender-royal/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-lavender-royal/20" />
      </div>

      <div className="container-luxe relative">
        <div className="flex min-h-[78vh] max-w-2xl flex-col justify-center py-24 sm:min-h-[82vh] lg:min-h-[88vh]">
          <motion.span custom={0} variants={fade} initial="hidden" animate="show" className="eyebrow text-pink">
            The House of Suma Reddy
          </motion.span>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-display-xl mt-6 text-white"
          >
            Luxury Ethnic Fashion Crafted For{' '}
            <span className="italic text-pink">Every Celebration</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Discover timeless sarees, designer lehengas, and couture collections created for the modern woman who wears
            tradition with quiet confidence.
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <ButtonLink href="/collections/signature" variant="pink" size="lg">
              Shop Collection
            </ButtonLink>
            <ButtonLink href="/collections/new-arrivals" variant="ghostLight" size="lg">
              Explore New Arrivals
            </ButtonLink>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-luxe">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-white/40" />
      </motion.div>
    </section>
  );
}
