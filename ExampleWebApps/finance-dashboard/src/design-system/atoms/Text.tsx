import { colors } from './ColorPalette';

interface TextProps {
    children: React.ReactNode;
    variant?: 'heading' | 'subheading' | 'body';
    style?: React.CSSProperties;
}

export default function Text({ children, variant = 'body', style }: TextProps) {
    const styles: Record<string, React.CSSProperties> = {
        heading: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: colors.text,
        },
        subheading: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '0.75rem',
            color: colors.text,
        },
        body: {
            fontSize: '1rem',
            color: colors.text,
        },
    };

    return <div style={{ ...styles[variant], ...style }}>{children}</div>;
}
