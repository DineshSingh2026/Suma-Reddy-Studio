'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Search, Heart, ShoppingBag, User, ChevronRight } from 'lucide-react';
import { navigation } from '@/lib/navigation';
import { Logo } from './logo';

const easing = [0.22, 1, 0.36, 1] as const;

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-cream lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* search */}
          <div className="px-5 py-5">
            <form action="/collections/new-arrivals" className="flex items-center gap-3 border-b border-ink/20 pb-3">
              <Search className="h-5 w-5 text-lavender-royal" />
              <input
                type="search"
                name="q"
                placeholder="Search sarees, lehengas, bridal…"
                className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
              />
            </form>
          </div>

          {/* nav links */}
          <nav className="no-scrollbar flex-1 overflow-y-auto px-5">
            <ul className="flex flex-col">
              {navigation.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, ease: easing }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between border-b border-ink/8 py-4 font-serif text-2xl text-ink"
                  >
                    {item.label}
                    <ChevronRight className="h-5 w-5 text-lavender-royal" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* account row */}
          <div className="grid grid-cols-3 gap-2 border-t border-ink/10 px-5 py-5">
            {[
              { icon: User, label: 'Account', href: '/contact' },
              { icon: Heart, label: 'Wishlist', href: '/collections/new-arrivals' },
              { icon: ShoppingBag, label: 'Cart', href: '/collections/new-arrivals' },
            ].map((a) => (
              <Link
                key={a.label}
                href={a.href}
                onClick={onClose}
                className="flex flex-col items-center gap-2 rounded-md border border-ink/10 py-4 text-[10px] uppercase tracking-wide2 text-ink"
              >
                <a.icon className="h-5 w-5 text-lavender-royal" />
                {a.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
