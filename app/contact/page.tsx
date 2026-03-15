import { Metadata } from 'next';
import { Section } from '@/components/section';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Connect with Tirupathi Agro experts for turf diagnostics, product consultation, and programs.'
};

export default function ContactPage() {
  return (
    <Section title="Contact Turf Experts" subtitle="Share your site conditions and objectives. Our agronomy team will recommend a custom program.">
      <div className="grid gap-8 md:grid-cols-2">
        <ContactForm />
        <div className="rounded-2xl bg-earth/50 p-6">
          <h3 className="text-xl font-semibold text-forest">Head Office</h3>
          <p className="mt-3 text-sm text-slate/80">Tirupathi Agro, India</p>
          <p className="text-sm text-slate/80">Email: agronomy@tirupathiagro.com</p>
          <p className="text-sm text-slate/80">Phone: +91-00000-00000</p>
        </div>
      </div>
    </Section>
  );
}
