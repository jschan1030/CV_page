export type TransactionType = 'income' | 'expense';

export interface Transaction {
    id: number;
    name: string;
    type: TransactionType;
    category: string;
    amount: number;
    date: string; // ISO string, e.g., "2025-06-11"
}
