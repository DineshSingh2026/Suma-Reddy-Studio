import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allCollections, getProductsByCollection, occasions } from '@/lib/data';
import type { Collection } from '@/lib/types';
import { PageHeader } from '@/components/ui/page-header';
import { CollectionView } from '@/components/collection/collection-view';
import { collectionHeader } from '@/lib/images';

function resolveCollection(slug: string): Collection | undefined {
  const direct = allCollections.find((c) => c.slug === slug);
  if (direct) return direct;
  const occ = occasions.find((o) => o.slug === slug);
  if (occ) return { slug: occ.slug, title: occ.title, subtitle: 'Shop by Occasion', description: `Ensembles curated for ${occ.title.toLowerCase()} celebrations.`, tone: occ.tone };
  return undefined;
}

export function generateStaticParams() {
  return [...allCollections.map((c) => ({ slug: c.slug })), ...occasions.map((o) => ({ slug: o.slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const collection = resolveCollection(slug);
  if (!collection) return { title: 'Collection' };
  return {
    title: `${collection.title} — Luxury ${collection.subtitle}`,
    description: collection.description,
    alternates: { canonical: `/collections/${collection.slug}` },
  };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = resolveCollection(slug);
  if (!collection) notFound();

  const products = getProductsByCollection(slug);

  return (
    <>
      <PageHeader
        eyebrow={collection.subtitle}
        title={collection.title}
        description={collection.description}
        image={collectionHeader(slug, collection.tone)}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Collections', href: '/collections/new-arrivals' }, { label: collection.title }]}
      />
      <CollectionView products={products} />
    </>
  );
}
