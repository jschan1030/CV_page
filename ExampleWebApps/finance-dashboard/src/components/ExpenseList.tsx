import Accordion from '../design-system/molecules/Accordion';
import ExpenseCard from '../design-system/organisms/ExpenseCard';
import Card from '../design-system/atoms/CardContainer';
import type { Expense } from '../types/Expense';
import { colors } from '../design-system/atoms/ColorPalette';

interface ExpenseListProps {
    expenses: Expense[];
}

export default function ExpenseList({ expenses }: ExpenseListProps) {
    const types = ['fixed', 'variable', 'debt'] as const;

    return (
        <div style={{ maxWidth: 'fit-content' }}>
            <h2>Expenses</h2>
            <Card style={{ display: 'flex', flexDirection: 'row', gap: '24px', marginBottom: '1rem', backgroundColor: colors.white }}>
                
                {types.map(type => {
                    const group = expenses.filter(exp => exp.type === type);
                    if (group.length === 0) return null;

                    const title = `${type.charAt(0).toUpperCase()}${type.slice(1)} Expenses`;

                    return (
                        <Accordion
                            key={type}
                            title={title}
                            subtitle={`$${group.reduce((sum, e) => sum + e.amount, 0).toFixed(2)}`}
                        >
                            {group.map(exp => (
                                <ExpenseCard key={exp.id} expense={exp} />
                            ))}
                        </Accordion>
                    );
                })}
            </Card>

        </div>
    );
}
