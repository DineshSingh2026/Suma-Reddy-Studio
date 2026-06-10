'use client';

import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { RemoteImage } from '@/components/ui/remote-image';

// One photo, presented as a gallery via distinct crops + hover zoom.
const crops = ['50% 18%', '50% 50%', '50% 82%', '30% 35%'];

export function ProductGallery({ src, name }: { src: string; name: string }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState('50% 50%');
  const frameRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  return (
    <div className="flex flex-col-reverse gap-4 lg:flex-row">
      {/* thumbs */}
      <div className="flex gap-3 lg:flex-col">
        {crops.map((pos, i) => (
          <button
            key={i}
            type="button"
            aria-label={`View ${i + 1}`}
            onClick={() => setActive(i)}
            className={cn(
              'relative aspect-[3/4] w-16 shrink-0 overflow-hidden rounded-md border-2 transition sm:w-20',
              active === i ? 'border-ink' : 'border-transparent opacity-70 hover:opacity-100'
            )}
          >
            <RemoteImage src={src} alt={`${name} view ${i + 1}`} sizes="80px" position={pos} />
          </button>
        ))}
      </div>

      {/* main */}
      <div
        ref={frameRef}
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={onMove}
        className="relative aspect-[3/4] flex-1 cursor-zoom-in overflow-hidden rounded-md bg-lavender-mist"
      >
        <div
          className="h-full w-full transition-transform duration-200 ease-out"
          style={{ transform: zoom ? 'scale(1.7)' : 'scale(1)', transformOrigin: origin }}
        >
          <RemoteImage
            src={src}
            alt={name}
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            position={crops[active]}
          />
        </div>
      </div>
    </div>
  );
}
