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
  '/images/jewelry/converted/반지0345.jpg',
  '/images/jewelry/converted/반지1673.jpg',
  '/images/jewelry/converted/반지2951.jpg',
  '/images/jewelry/converted/반지3267.jpg',
  '/images/jewelry/converted/반지4435.jpg',
  '/images/jewelry/converted/반지4456.jpg',
  '/images/jewelry/converted/반지4565.jpg',
  '/images/jewelry/converted/반지5972.jpg',
  '/images/jewelry/converted/반지6776.jpg',
  '/images/jewelry/converted/반지9068.jpg',
  '/images/jewelry/converted/반지9954.jpg',
  '/images/jewelry/converted/반지9974.jpg',
  '/images/jewelry/converted/반지-9948.jpg',
  '/images/jewelry/converted/반지2stars.jpg',
  '/images/jewelry/converted/반지R15-1.jpg',
  '/images/jewelry/converted/반지R15-2.jpg',
  '/images/jewelry/converted/반지R15-3.jpg',
  '/images/jewelry/converted/반지R3311.jpg',
  '/images/jewelry/converted/반지1-3705-re.jpg',
  '/images/jewelry/converted/반지1-3736-re.jpg',
  '/images/jewelry/converted/반지3-7673-re.jpg',
  '/images/jewelry/converted/반지3-7679-re.jpg',
  '/images/jewelry/converted/반지(R5671).jpg',
  '/images/jewelry/converted/반지(묵주)R2-re.jpg',
  '/images/jewelry/converted/반지(묵주)R3-re.jpg',
  '/images/jewelry/converted/반지(순금 돌반지)2374.jpg',
  '/images/jewelry/converted/반지(순금 돌반지)2377.jpg',
  '/images/jewelry/converted/반지(순금 돌반지)2379.jpg',
  '/images/jewelry/converted/반지(여군임관)3-2375-re.jpg',
  '/images/jewelry/converted/반지(여군임관)3-2380-re.jpg',
  '/images/jewelry/converted/반지(여군임관)3-2609-re (1).jpg',
  '/images/jewelry/converted/반지(여군임관)3-2612-re.jpg',
  '/images/jewelry/converted/반지(임관반지)18.jpg',
  '/images/jewelry/converted/반지R2(white color).jpg',
  '/images/jewelry/converted/반지R3(Qubic).jpg',
  '/images/jewelry/converted/반지R4(Qubic).jpg',
];

// ========================================
// 귀걸이 이미지
// ========================================
export const earringImages: string[] = [
  '/images/jewelry/converted/귀걸이0004.jpg',
  '/images/jewelry/converted/귀걸이0023.jpg',
  '/images/jewelry/converted/귀걸이0067.jpg',
  '/images/jewelry/converted/귀걸이0078.jpg',
  '/images/jewelry/converted/귀걸이0140.jpg',
  '/images/jewelry/converted/귀걸이0594.jpg',
  '/images/jewelry/converted/귀걸이0598.jpg',
  '/images/jewelry/converted/귀걸이1489.jpg',
  '/images/jewelry/converted/귀걸이15.jpg',
  '/images/jewelry/converted/귀걸이1501.jpg',
  '/images/jewelry/converted/귀걸이16.jpg',
  '/images/jewelry/converted/귀걸이2459.jpg',
  '/images/jewelry/converted/귀걸이2558.jpg',
  '/images/jewelry/converted/귀걸이2968.jpg',
  '/images/jewelry/converted/귀걸이510.jpg',
  '/images/jewelry/converted/귀걸이5968.jpg',
  '/images/jewelry/converted/귀걸이6218.jpg',
  '/images/jewelry/converted/귀걸이6772.jpg',
  '/images/jewelry/converted/귀걸이9890.jpg',
  '/images/jewelry/converted/귀걸이9908.jpg',
  '/images/jewelry/converted/귀걸이-11.jpg',
  '/images/jewelry/converted/귀걸이-114.jpg',
  '/images/jewelry/converted/귀걸이-222.jpg',
  '/images/jewelry/converted/귀걸이-7618-re.jpg',
  '/images/jewelry/converted/귀걸이-8990.jpg',
  '/images/jewelry/converted/귀걸이ball-1676.jpg',
  '/images/jewelry/converted/귀걸이(피어싱8432).jpg',
];

