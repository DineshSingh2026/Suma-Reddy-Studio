import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { RemoteImage } from './remote-image';

type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <RemoteImage src={image} alt={title} priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-lavender-royal/45" />
      </div>
      <div className="container-luxe relative py-16 lg:py-24">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-[11px] uppercase tracking-wide2 text-white/60">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow text-pink">{eyebrow}</span>}
        <h1 className="text-display-lg mt-4 max-w-3xl text-white">{title}</h1>
        {description && <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/70">{description}</p>}
      </div>
    </section>
  );
}
