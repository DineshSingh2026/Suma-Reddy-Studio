import type { Metadata } from 'next';
import { Phone, Mail, MessageCircle, MapPin, Clock, Instagram } from 'lucide-react';
import { stores } from '@/lib/data';
import { PageHeader } from '@/components/ui/page-header';
import { ContactForm } from '@/components/contact/contact-form';
import { pageHeaderImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Contact & Appointments',
  description: 'Contact Suma Reddy Studio — book a bridal appointment, reach our client care team by phone, WhatsApp, or email, or visit a boutique.',
  alternates: { canonical: '/contact' },
};

const channels = [
  { icon: Phone, label: 'Call Us', value: '+91 96187 55757', href: 'tel:+919618755757' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with a stylist', href: 'https://wa.me/919618755757' },
  { icon: Mail, label: 'Email', value: 'sumareddy.official@gmail.com', href: 'mailto:sumareddy.official@gmail.com' },
  { icon: Instagram, label: 'Instagram', value: '@sumareddystudio', href: 'https://www.instagram.com/sumareddystudio' },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="We’re Here For You"
        title="Get In Touch"
        description="Whether you’re planning a wedding or simply have a question, our atelier team would love to help."
        image={pageHeaderImages.contact}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="container-luxe py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* left: channels + stores */}
          <div className="lg:col-span-5">
            <span className="eyebrow">Reach Us Directly</span>
            <h2 className="text-display-md mt-4 text-ink">Let’s Talk</h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-ink-muted">
              For bridal couture, we recommend booking a private appointment so we can give your occasion the time it
              deserves.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center gap-4 rounded-md border border-ink/10 bg-white p-4 transition hover:border-lavender-royal/40 hover:shadow-card"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lavender-mist text-lavender-royal transition group-hover:bg-pink group-hover:text-ink">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wide2 text-ink-muted">{c.label}</span>
                    <span className="text-sm font-medium text-ink">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10">
              <span className="eyebrow">Our Boutiques</span>
              <div className="mt-5 flex flex-col gap-4">
                {stores.map((s) => (
                  <div key={s.id} className="rounded-md border border-ink/10 bg-white p-5">
                    <h3 className="font-serif text-xl text-ink">{s.city}</h3>
                    <p className="mt-2 flex items-start gap-2 text-sm text-ink-muted">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lavender-royal" /> {s.address}
                    </p>
                    <p className="mt-1.5 flex items-center gap-2 text-sm text-ink-muted">
                      <Clock className="h-4 w-4 shrink-0 text-lavender-royal" /> {s.hours}
                    </p>
                    <p className="mt-1.5 flex items-center gap-2 text-sm text-ink-muted">
                      <Phone className="h-4 w-4 shrink-0 text-lavender-royal" /> {s.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right: form */}
          <div className="lg:col-span-7">
            <ContactForm />
            <div className="mt-6 overflow-hidden rounded-md border border-ink/10">
              <iframe
                title="Suma Reddy Studio — Hyderabad flagship map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.40%2C17.39%2C78.46%2C17.43&layer=mapnik&marker=17.4156%2C78.4347"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
