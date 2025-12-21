'use client';

import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { ImagePlaceholder } from '@/components/ui';
import { otherServices, portfolioItems } from '@/data';

// 서비스별 가격 정보
const pricingData: Record<string, { items: { name: string; price: string }[]; note: string }> = {
  goldbar: {
    items: [
      { name: '1oz 골드바', price: '20,000원' },
      { name: '10g~100g 골드바', price: '25,000원' },
      { name: '1kg 골드바', price: '35,000원' },
      { name: '금화/은화', price: '15,000원' },
    ],
    note: '* 시리얼 넘버 클로즈업 촬영 포함',
  },
  watch: {
    items: [
      { name: '명품 시계 (1컷)', price: '30,000원' },
      { name: '스마트/패션 시계', price: '20,000원' },
      { name: '시계 박스 세트', price: '40,000원' },
      { name: '360도 회전 영상', price: '80,000원' },
    ],
    note: '* 다이얼/무브먼트 상세 촬영 가능',
  },
  trophy: {
    items: [
      { name: '크리스탈 트로피', price: '25,000원' },
      { name: '금속 트로피', price: '20,000원' },
      { name: '상패/감사패', price: '15,000원' },
      { name: '메달', price: '12,000원' },
    ],
    note: '* 각인 텍스트 선명도 보정 포함',
  },
  equipment: {
    items: [
      { name: '소형 기기 (20cm 이하)', price: '25,000원' },
      { name: '중형 기기 (50cm 이하)', price: '35,000원' },
      { name: '대형 기기', price: '50,000원~' },
      { name: '세트 구성품 촬영', price: '별도 협의' },
    ],
    note: '* 계기판/디스플레이 특수 촬영 가능',
  },
};

