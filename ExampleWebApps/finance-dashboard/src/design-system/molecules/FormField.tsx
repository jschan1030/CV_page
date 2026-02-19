import Text from '../atoms/Text';
import Input from '../atoms/Input';

interface FormFieldProps {
    label: string;
    children?: React.ReactNode;
}

export default function FormField({ label, children }: FormFieldProps) {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <Text variant="subheading" style={{ marginBottom: '0.25rem' }}>
                {label}
            </Text>
            {children}
        </div>
    );
}