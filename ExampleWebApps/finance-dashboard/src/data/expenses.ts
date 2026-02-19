import type { Expense } from '../types/Expense';

export const expenses: Expense[] = [
    { id: 1, name: 'Mortgage', type: 'fixed', card: 'WF Debit Card', category: 'housing', amount: 1545 },
    { id: 2, name: 'Groceries', type: 'variable', card: 'WF Credit Card', category: 'food', amount: 500 },
    { id: 3, name: 'Wells Fargo Card Payment', type: 'debt', card: 'WF Debit Card', category: 'loans', amount: 1200 },
    { id: 4, name: 'Streaming Services', type: 'fixed', card: 'WF Debit Card', category: 'entertainment', amount: 75 },
    { id: 5, name: 'Internet', type: 'fixed', card: 'WF Debit Card', category: 'utilities', amount: 132 },
    { id: 6, name: 'Phone Bill', type: 'fixed', card: 'WF Debit Card', category: 'utilities', amount: 45 },
    { id: 7, name: 'Gym Membership', type: 'fixed', card: 'Chase Credit Card', category: 'other', amount: 10 },
    { id: 8, name: 'Car Insurance', type: 'fixed', card: 'WF Credit Card', category: 'insurance', amount: 90 },
    { id: 9, name: 'Water Bill', type: 'variable', card: 'WF Debit Card', category: 'utilities', amount: 55 },
    { id: 10, name: 'Electric Bill', type: 'variable', card: 'WF Debit Card', category: 'utilities', amount: 162 },
    { id: 11, name: 'Gas', type: 'variable', card: 'WF Debit Card', category: 'transportation', amount: 60 },
    { id: 12, name: 'Car Loan', type: 'debt', card: 'WF Debit Card', category: 'loans', amount: 370.28 },
    { id: 13, name: 'Foundation Loan', type: 'debt', card: 'WF Debit Card', category: 'loans', amount: 200 },
];

