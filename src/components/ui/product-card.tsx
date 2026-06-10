'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Eye, Star } from 'lucide-react';
import type { Product } from '@/lib/types';
import { cn, formatINR } from '@/lib/utils';
import { RemoteImage } from './remote-image';

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const [wished, setWished] = useState(false);
  const discount = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : 0;

  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-lavender-mist">
        <Link href={`/product/${product.slug}`} className="block h-full w-full">
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <RemoteImage
              src={product.image}
              alt={`${product.name} — ${product.fabric}`}
              priority={priority}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        </Link>

        {/* badges */}
        <div className="pointer-events-none absolute left-3 top-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-ink px-2.5 py-1 text-[9px] uppercase tracking-wide2 text-white">New</span>
          )}
          {discount > 0 && (
            <span className="bg-pink px-2.5 py-1 text-[9px] uppercase tracking-wide2 text-ink">-{discount}%</span>
          )}
        </div>

        {/* wishlist */}
        <button
          type="button"
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={wished}
          onClick={() => setWished((v) => !v)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur transition hover:bg-white"
        >
          <Heart className={cn('h-4 w-4 transition', wished && 'fill-pink text-pink')} />
        </button>

        {/* quick actions */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <Link
            href={`/product/${product.slug}`}
            className="flex h-11 w-full items-center justify-center gap-2 bg-white/95 text-[11px] font-medium uppercase tracking-wide2 text-ink backdrop-blur transition hover:bg-ink hover:text-white"
          >
            <Eye className="h-4 w-4" /> Quick View
          </Link>
        </div>
      </div>

      {/* meta */}
      <div className="mt-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-1 text-[11px] text-lavender-royal">
          <Star className="h-3 w-3 fill-pink text-pink" />
          <span className="font-medium text-ink">{product.rating}</span>
          <span className="text-ink-muted">({product.reviews})</span>
        </div>
        <h3 className="text-sm font-medium text-ink">
          <Link href={`/product/${product.slug}`} className="link-underline">
            {product.name}
          </Link>
        </h3>
        <p className="text-[11px] uppercase tracking-wide2 text-ink-muted">{product.fabric}</p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-sm font-semibold text-ink">{formatINR(product.price)}</span>
          {product.compareAt && (
            <span className="text-xs text-ink-muted line-through">{formatINR(product.compareAt)}</span>
          )}
        </div>
      </div>
    </article>
  );
}
