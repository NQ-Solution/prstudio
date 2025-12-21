import type { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import { ThemeProvider } from '@/context';
import ImageProtection from '@/components/common/ImageProtection';
import { defaultMetadata, jsonLd, siteConfig } from '@/config/seo';
import './globals.css';

// SEO 설정은 src/config/seo.ts에서 관리됩니다
export const metadata: Metadata = {
  ...defaultMetadata,
  // 네이버 검색 최적화
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* JSON-LD 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd.localBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd.website),
          }}
        />
        {/* 사이트 네비게이션 - 사이트링크 최적화 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd.siteNavigationElement),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ImageProtection />
          <Header />
          <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
