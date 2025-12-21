'use client';

import Link from 'next/link';

// 서비스 카드 데이터
const services = [
  {
    id: 'watch',
    name: '시계',
    nameEn: 'Watch',
    description: '롤렉스, 오메가 등 명품 시계부터 전자시계까지 전문 촬영',
    basePrice: '14,000원~',
  },
  {
    id: 'trophy',
    name: '트로피',
    nameEn: 'Trophy',
    description: '크리스탈, 금속 트로피, 상패 등 다양한 시상품 촬영',
    basePrice: '14,000원~',
  },
  {
    id: 'equipment',
    name: '실험과학기구',
    nameEn: 'Equipment',
    description: '의료기기, 과학기자재, 산업장비 등 전문 제품 촬영',
    basePrice: '별도 문의',
  },
];

export default function ServicesPage() {

  return (
    <>
      <section className="services-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">PRODUCT PHOTOGRAPHY</div>
            <h1 className="hero-title">
              25년 경력의 <span>전문 제품 촬영</span>
            </h1>
            <p className="hero-description">
              시계, 트로피, 과학기자재 등 다양한 제품을 최고의 품질로 촬영합니다
            </p>
          </div>
          {/* <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">25+</span>
              <span className="stat-label">년 경력</span>
            </div>
            <div className="stat">
              <span className="stat-value">2,000+</span>
              <span className="stat-label">촬영 실적</span>
            </div>
            <div className="stat">
              <span className="stat-value">1~3일</span>
              <span className="stat-label">빠른 납품</span>
            </div>
          </div> */}
        </div>

        {/* Services Grid */}
        <div className="services-section">
          <div className="section-header">
            <span className="section-tag">SERVICES</span>
            <h2>촬영 서비스</h2>
            <p>각 제품의 특성에 맞는 최적의 라이팅과 앵글로 촬영합니다</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={service.id} className="service-card">
                <div className="card-header">
                  <span className="card-number">0{index + 1}</span>
                  <span className="card-en">{service.nameEn}</span>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{service.name}</h3>
                  <p className="card-desc">{service.description}</p>

                  <div className="card-price-box">
                    <span className="price-label">촬영가</span>
                    <span className="price-value">{service.basePrice}</span>
                  </div>

                  <Link href="/contact" className="card-button">
                    문의하기
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Section */}
        <div className="equipment-section">
          <div className="equipment-content">
            <span className="section-tag">EQUIPMENT</span>
            <h2>실험과학기구 촬영</h2>
            <p>
              의료기기, 전자기기, 산업장비, 측정기기 등<br />
              다양한 과학기자재의 전문 촬영 서비스를 제공합니다.
            </p>
            <ul className="equipment-list">
              <li>의료기기 및 의료용품</li>
              <li>실험실 장비 및 기구</li>
              <li>산업용 장비 및 부품</li>
              <li>측정 및 검사 기기</li>
            </ul>
            <p className="equipment-note">
              * 제품의 크기와 복잡도에 따라 가격이 다르므로<br />
              별도 문의 부탁드립니다.
            </p>
            <Link href="/contact" className="equipment-button">
              견적 문의하기
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Process Section */}
        <div className="process-section">
          <div className="section-header">
            <span className="section-tag">PROCESS</span>
            <h2>촬영 프로세스</h2>
          </div>

          <div className="process-steps">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-info">
                <h4>상담 및 견적</h4>
                <p>제품 확인 후 고정 가격 안내</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-info">
                <h4>제품 수령</h4>
                <p>방문 또는 택배 접수</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-info">
                <h4>전문 촬영</h4>
                <p>최적의 라이팅과 앵글</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <div className="step-info">
                <h4>보정 및 납품</h4>
                <p>당일~3일 내 파일 전달</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <span className="cta-text">제품 촬영이 필요하신가요?</span>
          <Link href="/contact" className="btn-primary">
            무료 상담 신청
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      <style>{`
        .services-page {
          min-height: 100vh;
          background: var(--bg-primary);
        }

        /* Hero Section */
        .hero-section {
          padding: 120px 48px 60px;
          text-align: center;
          border-bottom: 1px solid var(--border-color);
        }

        .hero-content {
          max-width: 700px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          background: var(--orange);
          color: white;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 300;
          line-height: 1.3;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .hero-title span {
          font-weight: 700;
          color: var(--orange);
        }

        .hero-description {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        /* Section Header */
        .section-header {
          margin-bottom: 32px;
        }

        .section-tag {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(255,107,53,0.1);
          color: var(--orange);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .section-header h2 {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .section-header p {
          font-size: 15px;
          color: var(--text-muted);
        }

        /* Services Section */
        .services-section {
          padding: 60px 48px;
          border-bottom: 1px solid var(--border-color);
        }

        .services-grid {
          display: grid;
          gap: 0;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .service-card {
          display: flex;
          flex-direction: column;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .service-card:hover {
          z-index: 2;
          border-color: var(--orange);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border-color);
        }

        .card-number {
          font-size: 20px;
          font-weight: 700;
          color: var(--orange);
        }

        .card-en {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .card-content {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .card-desc {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 16px;
          flex: 1;
        }

        .card-price-box {
          display: flex;
          align-items: baseline;
          gap: 8px;
          padding: 12px 16px;
          background: var(--bg-secondary);
          margin-bottom: 16px;
        }

        .price-label {
          font-size: 12px;
          color: var(--text-muted);
        }

        .price-value {
          font-size: 20px;
          font-weight: 700;
          color: var(--orange);
        }

        .card-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 12px;
          background: var(--orange);
          color: white;
          font-size: 14px;
          font-weight: 600;
          border: none;
          text-decoration: none;
          transition: all 0.3s;
          margin-top: auto;
        }

        .card-button:hover {
          background: #e55a25;
        }

        /* Equipment Section */
        .equipment-section {
          padding: 60px 48px;
          border-bottom: 1px solid var(--border-color);
        }

        .equipment-content {
          max-width: 800px;
        }

        .equipment-content .section-tag {
          margin-bottom: 12px;
        }

        .equipment-content h2 {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .equipment-content p {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .equipment-list {
          list-style: none;
          padding: 0;
          margin: 0 0 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px 20px;
        }

        .equipment-list li {
          position: relative;
          padding-left: 14px;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .equipment-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 7px;
          width: 5px;
          height: 5px;
          background: var(--orange);
        }

        .equipment-note {
          font-size: 13px;
          color: var(--text-muted);
        }

        .equipment-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: var(--orange);
          color: white;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          margin-top: 20px;
        }

        .equipment-button:hover {
          background: #e55a25;
        }

        /* Process Section */
        .process-section {
          padding: 60px 48px;
          border-bottom: 1px solid var(--border-color);
        }

        .process-steps {
          display: grid;
          gap: 1px;
          background: var(--border-color);
        }

        @media (min-width: 768px) {
          .process-steps {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .step {
          display: flex;
          flex-direction: column;
          padding: 24px 20px;
          background: var(--bg-primary);
          transition: background 0.3s ease;
        }

        .step:hover {
          background: var(--bg-secondary);
        }

        .step-num {
          font-size: 32px;
          font-weight: 700;
          color: var(--orange);
          margin-bottom: 12px;
          line-height: 1;
        }

        .step-info h4 {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .step-info p {
          font-size: 13px;
          color: var(--text-muted);
        }

        /* CTA Section */
        .cta-section {
          padding: 40px 48px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .cta-text {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: var(--orange);
          color: white;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          background: #e55a25;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hero-section {
            padding: 100px 24px 40px;
          }

          .services-section,
          .equipment-section,
          .process-section {
            padding: 40px 24px;
          }

          .cta-section {
            padding: 32px 24px;
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
