import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import { AnnouncementBar } from '@/components/layout/announcement-bar';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const body = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const siteUrl = 'https://www.sumareddystudios.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Suma Reddy Studio — Luxury Indian Ethnic Fashion House',
    template: '%s · Suma Reddy Studio',
  },
  description:
    'Suma Reddy Studio is a luxury Indian ethnic fashion house — designer sarees, wedding lehengas, bridal couture, and festive wear where tradition meets timeless elegance.',
  keywords: [
    'luxury sarees', 'designer lehengas', 'bridal couture', 'Indian ethnic wear',
    'wedding lehengas', 'silk sarees', 'anarkali', 'Suma Reddy Studio',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Suma Reddy Studio',
    title: 'Suma Reddy Studio — Luxury Indian Ethnic Fashion House',
    description: 'Where tradition meets timeless elegance. Designer sarees, lehengas & bridal couture.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suma Reddy Studio',
    description: 'Luxury Indian ethnic fashion — sarees, lehengas & bridal couture.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0A0A15',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {/* Clearance so the floating mobile bottom nav never covers footer content */}
        <div aria-hidden className="h-24 lg:hidden" />
      </body>
    </html>
  );
}
