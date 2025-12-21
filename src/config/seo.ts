import { Metadata } from 'next';

/**
 * SEO 설정 중앙 관리
 * 이 파일에서 모든 SEO 관련 정보를 수정하면 전체 사이트에 반영됩니다.
 */

// 기본 사이트 정보
export const siteConfig = {
  name: '포토인쇄랜드',
  nameEn: 'PHOTO PRINT LAND',
  url: 'https://photoprintland.com', // 실제 도메인으로 변경 필요
  description: '25년 경력의 전문 주얼리 촬영 및 제품 촬영 서비스. 누끼 전문, 고정 가격제, 빠른 납품',
  keywords: [
    '주얼리 촬영',
    '제품 촬영',
    '누끼 촬영',
    '반지 촬영',
    '목걸이 촬영',
    '귀걸이 촬영',
    '시계 촬영',
    '트로피 촬영',
    '상품 사진',
    '이커머스 촬영',
    '쇼핑몰 사진',
  ],
  author: '포토인쇄랜드',
  since: '2000',
} as const;

// 기본 메타데이터
export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`, // 실제 OG 이미지 생성 필요
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },

  // 추가 메타태그
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 아이콘
  icons: {
    icon: '/images/logo/PRlogo.svg',
    apple: '/images/logo/PRlogo.svg',
  },

  // Verification - 실제 인증 코드로 교체 필요
  verification: {
    google: '', // Google Search Console 인증 코드
    other: {
      'naver-site-verification': '', // 네이버 서치어드바이저 인증 코드
    },
  },

  // 추가 메타태그
  other: {
    'naver-site-verification': '', // 네이버 서치어드바이저 인증
    'google-site-verification': '', // 구글 서치 콘솔 인증
  },
};

// 페이지별 메타데이터 생성 함수
export function generatePageMetadata({
  title,
  description,
  keywords,
  path = '',
  images,
}: {
  title: string;
  description?: string;
  keywords?: string[];
  path?: string;
  images?: string[];
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const pageDescription = description || siteConfig.description;
  const pageKeywords = keywords
    ? [...siteConfig.keywords, ...keywords]
    : [...siteConfig.keywords];

  return {
    title,
    description: pageDescription,
    keywords: pageKeywords,
    openGraph: {
      title,
      description: pageDescription,
      url,
      images: images?.map(img => ({
        url: `${siteConfig.url}${img}`,
        width: 1200,
        height: 630,
        alt: title,
      })) || defaultMetadata.openGraph?.images,
    },
    twitter: {
      title,
      description: pageDescription,
      images: images?.map(img => `${siteConfig.url}${img}`) ||
        (defaultMetadata.twitter?.images as string[]),
    },
  };
}

// 페이지 정보 (사이트링크용)
export const sitePages = {
  home: {
    path: '/',
    title: '홈',
    description: '25년 경력의 전문 주얼리 촬영 및 제품 촬영 서비스',
  },
  jewelry: {
    path: '/jewelry',
    title: '주얼리 촬영',
    description: '반지, 목걸이, 귀걸이, 팔찌 등 주얼리 전문 촬영 서비스 - 누끼 촬영, 고정 가격제',
  },
  services: {
    path: '/services',
    title: '제품 촬영',
    description: '시계, 트로피, 실험과학기구 등 다양한 제품 전문 촬영 서비스',
  },
  portfolio: {
    path: '/portfolio',
    title: '포트폴리오',
    description: '2,000점 이상의 주얼리 및 제품 촬영 포트폴리오',
  },
  contact: {
    path: '/contact',
    title: '문의하기',
    description: '촬영 문의 및 견적 상담 - 전화, 카카오톡, 이메일',
  },
} as const;

// JSON-LD 구조화 데이터
export const jsonLd = {
  // 지역 비즈니스
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: `${siteConfig.url}/images/logo/PRlogo.svg`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: '02-1234-5678', // contactInfo에서 가져오도록 수정 가능
    priceRange: '₩₩',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '돈의동 41-1 드래곤팰리스 509호',
      addressLocality: '종로구',
      addressRegion: '서울시',
      addressCountry: 'KR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.5707, // 실제 좌표로 변경 필요
      longitude: 126.9920,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      // 소셜 미디어 링크들 (있는 경우)
    ],
  },

  // 조직 정보
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/PRlogo.svg`,
    description: siteConfig.description,
    foundingDate: siteConfig.since,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '02-1234-5678',
      contactType: 'customer service',
      areaServed: 'KR',
      availableLanguage: 'Korean',
    },
  },

  // 웹사이트
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'ko-KR',
  },

  // 사이트 네비게이션 (사이트링크 최적화)
  siteNavigationElement: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: sitePages.jewelry.title,
        description: sitePages.jewelry.description,
        url: `${siteConfig.url}${sitePages.jewelry.path}`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: sitePages.services.title,
        description: sitePages.services.description,
        url: `${siteConfig.url}${sitePages.services.path}`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: sitePages.portfolio.title,
        description: sitePages.portfolio.description,
        url: `${siteConfig.url}${sitePages.portfolio.path}`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: sitePages.contact.title,
        description: sitePages.contact.description,
        url: `${siteConfig.url}${sitePages.contact.path}`,
      },
    ],
  },
};

// Breadcrumb 생성 함수
export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
