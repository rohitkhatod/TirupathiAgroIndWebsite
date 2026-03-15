import { Metadata } from 'next';
import { Section } from '@/components/section';
import { ProductComparison } from '@/components/product-comparison';
import { products } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore soil conditioners, biostimulants, micronutrients, and specialty turf inputs by Tirupathi Agro.'
};

export default function ProductsPage() {
  return (
    <Section title="Turf Product Systems" subtitle="Precision-formulated products designed for high-performance rootzones and resilient turfgrass.">
      <div className="space-y-6">
        {products.map((p) => (
          <article key={p.slug} className="rounded-2xl border border-forest/10 p-6">
            <p className="text-xs uppercase tracking-wider text-turf">{p.category}</p>
            <h3 className="mt-2 text-2xl font-semibold text-forest">{p.name}</h3>
            <p className="mt-2 text-slate/80">{p.overview}</p>
            <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-forest">Key Benefits</h4>
                <ul className="mt-2 list-disc space-y-1 pl-4">
                  {p.benefits.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
              <div className="space-y-1">
                <p><strong>Technical Specifications:</strong> {p.specs.join(', ')}</p>
                <p><strong>Application Rate:</strong> {p.applicationRate}</p>
                <p><strong>Usage Instructions:</strong> {p.usage}</p>
                <p><strong>Turf Suitability:</strong> {p.suitability}</p>
                <a href={p.pdf} className="inline-block text-turf underline">Download PDF</a>
              </div>
            </div>
          </article>
        ))}
        <ProductComparison />
      </div>
    </Section>
  );
}
