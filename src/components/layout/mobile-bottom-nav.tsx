'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, Search, Heart, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Floating bottom tab bar for mobile / tablet (hidden on lg+).
 * Gives thumb-friendly access to the primary journeys: Home, Shop, Search,
 * Wishlist, Menu. Search & Menu reuse the Header's existing overlays.
 */
export function MobileBottomNav({ onSearch, onMenu }: { onSearch: () => void; onMenu: () => void }) {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isShop = pathname.startsWith('/collections') || pathname.startsWith('/product');

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <nav
        aria-label="Primary"
        className="pointer-events-auto flex items-stretch gap-0.5 rounded-full border border-ink/10 bg-cream/90 p-1.5 shadow-luxe backdrop-blur-md"
      >
        <TabLink href="/" label="Home" icon={Home} active={isHome} />
        <TabLink href="/collections/new-arrivals" label="Shop" icon={LayoutGrid} active={isShop} />
        <TabButton label="Search" icon={Search} onClick={onSearch} />
        <TabLink href="/collections/new-arrivals" label="Wishlist" icon={Heart} badge={3} />
        <TabButton label="Menu" icon={Menu} onClick={onMenu} />
      </nav>
    </div>
  );
}

type IconType = typeof Home;

function Pill({
  icon: Icon,
  label,
  active,
  badge,
}: {
  icon: IconType;
  label: string;
  active?: boolean;
  badge?: number;
}) {
  return (
    <span className="flex flex-col items-center gap-1">
      <span
        className={cn(
          'relative flex h-8 w-14 items-center justify-center rounded-full transition-colors duration-200',
          active ? 'bg-lavender-mist text-lavender-royal' : 'text-ink-muted'
        )}
      >
        <Icon className="h-[18px] w-[18px]" />
        {badge ? (
          <span className="absolute right-2.5 top-0.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-pink px-1 text-[8px] font-semibold text-ink">
            {badge}
          </span>
        ) : null}
      </span>
      <span className={cn('text-[10px] leading-none tracking-wide', active ? 'font-medium text-lavender-royal' : 'text-ink-muted')}>
        {label}
      </span>
    </span>
  );
}

function TabLink({
  href,
  label,
  icon,
  active,
  badge,
}: {
  href: string;
  label: string;
  icon: IconType;
  active?: boolean;
  badge?: number;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? 'page' : undefined}
      className="flex min-w-[58px] items-center justify-center px-1 py-1 transition-transform active:scale-95"
    >
      <Pill icon={icon} label={label} active={active} badge={badge} />
    </Link>
  );
}

function TabButton({ label, icon, onClick }: { label: string; icon: IconType; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex min-w-[58px] items-center justify-center px-1 py-1 transition-transform active:scale-95"
    >
      <Pill icon={icon} label={label} />
    </button>
  );
}
