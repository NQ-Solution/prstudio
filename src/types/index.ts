// ========================================
// 포토인쇄랜드 타입 정의
// ========================================

// 주얼리 카테고리 타입
export type JewelryCategory =
  | 'rings'       // 반지
  | 'earrings'    // 귀걸이 (피어싱)
  | 'necklaces'   // 목걸이 (팬던트)
  | 'couplings'   // 커플링
  | 'bracelets';  // 팔찌

// 주얼리 소재 타입
export type JewelryMaterial =
  | 'gold'        // 금
  | 'silver'      // 은
  | 'platinum'    // 백금
  | 'rose-gold'   // 로즈골드
  | 'white-gold'; // 화이트골드

// 주얼리 세부 타입
export type JewelrySubType =
  | 'wedding'     // 예물
  | 'diamond'     // 다이아
  | 'gemstone'    // 보석
  | 'plain'       // 무장식
  | 'custom';     // 커스텀

// 서비스 타입
export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  isMain?: boolean;
  href?: string;
}

// 포트폴리오 아이템 타입
export interface PortfolioItem {
  id: string;
  title: string;
  code: string;
  category: JewelryCategory | string;
  material?: JewelryMaterial;
  subType?: JewelrySubType | string;
  description?: string;
  images?: string[]; // 여러 이미지 지원
  imageSrc?: string; // 메인 이미지 (하위 호환)
  imageAlt?: string;
  specs?: {
    material?: string;
    gemstone?: string;
    weight?: string;
    size?: string;
  };
}

// 프로세스 스텝 타입
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

// 네비게이션 아이템 타입
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// 주얼리 카테고리 정보 타입
export interface JewelryCategoryInfo {
  id: JewelryCategory | string;
  name: string;
  nameEn: string;
  description: string;
  longDescription?: string;
  subTypes: {
    id: string;
    name: string;
    description?: string;
    examples?: string[];
  }[];
}

// 가격 정보 타입
export interface PriceInfo {
  category: string;
  basePrice: number;
  unit: string;
  notes?: string;
}

// Footer 링크 그룹 타입
export interface FooterLinkGroup {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

// 통계 정보 타입
export interface StatInfo {
  value: string;
  label: string;
}

// 이미지 플레이스홀더 프롭스
export interface ImagePlaceholderProps {
  label?: string;
  category?: JewelryCategory | string;
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  showOverlay?: boolean;
}
