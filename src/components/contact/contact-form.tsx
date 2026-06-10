'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const topics = ['Bridal Appointment', 'Order Enquiry', 'Styling Help', 'Press / Partnership', 'Something Else'];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex min-h-[360px] flex-col items-center justify-center rounded-md border border-ink/10 bg-white p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pink/20 text-pink">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-serif text-2xl text-ink">Thank you for reaching out</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-muted">
          A member of our atelier team will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-md border border-ink/10 bg-white p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="First Name" name="first" required />
        <Field label="Last Name" name="last" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div className="mt-5">
        <label htmlFor="topic" className="mb-2 block text-[11px] uppercase tracking-wide2 text-ink">How can we help?</label>
        <select id="topic" name="topic" className="h-12 w-full border border-ink/20 bg-transparent px-3 text-sm text-ink focus:border-ink focus:outline-none">
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-[11px] uppercase tracking-wide2 text-ink">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none border border-ink/20 bg-transparent p-3 text-sm text-ink focus:border-ink focus:outline-none"
          placeholder="Tell us about your occasion, dates, and what you have in mind…"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="mt-6 w-full">
        Send Enquiry
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[11px] uppercase tracking-wide2 text-ink">
        {label}
        {required && <span className="text-pink"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-12 w-full border border-ink/20 bg-transparent px-3 text-sm text-ink focus:border-ink focus:outline-none"
      />
    </div>
  );
}
