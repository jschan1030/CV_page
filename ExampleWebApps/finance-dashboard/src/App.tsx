
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Home from './places/Home';
import Expenditures from "./places/Expenditures";
import DebtSchedule from "./places/DebtSchedule";
import PaymentTracker from "./places/PaymentTracker";
import Reports from "./places/Reports";
// import Reports from "./places/Reports";
// import Settings from "./places/Settings";



function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/expenditures" element={<Expenditures />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<PaymentTracker />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}

export default App;
