'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { contactInfo } from '@/data';

export default function ContactPage() {
  const [activeMethod, setActiveMethod] = useState<'phone' | 'kakao' | 'email'>('phone');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  return (
    <>
      <section className="contact-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-bg-pattern" />
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-line" />
              <span>CONTACT US</span>
            </div>
            <h1 className="hero-title">
              <span>문의하기</span>
            </h1>
            <p className="hero-description">
              촬영 관련 문의사항이 있으시면 편하게 연락해주세요.<br />
              친절하고 신속하게 답변드리겠습니다.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Reference Tip */}
          <div className="reference-tip">
            <span className="tip-icon">TIP</span>
            <span>포트폴리오에서 마음에 드는 사진 번호를 알려주시면 더 빠른 상담이 가능합니다</span>
            <Link href="/portfolio" className="tip-link">포트폴리오 보기</Link>
          </div>

          <div className="contact-grid">
            {/* Left Side - Contact Methods */}
            <div className="contact-methods">
              {/* Method Tabs Header */}
              <div className="tabs-header">
                <h2 className="tabs-title">연락 방법</h2>
                <span className="tabs-subtitle">Contact Methods</span>
              </div>

              {/* Method Tabs */}
              <div className="method-tabs">
                <button
                  className={`method-tab ${activeMethod === 'phone' ? 'active' : ''}`}
                  onClick={() => setActiveMethod('phone')}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <span>전화</span>
                </button>
                <button
                  className={`method-tab ${activeMethod === 'kakao' ? 'active' : ''}`}
                  onClick={() => setActiveMethod('kakao')}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.8 1.8 5.2 4.5 6.6-.3 1.1-1 3.4-1 3.7 0 .3.1.4.3.2.2-.1 3.5-2.3 4.1-2.7.7.1 1.4.2 2.1.2 5.523 0 10-3.477 10-7.8S17.523 3 12 3z"/>
                  </svg>
                  <span>카카오톡</span>
                </button>
                <button
                  className={`method-tab ${activeMethod === 'email' ? 'active' : ''}`}
                  onClick={() => setActiveMethod('email')}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>이메일</span>
                </button>
              </div>

              {/* Method Details */}
              <div className="method-details">
                {activeMethod === 'phone' && (
                  <div className="method-content">
                    <div className="contact-display">
                      <span className="contact-label">전화번호</span>
                      <span className="contact-value">{contactInfo.phone.display}</span>
                      <span className="contact-hours">{contactInfo.phone.hours}</span>
                    </div>
                    <div className="contact-actions">
                      <a href={contactInfo.phone.link} className="action-btn primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                        전화 걸기
                      </a>
                      <button
                        className={`action-btn secondary ${copiedText === 'phone' ? 'copied' : ''}`}
                        onClick={() => handleCopy(contactInfo.phone.display, 'phone')}
                      >
                        {copiedText === 'phone' ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                          </svg>
                        )}
                        {copiedText === 'phone' ? '복사됨' : '복사하기'}
                      </button>
                    </div>
                  </div>
                )}

                {activeMethod === 'kakao' && (
                  <div className="method-content">
                    <div className="contact-display kakao">
                      <span className="contact-label">카카오톡 ID</span>
                      <span className="contact-value">{contactInfo.kakao.id}</span>
                      <span className="contact-hours">{contactInfo.kakao.hours}</span>
                    </div>
                    <div className="contact-actions">
                      <a href={contactInfo.kakao.link} className="action-btn primary kakao">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.8 1.8 5.2 4.5 6.6-.3 1.1-1 3.4-1 3.7 0 .3.1.4.3.2.2-.1 3.5-2.3 4.1-2.7.7.1 1.4.2 2.1.2 5.523 0 10-3.477 10-7.8S17.523 3 12 3z"/>
                        </svg>
                        채팅 시작
                      </a>
                      <button
                        className={`action-btn secondary ${copiedText === 'kakao' ? 'copied' : ''}`}
                        onClick={() => handleCopy(contactInfo.kakao.id, 'kakao')}
                      >
                        {copiedText === 'kakao' ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                          </svg>
                        )}
                        {copiedText === 'kakao' ? '복사됨' : '복사하기'}
                      </button>
                    </div>
                  </div>
                )}

                {activeMethod === 'email' && (
                  <div className="method-content">
                    <div className="contact-display">
                      <span className="contact-label">이메일 주소</span>
                      <span className="contact-value">{contactInfo.email.address}</span>
                      <span className="contact-hours">{contactInfo.email.hours}</span>
                    </div>
                    <div className="contact-actions">
                      <a href={contactInfo.email.link} className="action-btn primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        이메일 보내기
                      </a>
                      <button
                        className={`action-btn secondary ${copiedText === 'email' ? 'copied' : ''}`}
                        onClick={() => handleCopy(contactInfo.email.address, 'email')}
                      >
                        {copiedText === 'email' ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                          </svg>
                        )}
                        {copiedText === 'email' ? '복사됨' : '복사하기'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Links */}

            </div>

            {/* Right Side - Info Card */}
            <div className="info-card">
              <div className="card-header">
                <Image
                  src="/images/logo/PRlogo.svg"
                  alt={contactInfo.business.name}
                  width={180}
                  height={300}
                  className="contact-logo"
                />
                <div className="company-info">
                  <h3>{contactInfo.business.name}</h3>
                  <p>{contactInfo.business.nameEn}</p>
                </div>
              </div>

              <div className="card-body">
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="info-text">
                    <span className="info-label">Location</span>
                    <span className="info-value">{contactInfo.address.full}</span>
                    <span className="info-sub">{contactInfo.address.building} ({contactInfo.address.detail})</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className="info-text">
                    <span className="info-label">Business Hours</span>
                    <span className="info-value">{contactInfo.hours.weekday}</span>
                    <span className="info-sub">{contactInfo.hours.weekend}</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                    </svg>
                  </div>
                  <div className="info-text">
                    <span className="info-label">Pricing</span>
                    <span className="info-value">고정 가격제</span>
                    <span className="info-sub">투명한 가격 정책</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 찾아오는길 Section */}
          <div className="location-section">
            <h2 className="section-title">찾아오는 길</h2>
            <div className="location-card">
              <div className="location-address">
                <div className="address-main">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <strong>{contactInfo.address.full} ({contactInfo.address.building})</strong>
                    <p>{contactInfo.address.detail}</p>
                  </div>
                  <button
                    className={`copy-btn-small ${copiedText === 'address' ? 'copied' : ''}`}
                    onClick={() => handleCopy(`${contactInfo.address.full} ${contactInfo.address.building}`, 'address')}
                  >
                    {copiedText === 'address' ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                      </svg>
                    )}
                    <span>{copiedText === 'address' ? '복사됨' : '주소 복사'}</span>
                  </button>
                </div>
                <div className="address-subway">
                  <div className="subway-badge line-1">{contactInfo.subway.lines[0].charAt(0)}</div>
                  <div className="subway-badge line-3">{contactInfo.subway.lines[1].charAt(0)}</div>
                  <div className="subway-badge line-5">{contactInfo.subway.lines[2].charAt(0)}</div>
                  <span>{contactInfo.subway.station} 하차</span>
                </div>
              </div>

              <div className="location-map">
                <div className="map-visual">
                  {/* 지도 시각화 */}
                  <div className="map-container">
                    <div className="map-road horizontal main-road">
                      <span className="road-label left">창덕궁</span>
                      <span className="road-label right">종로5가</span>
                    </div>
                    <div className="map-road vertical left-road">
                      <span className="road-label top">종묘</span>
                    </div>
                    <div className="map-road vertical right-road"></div>

                    {/* 종로3가역 - 보라색 (1,3,5호선) */}
                    <div className="station station-left">
                      <div className="station-circle purple">종로3가역</div>
                    </div>

                    {/* 종로3가역 - 주황색 (3호선) */}
                    <div className="station station-right">
                      <div className="station-circle orange">종로3가역</div>
                    </div>

                    {/* 포토인쇄랜드 위치 - 보라색역과 낙원상가 사이 */}
                    <div className="photoland-marker">
                      <div className="marker-building">
                        <span className="building-name">포토인쇄랜드</span>
                        <span className="building-detail">드래곤팰리스 5층 509호</span>
                      </div>
                    </div>

                    {/* 랜드마크 */}
                    <div className="landmark jewelry-town">
                      <span>주얼리타운 봉익동</span>
                    </div>
                    <div className="landmark nakwon">
                      <span>낙원상가</span>
                    </div>
                  </div>
                </div>

                <div className="map-directions">
                  <h4>오시는 방법</h4>
                  <ul>
                    <li><strong>지하철:</strong> {contactInfo.subway.station} {contactInfo.subway.exit}</li>
                    <li><strong>버스:</strong> {contactInfo.subway.station} 정류장 하차</li>
                    <li><strong>주차:</strong> 건물 내 주차 가능 (유료)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h2 className="section-title">자주 묻는 질문</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>Q. 촬영 비용은 어떻게 되나요?</h4>
                <p>고정 가격제로 운영됩니다. 제품 종류와 수량에 따라 상담 시 안내드립니다.</p>
              </div>
              <div className="faq-item">
                <h4>Q. 납품까지 얼마나 걸리나요?</h4>
                <p>일반적으로 촬영 후 당일~3일 이내에 보정된 파일을 전달해 드립니다.</p>
              </div>
              <div className="faq-item">
                <h4>Q. 제품 수령은 어떻게 하나요?</h4>
                <p>직접 방문 또는 택배 수령 모두 가능합니다. 택배비는 별도입니다.</p>
              </div>
              <div className="faq-item">
                <h4>Q. 어떤 파일 형식으로 받나요?</h4>
                <p>기본 JPG/PNG, 필요시 TIFF/PSD 등 원하시는 형식으로 제공합니다.</p>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="back-section">
            <Link href="/" className="back-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
          min-height: 100vh;
          background: var(--bg-primary);
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          padding: 120px 24px 60px;
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          overflow: hidden;
        }

        .hero-bg-pattern {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 2px 2px, rgba(255, 107, 53, 0.08) 1px, transparent 0);
          background-size: 40px 40px;
        }

        .hero-content {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .badge-line {
          width: 40px;
          height: 1px;
          background: var(--orange);
        }

        .hero-badge span:last-child {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--orange);
        }

        .hero-title {
          font-size: clamp(36px, 7vw, 52px);
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .hero-description {
          font-size: 16px;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .hero-description br {
          display: none;
        }

        /* Main Content */
        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 24px 100px;
        }

        /* Reference Tip */
        .reference-tip {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          padding: 16px 20px;
          background: var(--bg-secondary);
          border-left: 3px solid var(--orange);
          margin-bottom: 32px;
        }

        .reference-tip .tip-icon {
          padding: 4px 10px;
          background: var(--orange);
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .reference-tip span:nth-child(2) {
          font-size: 14px;
          color: var(--text-secondary);
          flex: 1;
        }

        .reference-tip .tip-link {
          font-size: 13px;
          font-weight: 600;
          color: var(--orange);
          text-decoration: none;
        }

        .reference-tip .tip-link:hover {
          text-decoration: underline;
        }

        .section-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 24px;
        }

        /* Contact Grid */
        .contact-grid {
          display: grid;
          gap: 24px;
          margin-bottom: 80px;
          align-items: stretch;
        }

        /* Contact Methods */
        .contact-methods {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .tabs-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px;
          background: linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,107,53,0.05));
          border-radius: 12px 12px 0 0;
        }

        .tabs-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .tabs-subtitle {
          font-size: 12px;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .method-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 24px;
          padding: 16px 24px 24px;
          background: var(--bg-tertiary);
          border-radius: 0 0 12px 12px;
        }

        .method-tab {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 12px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .method-tab:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        .method-tab.active {
          background: rgba(255,107,53,0.1);
          border-color: var(--orange);
          color: var(--orange);
        }

        .method-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .method-content {
          padding: 16px 0;
        }

        .contact-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          margin-bottom: 16px;
        }

        .contact-display.kakao {
          background: #FEE500;
          border-color: #FEE500;
        }

        .contact-label {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--orange);
          margin-bottom: 8px;
        }

        .contact-display.kakao .contact-label {
          color: #3C1E1E;
        }

        .contact-display.kakao .contact-value {
          color: #3C1E1E;
        }

        .contact-display.kakao .contact-hours {
          color: #5C3E3E;
        }

        .contact-value {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .contact-hours {
          font-size: 13px;
          color: var(--text-muted);
        }

        .contact-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 16px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .action-btn.primary {
          background: var(--orange);
          border: none;
          color: white;
        }

        .action-btn.primary:hover {
          background: #e55a25;
          transform: translateY(-1px);
        }

        .action-btn.primary.kakao {
          background: #FEE500;
          color: #3C1E1E;
        }

        .action-btn.primary.kakao:hover {
          background: #F5DC00;
        }

        .action-btn.secondary {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        .action-btn.secondary:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        .action-btn.secondary.copied {
          background: rgba(34, 197, 94, 0.1);
          border-color: #22c55e;
          color: #22c55e;
        }

        /* 작은 복사 버튼 (주소용) */
        .copy-btn-small {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
          margin-left: auto;
          flex-shrink: 0;
        }

        .copy-btn-small:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        .copy-btn-small.copied {
          background: rgba(34, 197, 94, 0.1);
          border-color: #22c55e;
          color: #22c55e;
        }

        /* Social Section */
        .social-section {
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid var(--border-color);
        }

        .social-section h4 {
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 16px;
          text-align: center;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s;
        }

        .social-link:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        /* Info Card */
        .info-card {
          background: var(--bg-secondary);
          border: 2px solid var(--orange);
          border-radius: 16px;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          background: linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,107,53,0.05));
        }

        .contact-logo {
          height: 60px;
          width: auto;
          transition: filter 0.3s;
        }

        [data-theme="dark"] .contact-logo {
          filter: invert(1) brightness(1.2);
        }

        .company-info h3 {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .company-info p {
          font-size: 12px;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .card-body {
          padding: 24px 32px;
          flex: 1;
        }

        .info-item {
          display: flex;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid var(--border-color);
        }

        .info-item:last-child {
          border-bottom: none;
        }

        .info-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,107,53,0.1);
          border-radius: 10px;
          color: var(--orange);
          flex-shrink: 0;
        }

        .info-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .info-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--orange);
        }

        .info-value {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .info-sub {
          font-size: 13px;
          color: var(--text-muted);
        }

        .card-footer {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          padding: 24px 32px;
          background: var(--bg-tertiary);
          border-top: 1px solid var(--border-color);
        }

        .footer-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.3s;
        }

        .footer-badge:hover {
          border-color: var(--orange);
          transform: translateY(-2px);
        }

        .footer-badge svg {
          color: var(--orange);
        }

        /* Location Section */
        .location-section {
          margin-bottom: 80px;
        }

        .location-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          overflow: hidden;
        }

        .location-address {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 24px;
          background: linear-gradient(135deg, rgba(255,107,53,0.08), transparent);
          border-bottom: 1px solid var(--border-color);
        }

        .address-main {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .address-main svg {
          color: var(--orange);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .address-main strong {
          display: block;
          font-size: 16px;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .address-main p {
          font-size: 14px;
          color: var(--text-muted);
        }

        .address-subway {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: 36px;
        }

        .subway-badge {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 12px;
          font-weight: 700;
          color: white;
        }

        .subway-badge.line-1 { background: #0052A4; }
        .subway-badge.line-3 { background: #EF7C1C; }
        .subway-badge.line-5 { background: #996CAC; }

        .address-subway > span {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .location-map {
          padding: 24px;
        }

        .map-visual {
          position: relative;
          background: #f8f9fa;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 24px;
          margin-bottom: 24px;
          min-height: 450px;
          overflow: hidden;
        }

        [data-theme="dark"] .map-visual {
          background: var(--bg-tertiary);
        }

        .map-container {
          position: relative;
          width: 100%;
          height: 420px;
        }

        /* 도로 */
        .map-road {
          position: absolute;
          background: #ddd;
        }

        [data-theme="dark"] .map-road {
          background: #444;
        }

        .map-road.horizontal {
          height: 20px;
          left: 0;
          right: 0;
          top: 25%;
          transform: translateY(-50%);
          border-top: 2px dashed #fff;
          border-bottom: 2px dashed #fff;
        }

        .map-road.vertical {
          width: 16px;
          top: 0;
          bottom: 0;
          border-left: 2px dashed #fff;
          border-right: 2px dashed #fff;
        }

        .map-road.left-road {
          left: 25%;
        }

        .map-road.right-road {
          right: 25%;
        }

        .road-label {
          position: absolute;
          font-size: 11px;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .road-label.left { left: 10px; top: 25%; transform: translateY(-50%); }
        .road-label.right { right: 10px; top: 25%; transform: translateY(-50%); }
        .road-label.top { top: 5%; left: 50%; transform: translateX(-50%); }

        /* 역 */
        .station {
          position: absolute;
        }

        .station-left {
          left: 25%;
          top: 25%;
          transform: translate(-50%, -50%);
        }

        .station-right {
          right: 25%;
          top: 25%;
          transform: translate(50%, -50%);
        }

        .station-circle {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 9px;
          font-weight: 700;
          color: white;
          text-align: center;
          line-height: 1.2;
        }

        .station-circle.purple {
          background: #7B68EE;
        }

        .station-circle.orange {
          background: var(--orange);
        }

        .exit-labels {
          display: none;
        }

        /* 포토인쇄랜드 마커 - 보라색역과 낙원상가 사이 (중간) */
        .photoland-marker {
          position: absolute;
          left: 25%;
          top: 55%;
          transform: translate(-50%, -50%);
        }

        .marker-building {
          background: var(--orange);
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(255,107,53,0.4);
        }

        .marker-building::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid var(--orange);
        }

        .building-name {
          display: block;
          font-size: 14px;
          font-weight: 700;
        }

        .building-detail {
          display: block;
          font-size: 11px;
          opacity: 0.9;
          margin-top: 2px;
        }

        /* 랜드마크 */
        .landmark {
          position: absolute;
          font-size: 11px;
          color: var(--text-muted);
          background: rgba(255,255,255,0.9);
          padding: 4px 8px;
          border-radius: 4px;
        }

        [data-theme="dark"] .landmark {
          background: rgba(0,0,0,0.5);
        }

        .landmark.jewelry-town {
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
        }

        .landmark.nakwon {
          bottom: 8%;
          left: 25%;
          transform: translateX(-50%);
          background: #FFE4B5;
          padding: 8px 16px;
          font-weight: 600;
          color: #8B4513;
        }

        [data-theme="dark"] .landmark.nakwon {
          background: #8B4513;
          color: #FFE4B5;
        }

        .map-directions {
          background: var(--bg-tertiary);
          padding: 20px;
          border-radius: 8px;
        }

        .map-directions h4 {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .map-directions ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .map-directions li {
          font-size: 14px;
          color: var(--text-secondary);
          padding: 8px 0;
          border-bottom: 1px solid var(--border-color);
        }

        .map-directions li:last-child {
          border-bottom: none;
        }

        .map-directions strong {
          color: var(--orange);
        }

        @media (min-width: 640px) {
          .location-address {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .address-subway {
            margin-left: 0;
          }
        }

        /* FAQ Section */
        .faq-section {
          margin-bottom: 60px;
        }

        .faq-grid {
          display: grid;
          gap: 16px;
        }

        .faq-item {
          padding: 24px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          transition: all 0.3s;
        }

        .faq-item:hover {
          border-color: var(--orange);
        }

        .faq-item h4 {
          font-size: 15px;
          font-weight: 600;
          color: var(--orange);
          margin-bottom: 12px;
        }

        .faq-item p {
          font-size: 14px;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        /* Back Section */
        .back-section {
          text-align: center;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--text-muted);
          text-decoration: none;
          transition: all 0.3s;
        }

        .back-link:hover {
          color: var(--orange);
          gap: 12px;
        }

        /* Mobile Optimization */
        @media (max-width: 768px) {
          .hero-section {
            padding: 100px 20px 40px;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-description {
            font-size: 15px;
          }

          .main-content {
            padding: 40px 20px 60px;
          }

          .section-title {
            font-size: 18px;
            margin-bottom: 20px;
          }

          .contact-methods,
          .info-card {
            padding: 24px;
          }

          .tabs-header {
            padding: 20px;
          }

          .tabs-title {
            font-size: 18px;
          }

          .method-tabs {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 16px 20px 20px;
          }

          .method-tab {
            padding: 14px 16px;
            font-size: 13px;
          }

          .contact-display {
            padding: 20px;
          }

          .contact-value {
            font-size: 20px;
          }

          .contact-actions {
            gap: 10px;
          }

          .action-btn {
            padding: 12px 14px;
            font-size: 13px;
          }

          .card-header {
            padding: 24px;
            flex-direction: column;
            text-align: center;
          }

          .contact-logo {
            height: 50px !important;
          }

          .company-info h3 {
            font-size: 20px;
          }

          .card-body {
            padding: 20px 24px;
          }

          .info-item {
            padding: 16px 0;
          }

          .card-footer {
            padding: 20px 24px;
            gap: 12px;
          }

          .footer-badge {
            padding: 10px 12px;
            font-size: 12px;
          }

          .location-section {
            margin-bottom: 60px;
          }

          .location-address {
            padding: 20px;
          }

          .location-map {
            padding: 20px;
          }

          .map-visual {
            min-height: 350px;
          }

          .map-container {
            height: 320px;
          }

          .map-directions h4 {
            font-size: 13px;
          }

          .map-directions li {
            font-size: 13px;
          }

          .faq-section {
            margin-bottom: 40px;
          }

          .faq-item {
            padding: 20px;
          }

          .faq-item h4 {
            font-size: 14px;
          }

          .faq-item p {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 90px 16px 30px;
          }

          .main-content {
            padding: 30px 16px 50px;
          }

          .contact-methods,
          .info-card {
            padding: 0;
          }

          .tabs-header {
            padding: 16px 20px;
            gap: 12px;
          }

          .tabs-title {
            font-size: 16px;
          }

          .tabs-subtitle {
            display: none;
          }

          .method-tabs {
            padding: 12px 16px 16px;
          }

          .method-tab {
            padding: 12px;
            gap: 8px;
          }

          .method-tab svg {
            width: 20px;
            height: 20px;
          }

          .contact-display {
            padding: 16px;
          }

          .contact-value {
            font-size: 18px;
          }

          .contact-actions {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .action-btn {
            padding: 12px;
            font-size: 13px;
          }

          .card-footer {
            grid-template-columns: 1fr;
            padding: 16px 20px;
            gap: 10px;
          }

          .footer-badge {
            padding: 10px;
            font-size: 11px;
          }

          .address-subway {
            flex-wrap: wrap;
          }

          .faq-grid {
            gap: 12px;
          }
        }

        /* Responsive */
        @media (min-width: 640px) {
          .hero-description br {
            display: block;
          }

          .method-tabs {
            grid-template-columns: repeat(3, 1fr);
          }

          .faq-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1.2fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
