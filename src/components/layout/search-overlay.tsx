'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X } from 'lucide-react';

const trending = ['Bridal Lehengas', 'Organza Sarees', 'Silk Edit', 'Anarkali', 'Reception Gowns', 'Festive Co-Ords'];

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (open) {
      window.addEventListener('keydown', onKey);
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex flex-col bg-[rgba(251,250,248,0.985)] backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="container-luxe flex items-center justify-end py-6">
            <button
              type="button"
              aria-label="Close search"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <motion.div
            className="container-luxe mx-auto w-full max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow mb-6">Smart Search</span>
            <form action="/collections/new-arrivals" className="flex items-center gap-4 border-b-2 border-ink pb-5">
              <Search className="h-7 w-7 text-lavender-royal" />
              <input
                autoFocus
                type="search"
                name="q"
                placeholder="What are you looking for?"
                className="w-full bg-transparent font-serif text-2xl text-ink placeholder:text-ink-muted/70 focus:outline-none sm:text-4xl"
              />
            </form>
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-luxe text-ink-muted">Trending Searches</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {trending.map((t) => (
                  <Link
                    key={t}
                    href="/collections/new-arrivals"
                    onClick={onClose}
                    className="rounded-full border border-ink/20 px-5 py-2.5 text-xs text-ink transition hover:border-ink hover:bg-ink hover:text-white"
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
