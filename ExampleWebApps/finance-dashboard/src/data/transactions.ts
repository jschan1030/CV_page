import type { Transaction } from '../types/Transaction';

export const transactions: Transaction[] = [
  {
    id: 1,
    name: 'Salary',
    type: 'income',
    category: 'Work',
    amount: 4000,
    date: '2025-06-01',
  },
  {
    id: 2,
    name: 'Freelance Payment',
    type: 'income',
    category: 'Side Hustle',
    amount: 1200,
    date: '2025-06-03',
  },
  {
    id: 3,
    name: 'Rent',
    type: 'expense',
    category: 'Housing',
    amount: 1545,
    date: '2025-06-05',
  },
  {
    id: 4,
    name: 'Groceries',
    type: 'expense',
    category: 'Food',
    amount: 500,
    date: '2025-06-06',
  },
  {
    id: 5,
    name: 'Car Loan',
    type: 'expense',
    category: 'Loans',
    amount: 370.28,
    date: '2025-06-07',
  },
  {
    id: 6,
    name: 'Streaming Services',
    type: 'expense',
    category: 'Entertainment',
    amount: 75,
    date: '2025-06-08',
  },
];
