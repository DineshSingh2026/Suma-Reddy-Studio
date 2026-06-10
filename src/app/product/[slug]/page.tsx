import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { getProduct, products, relatedProducts } from '@/lib/data';
import { formatINR } from '@/lib/utils';
import { ProductGallery } from '@/components/product/product-gallery';
import { ProductInfo } from '@/components/product/product-info';
import { Reviews } from '@/components/product/reviews';
import { RecentlyViewed } from '@/components/product/recently-viewed';
import { ProductCard } from '@/components/ui/product-card';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: 'Product' };
  return {
    title: `${product.name} — ${product.fabric}`,
    description: product.description,
    alternates: { canonical: `/product/${product.slug}` },
    openGraph: { title: product.name, description: product.description },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = relatedProducts(product);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: { '@type': 'Brand', name: 'Suma Reddy Studio' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: product.rating, reviewCount: product.reviews },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.price,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* breadcrumb */}
      <div className="container-luxe py-5">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[11px] uppercase tracking-wide2 text-ink-muted">
          <Link href="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/collections/${product.collection}`} className="capitalize hover:text-ink">{product.category}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* main */}
      <div className="container-luxe pb-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery src={product.image} name={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>

      <Reviews product={product} />

      {/* related */}
      <section className="container-luxe py-16 lg:py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-display-md text-ink">You May Also Love</h2>
          <Link href={`/collections/${product.collection}`} className="link-underline hidden text-xs uppercase tracking-wide2 text-ink sm:inline-block">
            View Collection
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <RecentlyViewed currentSlug={product.slug} />

      {/* sticky mobile add-to-bag */}
      <div className="sticky bottom-0 z-40 border-t border-ink/10 bg-cream/95 px-5 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <span className="font-serif text-xl text-ink">{formatINR(product.price)}</span>
          <a href="#" className="flex h-12 flex-1 items-center justify-center bg-ink text-xs uppercase tracking-wide2 text-white">
            Add To Bag
          </a>
        </div>
      </div>
    </>
  );
}
