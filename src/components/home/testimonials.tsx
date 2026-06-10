'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const active = testimonials[index];

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);

  return (
    <section className="bg-lavender-veil py-20 lg:py-28">
      <div className="container-luxe">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow mx-auto justify-center">Client Stories</span>
          <h2 className="text-display-md mt-5 text-ink">Worn & Remembered</h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="mx-auto h-10 w-10 text-pink" />
          <div className="mt-6 min-h-[200px] sm:min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="mb-5 flex justify-center gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-pink text-pink" />
                  ))}
                </div>
                <blockquote className="font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
                  “{active.quote}”
                </blockquote>
                <figcaption className="mt-7">
                  <p className="text-sm font-semibold uppercase tracking-wide2 text-ink">{active.name}</p>
                  <p className="mt-1 text-xs text-ink-muted">
                    {active.location} · {active.context}
                  </p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition hover:bg-ink hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-pink' : 'w-1.5 bg-ink/20'}`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition hover:bg-ink hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
