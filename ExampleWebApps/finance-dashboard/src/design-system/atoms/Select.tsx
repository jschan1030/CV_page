import { colors } from './ColorPalette';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { }

export default function Select(props: SelectProps) {
    return (
        <select
            style={{
                padding: '0.5rem',
                borderRadius: '4px',
                border: `1px solid ${colors.primary}`,
                outline: 'none',
                fontSize: '1rem',
                width: '100%',
                backgroundColor: 'white',
                color: colors.text,
                boxSizing: 'border-box',
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='${encodeURIComponent(
                    colors.primary
                )}' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 14l-6-6h12l-6 6z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem center',
                backgroundSize: '1rem',
            }}
            {...props}
        />
    );
}
