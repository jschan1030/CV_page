import { colors } from './ColorPalette';

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Card({ children, style }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: colors.white,
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
