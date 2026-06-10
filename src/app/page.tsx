import { Hero } from '@/components/home/hero';
import { FeaturedCollections } from '@/components/home/featured-collections';
import { NewArrivals } from '@/components/home/new-arrivals';
import { ShopByOccasion } from '@/components/home/shop-by-occasion';
import { SummerCampaign } from '@/components/home/summer-campaign';
import { CuratedCollections } from '@/components/home/curated-collections';
import { BestSellers } from '@/components/home/best-sellers';
import { SareeShowcase } from '@/components/home/saree-showcase';
import { BridalShowcase } from '@/components/home/bridal-showcase';
import { Testimonials } from '@/components/home/testimonials';
import { BrandStory } from '@/components/home/brand-story';
import { StoreExperience } from '@/components/home/store-experience';
import { InstagramGallery } from '@/components/home/instagram-gallery';
import { Newsletter } from '@/components/home/newsletter';

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Suma Reddy Studio',
  description: 'Luxury Indian ethnic fashion house — designer sarees, lehengas and bridal couture.',
  url: 'https://www.sumareddystudios.com',
  image: 'https://www.sumareddystudios.com/og.jpg',
  priceRange: '₹₹₹',
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Hyderabad', addressCountry: 'IN' },
    { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressCountry: 'IN' },
    { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Hero />
      <FeaturedCollections />
      <NewArrivals />
      <ShopByOccasion />
      <SummerCampaign />
      <CuratedCollections />
      <BestSellers />
      <SareeShowcase />
      <BridalShowcase />
      <Testimonials />
      <BrandStory />
      <StoreExperience />
      <InstagramGallery />
      <Newsletter />
    </>
  );
}
