import { Metadata } from 'next';
import { Section } from '@/components/section';
import { blogPosts } from '@/lib/site';
import { NewsletterForm } from '@/components/newsletter-form';

export const metadata: Metadata = {
  title: 'Knowledge Center',
  description: 'SEO-focused turf agronomy articles covering nutrition, soil health, disease prevention, and management.'
};

export default function KnowledgeCenterPage() {
  return (
    <Section title="Knowledge Center" subtitle="Educational resources for agronomists, superintendents, and turf managers.">
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-forest/10 p-5">
            <p className="text-xs uppercase tracking-wide text-turf">{post.category}</p>
            <h3 className="mt-2 text-lg font-semibold text-forest">{post.title}</h3>
            <p className="mt-2 text-sm text-slate/80">{post.excerpt}</p>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <NewsletterForm />
      </div>
    </Section>
  );
}
