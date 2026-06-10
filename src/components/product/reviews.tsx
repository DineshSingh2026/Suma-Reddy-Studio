import { Star } from 'lucide-react';
import type { Product } from '@/lib/types';
import { cn } from '@/lib/utils';

const sample = [
  { name: 'Lakshmi P.', rating: 5, title: 'Exquisite craftsmanship', body: 'The detailing is breathtaking in person. Fit was perfect and the fabric feels incredibly luxurious.', date: 'May 2026' },
  { name: 'Divya S.', rating: 5, title: 'Worth every penny', body: 'Received so many compliments at the reception. The colour is even prettier than the photos.', date: 'Apr 2026' },
  { name: 'Reema K.', rating: 4, title: 'Beautiful, runs slightly long', body: 'Stunning piece. Needed a small alteration for length but the quality is undeniable.', date: 'Mar 2026' },
];

const breakdown = [
  { stars: 5, pct: 82 },
  { stars: 4, pct: 12 },
  { stars: 3, pct: 4 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
];

export function Reviews({ product }: { product: Product }) {
  return (
    <section className="bg-lavender-mist/40 py-16 lg:py-20">
      <div className="container-luxe">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* summary */}
          <div className="lg:col-span-4">
            <h2 className="text-display-md text-ink">Client Reviews</h2>
            <div className="mt-6 flex items-center gap-4">
              <span className="font-serif text-5xl text-ink">{product.rating}</span>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={cn('h-4 w-4', i < Math.round(product.rating) ? 'fill-pink text-pink' : 'text-ink/20')} />
                  ))}
                </div>
                <p className="mt-1 text-xs text-ink-muted">Based on {product.reviews} reviews</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              {breakdown.map((b) => (
                <div key={b.stars} className="flex items-center gap-3">
                  <span className="w-10 text-xs text-ink-muted">{b.stars} star</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/10">
                    <span className="block h-full rounded-full bg-pink" style={{ width: `${b.pct}%` }} />
                  </span>
                  <span className="w-8 text-right text-xs text-ink-muted">{b.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* list */}
          <div className="flex flex-col gap-6 lg:col-span-8">
            {sample.map((r) => (
              <figure key={r.name} className="border-b border-ink/10 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={cn('h-3.5 w-3.5', i < r.rating ? 'fill-pink text-pink' : 'text-ink/20')} />
                    ))}
                  </div>
                  <span className="text-xs text-ink-muted">{r.date}</span>
                </div>
                <p className="mt-3 font-serif text-lg text-ink">{r.title}</p>
                <blockquote className="mt-2 text-sm leading-relaxed text-ink-muted">{r.body}</blockquote>
                <figcaption className="mt-3 text-xs font-medium uppercase tracking-wide2 text-lavender-royal">
                  {r.name} · Verified Buyer
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
