import Link from 'next/link';
import { contactInfo } from '@/data';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Grid */}
          <div className="footer-grid">
            {/* Menu Links */}
            <div className="footer-group">
              <h4 className="group-title">메뉴</h4>
              <ul className="group-links">
                <li><Link href="/" className="footer-link">홈</Link></li>
                <li><Link href="/jewelry" className="footer-link">주얼리 촬영</Link></li>
                <li><Link href="/portfolio" className="footer-link">포트폴리오</Link></li>
                <li><Link href="/contact" className="footer-link">문의하기</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-group">
              <h4 className="group-title">연락처</h4>
              <ul className="group-links">
                <li><a href={contactInfo.phone.link} className="footer-link"><span className="contact-label">T.</span> {contactInfo.phone.display}</a></li>
                <li><a href={contactInfo.email.link} className="footer-link"><span className="contact-label">E.</span> {contactInfo.email.address}</a></li>
                <li><span className="footer-text"><span className="contact-label">H.</span> {contactInfo.hours.weekday}</span></li>
              </ul>
            </div>

          </div>

          {/* Business Info */}
          <div className="footer-business">
            <span>상호: {contactInfo.business.name}</span>
            {contactInfo.business.ceo && <span>대표: {contactInfo.business.ceo}</span>}
            {contactInfo.business.registrationNumber && <span>사업자등록번호: {contactInfo.business.registrationNumber}</span>}
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} {contactInfo.business.name}. All rights reserved. | Designed & Developed by Nqsolution
          </div>
        </div>
      </footer>

      <style>{`
        .footer {
          width: 100%;
          border-top: 4px solid var(--orange);
          background-color: var(--bg-card);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 24px;
        }

        .footer-grid {
          display: grid;
          gap: 40px;
        }

        .footer-brand {
          margin-bottom: 8px;
        }

        .brand-name {
          margin-bottom: 16px;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }

        .brand-tagline {
          white-space: pre-line;
          font-size: 14px;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .footer-group {
          margin-bottom: 0;
        }

        .group-title {
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--orange);
        }

        .group-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .group-links li {
          margin-bottom: 12px;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: var(--orange);
        }

        .contact-label {
          font-weight: 600;
          color: var(--orange);
        }

        .footer-text {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .footer-business {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 20px;
          padding-top: 32px;
          margin-top: 32px;
          border-top: 1px solid var(--border-color);
          font-size: 12px;
          color: var(--text-muted);
        }

        .footer-business span {
          white-space: nowrap;
        }

        .footer-copyright {
          margin-top: 24px;
          text-align: center;
          font-size: 12px;
          color: var(--text-muted);
        }

        /* Mobile Optimization */
        @media (max-width: 768px) {
          .footer-container {
            padding: 24px 16px 16px;
          }

          .footer-grid {
            gap: 16px;
            grid-template-columns: 1fr 1fr;
          }

          .footer-brand {
            grid-column: 1 / -1;
            margin-bottom: 0;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--border-color);
          }

          .brand-name {
            font-size: 18px;
            margin-bottom: 6px;
          }

          .brand-tagline {
            font-size: 12px;
            line-height: 1.5;
          }

          .group-title {
            font-size: 11px;
            margin-bottom: 8px;
          }

          .group-links li {
            margin-bottom: 6px;
          }

          .footer-link,
          .footer-text {
            font-size: 12px;
          }

          .footer-business {
            padding-top: 16px;
            margin-top: 16px;
            gap: 4px 16px;
            font-size: 10px;
          }

          .footer-copyright {
            margin-top: 16px;
            font-size: 10px;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 20px 16px 16px;
          }

          .footer-grid {
            gap: 12px;
          }

          .footer-brand {
            padding-bottom: 10px;
          }

          .brand-name {
            font-size: 16px;
            margin-bottom: 4px;
          }

          .brand-tagline {
            font-size: 11px;
            line-height: 1.4;
          }

          .group-title {
            font-size: 10px;
            margin-bottom: 6px;
          }

          .group-links li {
            margin-bottom: 4px;
          }

          .footer-link,
          .footer-text {
            font-size: 11px;
          }

          .footer-business {
            font-size: 9px;
            gap: 4px 12px;
          }

          .footer-copyright {
            margin-top: 12px;
            font-size: 9px;
          }
        }

        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
