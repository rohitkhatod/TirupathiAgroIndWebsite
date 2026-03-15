import { MetadataRoute } from 'next';

const routes = ['', '/about', '/products', '/turf-solutions', '/applications', '/research-technology', '/knowledge-center', '/downloads', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.tirupathiagro.com${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8
  }));
}
