import { colors } from './ColorPalette';

interface CardContainerProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export default function Card({ children, style }: CardContainerProps) {
  // This component serves as a container for card-like elements, providing consistent styling.
  // It is intended to be used to discern where cards are and lie within the design system.
  return (
    <div
      style={{
        backgroundColor: colors.surface,
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