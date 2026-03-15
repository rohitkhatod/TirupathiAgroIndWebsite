'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const body = Object.fromEntries(new FormData(form));
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    setStatus(res.ok ? 'Thank you. Our agronomy team will contact you shortly.' : 'Submission failed. Please try again.');
    if (res.ok) form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-forest/10 p-6 shadow-soft">
      <input required name="name" placeholder="Full Name" className="w-full rounded-xl border border-forest/20 px-4 py-3" />
      <input required name="email" type="email" placeholder="Work Email" className="w-full rounded-xl border border-forest/20 px-4 py-3" />
      <input name="company" placeholder="Organization" className="w-full rounded-xl border border-forest/20 px-4 py-3" />
      <textarea required name="message" placeholder="Tell us about your turf requirement" className="h-32 w-full rounded-xl border border-forest/20 px-4 py-3" />
      <button className="rounded-full bg-forest px-6 py-3 font-semibold text-white">Submit Inquiry</button>
      {status && <p className="text-sm text-slate/75">{status}</p>}
    </form>
  );
}
