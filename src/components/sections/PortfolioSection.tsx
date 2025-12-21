'use client';

import Link from 'next/link';
import Image from 'next/image';

const portfolioImages = [
  '/images/jewelry/converted/반지0345.jpg',
  '/images/jewelry/converted/귀걸이0067.jpg',
  '/images/jewelry/converted/목걸이2438.jpg',
  '/images/jewelry/converted/반지1673.jpg',
  '/images/jewelry/converted/귀걸이2459.jpg',
];

const categories = [
  { id: 'all', name: '전체' },
  { id: 'rings', name: '반지' },
  { id: 'necklaces', name: '목걸이' },
  { id: 'earrings', name: '귀걸이' },
];

export default function PortfolioSection() {
  return (
    <>
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-container">
          {/* Section Header */}
          <div className="section-header">
            <div className="header-left">
              <div className="header-badge">
                <span className="badge-line" />
                <span>Portfolio</span>
              </div>
              <h2 className="section-title">
                작업 <span className="title-highlight">결과물</span>
              </h2>
              <p className="section-desc">
                주얼리 누끼 촬영을 중심으로 다양한 제품 촬영 결과물입니다.
              </p>
            </div>
            <Link href="/portfolio" className="view-all-link">
              전체 보기
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-grid">
            {/* Featured Item */}
            <Link href="/portfolio" className="portfolio-card featured">
              <div className="card-image">
                <Image
                  src={portfolioImages[0]}
                  alt="반지 촬영"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="card-overlay">
                <span className="card-category">RINGS</span>
                <h3 className="card-title">다이아몬드 반지</h3>
              </div>
            </Link>

            {/* Grid Items */}
            {portfolioImages.slice(1).map((image, index) => (
              <Link
                key={index}
                href="/portfolio"
                className="portfolio-card"
              >
                <div className="card-image">
                  <Image
                    src={image}
                    alt={`작업물 ${index + 2}`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="card-number">{String(index + 2).padStart(2, '0')}</div>
              </Link>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-value">2,000+</span>
              <span className="stat-label">완료 프로젝트</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">25년+</span>
              <span className="stat-label">촬영 경력</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">200+</span>
              <span className="stat-label">파트너사</span>
            </div>
          </div>


        </div>
      </section>

      <style>{`
        .portfolio-section {
          padding: 120px 0;
          background: var(--bg-secondary);
        }

        .portfolio-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Section Header */
        .section-header {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 48px;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .badge-line {
          width: 40px;
          height: 1px;
          background: var(--accent-primary);
        }

        .header-badge span:last-child {
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-primary);
        }

        .section-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          line-height: 1.2;
          margin: 12px 0;
        }

        .section-title span {
          color: var(--text-primary);
        }

        .title-highlight {
          color: #FF6B35 !important;
        }

        .section-desc {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 600;
          color: #FF6B35;
          text-decoration: none;
          transition: gap 0.3s ease;
        }

        .view-all-link:hover {
          gap: 12px;
        }

        /* Portfolio Grid */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .portfolio-card {
          position: relative;
          background: #f5f5f5;
          border: 1px solid var(--border-color);
          overflow: hidden;
          transition: all 0.3s;
          text-decoration: none;
        }

        .portfolio-card:hover {
          border-color: var(--orange);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(255, 107, 53, 0.15);
        }

        .portfolio-card.featured {
          grid-column: 1 / -1;
          aspect-ratio: 2/1;
        }

        .portfolio-card:not(.featured) {
          aspect-ratio: 1;
        }

        .card-image {
          position: absolute;
          inset: 8px;
        }

        .card-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 24px;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
        }

        .card-category {
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--orange);
        }

        .card-title {
          font-size: 20px;
          font-weight: 700;
          color: white;
          margin-top: 8px;
        }

        .card-number {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 4px 8px;
          background: rgba(0,0,0,0.7);
          color: white;
          font-size: 12px;
          font-weight: 600;
        }

        /* Stats Bar */
        .stats-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
          padding: 32px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          margin-bottom: 32px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          display: block;
          font-size: 28px;
          font-weight: 700;
          color: var(--orange);
        }

        .stat-label {
          display: block;
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border-color);
        }

        /* Categories */
        .categories-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .category-chip {
          padding: 10px 20px;
          font-size: 14px;
          color: var(--text-primary);
          background: transparent;
          border: 1px solid var(--border-color);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .category-chip:hover {
          border-color: #FF6B35;
          color: #FF6B35;
        }

        @media (min-width: 640px) {
          .portfolio-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .portfolio-card.featured {
            grid-column: 1 / 3;
            grid-row: 1 / 3;
            aspect-ratio: 1;
          }
        }

        @media (min-width: 768px) {
          .section-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
          }

          .stats-bar {
            gap: 48px;
          }

          .stat-value {
            font-size: 36px;
          }
        }
      `}</style>
    </>
  );
}
