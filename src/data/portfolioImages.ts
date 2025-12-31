// ========================================
// 포트폴리오 이미지 데이터
// 새 이미지 추가 시 해당 카테고리 배열에 경로만 추가하면 됩니다
// ========================================

export type CategoryType = 'all' | 'rings' | 'earrings' | 'necklaces' | 'bracelets' | 'couple-rings' | 'goldbar' | 'set' | 'watch' | 'trophy' | 'equipment' | 'others';

export interface CategoryInfo {
  id: CategoryType;
  name: string;
  nameEn: string;
}

export const categories: CategoryInfo[] = [
  { id: 'all', name: '전체', nameEn: 'All' },
  { id: 'rings', name: '반지', nameEn: 'Rings' },
  { id: 'earrings', name: '귀걸이', nameEn: 'Earrings' },
  { id: 'necklaces', name: '목걸이', nameEn: 'Necklaces' },
  { id: 'bracelets', name: '팔찌', nameEn: 'Bracelets' },
  { id: 'couple-rings', name: '커플링', nameEn: 'Couple Rings' },
  { id: 'goldbar', name: '골드바', nameEn: 'Gold Bar' },
  { id: 'set', name: '세트', nameEn: 'Set' },
  { id: 'watch', name: '시계', nameEn: 'Watch' },
  { id: 'trophy', name: '트로피', nameEn: 'Trophy' },
  { id: 'equipment', name: '기자재', nameEn: 'Equipment' },
  { id: 'others', name: '기타 촬영', nameEn: 'Others' },
];

// ========================================
// 반지 이미지
// ========================================
export const ringImages: string[] = [
  '/images/jewelry/반지0345.jpg',
  '/images/jewelry/반지1673.jpg',
  '/images/jewelry/반지2951.jpg',
  '/images/jewelry/반지3267.jpg',
  '/images/jewelry/반지4435.jpg',
  '/images/jewelry/반지4456.jpg',
  '/images/jewelry/반지4565.jpg',
  '/images/jewelry/반지5972.jpg',
  '/images/jewelry/반지6776.jpg',
  '/images/jewelry/반지9068.jpg',
  '/images/jewelry/반지9954.jpg',
  '/images/jewelry/반지-9948.jpg',
  '/images/jewelry/반지2stars.jpg',
  '/images/jewelry/반지R15-1.jpg',
  '/images/jewelry/반지R15-2.jpg',
  '/images/jewelry/반지R15-3.jpg',
  '/images/jewelry/반지R3311.jpg',
  '/images/jewelry/반지1-3705-re.jpg',
  '/images/jewelry/반지1-3736-re.jpg',
  '/images/jewelry/반지3-7673-re.jpg',
  '/images/jewelry/반지3-7679-re.jpg',
];

// ========================================
// 귀걸이 이미지
// ========================================
export const earringImages: string[] = [
  '/images/jewelry/귀걸이0004.jpg',
  '/images/jewelry/귀걸이0023.jpg',
  '/images/jewelry/귀걸이0067.jpg',
  '/images/jewelry/귀걸이0140.jpg',
  '/images/jewelry/귀걸이0594.jpg',
  '/images/jewelry/귀걸이0598.jpg',
  '/images/jewelry/귀걸이0647.jpg',
  '/images/jewelry/귀걸이1489.jpg',
  '/images/jewelry/귀걸이1501.jpg',
  '/images/jewelry/귀걸이16.jpg',
  '/images/jewelry/귀걸이2459.jpg',
  '/images/jewelry/귀걸이2558.jpg',
  '/images/jewelry/귀걸이2968.jpg',
  '/images/jewelry/귀걸이510.jpg',
  '/images/jewelry/귀걸이5968.jpg',
  '/images/jewelry/귀걸이6218.jpg',
  '/images/jewelry/귀걸이6772.jpg',
  '/images/jewelry/귀걸이9890.jpg',
  '/images/jewelry/귀걸이9908.jpg',
  '/images/jewelry/귀걸이-11.jpg',
  '/images/jewelry/귀걸이-114.jpg',
  '/images/jewelry/귀걸이-222.jpg',
  '/images/jewelry/귀걸이-7618-re.jpg',
  '/images/jewelry/귀걸이-8990.jpg',
];

// ========================================
// 목걸이 이미지
// ========================================
export const necklaceImages: string[] = [
  '/images/jewelry/목걸이2438-풀.jpg',
  '/images/jewelry/목걸이2594.jpg',
  '/images/jewelry/목걸이2697-풀.jpg',
  '/images/jewelry/목걸이2707-풀.jpg',
  '/images/jewelry/목걸이5928-풀.jpg',
  '/images/jewelry/목걸이6206.jpg',
  '/images/jewelry/목걸이6209.jpg',
  '/images/jewelry/목걸이7222-풀.jpg',
  '/images/jewelry/목걸이-4908.jpg',
];

