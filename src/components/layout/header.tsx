'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Heart, ShoppingBag, User, Menu } from 'lucide-react';
import { navigation } from '@/lib/navigation';
import type { NavItem } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { MobileMenu } from './mobile-menu';
import { MobileBottomNav } from './mobile-bottom-nav';
import { SearchOverlay } from './search-overlay';
import { RemoteImage } from '@/components/ui/remote-image';

const primaryNav = navigation.slice(0, 8);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeItem = navigation.find((n) => n.label === activeMenu && n.columns) ?? null;

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled ? 'bg-cream/95 shadow-[0_1px_0_rgba(10,10,21,0.08)] backdrop-blur' : 'bg-cream'
        )}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container-luxe">
          <div className={cn('flex items-center justify-between transition-all duration-300', scrolled ? 'h-16' : 'h-20')}>
            {/* left: mobile toggle + logo */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
              <Logo />
            </div>

            {/* center: desktop nav */}
            <nav className="hidden items-center gap-x-4 lg:flex xl:gap-x-6 2xl:gap-x-8">
              {primaryNav.map((item) => (
                <div key={item.label} onMouseEnter={() => setActiveMenu(item.label)} className="flex items-center">
                  <Link
                    href={item.href}
                    className={cn(
                      'relative whitespace-nowrap py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:text-lavender-royal xl:text-[12px] xl:tracking-wide2',
                      activeMenu === item.label && 'text-lavender-royal'
                    )}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* right: actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <IconButton label="Search" onClick={() => setSearchOpen(true)}>
                <Search className="h-[18px] w-[18px]" />
              </IconButton>
              <IconLink label="Account" href="/contact" className="hidden sm:flex">
                <User className="h-[18px] w-[18px]" />
              </IconLink>
              <IconLink label="Wishlist" href="/collections/new-arrivals" badge={3}>
                <Heart className="h-[18px] w-[18px]" />
              </IconLink>
              <IconLink label="Cart" href="/collections/new-arrivals" badge={2}>
                <ShoppingBag className="h-[18px] w-[18px]" />
              </IconLink>
            </div>
          </div>
        </div>

        {/* mega menu */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              key={activeItem.label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full hidden border-t border-ink/10 bg-cream shadow-luxe lg:block"
              onMouseEnter={() => setActiveMenu(activeItem.label)}
            >
              <MegaPanel item={activeItem} onNavigate={() => setActiveMenu(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileBottomNav onSearch={() => setSearchOpen(true)} onMenu={() => setMenuOpen(true)} />
    </>
  );
}

function MegaPanel({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  return (
    <div className="container-luxe grid grid-cols-12 gap-10 py-10">
      <div className="col-span-7 grid grid-cols-2 gap-10">
        {item.columns?.map((col) => (
          <div key={col.heading}>
            <p className="mb-5 text-[11px] uppercase tracking-luxe text-lavender-royal">{col.heading}</p>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {item.featured && (
        <Link
          href={item.featured.href}
          onClick={onNavigate}
          className="group col-span-5 flex"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md">
            <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
              {item.featured.image && (
                <RemoteImage src={item.featured.image} alt={item.featured.title} sizes="40vw" />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-serif text-xl text-white">{item.featured.title}</p>
              <p className="text-[10px] uppercase tracking-luxe text-pink">Explore the edit</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

function IconButton({ children, label, onClick }: { children: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-lavender-mist"
    >
      {children}
    </button>
  );
}

function IconLink({
  children,
  label,
  href,
  badge,
  className,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn('relative flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-lavender-mist', className)}
    >
      {children}
      {badge ? (
        <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-pink px-1 text-[9px] font-semibold text-ink">
          {badge}
        </span>
      ) : null}
    </Link>
  );
}
