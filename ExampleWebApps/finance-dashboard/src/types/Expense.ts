export interface Expense {
    id: number;
    name: string;
    amount: number;
    type: 'fixed' | 'variable' | 'debt';
    card: 'WF Credit Card' | 'WF Debit Card' | 'Chase Credit Card' | 'Sams Club' | 'Best Buy' | 'Cash' | 'Other';
    category: 'housing' | 'food' | 'transportation' | 'utilities' | 'entertainment' | 'insurance' | 'loans' | 'other';
}
