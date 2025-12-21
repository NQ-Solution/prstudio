import type {
  Service,
  PortfolioItem,
  ProcessStep,
  NavItem,
  JewelryCategoryInfo,
  FooterLinkGroup,
  StatInfo,
} from '@/types';

// ========================================
// 네비게이션 데이터
// ========================================
export const navigationItems: NavItem[] = [
  { label: '홈', href: '/' },
  {
    label: '주얼리 촬영',
    href: '/jewelry',
    children: [
      { label: '반지', href: '/jewelry/rings' },
      { label: '귀걸이 · 피어싱', href: '/jewelry/earrings' },
      { label: '목걸이 · 팬던트', href: '/jewelry/necklaces' },
      { label: '커플링', href: '/jewelry/couple-rings' },
      { label: '팔찌 · 발찌', href: '/jewelry/bracelets' },
      { label: '브로치', href: '/jewelry/brooches' },
    ],
  },
  { label: '포트폴리오', href: '/portfolio' },
  { label: '프로세스', href: '/#process' },
  { label: '문의하기', href: '/contact' },
];

// ========================================
// 주얼리 카테고리 상세 정보
// ========================================
export const jewelryCategories: JewelryCategoryInfo[] = [
  {
    id: 'rings',
    name: '반지',
    nameEn: 'Rings',
    description: '모든 소재와 디자인의 반지 전문 촬영',
    longDescription: '반지는 가장 섬세한 주얼리입니다. 다이아몬드의 컷팅면, 금속의 광택, 세공 디테일까지 모든 요소를 완벽하게 담아냅니다. 소재별, 보석별로 최적화된 조명과 앵글로 촬영합니다.',
    subTypes: [
      {
        id: '14k-gold',
        name: '14K 골드 반지',
        description: '14K (58.5% 금 함량) 옐로우골드, 화이트골드, 로즈골드',
        examples: ['14K 옐로우골드 심플 밴드', '14K 화이트골드 웨딩링']
      },
      {
        id: '18k-gold',
        name: '18K 골드 반지',
        description: '18K (75% 금 함량) 고급 골드 반지, 색상별 제작',
        examples: ['18K 옐로우골드 디자인 링', '18K 로즈골드 트위스트 반지']
      },
      {
        id: '24k-gold',
        name: '24K 순금 반지',
        description: '24K (99.9% 금 함량) 순금 반지, 전통 돌반지',
        examples: ['24K 순금 돌반지', '24K 순금 전통 반지']
      },
      {
        id: 'platinum',
        name: '백금 반지',
        description: '플래티넘(Pt950, Pt900) 웨딩밴드 및 고급 반지',
        examples: ['Pt950 웨딩밴드', 'Pt900 다이아 세팅 반지']
      },
      {
        id: 'white-gold',
        name: '화이트골드 반지',
        description: '14K/18K 화이트골드, 로듐 도금 처리',
        examples: ['18K 화이트골드 솔리테어', '14K 화이트골드 미니멀 링']
      },
      {
        id: 'rose-gold',
        name: '로즈골드 반지',
        description: '14K/18K 핑크톤 로즈골드 반지',
        examples: ['18K 로즈골드 빈티지 링', '14K 로즈골드 스태킹 반지']
      },
      {
        id: 'diamond-ring',
        name: '다이아몬드 반지',
        description: '다이아몬드 세팅 반지, 캐럿별 프로포즈링',
        examples: ['1캐럿 라운드 다이아 반지', '0.3ct 6프롱 솔리테어']
      },
      {
        id: 'ruby',
        name: '루비 반지',
        description: '천연 루비 세팅 반지, 7월 탄생석',
        examples: ['미얀마 루비 오벌 반지', '루비 3석 칵테일 링']
      },
      {
        id: 'sapphire',
        name: '사파이어 반지',
        description: '블루 사파이어, 팬시 사파이어 반지, 9월 탄생석',
        examples: ['카슈미르 블루 사파이어 반지', '핑크 사파이어 헤일로 링']
      },
      {
        id: 'emerald',
        name: '에메랄드 반지',
        description: '천연 에메랄드 반지, 5월 탄생석',
        examples: ['콜롬비아 에메랄드 반지', '에메랄드 컷 에메랄드 링']
      },
      {
        id: 'pearl-ring',
        name: '진주 반지',
        description: '아코야, 남양, 담수진주 반지',
        examples: ['아코야 진주 클래식 반지', '남양 골든펄 링']
      },
      {
        id: 'gemstone-mix',
        name: '기타 보석 반지',
        description: '탄자나이트, 토파즈, 자수정, 페리도트 등',
        examples: ['탄자나이트 쿠션컷 반지', '블루 토파즈 스톤 링']
      },
      {
        id: 'silver-925',
        name: '실버 반지',
        description: '925 스털링 실버, 산화은 처리',
        examples: ['925 실버 큐빅 반지', '산화은 빈티지 링']
      },
      {
        id: 'titanium',
        name: '티타늄 반지',
        description: '경량 티타늄 소재 반지',
        examples: ['블랙 티타늄 밴드', '티타늄 스포츠 링']
      },
    ],
  },
  {
    id: 'earrings',
    name: '귀걸이 · 피어싱',
    nameEn: 'Earrings & Piercings',
    description: '모든 소재의 귀걸이와 피어싱 전문 촬영',
    longDescription: '귀걸이는 얼굴 라인을 아름답게 만드는 주얼리입니다. 드롭의 우아한 흔들림, 스터드의 정교함, 후프의 볼륨감을 생동감 있게 표현합니다. 귀걸이 특성상 각도와 그림자를 섬세하게 조절하여 촬영합니다.',
    subTypes: [
      {
        id: '14k-gold-earring',
        name: '14K 골드 귀걸이',
        description: '14K 옐로우골드, 화이트골드, 로즈골드 귀걸이',
        examples: ['14K 옐로우골드 롱 드롭', '14K 화이트골드 스터드']
      },
      {
        id: '18k-gold-earring',
        name: '18K 골드 귀걸이',
        description: '18K 고급 골드 귀걸이, 후프 및 드롭',
        examples: ['18K 옐로우골드 대형 후프', '18K 로즈골드 체인 드롭']
      },
      {
        id: '24k-gold-earring',
        name: '24K 순금 귀걸이',
        description: '24K 순금 귀걸이, 전통 디자인',
        examples: ['24K 순금 전통 귀걸이', '24K 순금 고리형']
      },
      {
        id: 'platinum-earring',
        name: '백금 귀걸이',
        description: 'Pt950/Pt900 백금 귀걸이',
        examples: ['Pt950 다이아 스터드', 'Pt900 클래식 드롭']
      },
      {
        id: 'diamond-earring',
        name: '다이아몬드 귀걸이',
        description: '다이아몬드 스터드, 드롭, 후프',
        examples: ['0.5ct 6프롱 다이아 스터드', '1ct 다이아 드롭 귀걸이']
      },
      {
        id: 'ruby-earring',
        name: '루비 귀걸이',
        description: '천연 루비 귀걸이, 럭셔리 세팅',
        examples: ['미얀마 루비 드롭', '루비 헤일로 스터드']
      },
      {
        id: 'sapphire-earring',
        name: '사파이어 귀걸이',
        description: '블루/핑크 사파이어 귀걸이',
        examples: ['블루 사파이어 스터드', '핑크 사파이어 드롭']
      },
      {
        id: 'emerald-earring',
        name: '에메랄드 귀걸이',
        description: '천연 에메랄드 귀걸이',
        examples: ['콜롬비아 에메랄드 드롭', '에메랄드 스터드']
      },
      {
        id: 'pearl-earring',
        name: '진주 귀걸이',
        description: '아코야, 남양, 담수진주 귀걸이',
        examples: ['8mm 아코야 진주 스터드', '남양 골든펄 드롭']
      },
      {
        id: 'gemstone-earring',
        name: '기타 보석 귀걸이',
        description: '탄자나이트, 토파즈, 자수정 등',
        examples: ['탄자나이트 드롭', '블루 토파즈 스터드']
      },
      {
        id: 'silver-earring',
        name: '실버 귀걸이',
        description: '925 스털링 실버 귀걸이 및 피어싱',
        examples: ['925 실버 큐빅 후프', '실버 미니멀 스터드']
      },
      {
        id: 'hoop-earring',
        name: '후프 귀걸이',
        description: '다양한 사이즈의 후프 귀걸이',
        examples: ['대형 골드 후프', '미니 다이아 후프']
      },
    ],
  },
  {
    id: 'necklaces',
    name: '목걸이 · 팬던트',
    nameEn: 'Necklaces & Pendants',
    description: '목걸이, 팬던트 등 모든 소재 전문 촬영',
    longDescription: '목걸이는 가슴을 장식하는 주얼리입니다. 체인의 섬세한 연결, 팬던트의 입체감과 광택, 보석의 컬러를 완벽하게 표현합니다. 길이에 따른 실루엣과 흐름을 자연스럽게 담아냅니다.',
    subTypes: [
      {
        id: '14k-gold-necklace',
        name: '14K 골드 목걸이',
        description: '14K 옐로우골드, 화이트골드, 로즈골드 체인 및 팬던트',
        examples: ['14K 옐로우골드 베네치안 체인', '14K 화이트골드 이니셜 팬던트']
      },
      {
        id: '18k-gold-necklace',
        name: '18K 골드 목걸이',
        description: '18K 고급 골드 목걸이, 다양한 체인',
        examples: ['18K 옐로우골드 롤로 체인', '18K 로즈골드 하트 팬던트']
      },
      {
        id: '24k-gold-necklace',
        name: '24K 순금 목걸이',
        description: '24K 순금 목걸이, 전통 돌잡이',
        examples: ['24K 순금 돌잡이 목걸이', '24K 순금 전통 체인']
      },
      {
        id: 'platinum-necklace',
        name: '백금 목걸이',
        description: 'Pt950/Pt900 백금 체인 및 팬던트',
        examples: ['Pt950 베네치안 체인', 'Pt900 다이아 솔리테어 팬던트']
      },
      {
        id: 'diamond-necklace',
        name: '다이아몬드 목걸이',
        description: '다이아몬드 솔리테어, 라인, 클러스터 팬던트',
        examples: ['0.3ct 다이아 솔리테어', '1ct 다이아 라인 목걸이']
      },
      {
        id: 'ruby-necklace',
        name: '루비 목걸이',
        description: '천연 루비 팬던트 목걸이',
        examples: ['미얀마 루비 하트 팬던트', '루비 헤일로 목걸이']
      },
      {
        id: 'sapphire-necklace',
        name: '사파이어 목걸이',
        description: '블루/핑크 사파이어 팬던트',
        examples: ['블루 사파이어 솔리테어', '핑크 사파이어 클러스터']
      },
      {
        id: 'emerald-necklace',
        name: '에메랄드 목걸이',
        description: '천연 에메랄드 팬던트',
        examples: ['콜롬비아 에메랄드 팬던트', '에메랄드 컷 목걸이']
      },
      {
        id: 'pearl-necklace',
        name: '진주 목걸이',
        description: '아코야, 남양, 담수진주 목걸이',
        examples: ['7-7.5mm 아코야 진주 목걸이', '남양 골든펄 스트랜드']
      },
      {
        id: 'gemstone-necklace',
        name: '기타 보석 목걸이',
        description: '탄자나이트, 토파즈, 자수정 등',
        examples: ['탄자나이트 티어드롭 팬던트', '블루 토파즈 목걸이']
      },
      {
        id: 'silver-necklace',
        name: '실버 목걸이',
        description: '925 스털링 실버 체인 및 팬던트',
        examples: ['925 실버 큐빅 크로스', '실버 체인 초커']
      },
      {
        id: 'chain-necklace',
        name: '체인 목걸이',
        description: '다양한 굵기와 디자인의 체인',
        examples: ['굵은 링크 체인', '미니멀 볼 체인']
      },
    ],
  },
  {
    id: 'couple-rings',
    name: '커플링',
    nameEn: 'Couple Rings',
    description: '커플링, 웨딩밴드 등 기념 반지 촬영',
    longDescription: '커플링은 사랑의 약속을 담은 주얼리입니다. 두 반지의 조화와 각인의 선명함, 페어링의 밸런스를 감성적으로 표현합니다. 반지를 함께 배치하여 스토리를 담아냅니다.',
    subTypes: [
      {
        id: '14k-couple',
        name: '14K 커플링',
        description: '14K 옐로우골드, 화이트골드, 로즈골드 커플링',
        examples: ['14K 옐로우골드 심플 밴드', '14K 화이트골드 트위스트 커플링']
      },
      {
        id: '18k-couple',
        name: '18K 커플링',
        description: '18K 고급 골드 커플링, 웨딩밴드',
        examples: ['18K 옐로우골드 클래식 밴드', '18K 로즈골드 웨이브 커플링']
      },
      {
        id: '24k-couple',
        name: '24K 순금 커플링',
        description: '24K 순금 전통 커플링',
        examples: ['24K 순금 전통 커플링', '24K 순금 밴드']
      },
      {
        id: 'platinum-couple',
        name: '백금 커플링',
        description: 'Pt950/Pt900 백금 웨딩밴드',
        examples: ['Pt950 심플 웨딩밴드', 'Pt900 매트 피니쉬 커플링']
      },
      {
        id: 'diamond-couple',
        name: '다이아몬드 커플링',
        description: '다이아몬드 세팅 커플링',
        examples: ['다이아 하프 에터니티 커플링', '0.1ct 다이아 포인트 밴드']
      },
      {
        id: 'silver-couple',
        name: '실버 커플링',
        description: '925 스털링 실버 커플링',
        examples: ['925 실버 매트 커플링', '실버 큐빅 밴드']
      },
      {
        id: 'mixed-metal',
        name: '혼합 소재 커플링',
        description: '투톤, 쓰리톤 등 멀티 메탈 커플링',
        examples: ['로즈골드+화이트골드 투톤', '옐로우+화이트+로즈 쓰리톤']
      },
      {
        id: 'engraved-couple',
        name: '각인 커플링',
        description: '이름, 날짜 등 각인된 커플링',
        examples: ['이니셜 각인 밴드', '기념일+메시지 각인 링']
      },
      {
        id: 'textured-couple',
        name: '텍스처 커플링',
        description: '해머링, 샌딩, 매트 피니쉬 등',
        examples: ['해머 텍스처 밴드', '매트 피니쉬 커플링']
      },
    ],
  },
  {
    id: 'bracelets',
    name: '팔찌 · 발찌',
    nameEn: 'Bracelets & Anklets',
    description: '팔찌, 발찌 등 모든 소재 전문 촬영',
    longDescription: '팔찌와 발찌는 손목과 발목을 화려하게 장식합니다. 체인의 흐름, 참의 디테일, 뱅글의 곡선미, 테니스 팔찌의 라인을 아름답게 담아냅니다. 움직임과 실루엣을 자연스럽게 표현합니다.',
    subTypes: [
      {
        id: '14k-bracelet',
        name: '14K 골드 팔찌',
        description: '14K 옐로우골드, 화이트골드, 로즈골드 팔찌',
        examples: ['14K 옐로우골드 체인 팔찌', '14K 화이트골드 뱅글']
      },
      {
        id: '18k-bracelet',
        name: '18K 골드 팔찌',
        description: '18K 고급 골드 팔찌, 뱅글',
        examples: ['18K 옐로우골드 링크 팔찌', '18K 로즈골드 뱅글']
      },
      {
        id: '24k-bracelet',
        name: '24K 순금 팔찌',
        description: '24K 순금 팔찌, 돌잡이',
        examples: ['24K 순금 돌잡이 팔찌', '24K 순금 뱅글']
      },
      {
        id: 'platinum-bracelet',
        name: '백금 팔찌',
        description: 'Pt950/Pt900 백금 팔찌',
        examples: ['Pt950 체인 팔찌', 'Pt900 뱅글']
      },
      {
        id: 'diamond-bracelet',
        name: '다이아몬드 팔찌',
        description: '다이아몬드 테니스 팔찌, 라인 팔찌',
        examples: ['2ct 다이아 테니스 팔찌', '0.5ct 다이아 라인 팔찌']
      },
      {
        id: 'tennis-bracelet',
        name: '테니스 팔찌',
        description: '다이아/큐빅 테니스 스타일 팔찌',
        examples: ['다이아몬드 테니스 팔찌', '큐빅 테니스 팔찌']
      },
      {
        id: 'ruby-bracelet',
        name: '루비 팔찌',
        description: '천연 루비 팔찌',
        examples: ['루비 테니스 팔찌', '루비 참 팔찌']
      },
      {
        id: 'sapphire-bracelet',
        name: '사파이어 팔찌',
        description: '블루/핑크 사파이어 팔찌',
        examples: ['블루 사파이어 테니스', '핑크 사파이어 라인 팔찌']
      },
      {
        id: 'emerald-bracelet',
        name: '에메랄드 팔찌',
        description: '천연 에메랄드 팔찌',
        examples: ['에메랄드 테니스 팔찌', '에메랄드 라인 팔찌']
      },
      {
        id: 'pearl-bracelet',
        name: '진주 팔찌',
        description: '아코야, 남양, 담수진주 팔찌',
        examples: ['7mm 아코야 진주 팔찌', '남양 골든펄 팔찌']
      },
      {
        id: 'gemstone-bracelet',
        name: '기타 보석 팔찌',
        description: '탄자나이트, 토파즈, 자수정 등',
        examples: ['탄자나이트 라인 팔찌', '믹스 컬러 젬스톤 팔찌']
      },
      {
        id: 'silver-bracelet',
        name: '실버 팔찌',
        description: '925 스털링 실버 팔찌',
        examples: ['925 실버 큐빅 테니스', '실버 체인 팔찌']
      },
      {
        id: 'bangle',
        name: '뱅글',
        description: '다양한 소재의 뱅글',
        examples: ['골드 심플 뱅글', '다이아 세팅 뱅글']
      },
      {
        id: 'charm-bracelet',
        name: '참 팔찌',
        description: '참이 달린 팔찌',
        examples: ['골드 참 팔찌', '실버 멀티 참 팔찌']
      },
    ],
  },
  {
    id: 'brooches',
    name: '브로치',
    nameEn: 'Brooches',
    description: '브로치, 브러치 등 악세서리 전문 촬영',
    longDescription: '브로치는 옷깃과 가슴을 화려하게 장식하는 주얼리입니다. 입체적인 디자인과 세밀한 세공, 보석의 배열을 돋보이게 촬영합니다. 앤티크 브로치부터 모던 디자인까지 모든 스타일을 전문적으로 표현합니다.',
    subTypes: [
      {
        id: '14k-brooch',
        name: '14K 골드 브로치',
        description: '14K 옐로우골드, 화이트골드, 로즈골드 브로치',
        examples: ['14K 옐로우골드 리본 브로치', '14K 화이트골드 플라워 브로치']
      },
      {
        id: '18k-brooch',
        name: '18K 골드 브로치',
        description: '18K 고급 골드 브로치',
        examples: ['18K 옐로우골드 나비 브로치', '18K 로즈골드 하트 브로치']
      },
      {
        id: '24k-brooch',
        name: '24K 순금 브로치',
        description: '24K 순금 전통 브로치',
        examples: ['24K 순금 전통 브로치', '24K 순금 꽃 브로치']
      },
      {
        id: 'platinum-brooch',
        name: '백금 브로치',
        description: 'Pt950/Pt900 백금 브로치',
        examples: ['Pt950 다이아 플라워 브로치', 'Pt900 클래식 브로치']
      },
      {
        id: 'diamond-brooch',
        name: '다이아몬드 브로치',
        description: '다이아몬드 세팅 브로치',
        examples: ['다이아 플라워 브로치', '다이아 버드 브로치']
      },
      {
        id: 'ruby-brooch',
        name: '루비 브로치',
        description: '천연 루비 브로치',
        examples: ['루비 플라워 브로치', '루비 빈티지 브로치']
      },
      {
        id: 'sapphire-brooch',
        name: '사파이어 브로치',
        description: '블루/핑크 사파이어 브로치',
        examples: ['블루 사파이어 나비 브로치', '핑크 사파이어 플라워 브로치']
      },
      {
        id: 'emerald-brooch',
        name: '에메랄드 브로치',
        description: '천연 에메랄드 브로치',
        examples: ['에메랄드 리프 브로치', '에메랄드 빈티지 브로치']
      },
      {
        id: 'pearl-brooch',
        name: '진주 브로치',
        description: '아코야, 남양, 담수진주 브로치',
        examples: ['남양진주 클래식 브로치', '아코야 진주 플라워 브로치']
      },
      {
        id: 'gemstone-brooch',
        name: '기타 보석 브로치',
        description: '오팔, 토파즈, 자수정 등',
        examples: ['오팔 빈티지 브로치', '멀티 컬러 젬스톤 브로치']
      },
      {
        id: 'silver-brooch',
        name: '실버 브로치',
        description: '925 스털링 실버 브로치',
        examples: ['925 실버 큐빅 리프 브로치', '실버 앤티크 브로치']
      },
      {
        id: 'antique-brooch',
        name: '앤티크 브로치',
        description: '빈티지 및 앤티크 스타일 브로치',
        examples: ['빅토리안 스타일 브로치', '아르누보 브로치']
      },
      {
        id: 'modern-brooch',
        name: '모던 브로치',
        description: '현대적인 디자인 브로치',
        examples: ['미니멀 기하학 브로치', '컨템포러리 디자인 브로치']
      },
    ],
  },
];

