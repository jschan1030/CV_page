import Layout from "../components/Layout";
import CardContiner from "../design-system/atoms/CardContainer";
import ExpenseChart from "../design-system/organisms/ExpenseChart";
import ExpenseBarChart from "../design-system/organisms/ExpenseBarChart";
import { expenses } from "../data/expenses";

export default function Reports() {
    return (
        <Layout>
            <div>
                <h1>Reports</h1>
            </div>
            <CardContiner>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', width: '100%' }}>
                    <ExpenseChart expenses={expenses} />
                    <ExpenseBarChart expenses={expenses} />
                </div>

            </CardContiner>
        </Layout>
    );
}