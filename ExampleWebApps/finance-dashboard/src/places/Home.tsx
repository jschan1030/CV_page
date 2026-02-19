
import Layout from "../components/Layout";
import TotalExpenses from "../components/TotalExpenses";
import { expenses } from "../data/expenses";
import CardContainer from "../design-system/atoms/CardContainer";
import Widget from "../design-system/organisms/Widget";

import Expenditures from "./Expenditures";


export default function Home() {
    return (
        <Layout>
            <h1>Welcome, Joseph!</h1>
            <h2>Today's Date: {new Date().toLocaleDateString()}</h2>
            <TotalExpenses expenses={expenses} />
            <CardContainer>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <h3>Current Actions</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <Widget title="View Expenditures or Add an Expense" value="" description="Manage your expenses effectively" route="/expenditures" buttonText="View Expenditures Details" />
                        <Widget title="View Reports" value="" description="Analyze your spending patterns" route="/reports" buttonText="Go" />
                        <Widget title="Settings" value="" description="Customize your experience" route="/settings" buttonText="Go" />
                    </div>
                </div>
            </CardContainer>
        </Layout>

    );
}
