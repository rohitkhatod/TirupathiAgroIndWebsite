import { Metadata } from 'next';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Tirupathi Agro’s turf agronomy expertise, R&D philosophy, and sustainability mission.'
};

export default function AboutPage() {
  return (
    <Section title="About Tirupathi Agro" subtitle="A scientific turf agronomy company focused on measurable field performance.">
      <div className="grid gap-6 md:grid-cols-3">
        {[
          ['Agronomy Expertise', 'Decades of practical turf science across golf, sports, and urban landscapes.'],
          ['Research-Driven', 'Formulations developed through trial protocols and soil-plant response analytics.'],
          ['Sustainability Focus', 'Eco-conscious solutions that reduce nutrient loss and improve soil biology.']
        ].map(([h, p]) => (
          <article key={h} className="rounded-2xl border border-forest/10 p-6">
            <h3 className="text-lg font-semibold text-forest">{h}</h3>
            <p className="mt-2 text-sm text-slate/80">{p}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
