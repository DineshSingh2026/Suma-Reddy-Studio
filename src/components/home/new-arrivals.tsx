import { newArrivals } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { ProductCard } from '@/components/ui/product-card';
import { Reveal } from '@/components/ui/reveal';

export function NewArrivals() {
  return (
    <section className="bg-lavender-veil-soft py-20 lg:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Fresh From The Atelier"
          title="New Arrivals"
          description="The latest expressions of our design studio — limited in number, made to be noticed."
          align="left"
          cta={{ label: 'View All', href: '/collections/new-arrivals' }}
        />

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {newArrivals.map((p, i) => (
            <Reveal key={p.id} delay={i % 4}>
              <ProductCard product={p} priority={i < 4} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
