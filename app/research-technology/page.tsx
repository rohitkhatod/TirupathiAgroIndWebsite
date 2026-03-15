import { Metadata } from 'next';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Research & Technology',
  description: 'Scientific foundation across soil science, plant nutrition, biostimulant technology, and sustainability.'
};

export default function ResearchTechnologyPage() {
  return (
    <Section title="Research & Technology" subtitle="Science-led product innovation for measurable turf outcomes.">
      <div className="grid gap-6 md:grid-cols-2">
        {[
          ['Soil Science', 'Rootzone chemistry, CEC balancing, and microbial activation models.'],
          ['Plant Nutrition', 'Precision macro/micronutrient delivery across growth and stress stages.'],
          ['Biostimulant Technology', 'Signal molecules and marine bioactives for metabolic efficiency.'],
          ['Sustainable Turf Management', 'Low-leach, high-efficiency formulations aligned to environmental targets.']
        ].map(([h, p]) => (
          <article key={h} className="rounded-2xl border border-forest/10 p-6">
            <h3 className="font-semibold text-forest">{h}</h3>
            <p className="mt-2 text-sm text-slate/80">{p}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