// ========================================
// 기타 촬영 카테고리 (골드바, 시계, 트로피, 기자재)
// ========================================
export const otherServices = [
  {
    id: 'goldbar',
    name: '골드바 · 금괴',
    nameEn: 'Gold Bar',
    description: '순금 골드바, 실버바, 투자용 귀금속의 광택과 순도 등급을 완벽하게 표현합니다.',
    longDescription: '골드바와 금괴는 투자 가치와 신뢰가 중요합니다. 순금의 광택, 각인된 순도 및 중량 정보, 시리얼 넘버까지 모든 요소를 선명하게 촬영하여 온라인 판매와 인증에 활용할 수 있습니다.',
    subTypes: [
      { id: 'gold-1oz', name: '1oz 골드바' },
      { id: 'gold-10g', name: '10g 골드바' },
      { id: 'gold-100g', name: '100g 골드바' },
      { id: 'gold-1kg', name: '1kg 골드바' },
      { id: 'silver-bar', name: '실버바' },
      { id: 'platinum-bar', name: '백금바' },
      { id: 'coin', name: '금화 · 은화' },
    ],
    features: [
      '순금 광택 표현',
      '각인/시리얼 선명도',
      '순도 등급 강조',
      '인증서 연동 촬영',
    ],
  },
  {
    id: 'watch',
    name: '시계',
    nameEn: 'Watch',
    description: '명품 시계부터 스마트 워치까지, 시계의 정밀한 디테일과 브랜드 가치를 완벽하게 표현합니다.',
    longDescription: '시계는 작은 크기 안에 수많은 디테일이 담겨 있습니다. 다이얼의 질감, 인덱스의 정밀함, 케이스의 광택, 스트랩의 소재감까지 모든 요소를 섬세하게 촬영합니다.',
    subTypes: [
      { id: 'luxury', name: '명품 시계' },
      { id: 'smart', name: '스마트 워치' },
      { id: 'sports', name: '스포츠 워치' },
      { id: 'classic', name: '클래식 워치' },
      { id: 'fashion', name: '패션 시계' },
    ],
    features: [
      '다이얼 디테일 촬영',
      '반사 제어 라이팅',
      '메탈/가죽 스트랩 질감 표현',
      '브랜드 로고 선명도 강조',
    ],
  },
  {
    id: 'trophy',
    name: '트로피 · 상패',
    nameEn: 'Trophy',
    description: '크리스탈, 금속, 목재 등 다양한 소재의 트로피와 상패를 전문 촬영합니다.',
    longDescription: '트로피와 상패는 수여의 의미가 담긴 소중한 기념품입니다. 각인된 텍스트의 선명함, 금속 광택, 크리스탈 투명도를 완벽하게 표현하여 제품의 품격을 높입니다.',
    subTypes: [
      { id: 'crystal', name: '크리스탈 트로피' },
      { id: 'metal', name: '금속 트로피' },
      { id: 'wood', name: '목재 상패' },
      { id: 'acrylic', name: '아크릴 상패' },
      { id: 'medal', name: '메달' },
    ],
    features: [
      '각인 텍스트 선명도 강조',
      '크리스탈 투명도 표현',
      '금속 광택 제어',
      '다양한 소재 질감 표현',
    ],
  },
  {
    id: 'equipment',
    name: '과학기자재',
    nameEn: 'Equipment',
    description: '실험 장비, 계측기, 의료기기 등 정밀 기기를 정확하게 촬영합니다.',
    longDescription: '과학기자재는 정확한 정보 전달이 핵심입니다. 계기판 눈금, 버튼 및 스위치 배치, 제품 라벨 등 모든 세부사항을 명확하게 촬영하여 카탈로그, 매뉴얼, 온라인 판매에 활용할 수 있습니다.',
    subTypes: [
      { id: 'lab', name: '실험 장비' },
      { id: 'measuring', name: '계측기' },
      { id: 'medical', name: '의료기기' },
      { id: 'electronic', name: '전자기기' },
      { id: 'optical', name: '광학기기' },
    ],
    features: [
      '계기판/디스플레이 촬영',
      '제품 전체 및 상세 컷',
      '사용 매뉴얼용 촬영',
      '카탈로그/웹용 최적화',
    ],
  },
];

