'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// 주얼리 촬영 가격표 - 정상가/할인가 형식
const jewelryPricing = [
  {
    id: 'rings',
    name: '반지',
    nameEn: 'Rings',
    subtitle: '보정완료가격',
    image: '/images/jewelry/converted/반지R3(Qubic).jpg',
    regularPrice: '20,000~25,000',
    salePrice: '12,000~17,000',
    prices: [
      { type: '일반제품', regularPrice: '20,000원', salePrice: '12,000원', note: '누끼 원본 + 보정' },
      { type: '화이트 큐빅(예물)', regularPrice: '25,000원', salePrice: '17,000원', note: '누끼 원본 + 보정' },
    ],
  },
  {
    id: 'earrings',
    name: '귀걸이 · 피어싱',
    nameEn: 'Earrings & Piercing',
    subtitle: '보정완료가격',
    image: '/images/jewelry/converted/귀걸이2459.jpg',
    regularPrice: '34,000',
    salePrice: '24,000',
    extraInfo: '피어싱 (12,000)',
    prices: [
      { type: '양쪽 세트', regularPrice: '34,000원', salePrice: '24,000원', note: '누끼 원본 + 보정 (tif, psd)' },
      { type: '피어싱 (한쪽)', regularPrice: '18,000원', salePrice: '12,000원', note: '누끼 원본 + 보정 (tif, psd)' },
    ],
  },
  {
    id: 'couple-rings',
    name: '커플링',
    nameEn: 'Couple Rings',
    subtitle: '보정완료가격',
    image: '/images/couple-rings/커플링1-3756-re.png',
    regularPrice: '34,000',
    salePrice: '24,000',
    prices: [
      { type: '커플링 세트(2점)', regularPrice: '34,000원', salePrice: '24,000원', note: '누끼 원본 + 보정 (tif, psd)' },
    ],
  },
  {
    id: 'necklaces',
    name: '목걸이 · 팬던트',
    nameEn: 'Necklaces & Pendants',
    subtitle: '보정완료가격',
    image: '/images/jewelry/converted/목걸이(14k핑크)1887.jpg',
    regularPrice: '18,000~28,000',
    salePrice: '14,000~20,000',
    extraInfo: '팬던트 (12,000)',
    prices: [
      { type: 'V자형 (하프체인)', regularPrice: '18,000원', salePrice: '14,000원', note: '누끼 원본 + 보정 (tif, psd)' },
      { type: '전체컷 (풀샷)', regularPrice: '28,000원', salePrice: '20,000원', note: '누끼 원본 + 보정 (tif, psd)' },
      { type: '팬던트만', regularPrice: '18,000원', salePrice: '12,000원', note: '누끼 원본 + 보정 (tif, psd)' },
    ],
  },
  {
    id: 'bracelets',
    name: '팔찌',
    nameEn: 'Bracelets',
    subtitle: '보정완료가격',
    image: '/images/bracelets/팔찌(순금 돌).png',
    regularPrice: '23~30,000',
    salePrice: '13~20,000',
    prices: [
      { type: '뱅글', regularPrice: '23,000원', salePrice: '13,000원', note: '누끼 원본 + 보정 (tif, psd)' },
      { type: '체인', regularPrice: '25,000원', salePrice: '15,000원', note: '누끼 원본 + 보정 (tif, psd)' },
      { type: '2줄 체인', regularPrice: '30,000원', salePrice: '20,000원', note: '누끼 원본 + 보정 (tif, psd)' },
    ],
  },
  {
    id: 'goldbar',
    name: '금 · 은 바',
    nameEn: 'Gold & Silver Bar',
    subtitle: '상담 문의',
    image: '/images/jewelry/converted/골드바1 (1).jpg',
    regularPrice: '상담 문의',
    salePrice: '상담 문의',
    prices: [
      { type: '골드바 / 실버바', regularPrice: '상담 문의', salePrice: '상담 문의', note: '크기 및 수량에 따라 변동' },
    ],
  },
];

type PricingItem = typeof jewelryPricing[0];

