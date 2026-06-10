import * as React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium uppercase tracking-wide2 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-royal disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-ink text-white hover:bg-lavender-royal',
        pink: 'bg-pink text-ink hover:bg-pink-deep hover:text-white',
        lavender: 'bg-lavender-royal text-white hover:bg-ink',
        outline: 'border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-white',
        ghostLight: 'border border-white/50 text-white backdrop-blur-sm hover:bg-white hover:text-ink',
        link: 'p-0 text-ink hover:text-lavender-royal underline-offset-4',
      },
      size: {
        sm: 'h-10 px-5 text-[11px]',
        md: 'h-12 px-8 text-xs',
        lg: 'h-14 px-10 text-xs',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

type CommonProps = VariantProps<typeof buttonVariants> & { className?: string };

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & CommonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function ButtonLink({
  className,
  variant,
  size,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps & { href: string }) {
  return <Link href={href} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