// ========================================
// 목걸이 이미지
// ========================================
export const necklaceImages: string[] = [
  '/images/jewelry/converted/목걸이2438.jpg',
  '/images/jewelry/converted/목걸이2594.jpg',
  '/images/jewelry/converted/목걸이2697.jpg',
  '/images/jewelry/converted/목걸이2707.jpg',
  '/images/jewelry/converted/목걸이5568.jpg',
  '/images/jewelry/converted/목걸이5928.jpg',
  '/images/jewelry/converted/목걸이6206.jpg',
  '/images/jewelry/converted/목걸이6209.jpg',
  '/images/jewelry/converted/목걸이7222.jpg',
  '/images/jewelry/converted/목걸이-4908.jpg',
  '/images/jewelry/converted/목걸이(14k옐로우)1885.jpg',
  '/images/jewelry/converted/목걸이(14k핑크)1887.jpg',
  '/images/jewelry/converted/목걸이(귀걸이)5561.jpg',
  '/images/jewelry/converted/목걸이(귀걸이)7687.jpg',
  '/images/jewelry/converted/목걸이(순금)6737.jpg',
  '/images/jewelry/converted/목걸이(순금)6743.jpg',
  '/images/jewelry/converted/목걸이(흉상12).jpg',
  '/images/jewelry/converted/목걸이14k pink4.jpg',
];

// ========================================
// 팔찌 이미지
// ========================================
export const braceletImages: string[] = [
  '/images/bracelets/팔찌(순금 돌).png',
  '/images/bracelets/팔찌10(순금).png',
  '/images/bracelets/팔찌1279.png',
  '/images/bracelets/팔찌14k pink4.png',
  '/images/bracelets/팔찌1619.png',
  '/images/bracelets/팔찌23-7195.png',
  '/images/bracelets/팔찌23-7214.png',
  '/images/bracelets/팔찌2344.png',
  '/images/bracelets/팔찌2479.png',
  '/images/bracelets/팔찌2487.png',
  '/images/bracelets/팔찌2514.png',
  '/images/bracelets/팔찌6713.png',
  '/images/bracelets/팔찌6835.png',
  '/images/bracelets/팔찌6989.png',
  '/images/bracelets/팔찌9861.png',
  '/images/bracelets/팔찌9878.png',
  '/images/bracelets/팔찌9928.png',
  '/images/bracelets/팔찌B10.png',
  '/images/bracelets/팔찌B12.png',
  '/images/bracelets/팔찌B4.png',
  '/images/bracelets/팔찌B7.png',
];

// ========================================
// 커플링 이미지
// ========================================
export const coupleRingImages: string[] = [
  '/images/couple-rings/커플링1-3756-re.png',
  '/images/couple-rings/커플링2-7304-re.png',
  '/images/couple-rings/커플링3-7724-re.png',
  '/images/couple-rings/커플링4-7288-re.png',
  '/images/couple-rings/커플링5-7276-re.png',
  '/images/couple-rings/커플링6-1118-re.png',
  '/images/couple-rings/커플링7-1098-re.png',
  '/images/couple-rings/커플링7315-re.png',
  '/images/couple-rings/커플링8-1183-rew.png',
  '/images/couple-rings/커플링9-1111-re.png',
  '/images/couple-rings/커플링10-1103-re.png',
  '/images/couple-rings/커플링11-5652-re.png',
  '/images/couple-rings/커플링12-5638-re.png',
  '/images/couple-rings/커플링13(순금).png',
  '/images/couple-rings/커플링13-1196-rew.png',
  '/images/couple-rings/커플링14-1093-re.png',
  '/images/couple-rings/커플링15-5687-re.png',
  '/images/couple-rings/커플링16-5867-re.png',
];

// ========================================
// 골드바 이미지
// ========================================
export const goldbarImages: string[] = [
  '/images/jewelry/converted/골드바1 (1).jpg',
  '/images/jewelry/converted/골드바2돈 4453-re.jpg',
  '/images/jewelry/converted/순금10돈 앞뒤면9949-re.jpg',
  '/images/jewelry/converted/순금10돈 앞뒤면9954-re.jpg',
  '/images/jewelry/converted/순금10돈 앞뒤면9954-re.png',
  '/images/jewelry/converted/순금상패1731-re.png',
  '/images/jewelry/converted/순금코인size비교(3EA)-re1.png',
  '/images/jewelry/converted/실버바(1kg) 앞뒤면.png',
  '/images/jewelry/converted/실버바1000g-re.png',
  '/images/jewelry/converted/실버바100g-re.png',
];

// ========================================
// 세트 이미지
// ========================================
export const setImages: string[] = [
  '/images/jewelry/converted/머리핀5934.jpg',
  '/images/jewelry/converted/set2.jpg',
  '/images/jewelry/converted/set3.jpg',
  // set R33 시리즈 (같은 제품 여러 앵글)
  '/images/jewelry/converted/set R33-1.jpg',
  '/images/jewelry/converted/set R33-2.jpg',
  '/images/jewelry/converted/set R33-3.jpg',
  '/images/jewelry/converted/set N33-7480.jpg',
  '/images/jewelry/converted/set E33-7445 (2).jpg',
];

