/**
 * 연락처 정보 중앙 관리
 * 이 파일에서 모든 연락처 정보를 수정하면 전체 사이트에 반영됩니다.
 */

export const contactInfo = {
  // 전화
  phone: {
    display: '02-1234-5678',
    link: 'tel:02-1234-5678',
    hours: '평일 09:00 - 18:00 (주말/공휴일 휴무)',
  },

  // 카카오톡
  kakao: {
    id: '@photoprintland',
    link: '#', // 실제 카카오톡 채널 링크로 변경 필요
    hours: '평일 09:00 - 22:00 (답변은 영업시간 내)',
  },

  // 이메일
  email: {
    address: 'info@photoprintland.com',
    link: 'mailto:info@photoprintland.com',
    hours: '24시간 접수 (답변은 영업일 기준 1일 이내)',
  },

  // 주소
  address: {
    full: '서울시 종로구 돈의동 41-1',
    building: '드래곤팰리스 509호',
    detail: '5층 509호 (2층 SC제일은행 건물)',
    zipCode: '', // 우편번호 필요시 추가
  },

  // 사업자 정보
  business: {
    name: '포토인쇄랜드',
    nameEn: 'PHOTO PRINT LAND',
    registrationNumber: 'test', // 사업자등록번호
    ceo: '', // 대표자명
    established: '2000', // 설립년도
  },

  // 영업 시간
  hours: {
    weekday: '평일 09:00 - 18:00',
    weekend: '주말 및 공휴일 휴무',
  },

  // 지하철 정보
  subway: {
    lines: ['1호선', '3호선', '5호선'],
    station: '종로3가역',
    exit: '3번 또는 4번 출구에서 도보 2분',
  },
} as const;

// 소셜 미디어 (필요시 추가)
export const socialMedia = {
  instagram: '',
  facebook: '',
  youtube: '',
  blog: '',
} as const;
