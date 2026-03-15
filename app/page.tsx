import Link from 'next/link';
import { AnimatedIn } from '@/components/animated-in';
import { Section } from '@/components/section';
import { products } from '@/lib/site';

const categories = ['Soil Conditioners', 'Biostimulants', 'Organic Fertilizers', 'Micronutrients', 'Turf Colorants', 'Specialty Turf Inputs'];

export default function HomePage() {
  return (
    <>
      <section className="bg-hero bg-cover bg-center py-28 text-white md:py-40">
        <div className="container-wrap">
          <AnimatedIn>
            <p className="mb-4 text-sm uppercase tracking-[0.22em] text-moss">Research-Driven Turf Science</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Advanced Turf Agronomy Solutions</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90">
              Scientifically engineered soil and turf inputs for superior performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="rounded-full bg-white px-6 py-3 font-semibold text-forest transition hover:bg-earth">Explore Products</Link>
              <Link href="/contact" className="rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Contact Experts</Link>
            </div>
          </AnimatedIn>
        </div>
      </section>

      <Section
        title="Scientific Turf Leadership"
        subtitle="Tirupathi Agro combines agronomic research, precision nutrition, and sustainable formulations to support elite turf quality across golf courses, sports fields, and premium landscapes."
      >
        <div className="grid gap-6 md:grid-cols-4">
          {['Expert Turf Agronomy', 'Research Driven Products', 'Eco-Friendly Formulations', 'Professional Turf Management'].map((item) => (
            <div key={item} className="rounded-2xl border border-forest/10 bg-white p-5 shadow-soft">
              <h3 className="font-semibold text-forest">{item}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Product Portfolio" subtitle="Advanced input systems designed for playing quality, turf durability, and soil resilience.">
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category} className="rounded-2xl bg-earth/50 p-6">
              <h3 className="font-semibold text-forest">{category}</h3>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <div key={p.slug} className="rounded-2xl border border-forest/10 p-6">
              <p className="text-sm text-turf">{p.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-forest">{p.name}</h3>
              <p className="mt-3 text-sm text-slate/80">{p.overview}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