// ========================================
// 시계 이미지
// ========================================
export const watchImages: string[] = [
  // 전자시계 1번 시리즈 (같은 제품 여러 앵글)
  '/images/watch/1-1(전자시계).png',
  '/images/watch/1-2(전자시계).png',
  '/images/watch/1-3(전자시계).png',
  '/images/watch/1-4-re(전자시계).png',
  '/images/watch/1-5-re(전자시계).png',
  // 전자시계 6번 시리즈 (같은 제품 여러 앵글)
  '/images/watch/6-1(전자시계).png',
  '/images/watch/6-2(전자시계).png',
  '/images/watch/6-3(전자시계).png',
  '/images/watch/6-4-new(전자시계).png',
  '/images/watch/6-5-new(전자시계).png',
  '/images/watch/11-3149-re.png',
  '/images/watch/12-1.png',
  '/images/watch/12-2.png',
  '/images/watch/12-3.png',
  '/images/watch/12-4.png',
  '/images/watch/2-3120-re-last.png',
  '/images/watch/2-3239-re.png',
  '/images/watch/2-3411-re -new.png',
  '/images/watch/2-3619-re.png',
  '/images/watch/3-3127-re -last.png',
  '/images/watch/3-3221-re.png',
  '/images/watch/3-3598-re.png',
  '/images/watch/4-1153-re.png',
  '/images/watch/4-3110-re.png',
  '/images/watch/4-3208-re.png',
  '/images/watch/4-3393-re-new.png',
  '/images/watch/4-3610-re.png',
  '/images/watch/5-3279-re.png',
  '/images/watch/5-3563-re.png',
  '/images/watch/5-3658-re.png',
  '/images/watch/7-5280-re (ch).png',
  '/images/watch/7-5283-re (ch).png',
  '/images/watch/7-5288-re (ch).png',
  '/images/watch/Band1-0484-re.png',
  '/images/watch/Band2-0492-re.png',
  '/images/watch/IMGP0529-re.png',
  '/images/watch/IMGP0534_2-re.png',
  '/images/watch/IMGP0546_1- re.png',
  '/images/watch/pr_watch_001.png',
  '/images/watch/pr_watch_002.png',
  '/images/watch/pr_watch_005.png',
  '/images/watch/pr_watch_006.png',
  '/images/watch/보석시계13-2537-re.png',
  '/images/watch/보석시계13-2544-re.png',
  '/images/watch/보석시계13-2550-re.png',
  '/images/watch/보석시계13-2555-re.png',
  '/images/watch/보석시계13-2566-re.png',
  '/images/watch/보석시계13-2576-re.png',
];

