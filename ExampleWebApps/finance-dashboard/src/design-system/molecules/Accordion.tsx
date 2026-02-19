import { useState } from 'react';
import Text from '../atoms/Text';
import { colors } from '../atoms/ColorPalette';

interface AccordionProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

export default function Accordion({ title, subtitle, children }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div
            style={{
                marginBottom: '1rem',
                borderRadius: '6px',
                overflow: 'hidden',
                backgroundColor: 'white',
            }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    padding: '1rem',
                    backgroundColor: colors.primary,
                    color: 'white',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                <span>{title}</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>
                    {subtitle} {isOpen ? '▾' : '▸'}
                </span>
            </button>

            {isOpen && (
                <div style={{ padding: '1rem', backgroundColor: colors.backgroundContainer }}>
                    {children}
                </div>
            )}
        </div>
    );
}
