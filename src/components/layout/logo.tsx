import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * Brand logo.
 * - default (light cream backgrounds: header, mobile menu) -> full horizontal logo
 * - `light` (dark backgrounds: footer) -> emblem mark + white wordmark
 *   (the full logo's wordmark is black line-art and would be invisible on dark)
 * - `compact` -> emblem mark only (icon containers / tight spaces)
 */
export function Logo({ light, compact }: { light?: boolean; compact?: boolean }) {
  if (compact) {
    return (
      <Link href="/" aria-label="Suma Reddy Studio — home" className="group flex items-center">
        <img
          src="/brand/logo-emblem.svg"
          alt="Suma Reddy Studio"
          width={40}
          height={40}
          className="h-10 w-10 shrink-0"
        />
      </Link>
    );
  }

  if (light) {
    return (
      <Link href="/" aria-label="Suma Reddy Studio — home" className="group flex items-center gap-3">
        <img
          src="/brand/logo-emblem.svg"
          alt=""
          width={44}
          height={44}
          className="h-11 w-11 shrink-0"
        />
        <span className="flex flex-col leading-none">
          <span className="whitespace-nowrap font-serif text-lg leading-tight tracking-wide text-white sm:text-xl">
            Suma Reddy
          </span>
          <span className="mt-0.5 text-[9px] uppercase tracking-luxe text-white/60">Studio</span>
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" aria-label="Suma Reddy Studio — home" className="group flex items-center">
      <img
        src="/brand/logo-horizontal.svg"
        alt="Suma Reddy Studio"
        width={197}
        height={90}
        className={cn('h-12 w-auto shrink-0 sm:h-14')}
      />
    </Link>
  );
}
