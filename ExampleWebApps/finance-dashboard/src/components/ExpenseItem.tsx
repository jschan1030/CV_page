interface ExpenseItemProps {
    name: string;
    amount: number;
    type: string;
    category: string;
    card: string;
  }

  export default function ExpenseItem({ name, amount, type, category, card }: ExpenseItemProps) {
    return (
      <li>
        {name}: ${amount} <em>({type} - {category} - {card})</em>
      </li>
    );
  }
  