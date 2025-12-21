import { Metadata } from 'next';
import { siteConfig, sitePages, generateBreadcrumbJsonLd } from '@/config/seo';

export const metadata: Metadata = {
  title: sitePages.jewelry.title,
  description: sitePages.jewelry.description,
  keywords: [
    '주얼리 촬영',
    '반지 촬영',
    '목걸이 촬영',
    '귀걸이 촬영',
    '팔찌 촬영',
    '커플링 촬영',
    '누끼 촬영',
    '주얼리 사진',
    '예물 촬영',
    '보석 촬영',
    '주얼리 촬영 가격',
  ],
  openGraph: {
    title: `${sitePages.jewelry.title} | ${siteConfig.name}`,
    description: sitePages.jewelry.description,
    url: `${siteConfig.url}${sitePages.jewelry.path}`,
    siteName: siteConfig.name,
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${sitePages.jewelry.title} | ${siteConfig.name}`,
    description: sitePages.jewelry.description,
  },
  alternates: {
    canonical: `${siteConfig.url}${sitePages.jewelry.path}`,
  },
};

// Breadcrumb JSON-LD
const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: '홈', url: siteConfig.url },
  { name: sitePages.jewelry.title, url: `${siteConfig.url}${sitePages.jewelry.path}` },
]);

export default function JewelryLayout({
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
