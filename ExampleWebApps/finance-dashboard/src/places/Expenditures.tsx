import Layout from "../components/Layout";
import CardContainer from "../design-system/atoms/CardContainer";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import { expenses as initialExpenses } from "../data/expenses";
import { useState } from "react";
import type { Expense } from "../types/Expense";
import TotalExpenses from "../components/TotalExpenses";

export default function Expenditures() {
    const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
    const handleAddExpense = (newExpense: Expense) => {
        setExpenses([...expenses, newExpense]);
    };
    const nextId = expenses.length > 0 ? Math.max(...expenses.map(e => e.id)) + 1 : 1;

    return (
        <Layout>
            <h1>Expenditures</h1>
            <CardContainer style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '32px' }}>
                <TotalExpenses expenses={expenses} />
                <h2 style={{ marginBottom: '0px' }}>Add New Expense</h2>
                <AddExpenseForm onAddExpense={handleAddExpense} nextId={nextId} />
                <ExpenseList expenses={expenses} />
            </CardContainer>

        </Layout>
    );
}