// ========================================
// 서비스 데이터
// ========================================
export const services: Service[] = [
  {
    id: 'jewelry',
    number: '01',
    title: '주얼리 촬영',
    description:
      '누끼 촬영 전문\n\n흰 배경 제거로 보석의 디테일을 극대화합니다. 매크로 렌즈와 특수 조명을 활용하여 다이아몬드의 반짝임, 금속의 질감, 보석의 색감을 완벽하게 표현합니다.',
    tags: ['누끼 전문', 'MACRO LENS', '고정가격', '당일 촬영'],
    isMain: true,
    href: '/jewelry',
  },
  {
    id: 'watch',
    number: '02',
    title: '시계 촬영',
    description: '시계의 정밀한 디테일과 브랜드 가치를 표현합니다.',
    tags: ['고정가격', 'HDR'],
  },
  {
    id: 'trophy',
    number: '03',
    title: '트로피 · 상패 촬영',
    description: '각인의 선명함과 금속 광택을 강조합니다.',
    tags: ['고정가격', '빠른 작업'],
  },
  {
    id: 'equipment',
    number: '04',
    title: '과학기자재 촬영',
    description: '실험 장비, 계측기 등 제품 정보를 정확히 전달합니다.',
    tags: ['고정가격', '제품 상세'],
  },
];

