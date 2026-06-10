import type { MetadataRoute } from 'next';
import { allCollections, occasions, products } from '@/lib/data';

const base = 'https://www.sumareddystudios.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/contact', '/stores'].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const collectionRoutes = [...allCollections, ...occasions].map((c) => ({
    url: `${base}/collections/${c.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/product/${p.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...collectionRoutes, ...productRoutes];
}
