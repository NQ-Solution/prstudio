'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/context';

const navItems = [
  { label: '주얼리 촬영', href: '/jewelry' },
  { label: '기타 촬영', href: '/services' },
  { label: '포트폴리오', href: '/portfolio' },
  { label: '문의하기', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
            }}
          >
            <Image
              src="/images/logo/PRlogo.svg"
              alt="포토인쇄랜드"
              width={120}
              height={40}
              className="site-logo"
              priority
            />
            <span
              className="logo-text"
              style={{
                fontSize: '18px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                letterSpacing: '0.02em',
              }}
            >
              포토인쇄랜드
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>
                )}
              </button>
            )}
          </nav>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="mobile-controls">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>
                )}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
              }}
            >
              <span
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: 'var(--text-primary)',
                  transition: 'all 0.3s',
                  transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: 'var(--text-primary)',
                  transition: 'all 0.3s',
                  opacity: isOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: 'var(--text-primary)',
                  transition: 'all 0.3s',
                  transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav
            style={{
              backgroundColor: 'var(--bg-card)',
              borderTop: '1px solid var(--border-color)',
              padding: '16px 24px',
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 500,
                  padding: '12px 0',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: var(--bg-header);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-color);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .site-logo {
          height: 40px;
          width: auto;
          transition: filter 0.3s;
        }

        [data-theme="dark"] .site-logo {
          filter: invert(1) brightness(1.2);
        }

        .logo-text {
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 0 16px;
            height: 60px;
          }

          .site-logo {
            height: 28px;
          }

          .logo-text {
            display: none;
          }

          .site-header {
            position: fixed;
            width: 100%;
          }
        }

        .desktop-nav {
          display: none;
          gap: 32px;
          align-items: center;
        }
        .nav-link {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          padding: 8px 0;
          transition: color 0.2s;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #FF6B35;
          transition: width 0.3s ease;
        }
        .nav-link:hover {
          color: #FF6B35;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .mobile-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .mobile-menu-btn {
          display: flex;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
          .mobile-controls {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
