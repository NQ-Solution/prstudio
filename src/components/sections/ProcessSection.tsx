'use client';

import { processSteps } from '@/data';

export default function ProcessSection() {
  return (
    <>
      <section
        id="process"
        style={{
          width: '100%',
          backgroundColor: 'var(--bg-primary)',
          padding: '80px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          {/* Section Header */}
          <div style={{ marginBottom: '48px' }}>
            <p
              style={{
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--orange)',
              }}
            >
              003 PROCESS
            </p>
            <h2
              style={{
                marginBottom: '16px',
                fontSize: '36px',
                fontWeight: 800,
                color: 'var(--text-primary)',
              }}
            >
              작업 프로세스
            </h2>
            <p
              style={{
                maxWidth: '500px',
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
              }}
            >
              고정 가격제로 투명하게, 체계적인 작업 과정으로 최상의 결과를 보장합니다.
            </p>
          </div>

          {/* Process Steps */}
          <div className="process-grid">
            {/* Connection Line */}
            <div className="connection-line" />

            {processSteps.map((step) => (
              <div key={step.number} style={{ position: 'relative', textAlign: 'center' }}>
                {/* Step Number Circle */}
                <div
                  style={{
                    position: 'relative',
                    margin: '0 auto 16px',
                    display: 'flex',
                    height: '64px',
                    width: '64px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    border: '2px solid var(--orange)',
                    backgroundColor: 'var(--bg-secondary)',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--orange)',
                  }}
                >
                  {step.number}
                </div>

                {/* Step Content */}
                <h3
                  style={{
                    marginBottom: '8px',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: 'var(--text-muted)',
                  }}
                >
                  {step.description.replace(/\n/g, ' ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .process-grid {
          position: relative;
          display: grid;
          gap: 32px;
          grid-template-columns: repeat(2, 1fr);
        }
        .connection-line {
          display: none;
        }
        @media (min-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .connection-line {
            display: block;
            position: absolute;
            left: 12%;
            right: 12%;
            top: 32px;
            height: 2px;
            background-color: rgba(255,107,53,0.3);
          }
        }
      `}</style>
    </>
  );
}
