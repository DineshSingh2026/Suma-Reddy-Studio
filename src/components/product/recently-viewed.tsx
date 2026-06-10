'use client';

import { useEffect, useState } from 'react';
import { products } from '@/lib/data';
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/ui/product-card';

const KEY = 'srs:recently-viewed';

export function RecentlyViewed({ currentSlug }: { currentSlug: string }) {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    let stored: string[] = [];
    try {
      stored = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    } catch {
      stored = [];
    }
    // Render the previously viewed list (before adding current).
    const previous = stored.filter((s) => s !== currentSlug);
    setItems(previous.map((s) => products.find((p) => p.slug === s)).filter(Boolean).slice(0, 4) as Product[]);

    // Record current at the front.
    const next = [currentSlug, ...previous].slice(0, 8);
    localStorage.setItem(KEY, JSON.stringify(next));
  }, [currentSlug]);

  if (items.length === 0) return null;

  return (
    <section className="container-luxe py-16 lg:py-20">
      <h2 className="text-display-md text-ink">Recently Viewed</h2>
      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
