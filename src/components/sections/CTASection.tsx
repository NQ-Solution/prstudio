'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <>
      <section className="cta-section">
        {/* Background Elements */}
        <div className="cta-bg-pattern" />
        <div className="cta-bg-gradient" />

        {/* Main Content */}
        <div className="cta-container">
          {/* Left: Badge & Headline */}
          <div className="cta-content">
            <div className="cta-badges">
              <span className="badge badge-primary">국내 1위 누끼 촬영</span>
              <span className="badge badge-secondary">10년 경력</span>
            </div>

            <h2 className="cta-headline">
              <span className="headline-line">정직한 가격,</span>
              <span className="headline-line headline-highlight">완벽한 결과물</span>
            </h2>

            <p className="cta-description">
              숨겨진 비용 없는 <strong>고정 가격제</strong>로 운영합니다.
              <br />
              클릭을 부르는 단 한 장의 사진, 매출을 바꾸는 마법.
            </p>

            {/* Feature List */}
            <div className="cta-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <span>촬영 전 정확한 견적</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <span>추가 비용 없음</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <span>당일~3일 빠른 작업</span>
              </div>
            </div>

            <div className="cta-actions">
              <Link href="/contact" className="cta-btn-primary">
                무료 상담 신청
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/portfolio" className="cta-btn-secondary">
                포트폴리오 보기
              </Link>
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="cta-stats-card">
            <div className="stats-card-header">
              <span className="stats-label">신뢰의 수치</span>
            </div>

            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-number">2,000+</div>
                <div className="stat-text">완료 프로젝트</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">200+</div>
                <div className="stat-text">파트너 브랜드</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">99%</div>
                <div className="stat-text">만족도</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">24h</div>
                <div className="stat-text">최단 납품</div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="trust-badge">
              <div className="trust-icon">★</div>
              <div className="trust-text">
                <strong>누끼 촬영 전문</strong>
                <span>Korea No.1 Jewelry Photography</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      <style>{`
        .cta-section {
          position: relative;
          padding: 120px 0 80px;
          background: var(--bg-secondary);
          overflow: hidden;
        }

        /* Background */
        .cta-bg-pattern {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 2px 2px, rgba(255, 107, 53, 0.05) 1px, transparent 0);
          background-size: 40px 40px;
          opacity: 0.5;
        }

        .cta-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            ellipse 60% 50% at 30% 50%,
            rgba(255, 107, 53, 0.08) 0%,
            transparent 100%
          );
        }

        /* Container */
        .cta-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          gap: 48px;
          align-items: center;
        }

        /* Content */
        .cta-content {
          max-width: 600px;
        }

        .cta-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }

        .badge {
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.05em;
          border-radius: 100px;
        }

        .badge-primary {
          background: linear-gradient(135deg, #FF6B35 0%, #FF8B5A 100%);
          color: white;
        }

        .badge-secondary {
          background: rgba(255, 107, 53, 0.1);
          color: #FF6B35;
          border: 1px solid rgba(255, 107, 53, 0.3);
        }

        .cta-headline {
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 300;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        .headline-line {
          display: block;
          color: var(--text-primary);
        }

        .headline-highlight {
          color: #FF6B35;
          font-weight: 400;
        }

        .cta-description {
          font-size: 17px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }

        .cta-description strong {
          color: #FF6B35;
          font-weight: 600;
        }

        /* Features */
        .cta-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 40px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .feature-icon {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 107, 53, 0.1);
          border-radius: 4px;
          color: #FF6B35;
        }

        .feature-item span {
          font-size: 15px;
          color: var(--text-primary);
        }

        /* Actions */
        .cta-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          background: linear-gradient(135deg, #FF6B35 0%, #FF8B5A 100%);
          color: white;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.3);
        }

        .cta-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(255, 107, 53, 0.4);
        }

        .cta-btn-secondary {
          padding: 18px 36px;
          background: transparent;
          color: var(--text-primary);
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .cta-btn-secondary:hover {
          border-color: #FF6B35;
          color: #FF6B35;
        }

        /* Stats Card */
        .cta-stats-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          padding: 32px;
        }

        .stats-card-header {
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-color);
        }

        .stats-label {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .stat-box {
          text-align: center;
          padding: 20px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
        }

        .stat-number {
          font-size: 32px;
          font-weight: 300;
          color: #FF6B35;
          margin-bottom: 8px;
        }

        .stat-text {
          font-size: 12px;
          color: var(--text-muted);
        }

        /* Trust Badge */
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 107, 53, 0.05) 100%);
          border-left: 3px solid #FF6B35;
        }

        .trust-icon {
          font-size: 32px;
          color: #FF6B35;
        }

        .trust-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .trust-text strong {
          font-size: 15px;
          color: var(--text-primary);
        }

        .trust-text span {
          font-size: 12px;
          color: var(--text-muted);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .cta-section {
            padding: 80px 0 60px;
          }

          .cta-description br {
            display: none;
          }

          .cta-actions {
            flex-direction: column;
          }

          .cta-btn-primary,
          .cta-btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .banner-arrow {
            display: none;
          }

          .banner-content {
            flex-direction: column;
            gap: 8px;
          }
        }

        @media (min-width: 1024px) {
          .cta-container {
            grid-template-columns: 1.2fr 1fr;
            gap: 80px;
          }

          .cta-content {
            max-width: none;
          }
        }
      `}</style>
    </>
  );
}
