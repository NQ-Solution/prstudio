import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Yeti', // 네이버 검색봇
        allow: '/',
      },
      {
        userAgent: 'Daumoa', // 다음 검색봇
        allow: '/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
