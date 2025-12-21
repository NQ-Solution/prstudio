import { MetadataRoute } from 'next';
import { siteConfig, sitePages } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // 주요 페이지들
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}${sitePages.jewelry.path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}${sitePages.services.path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}${sitePages.portfolio.path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}${sitePages.contact.path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // 주얼리 카테고리 페이지들
  const jewelryCategories = [
    'rings',
    'earrings',
    'necklaces',
    'bracelets',
    'couple-rings',
    'goldbar',
  ];

  const jewelryPages: MetadataRoute.Sitemap = jewelryCategories.map((category) => ({
    url: `${baseUrl}/jewelry/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 서비스 카테고리 페이지들
  const serviceCategories = ['watch', 'trophy', 'equipment'];

  const servicePages: MetadataRoute.Sitemap = serviceCategories.map((category) => ({
    url: `${baseUrl}/services/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...mainPages, ...jewelryPages, ...servicePages];
}
