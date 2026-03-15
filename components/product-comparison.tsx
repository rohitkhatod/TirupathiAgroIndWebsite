'use client';

import { useMemo, useState } from 'react';
import { products } from '@/lib/site';

export function ProductComparison() {
  const [left, setLeft] = useState(products[0].slug);
  const [right, setRight] = useState(products[1].slug);

  const selected = useMemo(() => {
    return [products.find((p) => p.slug === left), products.find((p) => p.slug === right)];
  }, [left, right]);

  return (
    <div className="rounded-2xl border border-forest/10 p-6">
      <h3 className="text-xl font-semibold text-forest">Product Comparison Tool</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {[left, right].map((value, idx) => (
          <select
            key={idx}
            value={value}
            onChange={(e) => (idx === 0 ? setLeft(e.target.value) : setRight(e.target.value))}
            className="rounded-xl border border-forest/20 px-3 py-2"
          >
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>{p.name}</option>
            ))}
          </select>
        ))}
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {selected.map((p) =>
          p ? (
            <div key={p.slug} className="rounded-xl bg-earth/50 p-4 text-sm">
              <p className="font-semibold text-forest">{p.name}</p>
              <p className="mt-2"><strong>Application:</strong> {p.applicationRate}</p>
              <p className="mt-1"><strong>Suitability:</strong> {p.suitability}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
