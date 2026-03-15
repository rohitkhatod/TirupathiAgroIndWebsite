import { siteConfig } from './site';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  sameAs: ['https://www.linkedin.com'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-00000-00000',
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['en']
  }
};
