interface SectionHeaderProps {
  number: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeader({
  number,
  title,
  description,
  center = false,
}: SectionHeaderProps) {
  return (
    <div
      style={{
        marginBottom: '48px',
        textAlign: center ? 'center' : 'left',
      }}
    >
      <div
        style={{
          marginBottom: '8px',
          fontSize: '14px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'var(--orange)',
        }}
      >
        // {number}
      </div>
      <h2
        style={{
          marginBottom: '12px',
          fontSize: '32px',
          fontWeight: 800,
          color: 'var(--text-primary)',
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            maxWidth: center ? '500px' : '600px',
            margin: center ? '0 auto' : '0',
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
          }}
          dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }}
        />
      )}
    </div>
  );
}
