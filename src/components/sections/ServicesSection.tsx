'use client';

import Link from 'next/link';
import Image from 'next/image';

const serviceCategories = [
  {
    id: 'jewelry',
    number: '01',
    title: '주얼리',
    titleEn: 'JEWELRY',
    description: '반지, 목걸이, 귀걸이, 팔찌 등 모든 주얼리 제품의 누끼 촬영',
    features: ['누끼 전문', '매크로 촬영', '고정 가격'],
    isMain: true,
    href: '/jewelry',
  },
  {
    id: 'watch',
    number: '02',
    title: '시계',
    titleEn: 'WATCH',
    description: '시간의 가치를 담다. 명품 시계의 정밀함과 디테일을 완벽하게 표현합니다',
    features: ['다이얼 촬영', '반사 제어'],
    href: '/services',
  },
  {
    id: 'trophy',
    number: '03',
    title: '트로피·상패',
    titleEn: 'TROPHY',
    description: '영광의 순간을 영원히. 크리스탈 광택과 각인의 선명함을 극대화합니다',
    features: ['각인 선명도', '소재 질감'],
    href: '/services',
  },
  {
    id: 'equipment',
    number: '04',
    title: '과학기자재',
    titleEn: 'EQUIPMENT',
    description: '정밀함이 신뢰를 만듭니다. 과학기자재의 모든 디테일을 정확하게 전달합니다',
    features: ['상세 촬영', '카탈로그용'],
    href: '/services',
  },
];

export default function ServicesSection() {
  return (
    <>
      <section id="services" className="services-section">
        {/* Background */}
        <div className="services-bg" />

        <div className="services-container">
          {/* Section Header */}
          <div className="section-header">
            <div className="header-badge">
              <span className="badge-line" />
              <span>Services</span>
            </div>
            <h2 className="section-title">
              <span>전문 촬영 <span className="title-highlight">서비스</span></span>
            </h2>
            <p className="section-desc">
              눈으로 구매하는 시대, 당신의 제품은 어떻게 보이나요?
              판매를 위한 최고의 이미지 솔루션을 제공합니다.
            </p>
          </div>

          {/* Main Service */}
          <div className="main-service-wrapper">
            <Link href="/jewelry" className="main-service">
              <div className="main-service-content">
                <div className="main-badge">MAIN SERVICE</div>
                <h3 className="main-title">
                  주얼리 누끼 촬영
                </h3>
                <p className="main-desc">
                  시선을 사로잡는 단 한 컷. 디테일이 명품을 만듭니다.
                  최적의 빛과 완벽한 퀄리티로 클릭을 부르는 단 한 장의 사진을 만듭니다.
                </p>
                <div className="main-features">
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>누끼 촬영 전문</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>고정 가격제</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>당일~3일 납품</span>
                  </div>
                </div>
                <div className="main-cta">
                  <span>자세히 보기</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
              <div className="main-service-visual">
                <div className="visual-image-wrapper">
                  <Image
                    src="/images/jewelry/반지R3(Qubic).jpg"
                    alt="주얼리 촬영 샘플 - 반지"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Other Services Grid */}
          <div className="other-services-grid">
            {serviceCategories.slice(1).map((service) => (
              <Link key={service.id} href={service.href} className="service-card">
                <div className="card-header">
                  <span className="card-title-en">{service.titleEn}</span>
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.description}</p>
                <div className="card-features">
                  {service.features.map((feature) => (
                    <span key={feature} className="card-feature">{feature}</span>
                  ))}
                </div>
                <div className="card-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="services-cta">
            <p>필요한 촬영이 목록에 없으신가요?</p>
            <Link href="/contact" className="cta-link">
              문의하기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .services-section {
          position: relative;
          padding: 120px 0;
          background: var(--bg-primary);
          overflow: hidden;
        }

        .services-bg {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: transparent;
          pointer-events: none;
        }

        .services-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Section Header */
        .section-header {
          margin-bottom: 64px;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .badge-line {
          width: 40px;
          height: 1px;
          background: var(--orange);
        }

        .header-badge span:last-child {
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--orange);
        }

        .section-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .section-title span {
          color: var(--text-primary);
        }

        .title-highlight {
          color: var(--orange) !important;
        }

        .section-desc {
          font-size: 17px;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 500px;
        }

        /* Main Service */
        .main-service-wrapper {
          margin-bottom: 32px;
        }

        .main-service {
          display: grid;
          text-decoration: none;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .main-service:hover {
          border-color: var(--orange);
          box-shadow: 0 20px 60px rgba(255,107,53,0.1);
        }

        .main-service-content {
          padding: 48px;
          position: relative;
        }

        .main-badge {
          display: inline-block;
          padding: 6px 12px;
          background: rgba(255,107,53,0.1);
          border: 1px solid rgba(255,107,53,0.2);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--orange);
          margin-bottom: 24px;
        }

        .main-number {
          font-size: 80px;
          font-weight: 800;
          color: rgba(255,107,53,0.1);
          line-height: 1;
          margin-bottom: 16px;
        }

        .main-title {
          font-size: 32px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .main-desc {
          font-size: 16px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 32px;
          max-width: 500px;
        }

        .main-features {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 32px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--text-primary);
        }

        .feature-item svg {
          color: var(--orange);
        }

        .main-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 600;
          color: var(--orange);
        }

        .main-cta svg {
          transition: transform 0.3s ease;
        }

        .main-service:hover .main-cta svg {
          transform: translateX(4px);
        }

        .main-service-visual {
          display: none;
          background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%);
          align-items: center;
          justify-content: center;
          padding: 16px;
          position: relative;
          overflow: hidden;
          min-height: 100%;
        }

        .visual-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 320px;
          transition: transform 0.5s ease;
        }

        .main-service:hover .visual-image-wrapper {
          transform: scale(1.03);
        }

        /* Other Services */
        .other-services-grid {
          display: grid;
          gap: 16px;
          margin-bottom: 48px;
        }

        .service-card {
          display: block;
          text-decoration: none;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          padding: 32px;
          position: relative;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .service-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--orange);
          transition: width 0.3s ease;
        }

        .service-card:hover {
          border-color: var(--orange);
          transform: translateY(-4px);
        }

        .service-card:hover::after {
          width: 100%;
        }

        .card-header {
          margin-bottom: 12px;
        }

        .card-title-en {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .card-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .card-desc {
          font-size: 14px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .card-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .card-feature {
          padding: 6px 12px;
          font-size: 12px;
          background: var(--bg-tertiary);
          color: var(--text-muted);
          border-radius: 4px;
        }

        .card-arrow {
          position: absolute;
          bottom: 32px;
          right: 32px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 50%;
          color: var(--orange);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .service-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
          background: var(--orange);
          border-color: var(--orange);
          color: white;
        }

        /* Bottom CTA */
        .services-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding-top: 32px;
          border-top: 1px solid var(--border-color);
        }

        .services-cta p {
          font-size: 14px;
          color: var(--text-muted);
        }

        .cta-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: var(--orange);
          text-decoration: none;
          transition: gap 0.3s ease;
        }

        .cta-link:hover {
          gap: 10px;
        }

        @media (min-width: 768px) {
          .other-services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .main-service {
            grid-template-columns: 1.2fr 1fr;
          }

          .main-service-visual {
            display: flex;
          }

          .main-service-content {
            padding: 64px;
          }
        }
      `}</style>
    </>
  );
}
