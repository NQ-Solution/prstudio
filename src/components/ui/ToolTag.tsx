interface ToolTagProps {
  children: React.ReactNode;
  size?: 'sm' | 'lg';
}

export default function ToolTag({
  children,
  size = 'sm',
}: ToolTagProps) {
  const isLarge = size === 'lg';

  return (
    <span
      style={{
        display: 'inline-block',
        padding: isLarge ? '8px 16px' : '4px 12px',
        fontSize: isLarge ? '12px' : '10px',
        fontWeight: 600,
        backgroundColor: 'rgba(255, 107, 53, 0.1)',
        color: '#FF6B35',
        border: '1px solid #FF6B35',
      }}
    >
      {children}
    </span>
  );
}
