import { Metadata } from 'next';
import { siteConfig, sitePages, generateBreadcrumbJsonLd } from '@/config/seo';

export const metadata: Metadata = {
  title: sitePages.contact.title,
  description: sitePages.contact.description,
  keywords: [
    '주얼리 촬영 문의',
    '제품 촬영 견적',
    '촬영 상담',
    '포토인쇄랜드 연락처',
    '종로 제품 촬영',
    '주얼리 촬영 가격 문의',
  ],
  openGraph: {
    title: `${sitePages.contact.title} | ${siteConfig.name}`,
    description: sitePages.contact.description,
    url: `${siteConfig.url}${sitePages.contact.path}`,
    siteName: siteConfig.name,
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${sitePages.contact.title} | ${siteConfig.name}`,
    description: sitePages.contact.description,
  },
  alternates: {
    canonical: `${siteConfig.url}${sitePages.contact.path}`,
  },
};

// Breadcrumb JSON-LD
const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: '홈', url: siteConfig.url },
  { name: sitePages.contact.title, url: `${siteConfig.url}${sitePages.contact.path}` },
]);

export default function ContactLayout({
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
