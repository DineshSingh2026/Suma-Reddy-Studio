import { ButtonLink } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="container-luxe flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow mx-auto justify-center">Error 404</span>
      <h1 className="text-display-lg mt-5 text-ink">This Page Slipped Off The Hanger</h1>
      <p className="mt-5 max-w-md text-pretty text-base text-ink-muted">
        The page you’re looking for has moved or no longer exists. Let’s get you back to something beautiful.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <ButtonLink href="/" variant="primary" size="lg">Return Home</ButtonLink>
        <ButtonLink href="/collections/new-arrivals" variant="outline" size="lg">Shop New Arrivals</ButtonLink>
      </div>
    </section>
  );
}
