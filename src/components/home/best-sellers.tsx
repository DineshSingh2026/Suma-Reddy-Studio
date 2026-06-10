'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { bestSellers } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { ProductCard } from '@/components/ui/product-card';

export function BestSellers() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * dir;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="bg-lavender-veil-soft py-20 lg:py-28">
      <div className="container-luxe">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Loved By Many"
            title="Best Sellers"
            description="The pieces our clients keep coming back for."
            align="left"
            className="!flex-col !items-start"
          />
          <div className="hidden gap-2 sm:flex">
            <CarouselButton dir={-1} onClick={() => scroll(-1)} />
            <CarouselButton dir={1} onClick={() => scroll(1)} />
          </div>
        </div>

        <div
          ref={scroller}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-6"
        >
          {bestSellers.map((p) => (
            <div key={p.id} className="w-[68%] shrink-0 snap-start sm:w-[42%] lg:w-[23%]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarouselButton({ dir, onClick }: { dir: 1 | -1; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={dir === 1 ? 'Next' : 'Previous'}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition hover:bg-ink hover:text-white"
    >
      {dir === 1 ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
    </button>
  );
}