// ========================================
// 포트폴리오 데이터
// ========================================
export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: '다이아몬드 반지 (누끼)',
    code: 'JEWELRY-001',
    category: 'rings',
    material: 'platinum',
    subType: 'diamond',
  },
  {
    id: '2',
    title: '골드 목걸이 (누끼)',
    code: 'JEWELRY-002',
    category: 'necklaces',
    material: 'gold',
  },
  {
    id: '3',
    title: '에메랄드 귀걸이 (누끼)',
    code: 'JEWELRY-003',
    category: 'earrings',
    material: 'gold',
    subType: 'gemstone',
  },
  {
    id: '4',
    title: '진주 팔찌 (누끼)',
    code: 'JEWELRY-004',
    category: 'bracelets',
  },
  {
    id: '5',
    title: '명품 시계',
    code: 'WATCH-001',
    category: 'watch',
  },
  {
    id: '6',
    title: '크리스탈 트로피',
    code: 'TROPHY-001',
    category: 'trophy',
  },
  {
    id: '7',
    title: '루비 브로치 (누끼)',
    code: 'JEWELRY-005',
    category: 'rings',
    subType: 'gemstone',
  },
  {
    id: '8',
    title: '과학 측정기',
    code: 'EQUIPMENT-001',
    category: 'equipment',
  },
];

