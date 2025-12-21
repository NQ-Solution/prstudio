# 포토인쇄랜드 이미지 가이드

## 폴더 구조

```
public/images/
├── hero/                    # 메인 히어로 섹션 이미지
│   └── main-jewelry.png     # 메인 주얼리 이미지
├── jewelry/                 # 주얼리 카테고리별 이미지
│   ├── categories/          # 카테고리 대표 이미지
│   │   ├── rings.jpg
│   │   ├── earrings.jpg
│   │   ├── necklaces.jpg
│   │   ├── couplings.jpg
│   │   └── bracelets.jpg
│   ├── rings/               # 반지 포트폴리오
│   ├── earrings/            # 귀걸이 포트폴리오
│   ├── necklaces/           # 목걸이 포트폴리오
│   ├── couplings/           # 커플링 포트폴리오
│   └── bracelets/           # 팔찌 포트폴리오
├── portfolio/               # 일반 포트폴리오 이미지
├── watch/                   # 시계 촬영 이미지
├── trophy/                  # 트로피/상패 이미지
└── equipment/               # 과학기자재 이미지
```

## 이미지 추가 방법

### 1. 히어로 섹션 이미지

`src/components/sections/HeroSection.tsx` 파일에서:

```tsx
<Image
  src="/images/hero/main-jewelry.png"
  alt="주얼리 촬영 메인 이미지"
  fill
  className="object-contain drop-shadow-[0_0_30px_rgba(255,107,53,0.3)]"
  priority
/>
```

### 2. 포트폴리오 이미지

`src/data/index.ts`에서 `portfolioItems`에 `imageSrc` 추가:

```ts
{
  id: '1',
  title: '다이아몬드 반지 (누끼)',
  code: 'JEWELRY-001',
  category: 'rings',
  material: 'platinum',
  subType: 'diamond',
  imageSrc: '/images/jewelry/rings/diamond-ring-001.jpg',  // 이미지 경로 추가
}
```

### 3. ImagePlaceholder 컴포넌트 사용

```tsx
import { ImagePlaceholder } from '@/components/ui';

// 이미지가 있는 경우
<ImagePlaceholder
  src="/images/jewelry/rings/ring-001.jpg"
  alt="다이아몬드 반지"
  label="다이아몬드 반지"
  code="RING-001"
/>

// 이미지가 없는 경우 (플레이스홀더 표시)
<ImagePlaceholder
  label="반지 이미지"
  code="RING-001"
/>
```

## 이미지 권장 사양

- **포맷**: JPG, PNG, WebP
- **해상도**: 최소 800x800px (정사각형 권장)
- **히어로 이미지**: 투명 배경 PNG 권장 (800x800px 이상)
- **포트폴리오**: 정사각형 비율 권장
- **용량**: 개별 파일 500KB 이하 권장

## 이미지 최적화

Next.js Image 컴포넌트가 자동으로 이미지를 최적화합니다:
- WebP 자동 변환
- 반응형 이미지 생성
- 레이지 로딩

## 참고사항

- 이미지가 없으면 플레이스홀더가 자동으로 표시됩니다
- 플레이스홀더에는 "이미지 추가 필요" 뱃지가 표시됩니다
- 이미지 추가 후 개발 서버 재시작 불필요
