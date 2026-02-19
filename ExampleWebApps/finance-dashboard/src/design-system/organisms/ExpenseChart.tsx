import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import Card from '../atoms/Card';
import Text from '../atoms/Text';
import type { Expense } from '../../types/Expense';

interface ExpenseChartProps {
    expenses: Expense[];
}

const COLORS = [
    '#f5b942', // orange
    '#e04e39', // sunset red
    '#c9a6df', // lavender
    '#b998d3', // soft purple
    '#d7efff', // sky blue
    '#f4f1ec', // eggshell
];

export default function ExpenseChart({ expenses }: ExpenseChartProps) {
    // Group by type instead of category
    const typeTotals = expenses.reduce<Record<string, number>>((acc, expense) => {
        acc[expense.type] = (acc[expense.type] || 0) + expense.amount;
        return acc;
    }, {});

    const data = Object.entries(typeTotals).map(([type, amount]) => ({
        name: type,
        value: amount,
    }));


    return (
        <div style={{ width: '100%', height: '400px', marginBottom: '2rem' }}>
            <Card style={{ padding: '1rem', backgroundColor: '#fff', height: '100%' }}>
                <Text variant="heading">Expense Distribution by Type</Text>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </Card>

        </div>
    );
}