// 아이콘 컴포넌트
function ServiceIcon({ serviceId }: { serviceId: string }) {
  switch (serviceId) {
    case 'goldbar':
      return (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 18h16l-2-14H6L4 18z"/>
          <path d="M6 4h12"/>
          <path d="M8 8h8"/>
          <path d="M8 12h8"/>
        </svg>
      );
    case 'watch':
      return (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="7"/>
          <path d="M12 9v3l1.5 1.5"/>
          <path d="M16.51 17.35l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83"/>
          <path d="M7.49 6.65l.35-3.83A2 2 0 019.84 1h4.33a2 2 0 012 1.82l.35 3.83"/>
        </svg>
      );
    case 'trophy':
      return (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 9H4.5a2.5 2.5 0 010-5H6"/>
          <path d="M18 9h1.5a2.5 2.5 0 000-5H18"/>
          <path d="M4 22h16"/>
          <path d="M10 22V8a6 6 0 00-6-6h16a6 6 0 00-6 6v14"/>
          <path d="M14 22v-4a2 2 0 00-4 0v4"/>
        </svg>
      );
    case 'equipment':
      return (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function ServiceCategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const [activeTab, setActiveTab] = useState<'overview' | 'portfolio' | 'pricing'>('overview');

  const service = otherServices.find((s) => s.id === category);

  if (!service) {
    notFound();
  }

  const categoryPortfolio = portfolioItems.filter((item) => item.category === service.id);
  const pricing = pricingData[service.id];

  return (
    <>
      <section className="service-detail-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-bg">
            <div className="hero-pattern" />
            <div className="hero-gradient" />
          </div>

          <div className="hero-content">
            <nav className="breadcrumb">
              <Link href="/" className="breadcrumb-link">홈</Link>
              <span className="breadcrumb-sep">/</span>
              <Link href="/services" className="breadcrumb-link">서비스</Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">{service.name}</span>
            </nav>

            <div className="hero-grid">
              <div className="hero-text">
                <span className="hero-badge">{service.nameEn}</span>
                <h1 className="hero-title">{service.name} <span>촬영</span></h1>
                <p className="hero-description">{service.longDescription}</p>

                <div className="hero-features">
                  {service.features.map((feature, index) => (
                    <div key={index} className="hero-feature">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="hero-actions">
                  <Link href="/contact" className="btn-primary">
                    촬영 문의하기
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                  <a href="#pricing" className="btn-secondary">가격 확인</a>
                </div>
              </div>

              <div className="hero-visual">
                <div className="visual-card">
                  <div className="visual-icon">
                    <ServiceIcon serviceId={service.id} />
                  </div>
                  <div className="visual-rings">
                    <div className="ring ring-1" />
                    <div className="ring ring-2" />
                    <div className="ring ring-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <div className="tab-container">
            <button
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
              <span>촬영 안내</span>
            </button>
            <button
              className={`tab-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
              onClick={() => setActiveTab('portfolio')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>작업 사례</span>
            </button>
            <button
              className={`tab-btn ${activeTab === 'pricing' ? 'active' : ''}`}
              onClick={() => setActiveTab('pricing')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
              </svg>
              <span>가격 안내</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="overview-section">
              {/* SubTypes Grid */}
              <div className="subtypes-section">
                <h2 className="section-title">
                  <span className="title-number">01</span>
                  촬영 가능 제품
                </h2>
                <div className="subtypes-grid">
                  {service.subTypes.map((subType, index) => (
                    <div key={subType.id} className="subtype-card">
                      <div className="subtype-number">{String(index + 1).padStart(2, '0')}</div>
                      <div className="subtype-content">
                        <h3>{subType.name}</h3>
                        <div className="subtype-check">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          <span>촬영 가능</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Section */}
              <div className="process-section">
                <h2 className="section-title">
                  <span className="title-number">02</span>
                  촬영 프로세스
                </h2>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">01</div>
                    <div className="step-content">
                      <h3>상담 및 견적</h3>
                      <p>제품 확인 후 고정 가격 안내</p>
                    </div>
                  </div>
                  <div className="process-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                  <div className="process-step">
                    <div className="step-number">02</div>
                    <div className="step-content">
                      <h3>제품 수령</h3>
                      <p>방문 또는 택배 접수</p>
                    </div>
                  </div>
                  <div className="process-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                  <div className="process-step">
                    <div className="step-number">03</div>
                    <div className="step-content">
                      <h3>전문 촬영</h3>
                      <p>최적의 라이팅과 앵글</p>
                    </div>
                  </div>
                  <div className="process-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                  <div className="process-step">
                    <div className="step-number">04</div>
                    <div className="step-content">
                      <h3>보정 및 납품</h3>
                      <p>당일~3일 내 파일 전달</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="benefits-section">
                <h2 className="section-title">
                  <span className="title-number">03</span>
                  촬영 특징
                </h2>
                <div className="benefits-grid">
                  {service.features.map((feature, index) => (
                    <div key={index} className="benefit-card">
                      <div className="benefit-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Portfolio Tab */}
          {activeTab === 'portfolio' && (
            <div className="portfolio-section">
              <h2 className="section-title">
                <span className="title-number">WORKS</span>
                작업 사례
              </h2>
              {categoryPortfolio.length > 0 ? (
                <div className="portfolio-grid">
                  {categoryPortfolio.map((item) => (
                    <div key={item.id} className="portfolio-item">
                      <ImagePlaceholder
                        src={item.imageSrc}
                        alt={item.title}
                        label={item.title}
                        code={item.code}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="portfolio-grid">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="portfolio-item">
                      <ImagePlaceholder
                        label={`${service.name} ${index + 1}`}
                        code={`${service.nameEn.toUpperCase().slice(0, 4)}-${String(index + 1).padStart(3, '0')}`}
                      />
                    </div>
                  ))}
                </div>
              )}
              <div className="portfolio-cta">
                <Link href="/portfolio" className="view-all-btn">
                  전체 포트폴리오 보기
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          )}

          {/* Pricing Tab */}
          {activeTab === 'pricing' && (
            <div id="pricing" className="pricing-section">
              <h2 className="section-title">
                <span className="title-number">PRICE</span>
                {service.name} 촬영 가격
              </h2>

              <div className="pricing-card">
                <div className="pricing-header">
                  <div className="pricing-badge">고정 가격제</div>
                  <p>투명한 가격 정책으로 추가 비용 걱정 없이 촬영하세요</p>
                </div>

                <div className="pricing-table">
                  {pricing?.items.map((item, index) => (
                    <div key={index} className="pricing-row">
                      <span className="pricing-name">{item.name}</span>
                      <span className="pricing-value">{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="pricing-extras">
                  <h4>추가 옵션</h4>
                  <div className="extras-grid">
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
                      <span>+30,000원~</span>
                    </div>
                    <div className="extra-item">
                      <span>배경 합성</span>
                      <span>+10,000원</span>
                    </div>
                  </div>
                </div>

                <p className="pricing-note">{pricing?.note}</p>

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
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-shell">
            <div className="cta-content">
              <h3>{service.name} 촬영이 필요하신가요?</h3>
              <p>전문 상담을 통해 최적의 촬영 방안을 안내해 드립니다.</p>
            </div>
            <div className="cta-buttons">
              <Link href="/contact" className="btn-primary">
                무료 상담 신청
              </Link>
              <Link href="/services" className="btn-secondary">
                다른 서비스 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .service-detail-page {
          min-height: 100vh;
          background: var(--bg-primary);
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          padding: 120px 24px 88px;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 2px 2px, rgba(255, 107, 53, 0.1) 1px, transparent 0);
          background-size: 40px 40px;
        }

        .hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
        }

        .hero-content {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Breadcrumb */
        .breadcrumb {
          margin-bottom: 40px;
          font-size: 14px;
        }

        .breadcrumb-link {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .breadcrumb-link:hover {
          color: var(--orange);
        }

        .breadcrumb-sep {
          margin: 0 10px;
          color: var(--text-muted);
        }

        .breadcrumb-current {
          color: var(--orange);
          font-weight: 500;
        }

        /* Hero Grid */
        .hero-grid {
          display: grid;
          gap: 68px;
          align-items: center;
        }

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
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .hero-title span {
          color: var(--orange);
        }

        .hero-description {
          font-size: 17px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }

        .hero-features {
          display: grid;
          gap: 12px;
          margin-bottom: 40px;
        }

        .hero-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: var(--text-primary);
        }

        .hero-feature svg {
          color: var(--orange);
          flex-shrink: 0;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          align-items: center;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: var(--orange);
          color: white;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(229,90,37,0.25);
        }

        .btn-primary:hover {
          background: #e55a25;
          transform: translateY(-2px);
        }

        .btn-primary:focus-visible {
          outline: 2px solid rgba(229,90,37,0.6);
          outline-offset: 2px;
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 16px 32px;
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s;
          border-radius: 8px;
        }

        .btn-secondary:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        .btn-secondary:focus-visible {
          outline: 2px solid rgba(229,90,37,0.35);
          outline-offset: 2px;
        }

        /* Hero Visual */
        .hero-visual {
          display: flex;
          justify-content: center;
        }

        .visual-card {
          position: relative;
          width: 280px;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-icon {
          position: relative;
          z-index: 2;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(255,107,53,0.2), rgba(255,107,53,0.1));
          border: 2px solid rgba(255,107,53,0.3);
          border-radius: 50%;
          color: var(--orange);
        }

        .visual-rings {
          position: absolute;
          inset: 0;
        }

        .ring {
          position: absolute;
          border: 1px solid var(--border-color);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .ring-1 {
          width: 180px;
          height: 180px;
          animation: pulse 3s ease-in-out infinite;
        }

        .ring-2 {
          width: 230px;
          height: 230px;
          animation: pulse 3s ease-in-out infinite 0.5s;
        }

        .ring-3 {
          width: 280px;
          height: 280px;
          animation: pulse 3s ease-in-out infinite 1s;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        /* Tab Navigation */
        .tab-navigation {
          border-bottom: 1px solid var(--border-color);
          background: var(--bg-secondary);
          position: sticky;
          top: 72px;
          z-index: 100;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
        }

        .tab-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          gap: 8px;
          overflow-x: auto;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 20px 24px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          border-radius: 10px 10px 0 0;
          position: relative;
        }

        .tab-btn:hover {
          color: var(--text-primary);
          background: rgba(255,107,53,0.06);
        }

        .tab-btn:focus-visible {
          outline: 2px solid rgba(229,90,37,0.35);
          outline-offset: 4px;
        }

        .tab-btn.active {
          color: var(--orange);
          border-bottom-color: var(--orange);
          background: rgba(255,107,53,0.08);
        }

        /* Main Content */
        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 70px 24px;
        }

        /* Section Title */
        .section-title {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 40px;
        }

        .title-number {
          font-size: 12px;
          font-weight: 700;
          color: var(--orange);
          padding: 6px 12px;
          background: rgba(255,107,53,0.1);
          border-radius: 4px;
        }

        /* SubTypes */
        .subtypes-section {
          margin-bottom: 80px;
        }

        .subtypes-grid {
          display: grid;
          gap: 16px;
        }

        .subtype-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }

        .subtype-card:hover {
          border-color: var(--orange);
          transform: translateX(8px);
        }

        .subtype-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,107,53,0.05), rgba(255,107,53,0.12));
          opacity: 0;
          transition: opacity 0.3s;
        }

        .subtype-card:hover::before {
          opacity: 1;
        }

        .subtype-card > * {
          position: relative;
          z-index: 1;
        }

        .subtype-number {
          font-size: 24px;
          font-weight: 200;
          color: var(--border-color);
        }

        .subtype-content h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .subtype-check {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--orange);
        }

        /* Process */
        .process-section {
          margin-bottom: 80px;
        }

        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .process-step {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          position: relative;
        }

        .step-number {
          font-size: 24px;
          font-weight: 700;
          color: var(--orange);
        }

        .step-content h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .step-content p {
          font-size: 14px;
          color: var(--text-muted);
        }

        .process-arrow {
          display: none;
          color: var(--border-color);
        }

        .process-step:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 24px;
          bottom: -16px;
          width: 2px;
          height: 16px;
          background: var(--border-color);
          opacity: 0.6;
        }

        /* Benefits */
        .benefits-section {
          margin-bottom: 80px;
        }

        .benefits-grid {
          display: grid;
          gap: 12px;
        }

        .benefit-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .benefit-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(255,107,53,0.1), rgba(255,107,53,0.16));
          border-radius: 8px;
          color: var(--orange);
        }

        .benefit-card span {
          font-size: 15px;
          color: var(--text-primary);
        }

        /* Portfolio */
        .portfolio-section {
          margin-bottom: 60px;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }

        .portfolio-item {
          aspect-ratio: 1;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          overflow: hidden;
          transition: all 0.3s;
          border-radius: 12px;
          position: relative;
        }

        .portfolio-item:hover {
          border-color: var(--orange);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }

        .portfolio-item::after {
          content: '자세히 보기';
          position: absolute;
          inset: auto 12px 12px 12px;
          height: 36px;
          background: rgba(0,0,0,0.55);
          color: white;
          font-size: 13px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .portfolio-item:hover::after {
          opacity: 1;
        }

        .portfolio-cta {
          text-align: center;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--orange);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
        }

        .view-all-btn:hover {
          gap: 12px;
        }

        /* Pricing */
        .pricing-section {
          margin-bottom: 60px;
        }

        .pricing-card {
          background: var(--bg-secondary);
          border: 2px solid var(--orange);
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 18px 40px rgba(229,90,37,0.15);
        }

        .pricing-header {
          padding: 32px;
          background: linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,107,53,0.05));
          border-bottom: 1px solid var(--border-color);
        }

        .pricing-badge {
          display: inline-block;
          padding: 8px 16px;
          background: var(--orange);
          color: white;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .pricing-header p {
          font-size: 15px;
          color: var(--text-secondary);
        }

        .pricing-table {
          padding: 24px 32px;
          background: #fff;
        }

        .pricing-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid var(--border-color);
          gap: 16px;
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
          background: linear-gradient(135deg, rgba(255,107,53,0.05), rgba(255,107,53,0.08));
          border-top: 1px solid var(--border-color);
        }

        .pricing-extras h4 {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .extras-grid {
          display: grid;
          gap: 12px;
        }

        .extra-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
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
          background: rgba(255,107,53,0.08);
          border-top: 1px dashed rgba(255,107,53,0.3);
        }

        .pricing-cta {
          padding: 32px;
          text-align: center;
        }

        /* CTA Section */
        .cta-section {
          max-width: 1200px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .cta-shell {
          padding: 60px 40px;
          background: linear-gradient(135deg, rgba(255,107,53,0.1) 0%, rgba(255,107,53,0.05) 100%);
          border: 1px solid rgba(255,107,53,0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          text-align: center;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 18px 40px rgba(0,0,0,0.08);
        }

        .cta-shell::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(255,107,53,0.12) 0, transparent 35%),
            radial-gradient(circle at 80% 10%, rgba(255,107,53,0.12) 0, transparent 32%),
            radial-gradient(circle at 50% 90%, rgba(255,107,53,0.1) 0, transparent 38%);
          opacity: 0.6;
          pointer-events: none;
        }

        .cta-shell > * {
          position: relative;
          z-index: 1;
        }

        .cta-content h3 {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .cta-content p {
          font-size: 16px;
          color: var(--text-secondary);
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* Responsive */
        @media (min-width: 640px) {
          .hero-features {
            grid-template-columns: repeat(2, 1fr);
          }

          .subtypes-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .portfolio-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .extras-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.2fr 1fr;
          }

          .subtypes-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .process-steps {
            flex-direction: row;
            align-items: stretch;
            gap: 24px;
          }

          .process-step {
            flex: 1;
            flex-direction: column;
            text-align: center;
            padding: 28px 20px;
          }

          .process-arrow {
            display: flex;
            align-items: center;
            color: var(--orange);
            opacity: 0.7;
          }

          .process-step:not(:last-child)::after {
            display: none;
          }

          .portfolio-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .cta-shell {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}
