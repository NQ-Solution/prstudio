'use client';

import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { ImagePlaceholder } from '@/components/ui';
import { jewelryCategories, portfolioItems } from '@/data';

// 카테고리별 가격 정보
const categoryPricing: Record<string, { base: string; detail: { name: string; price: string }[] }> = {
  rings: {
    base: '15,000원~',
    detail: [
      { name: '단순 반지 (1컷)', price: '15,000원' },
      { name: '보석 세팅 반지', price: '20,000원' },
      { name: '웨딩링/프로포즈링', price: '25,000원' },
      { name: '다이아몬드 반지', price: '30,000원' },
    ],
  },
  earrings: {
    base: '15,000원~',
    detail: [
      { name: '스터드 귀걸이 (1쌍)', price: '15,000원' },
      { name: '드롭 귀걸이', price: '20,000원' },
      { name: '후프 귀걸이', price: '18,000원' },
      { name: '다이아/진주 귀걸이', price: '25,000원' },
    ],
  },
  necklaces: {
    base: '18,000원~',
    detail: [
      { name: '체인 목걸이', price: '18,000원' },
      { name: '팬던트 목걸이', price: '22,000원' },
      { name: '보석 목걸이', price: '28,000원' },
      { name: '진주 목걸이', price: '30,000원' },
    ],
  },
  'couple-rings': {
    base: '25,000원~',
    detail: [
      { name: '심플 커플링 (1쌍)', price: '25,000원' },
      { name: '다이아 커플링', price: '35,000원' },
      { name: '웨딩밴드', price: '30,000원' },
      { name: '각인 커플링', price: '28,000원' },
    ],
  },
  bracelets: {
    base: '18,000원~',
    detail: [
      { name: '체인 팔찌', price: '18,000원' },
      { name: '뱅글', price: '20,000원' },
      { name: '테니스 팔찌', price: '28,000원' },
      { name: '참 팔찌', price: '22,000원' },
    ],
  },
  brooches: {
    base: '20,000원~',
    detail: [
      { name: '단순 브로치', price: '20,000원' },
      { name: '보석 브로치', price: '28,000원' },
      { name: '앤티크 브로치', price: '25,000원' },
      { name: '대형 브로치', price: '30,000원' },
    ],
  },
};

