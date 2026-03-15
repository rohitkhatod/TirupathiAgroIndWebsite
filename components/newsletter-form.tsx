'use client';

import { FormEvent, useState } from 'react';

export function NewsletterForm() {
  const [message, setMessage] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get('email');
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    setMessage(res.ok ? 'Subscribed successfully.' : 'Unable to subscribe currently.');
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-forest p-6 text-white">
      <h3 className="text-xl font-semibold">Newsletter Signup</h3>
      <p className="mt-2 text-sm text-white/85">Get turf nutrition guides and seasonal advisories.</p>
      <div className="mt-4 flex flex-col gap-3 md:flex-row">
        <input required type="email" name="email" placeholder="Work email" className="w-full rounded-full px-4 py-3 text-slate" />
        <button className="rounded-full bg-moss px-5 py-3 font-semibold text-forest">Subscribe</button>
      </div>
      {message && <p className="mt-3 text-sm">{message}</p>}
    </form>
  );
}
