'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  categories,
  getAllImageItems,
  getTotalImageCount,
  type CategoryType
} from '@/data/portfolioImages';

// 모든 이미지 아이템 가져오기
const allImageItems = getAllImageItems();

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const itemsPerPage = 24;

  // 선택된 카테고리에 따라 이미지 필터링
  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') {
      return allImageItems;
    }
    return allImageItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  // 카테고리별 개수 계산
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryType, number> = {
      all: allImageItems.length,
      rings: 0,
      earrings: 0,
      necklaces: 0,
      bracelets: 0,
      'couple-rings': 0,
      goldbar: 0,
      set: 0,
      watch: 0,
      trophy: 0,
      equipment: 0,
      others: 0,
    };
    allImageItems.forEach(item => {
      counts[item.category]++;
    });
    return counts;
  }, []);

  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = filteredImages.slice(startIndex, startIndex + itemsPerPage);

  // 카테고리 변경 시 첫 페이지로 리셋
  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  const getImageName = (path: string) => {
    const filename = path.split('/').pop() || '';
    return filename.replace('.jpg', '').replace(/-/g, ' ');
  };

  return (
    <>
      <section className="portfolio-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">PORTFOLIO</div>
            <h1 className="hero-title">
              포트폴리오
            </h1>
            <p className="hero-description">
              25년 경력의 제품 촬영 작업물<br />
              총 {getTotalImageCount()}개의 작업 사례
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-section">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
                disabled={categoryCounts[cat.id] === 0}
              >
                <span className="cat-name">{cat.name}</span>
                <span className="cat-count">{categoryCounts[cat.id]}</span>
              </button>
            ))}
          </div>

          <div className="gallery-info">
            <span className="total-count">{filteredImages.length}개 작품</span>
            <span className="page-info">{currentPage} / {totalPages} 페이지</span>
          </div>

          {/* More Works Notice */}
          <div className="more-works-notice">
            <span className="more-icon">+</span>
            <span>이 외에도 <strong>2,000점 이상</strong>의 다양한 주얼리를 촬영했습니다</span>
          </div>

          {/* Reference Tip */}
          <div className="reference-tip">
            <span className="tip-icon">TIP</span>
            <span>문의 시 &quot;반지 023번처럼 촬영해주세요&quot; 라고 번호를 알려주시면 더 빠르게 상담 가능합니다</span>
          </div>

          <div className="gallery-grid">
            {currentImages.map((item, index) => (
              <div
                key={startIndex + index}
                className="gallery-item"
                onClick={() => openModal(item.src)}
              >
                <div className="image-container">
                  <Image
                    src={item.src}
                    alt={getImageName(item.src)}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                    quality={75}
                    placeholder="empty"
                  />
                </div>
                <div className="item-overlay">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                    <path d="M11 8v6M8 11h6"/>
                  </svg>
                </div>
                <div className="item-number">{String(startIndex + index + 1).padStart(3, '0')}</div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <div className="pagination-info">
              {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredImages.length)} / {filteredImages.length}
            </div>

            <div className="pagination-controls">
              {currentPage > 1 && (
                <button
                  className="pagination-btn"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  이전
                </button>
              )}

              <div className="page-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`page-number ${currentPage === page ? 'active' : ''}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {currentPage < totalPages && (
                <button
                  className="pagination-btn"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  다음
                </button>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h3>촬영이 필요하신가요?</h3>
            <p>25년 경력의 전문가가 최적의 촬영 방안을 안내해 드립니다</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn-primary">
                무료 상담 신청
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/jewelry" className="btn-secondary">가격표 보기</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <div className="modal-image">
              <div className="modal-loading-spinner" />
              <Image
                src={selectedImage}
                alt={getImageName(selectedImage)}
                fill
                style={{ objectFit: 'contain' }}
                priority
                quality={90}
              />
            </div>

            <div className="modal-footer">
              <span className="modal-name">{getImageName(selectedImage)}</span>
              <Link href="/contact" className="modal-cta">
                촬영 문의
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .portfolio-page {
          min-height: 100vh;
          background: var(--bg-primary);
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
          padding: 120px 24px 60px;
          text-align: center;
          position: relative;
        }

        [data-theme="dark"] .hero-section {
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(255,107,53,0.9);
          color: white;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(32px, 7vw, 48px);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        [data-theme="dark"] .hero-title {
          color: white;
        }

        .hero-description {
          font-size: 17px;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        [data-theme="dark"] .hero-description {
          color: rgba(255,255,255,0.7);
        }

        /* Gallery Section */
        .gallery-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 24px;
        }

        /* Category Filter */
        .category-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-color);
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .category-btn:hover:not(:disabled) {
          border-color: var(--orange);
          color: var(--orange);
        }

        .category-btn.active {
          background: var(--orange);
          border-color: var(--orange);
          color: white;
        }

        .category-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .cat-name {
          font-weight: 500;
        }

        .cat-count {
          font-size: 12px;
          opacity: 0.7;
        }

        .category-btn.active .cat-count {
          opacity: 1;
        }

        .gallery-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
        }

        .total-count {
          font-size: 16px;
          font-weight: 600;
          color: var(--orange);
        }

        .page-info {
          font-size: 14px;
          color: var(--text-muted);
        }

        .more-works-notice {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px 24px;
          background: rgba(255, 107, 53, 0.08);
          border: 1px dashed rgba(255, 107, 53, 0.3);
          margin-bottom: 32px;
          text-align: center;
        }

        .more-works-notice .more-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: var(--orange);
          color: white;
          font-size: 16px;
          font-weight: 700;
          border-radius: 50%;
        }

        .more-works-notice span:last-child {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .more-works-notice strong {
          color: var(--orange);
          font-weight: 700;
        }

        .reference-tip {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          background: var(--bg-secondary);
          border-left: 3px solid var(--orange);
          margin-bottom: 32px;
        }

        .reference-tip .tip-icon {
          padding: 4px 8px;
          background: var(--orange);
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .reference-tip span:last-child {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          margin-bottom: 48px;
        }

        @media (min-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .gallery-item {
          position: relative;
          aspect-ratio: 1;
          background: var(--bg-secondary);
          cursor: pointer;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .gallery-item:hover {
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
          z-index: 1;
        }

        [data-theme="dark"] .gallery-item:hover {
          box-shadow: 0 16px 48px rgba(255, 107, 53, 0.2);
        }

        .image-container {
          position: absolute;
          inset: 0;
          background: #f8f8f8;
        }

        /* Loading skeleton animation */
        .image-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          animation: skeleton-loading 1.5s infinite;
          z-index: 1;
        }

        @keyframes skeleton-loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        [data-theme="dark"] .image-container {
          background: #1a1a1a;
        }

        [data-theme="dark"] .image-container::before {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
        }

        .image-container img {
          transition: transform 0.5s ease, filter 0.3s ease;
        }

        [data-theme="dark"] .image-container img {
          filter: brightness(0.92) contrast(0.95);
        }

        .gallery-item:hover .image-container img {
          transform: scale(1.08);
        }

        [data-theme="dark"] .gallery-item:hover .image-container img {
          filter: brightness(0.95) contrast(0.97);
        }

        .item-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.5);
          color: white;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .gallery-item:hover .item-overlay {
          opacity: 1;
        }

        .item-number {
          position: absolute;
          bottom: 8px;
          right: 8px;
          padding: 4px 8px;
          background: rgba(0,0,0,0.7);
          color: white;
          font-size: 11px;
          font-weight: 600;
        }

        /* Pagination */
        .pagination {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          padding-top: 32px;
          border-top: 1px solid var(--border-color);
        }

        .pagination-info {
          font-size: 14px;
          color: var(--text-muted);
        }

        .pagination-controls {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .pagination-btn {
          padding: 8px 16px;
          font-size: 14px;
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
        }

        .pagination-btn:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        .page-numbers {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .page-number {
          min-width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 8px;
          font-size: 14px;
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s;
        }

        .page-number:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        .page-number.active {
          background: var(--orange);
          border-color: var(--orange);
          color: white;
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 24px;
          background: var(--bg-secondary);
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-content h3 {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .cta-content p {
          font-size: 16px;
          color: var(--text-secondary);
          margin-bottom: 32px;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
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
        }

        .btn-primary:hover {
          background: #e55a25;
          transform: translateY(-2px);
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
        }

        .btn-secondary:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modal-content {
          position: relative;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }

        .modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.7);
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          z-index: 10;
        }

        .modal-close:hover {
          background: var(--orange);
          border-color: var(--orange);
        }

        .modal-close svg {
          width: 24px;
          height: 24px;
        }

        .modal-image {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          background: #f5f5f5;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .modal-loading-spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 107, 53, 0.2);
          border-top-color: var(--orange);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          z-index: 1;
        }

        @keyframes spin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        [data-theme="dark"] .modal-image {
          background: #2a2a2a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
        }

        .modal-image img {
          padding: 16px;
          position: relative;
          z-index: 2;
        }

        [data-theme="dark"] .modal-image img {
          filter: brightness(0.92) contrast(0.95);
        }

        .modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          margin-top: 16px;
        }

        .modal-name {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
        }

        .modal-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: var(--orange);
          color: white;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .modal-cta:hover {
          background: #e55a25;
        }

        /* Mobile Optimization */
        @media (max-width: 768px) {
          .hero-section {
            padding: 100px 20px 40px;
          }

          .hero-badge {
            font-size: 11px;
            padding: 6px 16px;
          }

          .hero-title {
            font-size: 28px;
            margin-bottom: 12px;
          }

          .hero-description {
            font-size: 15px;
            line-height: 1.6;
          }

          .gallery-section {
            padding: 40px 16px;
          }

          .category-filter {
            padding: 0;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }

          .category-filter::-webkit-scrollbar {
            display: none;
          }

          .category-btn {
            padding: 10px 20px;
            font-size: 13px;
            white-space: nowrap;
          }

          .gallery-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }

          .pagination {
            padding-top: 24px;
            gap: 16px;
          }

          .pagination-info {
            font-size: 12px;
          }

          .pagination-controls {
            gap: 8px;
            width: 100%;
          }

          .pagination-btn {
            padding: 10px 14px;
            font-size: 12px;
          }

          .page-numbers {
            gap: 4px;
            max-width: 100%;
          }

          .page-number {
            min-width: 32px;
            height: 32px;
            font-size: 12px;
            padding: 0 6px;
          }

          .cta-section {
            padding: 60px 20px;
          }

          .cta-content h3 {
            font-size: 22px;
          }

          .cta-content p {
            font-size: 14px;
          }

          .cta-buttons {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
            padding: 14px 24px;
            font-size: 14px;
          }

          .modal-overlay {
            padding: 16px;
          }

          .modal-close {
            width: 40px;
            height: 40px;
            top: 8px;
            right: 8px;
          }

          .modal-close svg {
            width: 20px;
            height: 20px;
          }

          .modal-footer {
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .modal-cta {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: repeat(1, 1fr);
          }

          .hero-stats-container {
            flex-direction: column;
            gap: 16px;
          }

          .page-numbers {
            gap: 4px;
          }

          .page-number {
            width: 28px;
            height: 28px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}
