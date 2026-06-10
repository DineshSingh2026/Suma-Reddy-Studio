import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2.5rem',
        xl: '4rem',
        '2xl': '6rem',
      },
      screens: {
        '2xl': '1600px',
      },
    },
    extend: {
      colors: {
        // Brand palette — Suma Reddy Studio
        pink: {
          DEFAULT: '#FF8DA7',
          soft: '#FFB3C4',
          deep: '#F26789',
        },
        lavender: {
          DEFAULT: '#9993CF',
          soft: '#9C87CC',
          royal: '#6D5D8E',
          mist: '#EDEAF6',
        },
        ink: {
          DEFAULT: '#0A0A15',
          soft: '#1A1A2A',
          muted: '#4A4A5A',
        },
        cream: '#FBFAF8',
        // shadcn-style semantic tokens
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.75rem, 3.2vw, 2.75rem)', { lineHeight: '1.1' }],
      },
      letterSpacing: {
        luxe: '0.28em',
        wide2: '0.18em',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        luxe: '0 24px 60px -28px rgba(109, 93, 142, 0.45)',
        card: '0 18px 50px -24px rgba(10, 10, 21, 0.25)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
