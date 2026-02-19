import { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';
import Card from '../atoms/Card';
import Text from '../atoms/Text';
import Select from '../atoms/Select';
import type { Expense } from '../../types/Expense';

interface ExpenseBarChartProps {
    expenses: Expense[];
}

type GroupBy = 'category' | 'card' | 'type';

export default function ExpenseBarChart({ expenses }: ExpenseBarChartProps) {
    const [groupBy, setGroupBy] = useState<GroupBy>('category');

    // Group totals using the selected key
    const totals = expenses.reduce<Record<string, number>>((acc, expense) => {
        const key = (expense as any)[groupBy] as string;
        acc[key] = (acc[key] || 0) + expense.amount;
        return acc;
    }, {});

    const data = Object.entries(totals).map(([key, amount]) => ({
        label: key,
        value: amount,
    }));

    // Friendly label for heading
    const headingMap: Record<GroupBy, string> = {
        category: 'Category',
        card: 'Card',
        type: 'Type',
    };

    return (
        <div style={{ width: '100%', height: '400px', marginBottom: '2rem' }}>
            <Card style={{ padding: '1rem', backgroundColor: '#fff', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text variant="heading">Expense Distribution by {headingMap[groupBy]}</Text>
                    <div style={{ width: '220px' }}>
                        <Select value={groupBy} onChange={(e) => setGroupBy(e.target.value as GroupBy)}>
                            <option value="category">Category</option>
                            <option value="card">Card</option>
                            <option value="type">Type</option>
                        </Select>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="label" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="var(--color-primary)" />
                    </BarChart>
                </ResponsiveContainer>
            </Card>

        </div>
    );
}
