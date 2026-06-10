import { cn } from '@/lib/utils';

/**
 * Editorial gradient placeholder.
 *
 * Stands in for real photography so the layout reads as designed. To use real
 * imagery, swap this component for <Image /> (next/image) at the same call site —
 * every usage already constrains aspect ratio via the wrapper, so no layout shift.
 */

const tones = [
  'linear-gradient(150deg,#FF8DA7 0%,#9C87CC 60%,#6D5D8E 100%)',
  'linear-gradient(150deg,#9993CF 0%,#6D5D8E 55%,#0A0A15 100%)',
  'linear-gradient(150deg,#FFB3C4 0%,#9993CF 60%,#6D5D8E 100%)',
  'linear-gradient(150deg,#EDEAF6 0%,#9C87CC 55%,#6D5D8E 100%)',
  'linear-gradient(150deg,#9C87CC 0%,#FF8DA7 55%,#6D5D8E 100%)',
  'linear-gradient(150deg,#6D5D8E 0%,#0A0A15 70%,#0A0A15 100%)',
];

type Props = {
  tone?: number;
  label?: string;
  sub?: string;
  className?: string;
  rounded?: boolean;
};

export function PlaceholderImage({ tone = 0, label, sub, className, rounded = false }: Props) {
  const bg = tones[tone % tones.length];
  return (
    <div
      aria-hidden="true"
      className={cn('relative h-full w-full overflow-hidden', rounded && 'rounded-md', className)}
      style={{ background: bg }}
    >
      {/* woven texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg,#fff 0 1px,transparent 1px 7px),repeating-linear-gradient(-45deg,#fff 0 1px,transparent 1px 7px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
      {(label || sub) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <span className="font-serif text-2xl italic text-white/90 sm:text-3xl">{label}</span>
          {sub && <span className="mt-2 text-[10px] uppercase tracking-luxe text-white/70">{sub}</span>}
        </div>
      )}
    </div>
  );
}