// ========================================
// 트로피 이미지
// ========================================
export const trophyImages: string[] = [
  '/images/trophy/1-8408-re.png',
  '/images/trophy/1-8452-re..png',
  '/images/trophy/1-8454-re..png',
  '/images/trophy/11-0984-re.png',
  '/images/trophy/18-12-8893-re (ch).png',
  '/images/trophy/18-14-8901-re (ch).png',
  '/images/trophy/18-15-8911-re (ch).png',
  '/images/trophy/18-16-8921-re (ch).png',
  '/images/trophy/184.jpg',
  '/images/trophy/185.jpg',
  '/images/trophy/2-8411-re.png',
  '/images/trophy/2-8446-re..png',
  '/images/trophy/2-8448-re..png',
  '/images/trophy/24-5507-re.png',
  '/images/trophy/25-4691-re (ch).png',
  '/images/trophy/26-4692-re (ch).png',
  '/images/trophy/27.jpg',
  '/images/trophy/272.jpg',
  '/images/trophy/274.jpg',
  '/images/trophy/3-4690-re.png',
  '/images/trophy/33-4712-re (ch).png',
  '/images/trophy/35-4719-re (ch).png',
  '/images/trophy/36-4721-re (ch).png',
  '/images/trophy/39-4674-re (ch).png',
  '/images/trophy/4-4620-re (ch).png',
  '/images/trophy/44-4683-re (ch).png',
  '/images/trophy/5-4693-re.png',
  '/images/trophy/58-5574-re.png',
  '/images/trophy/6932-re.png',
  '/images/trophy/723-3888-re.png',
  '/images/trophy/75.jpg',
  '/images/trophy/825-5037-re..png',
  '/images/trophy/95.jpg',
  '/images/trophy/IMGP7621-re.png',
  '/images/trophy/IMGP7633-re.png',
  '/images/trophy/IMGP7644-re.png',
  '/images/trophy/IMGP7663-re.png',
  '/images/trophy/_IGP1731-re.png',
  '/images/trophy/_IGP1734-re.png',
  '/images/trophy/_IGP2355-re1.png',
  '/images/trophy/_IGP2366-re1.png',
  '/images/trophy/_IGP2372-re1.png',
  '/images/trophy/_IGP2763-re1.png',
  '/images/trophy/_IGP2766-re1.png',
  '/images/trophy/_IGP2768-re1.png',
  '/images/trophy/_IGP2771-re1.png',
  '/images/trophy/_Q3P0057-re.png',
  '/images/trophy/_Q3P0474-re.png',
  '/images/trophy/_Q3P0482-re.png',
  '/images/trophy/_Q3P0491-re.png',
  '/images/trophy/_Q3P0494-re.png',
  '/images/trophy/_Q3P0496-re.png',
  '/images/trophy/_Q3P8586-re1.png',
  '/images/trophy/black cristal dai pink-1786-re.png',
  '/images/trophy/black cristal dai pink-1791-re.png',
  '/images/trophy/black cristal dai pink-1800-re.png',
  '/images/trophy/sample 4453-re.png',
  '/images/trophy/sample 4464-re.png',
  '/images/trophy/sample 825-5041-re..png',
  '/images/trophy/sample 825-5054-re..png',
  '/images/trophy/sample total(bleck n silver)1.png',
  '/images/trophy/sample total(bleck n silver)3.png',
  '/images/trophy/sample-3886.png',
  '/images/trophy/sample10-re.png',
  '/images/trophy/sample11(blue).png',
  '/images/trophy/sample5-1(silver sangphe).png',
  '/images/trophy/sample5-2(silver sangphe).png',
  '/images/trophy/sample55-1(black).png',
  '/images/trophy/sample55-2(black).png',
  '/images/trophy/sample6-1(gold sangphe).png',
  '/images/trophy/sample6-2(gold sangphe).png',
  '/images/trophy/sangphe2-7017-re.png',
];

// ========================================
// 기자재 이미지
// ========================================
export const equipmentImages: string[] = [
  '/images/equipment/9.png',
  '/images/equipment/10.png',
  '/images/equipment/11.png',
  '/images/equipment/12.png',
  '/images/equipment/13.png',
  '/images/equipment/14.png',
  '/images/equipment/20-9957-re.png',
  '/images/equipment/21.png',
  '/images/equipment/22.png',
  '/images/equipment/23.png',
  '/images/equipment/26-9970-re.png',
  '/images/equipment/28-9973-re.png',
  '/images/equipment/30-9983-re.png',
  '/images/equipment/31.png',
  '/images/equipment/32.png',
  '/images/equipment/33.png',
  '/images/equipment/34.png',
  '/images/equipment/35.png',
  '/images/equipment/_IGP1804-re.png',
  '/images/equipment/_IGP1822-re.png',
  '/images/equipment/_IGP2105-rew.png',
  '/images/equipment/_IGP2928-re1.png',
  '/images/equipment/_Q3P0663-re.png',
  '/images/equipment/_Q3P0833-re.png',
  '/images/equipment/_Q3P0839-re.png',
  '/images/equipment/_Q3P0860-re.png',
  '/images/equipment/_Q3P9838-re.png',
  '/images/equipment/_Q3P9887-re.png',
];

// ========================================
// 기타 촬영 이미지 ("이미지" 파일들)
// ========================================
export const othersImages: string[] = [
  '/images/jewelry/converted/이미지1(순금).png',
  '/images/jewelry/converted/이미지7(순금).png',
  '/images/jewelry/converted/이미지-보석함2.jpg',
  '/images/equipment/이미지12.png',
  '/images/equipment/이미지17.png',
  '/images/equipment/이미지19.png',
  '/images/equipment/이미지2-1(핸펀없는것).jpg',
  '/images/equipment/이미지2-2(핸펀없는것).jpg',
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
// public/images/logo/ 폴더에 이미지를 넣으면 자동 적용됩니다
// 지원 형식: PNG, JPG, SVG
// ========================================
export const logoImages: string[] = [
  // 로고 이미지를 여기에 추가하세요
  // 예시:
  // '/images/logo/photoland-logo.png',
  // '/images/logo/photoland-logo-white.png',
];

// ========================================
// 히어로 섹션 메인 이미지 경로
// public/images/imagecut/ 폴더에 이미지를 넣고 경로 수정
// ========================================
export const heroMainImage = '/images/imagecut/실버바-이미지촬영.png';
