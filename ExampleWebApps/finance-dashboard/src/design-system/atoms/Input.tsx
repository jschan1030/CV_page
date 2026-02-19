import { colors } from './ColorPalette';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input
      style={{
        padding: '0.5rem',
        borderRadius: '4px',
        border: `1px solid ${colors.primary}`,
        outline: 'none',
        fontSize: '1rem',
        width: '100%',
        boxSizing: 'border-box',
      }}
      {...props}
    />
  );
}