export default function JewelryPage() {
  const [selectedItem, setSelectedItem] = useState<PricingItem | null>(null);

  return (
    <>
      <section className="jewelry-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <Image
              src="/images/promo-banner.png"
              alt="지금부터 파격가 할인촬영"
              width={600}
              height={400}
              className="promo-banner-img"
              priority
            />
          </div>
        </div>

        {/* Price Section - 정상가/할인가 형식 */}
        <div className="price-section">
          <div className="section-header">
            <span className="section-tag">SPECIAL PRICING</span>
            <h2>파격 할인 가격표</h2>
            <p className="section-desc">보정 완료된 누끼 원본 + 고품질 파일(tif, psd) 제공</p>
          </div>

          <div className="price-grid">
            {jewelryPricing.map((item) => (
              <div
                key={item.id}
                className="price-card"
                onClick={() => setSelectedItem(item)}
              >
                <div className="price-card-image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="discount-badge">할인중</div>
                </div>
                <div className="price-card-content">
                  <div className="price-card-header">
                    <h3 className="price-card-title">{item.name}</h3>
                    <span className="price-card-subtitle">({item.subtitle})</span>
                  </div>

                  {/* 정상가/할인가 표시 */}
                  <div className="price-display">
                    <div className="regular-price">
                      <span className="price-label">정상가</span>
                      <span className="price-value strikethrough">{item.regularPrice}</span>
                    </div>
                    <div className="sale-price">
                      <span className="price-label sale">할인가</span>
                      <span className="price-value highlight">{item.salePrice}</span>
                    </div>
                    {item.extraInfo && (
                      <div className="extra-info">{item.extraInfo}</div>
                    )}
                  </div>
                </div>
                <div className="price-card-footer">
                  <span>상세 가격 보기</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="gallery-section">
          <div className="section-header">
            <span className="section-tag">CONSULTATION</span>
            <h2>원하시는 촬영이 있으신가요?</h2>
            <p className="section-desc">
              여기에 없는 품목이라도 상담을 통해 원하시는 촬영을 알려주시면 바로 상담 가능합니다.
            </p>
          </div>

          {/* 포트폴리오 안내 박스 */}
          <div className="portfolio-guide">
            <div className="guide-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
            </div>
            <div className="guide-text">
              <strong>위 가격표는 대표 품목 위주입니다</strong>
              <span>더 다양한 주얼리 샘플은 <Link href="/portfolio" style={{ color: '#FF6B35', textDecoration: 'underline' }}>포트폴리오 페이지</Link>에서 확인하실 수 있습니다.</span>
            </div>
          </div>

          <div className="gallery-cta">
            <Link href="/portfolio" className="view-more-btn">
              전체 포트폴리오 보기
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* CTA Section - 심플 버전 */}
        <div className="cta-section">
          <div className="cta-content">
            <h3>촬영이 필요하신가요?</h3>
            <p>제품에 맞는 최적의 촬영 방안을 안내해 드립니다</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn-primary">
                무료 상담 신청
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/services" className="btn-secondary">시계·트로피 촬영</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Price Detail Modal - 정상가/할인가 형식 */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedItem(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <div className="modal-image">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                style={{ objectFit: 'contain', background: '#ffffff' }}
              />
              <div className="modal-discount-badge">파격 할인</div>
            </div>

            <div className="modal-header">
              <span className="modal-badge">{selectedItem.nameEn}</span>
              <h2 className="modal-title">{selectedItem.name} 촬영</h2>
              <span className="modal-subtitle">{selectedItem.subtitle}</span>
            </div>

            <div className="modal-pricing">
              <h3>촬영 가격표</h3>
              <div className="pricing-table">
                {selectedItem.prices.map((p, i) => (
                  <div key={i} className="pricing-row">
                    <div className="pricing-info">
                      <span className="pricing-type">{p.type}</span>
                      <span className="pricing-note">{p.note}</span>
                    </div>
                    <div className="pricing-prices">
                      <span className="pricing-regular">{p.regularPrice}</span>
                      <span className="pricing-arrow">→</span>
                      <span className="pricing-sale">{p.salePrice}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-includes">
              <h3>포함 사항</h3>
              <ul>
                <li>누끼 원본 파일</li>
                <li>보정 파일 (tif, psd)</li>
                <li>고해상도 이미지</li>
              </ul>
            </div>

            <div className="modal-cta">
              <Link href="/contact" className="cta-primary">
                촬영 문의하기
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .jewelry-page {
          min-height: 100vh;
          background: var(--bg-primary);
        }

        /* ========================================
           Hero Section - 심플한 프로모션 배너
           ======================================== */
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: center;
          background: color(display-p3 0.863 0.459 0.173);
          padding-top: 15px;
        }

        .hero-content {
          max-width: 700px;
          margin: 0;
          padding: 0;
        }

        .promo-banner-img {
          display: block;
          max-width: 100%;
          height: auto;
          margin: 0;
          padding: 0;
        }

        /* 프로모션 배너 스타일 */
        .promo-banner {
          position: relative;
          margin-bottom: 24px;
        }

        .promo-brush-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          max-width: 400px;
          height: 120px;
          background: #1a1a1a;
          clip-path: polygon(5% 15%, 95% 5%, 98% 85%, 2% 95%);
        }

        .promo-text {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          padding: 24px 20px;
        }

        .promo-title {
          font-size: clamp(14px, 3vw, 18px);
          font-weight: 600;
          color: rgba(255,215,0,0.8);
          letter-spacing: 0.1em;
        }

        .promo-highlight {
          font-size: clamp(32px, 8vw, 48px);
          font-weight: 800;
          color: #FFD700;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          line-height: 1.2;
        }

        .promo-note {
          font-size: 13px;
          color: rgba(255,255,255,0.85);
          margin-bottom: 24px;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          background: rgba(0,0,0,0.15);
          padding: 16px 24px;
          border-radius: 8px;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-value {
          font-size: 22px;
          font-weight: 700;
          color: white;
        }

        .stat-label {
          font-size: 12px;
          color: rgba(255,255,255,0.75);
        }

        /* ========================================
           Section Header
           ======================================== */
        .section-header {
          margin-bottom: 48px;
        }

        .section-tag {
          display: inline-block;
          padding: 8px 16px;
          background: #FF6B35;
          color: white;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .section-header h2 {
          font-size: 36px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .section-header .section-desc {
          font-size: 16px;
          color: var(--text-muted);
        }

        /* ========================================
           Price Section - 정상가/할인가 카드
           ======================================== */
        .price-section {
          max-width: 100%;
          padding: 60px 0;
        }

        .price-section .section-header {
          padding: 0 48px;
          text-align: left;
          max-width: 600px;
        }

        .price-grid {
          display: grid;
          gap: 0;
        }

        .price-card {
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          height: 100%;
          position: relative;
        }

        .price-card:hover {
          z-index: 2;
          box-shadow: 0 16px 48px rgba(0,0,0,0.2);
        }

        [data-theme="dark"] .price-card:hover {
          box-shadow: 0 16px 48px rgba(255,107,53,0.15);
        }

        .price-card-image {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
          background: #ffffff;
          flex-shrink: 0;
        }

        .price-card-image img {
          transition: transform 0.5s ease;
        }

        .price-card:hover .price-card-image img {
          transform: scale(1.05);
        }

        .discount-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 5px 10px;
          background: #FF6B35;
          color: white;
          font-size: 11px;
          font-weight: 700;
          z-index: 2;
        }

        .price-card-content {
          padding: 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .price-card-header {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .price-card-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .price-card-subtitle {
          font-size: 12px;
          color: var(--text-muted);
        }

        /* 정상가/할인가 표시 스타일 */
        .price-display {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .regular-price,
        .sale-price {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .price-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-muted);
          min-width: 45px;
        }

        .price-label.sale {
          color: #FF6B35;
        }

        .price-value {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .price-value.strikethrough {
          text-decoration: line-through;
          color: var(--text-muted);
          font-size: 14px;
        }

        .price-value.highlight {
          color: #FF6B35;
          font-size: 20px;
          font-weight: 700;
        }

        .extra-info {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px dashed var(--border-color);
        }

        .price-card-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px;
          background: var(--bg-tertiary);
          font-size: 13px;
          font-weight: 600;
          color: #FF6B35;
          transition: all 0.3s;
          margin-top: auto;
        }

        .price-card:hover .price-card-footer {
          background: #FF6B35;
          color: white;
        }

        .price-card:hover .price-card-footer svg {
          transform: translateX(4px);
        }

        .price-card-footer svg {
          width: 16px;
          height: 16px;
          transition: transform 0.3s;
        }

        /* ========================================
           Gallery Section
           ======================================== */
        .gallery-section {
          padding: 60px 24px;
          background: var(--bg-secondary);
        }

        /* 포트폴리오 안내 박스 */
        .portfolio-guide {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          max-width: 800px;
          margin: 0 auto 32px;
          padding: 20px 24px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-left: 4px solid #FF6B35;
        }

        .guide-icon {
          flex-shrink: 0;
          color: #FF6B35;
        }

        .guide-text {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .guide-text strong {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .guide-text span {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .gallery-cta {
          text-align: center;
        }

        .view-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          color: #FF6B35;
          text-decoration: none;
          border: 1px solid #FF6B35;
          transition: all 0.3s;
        }

        .view-more-btn:hover {
          background: #FF6B35;
          color: white;
        }

        /* ========================================
           CTA Section - 심플 버전
           ======================================== */
        .cta-section {
          padding: 60px 24px;
          background: var(--bg-primary);
          border-top: 1px solid var(--border-color);
        }

        .cta-content {
          max-width: 500px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-content h3 {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .cta-content p {
          font-size: 15px;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .cta-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: #FF6B35;
          color: white;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          background: #e55a25;
          transform: translateY(-2px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          border-color: #FF6B35;
          color: #FF6B35;
        }

        /* ========================================
           Modal - 정상가/할인가 형식
           ======================================== */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          overflow-y: auto;
        }

        .modal-content {
          position: relative;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.5);
          border: none;
          color: white;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s;
        }

        .modal-close:hover {
          background: #FF6B35;
        }

        .modal-image {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: #ffffff;
        }

        .modal-discount-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 8px 16px;
          background: #FF6B35;
          color: white;
          font-size: 14px;
          font-weight: 700;
          z-index: 2;
        }

        .modal-header {
          padding: 24px;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-badge {
          display: inline-block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .modal-title {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .modal-subtitle {
          font-size: 14px;
          color: var(--text-muted);
        }

        .modal-pricing {
          padding: 24px;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-pricing h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .pricing-table {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pricing-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: var(--bg-tertiary);
          gap: 16px;
          flex-wrap: wrap;
        }

        .pricing-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .pricing-type {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .pricing-note {
          font-size: 12px;
          color: var(--text-muted);
        }

        .pricing-prices {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pricing-regular {
          font-size: 14px;
          color: var(--text-muted);
          text-decoration: line-through;
        }

        .pricing-arrow {
          color: #FF6B35;
          font-weight: 700;
        }

        .pricing-sale {
          font-size: 18px;
          font-weight: 700;
          color: #FF6B35;
        }

        .modal-includes {
          padding: 24px;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-includes h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .modal-includes ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .modal-includes li {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 0;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .modal-includes li::before {
          content: '✓';
          color: #FF6B35;
          font-weight: 700;
        }

        .modal-cta {
          padding: 24px;
          text-align: center;
        }

        .modal-cta .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 40px;
          background: #FF6B35;
          color: white;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .modal-cta .cta-primary:hover {
          background: #e55a25;
          transform: translateY(-2px);
        }

        /* ========================================
           Responsive
           ======================================== */
        @media (min-width: 640px) {
          .hero-stats {
            gap: 40px;
          }

          .price-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0;
          }

          .promo-brush-bg {
            height: 130px;
          }

          .portfolio-guide {
            padding: 24px 32px;
          }
        }

        @media (min-width: 1024px) {
          .price-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
          }

          .hero-section {
            padding-top: 15px;
          }

          .price-section {
            padding: 80px 24px;
          }
        }
      `}</style>
    </>
  );
}
