import { useState } from "react";
import type { Expense } from "../types/Expense";
import { colors } from "../design-system/atoms/ColorPalette";
import Card from "../design-system/atoms/CardContainer";

interface AddExpenseFormProps {
    onAddExpense: (expense: Expense) => void;
    nextId: number;
}

export default function AddExpenseForm({ onAddExpense, nextId }: AddExpenseFormProps) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState<'fixed' | 'variable' | 'debt'>('variable');
    const [category, setCategory] = useState<'housing' | 'food' | 'transportation' | 'utilities' | 'entertainment' | 'insurance' | 'loans' | 'other'>('other');
    const [card, setCard] = useState<'WF Credit Card' | 'WF Debit Card' | 'Chase Credit Card' | 'Sams Club' | 'Best Buy' | 'Cash' | 'Other'>('Other');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!name || !amount) return;

        onAddExpense({
            id: nextId,
            name,
            amount: parseFloat(amount),
            type,
            category,
            card: 'Other', // Default to 'Other' for simplicity
        });

        setName('');
        setAmount('');
    }

    return (
        <Card style={{ maxWidth: '500px', maxHeight: '500px', padding: '1rem', backgroundColor: colors.white }}>
            <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
                <div>
                    <label>
                        Name: &nbsp;
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g., Coffee"
                        />
                    </label>
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                    <label>
                        Amount: &nbsp;
                        <input
                            type="number"
                            step="0.01"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="e.g., 3.50"
                        />
                    </label>
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                    <label>
                        Type: &nbsp;
                        <select value={type} onChange={(e) => setType(e.target.value as typeof type)}>
                            <option value="fixed">Fixed</option>
                            <option value="variable">Variable</option>
                            <option value="debt">Debt</option>
                        </select>
                    </label>
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                    <label>
                        Category: &nbsp;
                        <select value={category} onChange={(e) => setCategory(e.target.value as typeof category)}>
                            <option value="housing">Housing</option>
                            <option value="food">Food</option>
                            <option value="transportation">Transportation</option>
                            <option value="utilities">Utilities</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="insurance">Insurance</option>
                            <option value="loans">Loans</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                    <label>
                        Card: &nbsp;
                        <select value={card} onChange={(e) => setCard(e.target.value as typeof card)}>
                            <option value="WF Credit Card">WF Credit Card</option>
                            <option value="WF Debit Card">WF Debit Card</option>
                            <option value="Chase Credit Card">Chase Credit Card</option>
                            <option value="Sams Club">Sams Club</option>
                            <option value="Best Buy">Best Buy</option>
                            <option value="Cash">Cash</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                </div>
                <button type="submit" style={{ marginTop: '1rem' }}>
                    Add Expense
                </button>
            </form>
        </Card>
    );
}