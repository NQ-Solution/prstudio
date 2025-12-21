import { Metadata } from 'next';
import { siteConfig, sitePages, generateBreadcrumbJsonLd } from '@/config/seo';

export const metadata: Metadata = {
  title: sitePages.portfolio.title,
  description: sitePages.portfolio.description,
  keywords: [
    '주얼리 촬영 포트폴리오',
    '제품 촬영 샘플',
    '반지 촬영 샘플',
    '목걸이 촬영 예시',
    '귀걸이 촬영 포트폴리오',
    '시계 촬영 샘플',
    '누끼 촬영 예시',
    '상품 사진 포트폴리오',
  ],
  openGraph: {
    title: `${sitePages.portfolio.title} | ${siteConfig.name}`,
    description: sitePages.portfolio.description,
    url: `${siteConfig.url}${sitePages.portfolio.path}`,
    siteName: siteConfig.name,
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${sitePages.portfolio.title} | ${siteConfig.name}`,
    description: sitePages.portfolio.description,
  },
  alternates: {
    canonical: `${siteConfig.url}${sitePages.portfolio.path}`,
  },
};

// Breadcrumb JSON-LD
const breadcrumbJsonLd = generateBreadcrumbJsonLd([
  { name: '홈', url: siteConfig.url },
  { name: sitePages.portfolio.title, url: `${siteConfig.url}${sitePages.portfolio.path}` },
]);

export default function PortfolioLayout({
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
