export type CmsProvider = 'sanity' | 'strapi';

export async function fetchCmsCollection<T>(provider: CmsProvider, endpoint: string): Promise<T[]> {
  const base = provider === 'sanity' ? process.env.SANITY_PROJECT_URL : process.env.STRAPI_URL;
  if (!base) return [];

  const res = await fetch(`${base}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.CMS_API_TOKEN ?? ''}`
    },
    next: { revalidate: 300 }
  });

  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : data.data ?? [];
}
