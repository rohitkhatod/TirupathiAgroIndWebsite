import { Metadata } from 'next';
import { Section } from '@/components/section';

const docs = ['Product Brochures', 'Application Guides', 'Research Papers', 'Technical Documents'];

export const metadata: Metadata = {
  title: 'Downloads',
  description: 'Download product brochures, application guides, research papers, and technical turf documents.'
};

export default function DownloadsPage() {
  return (
    <Section title="Download Center" subtitle="Centralized technical documentation for planning and procurement teams.">
      <div className="grid gap-6 md:grid-cols-2">
        {docs.map((doc) => (
          <article key={doc} className="flex items-center justify-between rounded-xl border border-forest/10 p-4">
            <h3 className="font-medium text-forest">{doc}</h3>
            <a className="text-sm font-semibold text-turf underline" href="#">Download</a>
          </article>
        ))}
      </div>
    </Section>
  );
}
