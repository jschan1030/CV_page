import type { Expense } from '../types/Expense';


interface TotalExpensesProps {
    expenses: Expense[];
}

export default function TotalExpenses({ expenses }: TotalExpensesProps) {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <div style={{ marginTop: '1rem' }}>
            <h3>Total Expenses: ${total.toFixed(2)}</h3>
        </div>
    );
}