export default function JewelryCategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const [activeSubType, setActiveSubType] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'portfolio' | 'pricing' | 'info'>('portfolio');

  const category = jewelryCategories.find((cat) => cat.id === categoryId);

  if (!category) {
    notFound();
  }

  // 해당 카테고리의 포트폴리오
  const categoryPortfolio = portfolioItems.filter((item) => item.category === category.id);

  // 서브타입 필터링
  const filteredPortfolio = activeSubType === 'all'
    ? categoryPortfolio
    : categoryPortfolio.filter(item => item.subType === activeSubType);

  const pricing = categoryPricing[category.id];

  return (
    <>
      <section className="category-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-pattern" />
          <div className="hero-content">
            <nav className="breadcrumb">
              <Link href="/">홈</Link>
              <span>/</span>
              <Link href="/jewelry">주얼리 촬영</Link>
              <span>/</span>
              <span className="current">{category.name}</span>
            </nav>

            <div className="hero-info">
              <span className="hero-badge">{category.nameEn}</span>
              <h1 className="hero-title">{category.name} <span>촬영</span></h1>
              <p className="hero-description">{category.longDescription}</p>

              <div className="hero-meta">
                <div className="meta-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                  </svg>
                  <span>기본 {pricing?.base || '문의'}</span>
                </div>
                <div className="meta-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>당일~3일 납품</span>
                </div>
                <div className="meta-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <span>{category.subTypes.length}종류 촬영</span>
                </div>
              </div>

              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">
                  촬영 문의
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <Link href="/portfolio" className="btn-secondary">전체 포트폴리오</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-nav">
          <div className="tab-container">
            <button
              className={`tab-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
              onClick={() => setActiveTab('portfolio')}
            >
              작업 사례
            </button>
            <button
              className={`tab-btn ${activeTab === 'pricing' ? 'active' : ''}`}
              onClick={() => setActiveTab('pricing')}
            >
              가격 안내
            </button>
            <button
              className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
              onClick={() => setActiveTab('info')}
            >
              촬영 종류
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Portfolio Tab */}
          {activeTab === 'portfolio' && (
            <div className="portfolio-section">
              {/* SubType Filters */}
              <div className="filter-section">
                <h3>촬영 유형</h3>
                <div className="filter-list">
                  <button
                    className={`filter-chip ${activeSubType === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveSubType('all')}
                  >
                    전체
                  </button>
                  {category.subTypes.slice(0, 8).map((subType) => (
                    <button
                      key={subType.id}
                      className={`filter-chip ${activeSubType === subType.id ? 'active' : ''}`}
                      onClick={() => setActiveSubType(subType.id)}
                    >
                      {subType.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Portfolio Grid */}
              <div className="portfolio-grid">
                {filteredPortfolio.length > 0
                  ? filteredPortfolio.map((item) => (
                      <div key={item.id} className="portfolio-item">
                        <ImagePlaceholder
                          src={item.imageSrc}
                          alt={item.title}
                          label={item.title}
                          code={item.code}
                        />
                      </div>
                    ))
                  : Array.from({ length: 12 }).map((_, index) => (
                      <div key={index} className="portfolio-item">
                        <ImagePlaceholder
                          label={`${category.name} ${index + 1}`}
                          code={`${category.nameEn.toUpperCase().slice(0, 4)}-${String(index + 1).padStart(3, '0')}`}
                        />
                      </div>
                    ))}
              </div>

              <div className="load-more">
                <button className="load-more-btn">
                  더 많은 작업물 보기
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Pricing Tab */}
          {activeTab === 'pricing' && (
            <div className="pricing-section">
              <div className="pricing-card">
                <div className="pricing-header">
                  <div className="pricing-badge">고정 가격제</div>
                  <h3>{category.name} 촬영 가격</h3>
                  <p>투명한 가격 정책으로 추가 비용 걱정 없이 촬영하세요</p>
                </div>

                <div className="pricing-body">
                  {pricing?.detail.map((item, index) => (
                    <div key={index} className="pricing-row">
                      <span className="pricing-name">{item.name}</span>
                      <span className="pricing-value">{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="pricing-extras">
                  <h4>추가 옵션</h4>
                  <div className="extras-list">
                    <div className="extra-item">
                      <span>추가 앵글 (1컷)</span>
                      <span>+5,000원</span>
                    </div>
                    <div className="extra-item">
                      <span>급행 작업 (당일)</span>
                      <span>+50%</span>
                    </div>
                    <div className="extra-item">
                      <span>영상 촬영 (30초)</span>
                      <span>+30,000원</span>
                    </div>
                    <div className="extra-item">
                      <span>리터칭 추가</span>
                      <span>+10,000원</span>
                    </div>
                  </div>
                </div>

                <div className="pricing-note">
                  * 정확한 가격은 제품 상태와 수량에 따라 달라질 수 있습니다.
                </div>

                <div className="pricing-cta">
                  <Link href="/contact" className="btn-primary">
                    무료 상담 신청
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Info Tab */}
          {activeTab === 'info' && (
            <div className="info-section">
              <h3 className="section-title">촬영 가능한 {category.name} 종류</h3>
              <div className="subtype-grid">
                {category.subTypes.map((subType, index) => (
                  <div key={subType.id} className="subtype-card">
                    <div className="subtype-number">{String(index + 1).padStart(2, '0')}</div>
                    <div className="subtype-content">
                      <h4>{subType.name}</h4>
                      <p>{subType.description}</p>
                      {subType.examples && (
                        <div className="subtype-examples">
                          {subType.examples.map((ex, i) => (
                            <span key={i} className="example-tag">{ex}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="subtype-check">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h3>{category.name} 촬영이 필요하신가요?</h3>
            <p>전문 상담을 통해 최적의 촬영 방안을 안내해 드립니다.</p>
          </div>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">무료 상담 신청</Link>
            <Link href="/jewelry" className="btn-secondary">다른 주얼리 보기</Link>
          </div>
        </div>
      </section>

      <style>{`
        .category-page {
          min-height: 100vh;
          background: var(--bg-primary);
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          padding: 120px 24px 60px;
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          overflow: hidden;
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 2px 2px, rgba(255, 107, 53, 0.08) 1px, transparent 0);
          background-size: 40px 40px;
        }

        .hero-content {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Breadcrumb */
        .breadcrumb {
          margin-bottom: 32px;
          font-size: 14px;
        }

        .breadcrumb a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .breadcrumb a:hover {
          color: var(--orange);
        }

        .breadcrumb span {
          color: var(--text-muted);
          margin: 0 8px;
        }

        .breadcrumb .current {
          color: var(--orange);
          margin: 0;
        }

        /* Hero Info */
        .hero-badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(255,107,53,0.15);
          border: 1px solid rgba(255,107,53,0.3);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--orange);
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: clamp(32px, 6vw, 52px);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .hero-title span {
          color: var(--orange);
        }

        .hero-description {
          font-size: 16px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 28px;
          max-width: 600px;
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 32px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--text-primary);
        }

        .meta-item svg {
          color: var(--orange);
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          background: var(--orange);
          color: white;
          font-size: 15px;
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
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        /* Tab Navigation */
        .tab-nav {
          border-bottom: 1px solid var(--border-color);
          background: var(--bg-secondary);
          position: sticky;
          top: 72px;
          z-index: 100;
        }

        .tab-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          gap: 8px;
        }

        .tab-btn {
          padding: 18px 24px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
          background: transparent;
          border: none;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.3s;
        }

        .tab-btn:hover {
          color: var(--text-primary);
        }

        .tab-btn.active {
          color: var(--orange);
          border-bottom-color: var(--orange);
        }

        /* Main Content */
        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 24px;
        }

        /* Filter Section */
        .filter-section {
          margin-bottom: 32px;
        }

        .filter-section h3 {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .filter-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .filter-chip {
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 500;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s;
        }

        .filter-chip:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        .filter-chip.active {
          background: var(--orange);
          border-color: var(--orange);
          color: white;
        }

        /* Portfolio Grid */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .portfolio-item {
          aspect-ratio: 1;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          overflow: hidden;
          transition: all 0.3s;
        }

        .portfolio-item:hover {
          border-color: var(--orange);
          transform: translateY(-4px);
        }

        .load-more {
          text-align: center;
          margin-top: 40px;
        }

        .load-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
        }

        .load-more-btn:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        /* Pricing Section */
        .pricing-section {
          max-width: 600px;
          margin: 0 auto;
        }

        .pricing-card {
          background: var(--bg-secondary);
          border: 2px solid var(--orange);
          overflow: hidden;
        }

        .pricing-header {
          padding: 32px;
          background: linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,107,53,0.05));
          border-bottom: 1px solid var(--border-color);
        }

        .pricing-badge {
          display: inline-block;
          padding: 6px 12px;
          background: var(--orange);
          color: white;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .pricing-header h3 {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .pricing-header p {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .pricing-body {
          padding: 24px 32px;
        }

        .pricing-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid var(--border-color);
        }

        .pricing-row:last-child {
          border-bottom: none;
        }

        .pricing-name {
          font-size: 15px;
          color: var(--text-primary);
        }

        .pricing-value {
          font-size: 18px;
          font-weight: 700;
          color: var(--orange);
        }

        .pricing-extras {
          padding: 24px 32px;
          background: var(--bg-tertiary);
          border-top: 1px solid var(--border-color);
        }

        .pricing-extras h4 {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .extras-list {
          display: grid;
          gap: 12px;
        }

        .extra-item {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
        }

        .extra-item span:first-child {
          color: var(--text-secondary);
        }

        .extra-item span:last-child {
          color: var(--orange);
          font-weight: 600;
        }

        .pricing-note {
          padding: 16px 32px;
          font-size: 13px;
          color: var(--text-muted);
          background: var(--bg-tertiary);
        }

        .pricing-cta {
          padding: 24px 32px;
          text-align: center;
        }

        /* Info Section */
        .info-section {

        }

        .section-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 24px;
        }

        .subtype-grid {
          display: grid;
          gap: 12px;
        }

        .subtype-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          transition: all 0.3s;
        }

        .subtype-card:hover {
          border-color: var(--orange);
        }

        .subtype-number {
          font-size: 18px;
          font-weight: 200;
          color: var(--border-color);
          flex-shrink: 0;
        }

        .subtype-content {
          flex: 1;
        }

        .subtype-content h4 {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .subtype-content p {
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .subtype-examples {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .example-tag {
          padding: 4px 8px;
          font-size: 11px;
          background: var(--bg-tertiary);
          color: var(--text-muted);
        }

        .subtype-check {
          color: var(--orange);
          flex-shrink: 0;
        }

        /* CTA Section */
        .cta-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }

        .cta-section > div:first-child {
          padding: 48px 32px;
          background: linear-gradient(135deg, rgba(255,107,53,0.1) 0%, rgba(255,107,53,0.05) 100%);
          border: 1px solid rgba(255,107,53,0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }

        .cta-content h3 {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .cta-content p {
          font-size: 15px;
          color: var(--text-secondary);
        }

        .cta-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* Responsive */
        @media (min-width: 640px) {
          .portfolio-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .subtype-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .extras-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .cta-section > div:first-child {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}