// ========================================
// 팔찌 이미지 (jewelry 폴더로 통합됨)
// ========================================
export const braceletImages: string[] = [
  '/images/jewelry/팔찌1279.jpg',
  '/images/jewelry/팔찌1619.jpg',
  '/images/jewelry/팔찌23-7195.jpg',
  '/images/jewelry/팔찌23-7214.jpg',
  '/images/jewelry/팔찌2344.jpg',
  '/images/jewelry/팔찌2479.jpg',
  '/images/jewelry/팔찌2487.jpg',
  '/images/jewelry/팔찌2514.jpg',
  '/images/jewelry/팔찌6713.jpg',
  '/images/jewelry/팔찌6989.jpg',
  '/images/jewelry/팔찌9861.jpg',
  '/images/jewelry/팔찌9878.jpg',
  '/images/jewelry/팔찌9928.jpg',
  '/images/jewelry/팔찌B10.jpg',
  '/images/jewelry/팔찌B12.jpg',
  '/images/jewelry/팔찌B7.jpg',
];

// ========================================
// 커플링 이미지 (jewelry 폴더로 통합됨)
// ========================================
export const coupleRingImages: string[] = [
  '/images/jewelry/커플링1-3756-re.jpg',
  '/images/jewelry/커플링2-7304-re.jpg',
  '/images/jewelry/커플링3-7724-re.jpg',
  '/images/jewelry/커플링4-7288-re.jpg',
  '/images/jewelry/커플링5-7276-re.jpg',
  '/images/jewelry/커플링7315-re.jpg',
  '/images/jewelry/커플링8-1183-rew.jpg',
  '/images/jewelry/커플링11-5652-re.jpg',
  '/images/jewelry/커플링12-5638-re.jpg',
  '/images/jewelry/커플링13-1196-rew.jpg',
  '/images/jewelry/커플링15-5687-re.jpg',
  '/images/jewelry/커플링16-5867-re.jpg',
];

// ========================================
// 골드바 이미지
// ========================================
export const goldbarImages: string[] = [
  '/images/jewelry/순금상패1731-re.jpg',
  '/images/jewelry/실버바1000g-re.jpg',
  '/images/jewelry/실버바100g-re.jpg',
];

// ========================================
// 세트 이미지
// ========================================
export const setImages: string[] = [
  '/images/jewelry/머리핀5934.jpg',
];

// ========================================
// 시계 이미지
// ========================================
export const watchImages: string[] = [
  '/images/watch/11-3149-re.jpg',
  '/images/watch/12-1.jpg',
  '/images/watch/12-2.jpg',
  '/images/watch/12-3.jpg',
  '/images/watch/12-4.jpg',
  '/images/watch/2-3120-re-last.jpg',
  '/images/watch/2-3239-re.jpg',
  '/images/watch/2-3619-re.jpg',
  '/images/watch/3-3221-re.jpg',
  '/images/watch/3-3598-re.jpg',
  '/images/watch/4-1153-re.jpg',
  '/images/watch/4-3110-re.jpg',
  '/images/watch/4-3208-re.jpg',
  '/images/watch/4-3393-re-new.jpg',
  '/images/watch/4-3610-re.jpg',
  '/images/watch/5-3279-re.jpg',
  '/images/watch/5-3563-re.jpg',
  '/images/watch/5-3658-re.jpg',
  '/images/watch/pr_watch_001.jpg',
  '/images/watch/pr_watch_005.jpg',
  '/images/watch/pr_watch_006.jpg',
  '/images/watch/보석시계13-2537-re.jpg',
  '/images/watch/보석시계13-2544-re.jpg',
  '/images/watch/보석시계13-2550-re.jpg',
  '/images/watch/보석시계13-2555-re.jpg',
  '/images/watch/보석시계13-2576-re.jpg',
];

// ========================================
// 트로피 이미지
// ========================================
export const trophyImages: string[] = [
  '/images/trophy/1-8452-re..jpg',
  '/images/trophy/1-8454-re..jpg',
  '/images/trophy/11-0984-re.jpg',
  '/images/trophy/2-8411-re.jpg',
  '/images/trophy/2-8446-re..jpg',
  '/images/trophy/24-5507-re.jpg',
  '/images/trophy/3-4690-re.jpg',
  '/images/trophy/5-4693-re.jpg',
  '/images/trophy/58-5574-re.jpg',
  '/images/trophy/6932-re.jpg',
  '/images/trophy/723-3888-re.jpg',
  '/images/trophy/825-5037-re..jpg',
  '/images/trophy/IMGP7621-re.jpg',
  '/images/trophy/IMGP7633-re.jpg',
  '/images/trophy/IMGP7644-re.jpg',
  '/images/trophy/IMGP7663-re.jpg',
  '/images/trophy/_IGP1731-re.jpg',
  '/images/trophy/_IGP1734-re.jpg',
  '/images/trophy/_IGP2355-re1.jpg',
  '/images/trophy/_IGP2366-re1.jpg',
  '/images/trophy/_IGP2372-re1.jpg',
  '/images/trophy/_IGP2763-re1.jpg',
  '/images/trophy/_IGP2766-re1.jpg',
  '/images/trophy/_IGP2768-re1.jpg',
  '/images/trophy/_IGP2771-re1.jpg',
  '/images/trophy/_Q3P0057-re.jpg',
  '/images/trophy/_Q3P0474-re.jpg',
  '/images/trophy/_Q3P0482-re.jpg',
  '/images/trophy/_Q3P0491-re.jpg',
  '/images/trophy/_Q3P0494-re.jpg',
  '/images/trophy/_Q3P0496-re.jpg',
  '/images/trophy/_Q3P8586-re1.jpg',
  '/images/trophy/sample-3886.jpg',
  '/images/trophy/sample10-re.jpg',
  '/images/trophy/sangphe2-7017-re.jpg',
];

