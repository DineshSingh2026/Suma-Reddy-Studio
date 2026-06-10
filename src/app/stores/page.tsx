import type { Metadata } from 'next';
import { stores } from '@/lib/data';
import { PageHeader } from '@/components/ui/page-header';
import { StoreLocator } from '@/components/stores/store-locator';
import { pageHeaderImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Store Locator — Our Boutiques',
  description: 'Find a Suma Reddy Studio boutique in Hyderabad, Bangalore, or Mumbai. Get directions, hours, and book a private appointment.',
  alternates: { canonical: '/stores' },
};

export default function StoresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Visit Us"
        title="Find A Boutique"
        description="Experience our couture in person across three flagship ateliers — with private styling and bridal appointments."
        image={pageHeaderImages.stores}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Store Locator' }]}
      />
      <StoreLocator stores={stores} />
    </>
  );
}
