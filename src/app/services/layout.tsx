import { Metadata } from 'next';
import { siteConfig, sitePages, generateBreadcrumbJsonLd } from '@/config/seo';

export const metadata: Metadata = {
  title: sitePages.services.title,
  description: sitePages.services.description,
  keywords: [
    '제품 촬영',
    '시계 촬영',
    '트로피 촬영',
    '상패 촬영',
    '과학기자재 촬영',
    '실험기구 촬영',
    '산업장비 촬영',
    '제품 사진',
    '상품 촬영',
    '이커머스 촬영',
  ],
  openGraph: {
    title: `${sitePages.services.title} | ${siteConfig.name}`,
    description: sitePages.services.description,
    url: `${siteConfig.url}${sitePages.services.path}`,
    siteName: siteConfig.name,
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${sitePages.services.title} | ${siteConfig.name}`,
    description: sitePages.services.description,
  },
  alternates: {
    canonical: `${siteConfig.url}${sitePages.services.path}`,
  },
};

// Breadcrumb JSON-LD
const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: '홈', url: siteConfig.url },
  { name: sitePages.services.title, url: `${siteConfig.url}${sitePages.services.path}` },
]);

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      {children}
    </>
  );
}
