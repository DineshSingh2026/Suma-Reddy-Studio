import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from './reveal';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  cta?: { label: string; href: string };
  className?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = 'center', cta, className, light }: Props) {
  return (
    <div
      className={cn(
        'flex w-full flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        cta && 'sm:flex-row sm:items-end sm:justify-between',
        className
      )}
    >
      <Reveal className={cn('flex flex-col gap-4', align === 'center' ? 'items-center' : 'items-start')}>
        {eyebrow && <span className={cn('eyebrow', light && 'text-pink')}>{eyebrow}</span>}
        <h2 className={cn('text-display-md max-w-2xl', light ? 'text-white' : 'text-ink')}>{title}</h2>
        {description && (
          <p className={cn('max-w-xl text-pretty text-base leading-relaxed', light ? 'text-white/70' : 'text-ink-muted')}>
            {description}
          </p>
        )}
      </Reveal>
      {cta && (
        <Link
          href={cta.href}
          className={cn(
            'link-underline group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide2',
            light ? 'text-white' : 'text-ink'
          )}
        >
          {cta.label}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
