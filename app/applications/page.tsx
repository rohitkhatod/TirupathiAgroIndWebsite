import { Metadata } from 'next';
import { Section } from '@/components/section';

export const metadata: Metadata = {
  title: 'Applications',
  description: 'How Tirupathi Agro products are applied in golf courses, stadiums, lawns, and cricket grounds.'
};

export default function ApplicationsPage() {
  return (
    <Section title="Application Areas" subtitle="Site-specific protocols for consistent turf quality and wear tolerance.">
      <div className="grid gap-5 md:grid-cols-5">
        {['Golf Courses', 'Sports Stadiums', 'Residential Lawns', 'Commercial Landscaping', 'Cricket Grounds'].map((x) => (
          <div key={x} className="rounded-xl bg-earth/50 p-4 text-sm font-medium text-forest">{x}</div>
        ))}
      </div>
    </Section>
  );
}
