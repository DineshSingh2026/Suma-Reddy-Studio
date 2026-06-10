'use client';

import { useMemo, useState } from 'react';
import { SlidersHorizontal, X, Check } from 'lucide-react';
import type { Product } from '@/lib/types';
import { ProductCard } from '@/components/ui/product-card';
import { cn } from '@/lib/utils';

type SortKey = 'newest' | 'best' | 'low' | 'high';

const sortOptions: { key: SortKey; label: string }[] = [
  { key: 'newest', label: 'Newest' },
  { key: 'best', label: 'Best Selling' },
  { key: 'low', label: 'Price: Low to High' },
  { key: 'high', label: 'Price: High to Low' },
];

const priceBands = [
  { label: 'Under ₹25,000', test: (p: number) => p < 25000 },
  { label: '₹25,000 – ₹50,000', test: (p: number) => p >= 25000 && p < 50000 },
  { label: '₹50,000 – ₹1,00,000', test: (p: number) => p >= 50000 && p < 100000 },
  { label: 'Above ₹1,00,000', test: (p: number) => p >= 100000 },
];

export function CollectionView({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<SortKey>('newest');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [colors, setColors] = useState<string[]>([]);
  const [fabrics, setFabrics] = useState<string[]>([]);
  const [embroideries, setEmbroideries] = useState<string[]>([]);
  const [occasionsF, setOccasionsF] = useState<string[]>([]);
  const [priceIdx, setPriceIdx] = useState<number[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const facets = useMemo(() => {
    const uniq = (arr: string[]) => Array.from(new Set(arr));
    return {
      colors: uniq(products.map((p) => p.color)),
      fabrics: uniq(products.map((p) => p.fabric)),
      embroideries: uniq(products.map((p) => p.embroidery)),
      occasions: uniq(products.flatMap((p) => p.occasion)),
    };
  }, [products]);

  const toggle = (value: string, list: string[], setter: (v: string[]) => void) =>
    setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const filtered = useMemo(() => {
    const result = products.filter((p) => {
      if (colors.length && !colors.includes(p.color)) return false;
      if (fabrics.length && !fabrics.includes(p.fabric)) return false;
      if (embroideries.length && !embroideries.includes(p.embroidery)) return false;
      if (occasionsF.length && !p.occasion.some((o) => occasionsF.includes(o))) return false;
      if (priceIdx.length && !priceIdx.some((i) => priceBands[i].test(p.price))) return false;
      return true;
    });
    const sorted = [...result];
    if (sort === 'low') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'high') sorted.sort((a, b) => b.price - a.price);
    if (sort === 'best') sorted.sort((a, b) => b.reviews - a.reviews);
    if (sort === 'newest') sorted.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    return sorted;
  }, [products, colors, fabrics, embroideries, occasionsF, priceIdx, sort]);

  const activeCount = colors.length + fabrics.length + embroideries.length + occasionsF.length + priceIdx.length;

  const clearAll = () => {
    setColors([]);
    setFabrics([]);
    setEmbroideries([]);
    setOccasionsF([]);
    setPriceIdx([]);
    setInStockOnly(false);
  };

  const FilterGroups = (
    <div className="flex flex-col gap-8">
      <FacetGroup title="Price">
        {priceBands.map((b, i) => (
          <CheckRow key={b.label} label={b.label} checked={priceIdx.includes(i)} onChange={() => setPriceIdx(priceIdx.includes(i) ? priceIdx.filter((x) => x !== i) : [...priceIdx, i])} />
        ))}
      </FacetGroup>
      <FacetGroup title="Color">
        {facets.colors.map((c) => (
          <CheckRow key={c} label={c} checked={colors.includes(c)} onChange={() => toggle(c, colors, setColors)} />
        ))}
      </FacetGroup>
      <FacetGroup title="Fabric">
        {facets.fabrics.map((f) => (
          <CheckRow key={f} label={f} checked={fabrics.includes(f)} onChange={() => toggle(f, fabrics, setFabrics)} />
        ))}
      </FacetGroup>
      <FacetGroup title="Occasion">
        {facets.occasions.map((o) => (
          <CheckRow key={o} label={o} checked={occasionsF.includes(o)} onChange={() => toggle(o, occasionsF, setOccasionsF)} className="capitalize" />
        ))}
      </FacetGroup>
      <FacetGroup title="Embroidery">
        {facets.embroideries.map((e) => (
          <CheckRow key={e} label={e} checked={embroideries.includes(e)} onChange={() => toggle(e, embroideries, setEmbroideries)} />
        ))}
      </FacetGroup>
      <FacetGroup title="Availability">
        <CheckRow label="In stock only" checked={inStockOnly} onChange={() => setInStockOnly((v) => !v)} />
      </FacetGroup>
    </div>
  );

  return (
    <div className="container-luxe py-10 lg:py-14">
      {/* toolbar */}
      <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-5">
        <button
          type="button"
          onClick={() => setFiltersOpen(true)}
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide2 text-ink lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" /> Filters{activeCount ? ` (${activeCount})` : ''}
        </button>
        <p className="hidden text-sm text-ink-muted lg:block">{filtered.length} pieces</p>
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-[11px] uppercase tracking-wide2 text-ink-muted">
            Sort
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border border-ink/15 bg-transparent py-2 pl-3 pr-8 text-xs text-ink focus:border-ink focus:outline-none"
          >
            {sortOptions.map((o) => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
        {/* desktop sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide2 text-ink">Filters</p>
              {activeCount > 0 && (
                <button onClick={clearAll} className="text-[11px] uppercase tracking-wide2 text-lavender-royal underline">
                  Clear ({activeCount})
                </button>
              )}
            </div>
            {FilterGroups}
          </div>
        </aside>

        {/* grid */}
        <div>
          {filtered.length === 0 ? (
            <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
              <p className="font-serif text-2xl text-ink">No pieces match your filters</p>
              <button onClick={clearAll} className="mt-4 text-xs uppercase tracking-wide2 text-lavender-royal underline">
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* mobile filter drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setFiltersOpen(false)} />
          <div className="absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-cream">
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-wide2 text-ink">Filters</p>
              <button aria-label="Close filters" onClick={() => setFiltersOpen(false)}>
                <X className="h-5 w-5 text-ink" />
              </button>
            </div>
            <div className="no-scrollbar flex-1 overflow-y-auto px-5 py-6">{FilterGroups}</div>
            <div className="flex gap-3 border-t border-ink/10 p-5">
              <button onClick={clearAll} className="h-12 flex-1 border border-ink/20 text-xs uppercase tracking-wide2 text-ink">
                Clear
              </button>
              <button onClick={() => setFiltersOpen(false)} className="h-12 flex-1 bg-ink text-xs uppercase tracking-wide2 text-white">
                Show {filtered.length}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FacetGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-luxe text-ink">{title}</p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function CheckRow({
  label,
  checked,
  onChange,
  className,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
  className?: string;
}) {
  return (
    <button type="button" onClick={onChange} className="group flex items-center gap-3 text-left">
      <span
        className={cn(
          'flex h-4 w-4 shrink-0 items-center justify-center border transition',
          checked ? 'border-ink bg-ink' : 'border-ink/30 group-hover:border-ink'
        )}
      >
        {checked && <Check className="h-3 w-3 text-white" />}
      </span>
      <span className={cn('text-sm text-ink-soft', className)}>{label}</span>
    </button>
  );
}
