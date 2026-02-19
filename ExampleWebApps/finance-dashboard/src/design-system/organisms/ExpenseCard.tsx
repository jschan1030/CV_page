import Card from '../atoms/Card';
import Text from '../atoms/Text';
import type { Expense } from '../../types/Expense';
import { colors } from '../atoms/ColorPalette';

interface ExpenseCardProps {
  expense: Expense;
}

export default function ExpenseCard({ expense }: ExpenseCardProps) {
  const { name, amount, type, category, card } = expense;

  const typeColors: Record<typeof type, string> = {
    fixed: colors.primary,
    variable: colors.accentGold,
    debt: colors.danger,
  };

  return (
    <Card style={{ borderLeft: `5px solid ${typeColors[type]}` }}>
      <Text variant="subheading">{name}</Text>
      <Text variant="body">Amount: ${amount.toFixed(2)}</Text>
      <Text variant="body">
        <strong>Type:</strong> {type} | <strong>Category:</strong> {category}
      </Text>
      <Text variant="body">
        <strong>Card:</strong> {card}
      </Text>
    </Card>
  );
}
