'use client';

import { useMemo, useState } from 'react';
import { Search, MapPin, Clock, Phone, Navigation } from 'lucide-react';
import type { Store } from '@/lib/types';
import { cn } from '@/lib/utils';

export function StoreLocator({ stores }: { stores: Store[] }) {
  const [query, setQuery] = useState('');
  const [activeId, setActiveId] = useState(stores[0]?.id);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stores;
    return stores.filter((s) => `${s.city} ${s.name} ${s.address}`.toLowerCase().includes(q));
  }, [stores, query]);

  const active = stores.find((s) => s.id === activeId) ?? filtered[0] ?? stores[0];
  const bbox = active ? `${active.lng - 0.03}%2C${active.lat - 0.02}%2C${active.lng + 0.03}%2C${active.lat + 0.02}` : '';

  return (
    <div className="container-luxe py-16 lg:py-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr] lg:gap-12">
        {/* list */}
        <div>
          <div className="flex items-center gap-3 border-b-2 border-ink pb-3">
            <Search className="h-5 w-5 text-lavender-royal" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by city or area…"
              className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
            />
          </div>

          <p className="mt-5 text-xs uppercase tracking-wide2 text-ink-muted">{filtered.length} boutiques</p>

          <div className="mt-4 flex flex-col gap-3">
            {filtered.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveId(s.id)}
                className={cn(
                  'rounded-md border p-5 text-left transition',
                  active?.id === s.id ? 'border-ink bg-white shadow-card' : 'border-ink/10 bg-white hover:border-lavender-royal/40'
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-ink">{s.city}</h3>
                  {s.flagship && <span className="bg-pink px-2 py-0.5 text-[9px] uppercase tracking-wide2 text-ink">Flagship</span>}
                </div>
                <p className="mt-2 flex items-start gap-2 text-sm text-ink-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lavender-royal" /> {s.address}
                </p>
                <p className="mt-1.5 flex items-center gap-2 text-sm text-ink-muted">
                  <Clock className="h-4 w-4 shrink-0 text-lavender-royal" /> {s.hours}
                </p>
                <p className="mt-1.5 flex items-center gap-2 text-sm text-ink-muted">
                  <Phone className="h-4 w-4 shrink-0 text-lavender-royal" /> {s.phone}
                </p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-3 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide2 text-lavender-royal underline"
                >
                  <Navigation className="h-3.5 w-3.5" /> Get Directions
                </a>
              </button>
            ))}
            {filtered.length === 0 && (
              <p className="py-10 text-center text-sm text-ink-muted">No boutiques match your search.</p>
            )}
          </div>
        </div>

        {/* map */}
        <div className="min-h-[420px] overflow-hidden rounded-md border border-ink/10 lg:sticky lg:top-28 lg:h-[640px]">
          {active && (
            <iframe
              key={active.id}
              title={`Map — ${active.name}`}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${active.lat}%2C${active.lng}`}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  );
}
