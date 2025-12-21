'use client';

import Image from 'next/image';

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  label?: string;
  code?: string;
  showOverlay?: boolean;
  priority?: boolean;
}

export default function ImagePlaceholder({
  src,
  alt = '이미지',
  label,
  code,
  showOverlay = true,
  priority = false,
}: ImagePlaceholderProps) {
  // 이미지가 있는 경우
  if (src) {
    return (
      <>
        <div className="image-container">
          <Image
            src={src}
            alt={alt}
            fill
            className="image-content"
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {showOverlay && (label || code) && (
            <div className="image-overlay">
              {label && (
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'white' }}>
                  {label}
                </h3>
              )}
              {code && (
                <p style={{ fontSize: '14px', color: 'var(--orange)' }}>{code}</p>
              )}
            </div>
          )}
        </div>
        <style>{`
          .image-container {
            position: relative;
            overflow: hidden;
            aspect-ratio: 1;
            width: 100%;
            height: 100%;
            background: transparent;
            transition: background-color 0.3s, box-shadow 0.3s;
          }

          /* Dark mode - 어두운 배경으로 흰 배경 이미지와 시각적 분리 */
          [data-theme="dark"] .image-container {
            background: #2a2a2a;
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
          }

          .image-content {
            object-fit: cover;
            transition: transform 0.5s, filter 0.3s;
            padding: 8px;
          }

          /* Dark mode - 밝기와 대비 감소로 눈 피로 완화 */
          [data-theme="dark"] .image-content {
            filter: brightness(0.9) contrast(0.95);
          }

          .image-container:hover .image-content {
            transform: scale(1.05);
          }

          /* Dark mode hover - 약간 더 밝게 */
          [data-theme="dark"] .image-container:hover .image-content {
            filter: brightness(0.93) contrast(0.97);
          }

          .image-overlay {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
            padding: 16px;
            opacity: 0;
            transition: opacity 0.3s;
          }
          .image-container:hover .image-overlay {
            opacity: 1;
          }
        `}</style>
      </>
    );
  }

  // 이미지가 없는 경우 (플레이스홀더)
  return (
    <>
      <div className="placeholder-container">
        {/* 배경 패턴 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 107, 53, 0.1) 10px,
              rgba(255, 107, 53, 0.1) 20px
            )`,
          }}
        />

        {/* 중앙 아이콘/텍스트 */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div
            style={{
              marginBottom: '8px',
              fontSize: '48px',
              fontWeight: 700,
              color: 'var(--border-color)',
            }}
          >
            {code ? code.split('-')[1] || '001' : '000'}
          </div>
          {label && (
            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{label}</p>
          )}
        </div>

        {/* 이미지 추가 힌트 */}
        <div
          style={{
            position: 'absolute',
            right: '8px',
            top: '8px',
            backgroundColor: 'rgba(255,107,53,0.2)',
            padding: '4px 8px',
            fontSize: '10px',
            color: 'var(--orange)',
          }}
        >
          이미지 추가 필요
        </div>
      </div>
      <style>{`
        .placeholder-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          width: 100%;
          height: 100%;
          background: var(--bg-secondary);
        }
      `}</style>
    </>
  );
}