// ========================================
// 기자재 이미지
// ========================================
export const equipmentImages: string[] = [
  '/images/equipment/9.jpg',
  '/images/equipment/10.jpg',
  '/images/equipment/11.jpg',
  '/images/equipment/12.jpg',
  '/images/equipment/13.jpg',
  '/images/equipment/14.jpg',
  '/images/equipment/20-9957-re.jpg',
  '/images/equipment/21.jpg',
  '/images/equipment/22.jpg',
  '/images/equipment/23.jpg',
  '/images/equipment/26-9970-re.jpg',
  '/images/equipment/28-9973-re.jpg',
  '/images/equipment/30-9983-re.jpg',
  '/images/equipment/31.jpg',
  '/images/equipment/32.jpg',
  '/images/equipment/33.jpg',
  '/images/equipment/34.jpg',
  '/images/equipment/35.jpg',
  '/images/equipment/_IGP1804-re.jpg',
  '/images/equipment/_IGP1822-re.jpg',
  '/images/equipment/_IGP2105-rew.jpg',
  '/images/equipment/_IGP2928-re1.jpg',
  '/images/equipment/_Q3P0663-re.jpg',
  '/images/equipment/_Q3P0833-re.jpg',
  '/images/equipment/_Q3P0839-re.jpg',
  '/images/equipment/_Q3P0860-re.jpg',
  '/images/equipment/_Q3P9838-re.jpg',
  '/images/equipment/_Q3P9887-re.jpg',
];

// ========================================
// 기타 촬영 이미지 ("이미지" 파일들)
// ========================================
export const othersImages: string[] = [
  '/images/jewelry/이미지1(순금).jpg',
  '/images/jewelry/이미지7(순금).jpg',
  '/images/jewelry/이미지-보석함2.jpg',
  '/images/jewelry/이미지-두나무.jpg',
  '/images/jewelry/이미지-파이프텐션1.jpg',
  '/images/jewelry/이미지-표지(JnG).jpg',
  '/images/jewelry/이미지12.jpg',
  '/images/jewelry/이미지17.jpg',
  '/images/jewelry/이미지19.jpg',
  '/images/jewelry/이미지2-1(핸펀없는것).jpg',
  '/images/jewelry/이미지2-2(핸펀없는것).jpg',
];

// ========================================
// 이미지 아이템 인터페이스
// ========================================
export interface ImageItem {
  src: string;
  category: CategoryType;
}

// ========================================
// 모든 이미지 아이템 생성 함수
// ========================================
export function getAllImageItems(): ImageItem[] {
  const items: ImageItem[] = [];

  ringImages.forEach(src => items.push({ src, category: 'rings' }));
  earringImages.forEach(src => items.push({ src, category: 'earrings' }));
  necklaceImages.forEach(src => items.push({ src, category: 'necklaces' }));
  braceletImages.forEach(src => items.push({ src, category: 'bracelets' }));
  coupleRingImages.forEach(src => items.push({ src, category: 'couple-rings' }));
  goldbarImages.forEach(src => items.push({ src, category: 'goldbar' }));
  setImages.forEach(src => items.push({ src, category: 'set' }));
  watchImages.forEach(src => items.push({ src, category: 'watch' }));
  trophyImages.forEach(src => items.push({ src, category: 'trophy' }));
  equipmentImages.forEach(src => items.push({ src, category: 'equipment' }));
  othersImages.forEach(src => items.push({ src, category: 'others' }));

  return items;
}

// 총 이미지 수 계산
export function getTotalImageCount(): number {
  return ringImages.length +
         earringImages.length +
         necklaceImages.length +
         braceletImages.length +
         coupleRingImages.length +
         goldbarImages.length +
         setImages.length +
         watchImages.length +
         trophyImages.length +
         equipmentImages.length +
         othersImages.length;
}

// ========================================
// 로고 이미지
// ========================================
export const logoImages = {
  main: '/images/logo/logo.png',
  svg: '/images/logo/PRlogo.svg',
};

// ========================================
// 히어로 섹션 슬라이드 이미지
// ========================================
export const heroSlideImages: string[] = [
  '/images/hero/slide-1.jpg',
  '/images/hero/slide-2.jpg',
  '/images/hero/slide-3.jpg',
];

export const heroMainImage = heroSlideImages[0];
