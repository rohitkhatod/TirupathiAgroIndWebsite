import { ReactNode } from 'react';

export function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="py-16 md:py-20">
      <div className="container-wrap">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
