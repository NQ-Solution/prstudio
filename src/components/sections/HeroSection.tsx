'use client';

import Link from 'next/link';
import Image from 'next/image';
import { heroMainImage } from '@/data/portfolioImages';

export default function HeroSection() {
  return (
    <>
      <section className="hero">
        {/* Diagonal Split with Image */}
        <div className="diagonal-split">
          <Image
            src={heroMainImage}
            alt="포토랜드 촬영"
            fill
            className="hero-image"
            priority
          />
          <div className="diagonal-overlay" />
        </div>

        {/* Main Content */}
        <div className="hero-container">
          <div className="hero-content">
            {/* Subtitle */}
            <div className="hero-subtitle">
              <span className="subtitle-line" />
              <span>Since 2000</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              <span className="headline-main">디테일이</span>
              <span className="headline-accent">
                명품을
                <br />
                만듭니다.
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              최적의 빛, 완벽한 퀄리티.
              <br />
              판매를 위한 솔루션 제공
            </p>

            {/* CTA */}
            <div className="hero-actions">
              <Link href="/contact" className="hero-cta-primary">
                촬영 문의
              </Link>
              <Link href="/portfolio" className="hero-cta-secondary">
                포트폴리오
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">2,000+</div>
                <div className="stat-label">완료 프로젝트</div>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <div className="stat-value">200+</div>
                <div className="stat-label">파트너사</div>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <div className="stat-value">25년+</div>
                <div className="stat-label">경력</div>
              </div>
            </div>
          </div>

          {/* Visual Element - Portfolio Preview */}
          <div className="hero-visual">
            <div className="visual-wrapper">
              {/* Main Image */}
              {/* <div className="main-image">
                <Image
                  src="/images/jewelry/converted/반지0345.jpg"
                  alt="반지 촬영"
                  fill
                  style={{ objectFit: 'contain', background: '#f5f5f5' }}
                />
              </div> */}

              {/* Thumbnail Grid */}
              {/* <div className="thumbnail-grid">
                <div className="thumbnail">
                  <Image
                    src="/images/jewelry/converted/귀걸이0067.jpg"
                    alt="귀걸이"
                    fill
                    style={{ objectFit: 'contain', background: '#f5f5f5' }}
                  />
                </div>
                <div className="thumbnail">
                  <Image
                    src="/images/jewelry/converted/목걸이2438.jpg"
                    alt="목걸이"
                    fill
                    style={{ objectFit: 'contain', background: '#f5f5f5' }}
                  />
                </div>
                <div className="thumbnail">
                  <Image
                    src="/images/jewelry/converted/반지1673.jpg"
                    alt="반지"
                    fill
                    style={{ objectFit: 'contain', background: '#f5f5f5' }}
                  />
                </div>
                <div className="thumbnail">
                  <Image
                    src="/images/jewelry/converted/귀걸이2459.jpg"
                    alt="귀걸이"
                    fill
                    style={{ objectFit: 'contain', background: '#f5f5f5' }}
                  />
                </div>
              </div> */}

              {/* Floating Text */}
              {/* <div className="floating-badge badge-1">
                <span className="badge-text">누끼 전문</span>
              </div>
              <div className="floating-badge badge-2">
                <span className="badge-text">고정 가격</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--bg-primary);
        }

        /* Full Image with Diagonal Overlay */
        .diagonal-split {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .diagonal-split > div:first-child {
          width: 100%;
          height: 100%;
        }

        /* 히어로 이미지 - 대각선 오버레이 바로 옆부터 오른쪽 끝까지 */
        .hero-image {
          object-fit: cover;
          object-position: left center;
          left: calc(25% + 15vh) !important;
          width: calc(75% - 15vh) !important;
        }

        /* 대각선 오버레이 - 화면 크기에 상관없이 일정한 각도 유지 */
        .diagonal-overlay {
          position: absolute;
          inset: 0;
          clip-path: polygon(0 0, calc(25% + 15vh) 0, calc(55% + 15vh) 100%, 0 100%);
          background: var(--bg-primary);
          z-index: 1;
        }


        /* Container */
        .hero-container {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          // margin: 0 auto;
          margin-left: 5%; /* 또는 원하는 값 */
  margin-right: auto;
          padding: 140px 24px 100px;
          display: grid;
          gap: 60px;
          align-items: center;
        }

        /* Content */
        .hero-content {
          max-width: 600px;
        }

        .hero-subtitle {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
        }

        .subtitle-line {
          width: 24px;
          height: 1px;
          background: var(--orange);
        }

        .hero-subtitle span:last-child {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .hero-headline {
          font-size: clamp(42px, 7vw, 72px);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 32px;
        }

        .headline-main {
          display: block;
          color: var(--text-primary);
        }

        .headline-accent {
          display: block;
          color: var(--orange);
          font-weight: 400;
        }

        .headline-accent br {
          display: none;
        }

        .hero-description {
          font-size: 17px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 48px;
          max-width: 500px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .hero-description br {
          display: none;
        }

        [data-theme="light"] .hero-description {
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
        }

        /* Actions */
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 64px;
        }

        .hero-cta-primary {
          padding: 16px 40px;
          background: var(--orange);
          color: white;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .hero-cta-primary:hover {
          background: #e55a25;
          transform: translateY(-2px);
        }

        .hero-cta-secondary {
          padding: 16px 40px;
          background: transparent;
          color: var(--text-primary);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-decoration: none;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .hero-cta-secondary:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        /* Stats */
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .stat {
          text-align: left;
        }

        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: var(--orange);
          line-height: 1;
          margin-bottom: 8px;
          white-space: nowrap;
        }

        .stat-label {
          font-size: 12px;
          font-weight: 400;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border-color);
        }

        /* Visual */
        .hero-visual {
          display: none;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .visual-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
        }

        .main-image {
          aspect-ratio: 4/3;
          border: 1px solid var(--border-color);
          overflow: hidden;
          margin-bottom: 12px;
        }

        .main-image > div {
          width: 100%;
          height: 100%;
        }

        .thumbnail-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .thumbnail {
          aspect-ratio: 1;
          border: 1px solid var(--border-color);
          overflow: hidden;
          transition: all 0.3s;
        }

        .thumbnail:hover {
          border-color: var(--orange);
        }

        .thumbnail > div {
          width: 100%;
          height: 100%;
        }

        /* Floating Badges */
        .floating-badge {
          position: absolute;
          padding: 10px 20px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          backdrop-filter: blur(10px);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--text-primary);
          z-index: 10;
        }

        .badge-1 {
          top: -10px;
          right: 20px;
          animation: float-badge 4s ease-in-out infinite;
        }

        .badge-2 {
          bottom: 80px;
          left: -20px;
          animation: float-badge 4s ease-in-out infinite 2s;
        }

        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          opacity: 0.6;
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            var(--border-color) 100%
          );
          animation: scroll-line 2s ease-in-out infinite;
        }

        @keyframes scroll-line {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .scroll-indicator span {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        /* Responsive - 모바일: 위아래 분할 */
        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            flex-direction: column;
          }

          .hero-container {
            padding: 80px 20px 60px;
            margin-left: 0;
            margin-right: 0;
            order: 2;
            width: 100%;
          }

          /* 모바일: 이미지를 상단에 배치, 대각선 없음 */
          .diagonal-split {
            position: relative;
            width: 100%;
            height: 45vh;
            min-height: 280px;
            max-height: 400px;
            order: 1;
          }

          .diagonal-split::before {
            display: none;
          }

          .diagonal-overlay {
            clip-path: none;
            background: linear-gradient(
              to bottom,
              transparent 0%,
              transparent 50%,
              rgba(10,10,10,0.5) 80%,
              rgba(10,10,10,0.9) 100%
            );
          }

          [data-theme="light"] .diagonal-overlay {
            background: linear-gradient(
              to bottom,
              transparent 0%,
              transparent 50%,
              rgba(250,250,250,0.5) 80%,
              rgba(250,250,250,0.9) 100%
            );
          }

          /* 모바일: 이미지 전체 보이게 */
          .hero-image {
            left: 0 !important;
            width: 100% !important;
            object-position: center center;
          }

          .hero-content {
            max-width: 100%;
            text-align: center;
          }

          .hero-subtitle {
            justify-content: center;
            margin-bottom: 24px;
          }

          .hero-headline {
            margin-bottom: 20px;
          }

          .headline-accent br {
            display: none;
          }

          .hero-description {
            text-shadow: none;
            margin: 0 auto 32px;
            max-width: 400px;
            font-size: 15px;
            line-height: 1.7;
          }

          .hero-actions {
            flex-direction: row;
            justify-content: center;
            gap: 12px;
            margin-bottom: 40px;
            width: 100%;
          }

          .hero-cta-primary,
          .hero-cta-secondary {
            padding: 14px 20px;
            font-size: 13px;
            flex: 1;
            text-align: center;
          }

          .hero-stats {
            justify-content: space-around;
            gap: 16px;
            flex-wrap: nowrap;
            width: 100%;
            max-width: 100%;
            padding: 0 8px;
          }

          .stat {
            text-align: center;
            flex: 1;
            min-width: 0;
          }

          .stat-value {
            font-size: clamp(20px, 5vw, 24px);
            white-space: nowrap;
          }

          .stat-label {
            font-size: clamp(10px, 2.5vw, 11px);
            white-space: nowrap;
          }

          .stat-divider {
            height: 32px;
            flex-shrink: 0;
          }

          .scroll-indicator {
            display: none;
          }
        }

        @media (min-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr 1fr;
            padding: 160px 48px 120px;
          }

          .hero-content {
            max-width: none;
          }

          .hero-visual {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
