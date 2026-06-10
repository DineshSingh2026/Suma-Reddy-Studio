'use client';

import { useState } from 'react';
import { Heart, ShoppingBag, Star, Truck, RotateCcw, ShieldCheck, Plus, Minus } from 'lucide-react';
import type { Product } from '@/lib/types';
import { cn, formatINR } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'Custom'];

const accordions = (p: Product) => [
  { title: 'Product Story', body: p.story },
  { title: 'Fabric & Details', body: `Fabric — ${p.fabric}. Embellishment — ${p.embroidery}. Colour — ${p.color}. Includes blouse/dupatta as applicable. Slight irregularities are the signature of hand-craft, not defects.` },
  { title: 'Care Instructions', list: p.care },
  { title: 'Styling Suggestions', list: p.styling },
  { title: 'Delivery & Returns', body: 'Dispatched within 5–7 business days. Complimentary shipping across India; worldwide express available. Easy 7-day returns on unworn, tagged pieces (made-to-measure excluded).' },
];

export function ProductInfo({ product }: { product: Product }) {
  const [size, setSize] = useState('M');
  const [qty, setQty] = useState(1);
  const [wished, setWished] = useState(false);
  const [open, setOpen] = useState<number | null>(0);
  const discount = product.compareAt ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100) : 0;

  return (
    <div className="flex flex-col">
      <span className="text-[11px] uppercase tracking-luxe text-lavender-royal">{product.category}</span>
      <h1 className="mt-2 font-serif text-3xl text-ink sm:text-4xl">{product.name}</h1>

      <div className="mt-3 flex items-center gap-2 text-sm">
        <span className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={cn('h-4 w-4', i < Math.round(product.rating) ? 'fill-pink text-pink' : 'text-ink/20')} />
          ))}
        </span>
        <span className="font-medium text-ink">{product.rating}</span>
        <span className="text-ink-muted">({product.reviews} reviews)</span>
      </div>

      <div className="mt-5 flex items-baseline gap-3">
        <span className="font-serif text-3xl text-ink">{formatINR(product.price)}</span>
        {product.compareAt && (
          <>
            <span className="text-lg text-ink-muted line-through">{formatINR(product.compareAt)}</span>
            <span className="bg-pink px-2 py-0.5 text-xs font-semibold text-ink">{discount}% OFF</span>
          </>
        )}
      </div>
      <p className="mt-1 text-xs text-ink-muted">MRP inclusive of all taxes</p>

      <p className="mt-6 text-pretty text-sm leading-relaxed text-ink-muted">{product.description}</p>

      {/* size */}
      <div className="mt-7">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wide2 text-ink">Size</span>
          <button className="text-[11px] uppercase tracking-wide2 text-lavender-royal underline">Size Guide</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={cn(
                'h-11 min-w-12 px-3 text-xs font-medium uppercase tracking-wide2 transition',
                size === s ? 'bg-ink text-white' : 'border border-ink/20 text-ink hover:border-ink'
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* qty + actions */}
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <div className="flex h-12 items-center justify-between border border-ink/20 px-2 sm:w-32">
          <button aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))} className="flex h-9 w-9 items-center justify-center text-ink">
            <Minus className="h-4 w-4" />
          </button>
          <span className="text-sm font-medium text-ink">{qty}</span>
          <button aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)} className="flex h-9 w-9 items-center justify-center text-ink">
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <Button variant="primary" size="lg" className="flex-1">
          <ShoppingBag className="h-4 w-4" /> Add To Bag
        </Button>
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={() => setWished((v) => !v)}
          className="flex h-12 w-12 shrink-0 items-center justify-center border border-ink/20 text-ink transition hover:border-ink"
        >
          <Heart className={cn('h-5 w-5', wished && 'fill-pink text-pink')} />
        </button>
      </div>

      <Button variant="pink" size="lg" className="mt-3">Buy It Now</Button>

      {/* trust */}
      <div className="mt-7 grid grid-cols-3 gap-3 border-y border-ink/10 py-5 text-center">
        {[
          { icon: Truck, label: 'Free Shipping' },
          { icon: RotateCcw, label: '7-Day Returns' },
          { icon: ShieldCheck, label: 'Secure Checkout' },
        ].map((t) => (
          <div key={t.label} className="flex flex-col items-center gap-2">
            <t.icon className="h-5 w-5 text-lavender-royal" />
            <span className="text-[10px] uppercase tracking-wide2 text-ink-muted">{t.label}</span>
          </div>
        ))}
      </div>

      {/* accordions */}
      <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
        {accordions(product).map((a, i) => (
          <div key={a.title}>
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between py-4 text-left"
              aria-expanded={open === i}
            >
              <span className="text-sm font-medium uppercase tracking-wide2 text-ink">{a.title}</span>
              {open === i ? <Minus className="h-4 w-4 text-lavender-royal" /> : <Plus className="h-4 w-4 text-lavender-royal" />}
            </button>
            {open === i && (
              <div className="pb-5 text-sm leading-relaxed text-ink-muted">
                {a.body && <p>{a.body}</p>}
                {a.list && (
                  <ul className="flex list-disc flex-col gap-1.5 pl-4">
                    {a.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