// ========================================
// 프로세스 데이터
// ========================================
export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: '견적 확인 (고정가)',
    description: '제품 유형별\n고정 가격 안내',
  },
  {
    number: 2,
    title: '촬영 세팅',
    description: '누끼 촬영 전용\n조명 및 배경 구성',
  },
  {
    number: 3,
    title: '촬영 진행',
    description: '다양한 각도에서\n디테일 정밀 촬영',
  },
  {
    number: 4,
    title: '누끼 보정 및 전달',
    description: '배경 제거 및 색보정\n최종 파일 전달',
  },
];

// ========================================
// 통계 데이터
// ========================================
export const stats: StatInfo[] = [
  { value: '2K+', label: 'Projects' },
  { value: '200+', label: 'Clients' },
  { value: '10Y', label: 'Experience' },
];

// ========================================
// Footer 데이터
// ========================================
export const footerLinks: FooterLinkGroup[] = [
  {
    title: '메뉴',
    links: [
      { label: '홈', href: '/' },
      { label: '서비스', href: '/#services' },
      { label: '포트폴리오', href: '/portfolio' },
      { label: '프로세스', href: '/#process' },
    ],
  },
  {
    title: '연락처',
    links: [
      { label: 'info@photoprintland.com', href: 'mailto:info@photoprintland.com' },
      { label: '02-1234-5678', href: 'tel:02-1234-5678' },
      { label: '평일 09:00 - 18:00', href: '#' },
    ],
  },
];

// ========================================
// 회사 정보
// ========================================
export const companyInfo = {
  name: '포토인쇄랜드',
  tagline: '주얼리 누끼 촬영 전문 · 고정 가격제\n제품 사진 촬영 스튜디오',
  copyright: '2025 포토인쇄랜드. All rights reserved. | Designed & Developed by Nqsolution',
};

// ========================================
// 연락처 정보 (중앙 관리)
// ========================================
// src/data/contactInfo.ts 파일에서 import
export * from './contactInfo';
