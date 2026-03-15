import { Metadata } from 'next';
import { Section } from '@/components/section';
import { TurfCalendar } from '@/components/turf-calendar';

export const metadata: Metadata = {
  title: 'Turf Solutions',
  description: 'Strategic turf maintenance programs for golf courses, sports turf, lawns, landscaping, and sod farms.'
};

export default function TurfSolutionsPage() {
  return (
    <Section title="Turf Solutions" subtitle="Integrated maintenance strategies based on soil data, playing demands, and seasonality.">
      <div className="grid gap-6 md:grid-cols-2">
        {['Golf Courses', 'Sports Turf', 'Lawn Care', 'Landscaping', 'Sod Farms'].map((item) => (
          <article key={item} className="rounded-2xl border border-forest/10 p-6">
            <h3 className="text-xl font-semibold text-forest">{item}</h3>
            <p className="mt-2 text-sm text-slate/80">Includes turf diagnostics diagrams, fertilizer programs, and seasonal care plans.</p>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <TurfCalendar />
      </div>
    </Section>
  );
}
