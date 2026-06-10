'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  };

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="placeholder-luxe absolute inset-0 opacity-25" aria-hidden />
      <div className="absolute inset-0 bg-ink/70" aria-hidden />

      <div className="container-luxe relative py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow mx-auto justify-center text-pink">The Inner Circle</span>
          <h2 className="text-display-md mt-5 text-white">Become Part Of The Suma Reddy Studio Circle</h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-white/70">
            Early access to new collections, private bridal previews, and styling notes from our atelier — delivered with
            care.
          </p>

          {done ? (
            <div className="mt-9 inline-flex items-center gap-3 rounded-full bg-white/10 px-7 py-4 text-sm">
              <Check className="h-5 w-5 text-pink" />
              You’re in. Welcome to the circle.
            </div>
          ) : (
            <form onSubmit={submit} className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="h-12 w-full flex-1 rounded-none border border-white/25 bg-transparent px-5 text-sm text-white placeholder:text-white/45 focus:border-pink focus:outline-none"
              />
              <Button type="submit" variant="pink" size="md" className="shrink-0">
                Subscribe
              </Button>
            </form>
          )}
          <p className="mt-4 text-[11px] text-white/45">By subscribing you agree to our privacy policy. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
