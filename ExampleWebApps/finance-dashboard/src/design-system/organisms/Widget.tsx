import Card from "../atoms/Card";
import Text from '../atoms/Text';
import { colors } from '../atoms/ColorPalette';
import Button from "../atoms/Button";

interface WidgetProps {
    title: string;
    value: string | number;
    description?: string;
    color?: string;
    route?: string;
    buttonText?: string;
}

export default function Widget({ title, value, description, color = colors.primary, route, buttonText }: WidgetProps) {
    return (
        <Card style={{ borderLeft: `5px solid ${color}`, color: colors.white, padding: '1.5rem', cursor: route ? 'pointer' : 'default' }}>
            <Text variant="heading">{title}</Text>
            <Text variant="body">{description}</Text>
            <Text variant="subheading">{value}</Text>

            <Button variant="secondary" style={{ marginTop: '1rem' }} onClick={() => route && window.location.assign(route)}>
                {buttonText || 'Go'}
            </Button>
        </Card>
    );
}