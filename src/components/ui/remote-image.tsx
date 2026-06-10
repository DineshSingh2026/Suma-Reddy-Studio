import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Optimized remote image (next/image fill, object-cover, lazy by default).
 *
 * Renders its own `relative` wrapper so it fills whatever parent it sits in —
 * including transform/scale wrappers used for hover-zoom. Aspect ratio is owned
 * by the parent, so swapping sources never shifts layout (no CLS, no distortion).
 */
export function RemoteImage({
  src,
  alt,
  priority,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  className,
  position,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  position?: string;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn('object-cover [filter:saturate(1.06)_contrast(1.04)_brightness(1.02)]', className)}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
