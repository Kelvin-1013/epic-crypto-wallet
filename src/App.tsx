import { Routes, Route } from "react-router-dom";
import { WalletCreation } from "@/pages/WalletCreation";
import { WalletDashboard } from "@/components/WalletDashboard";
import { WalletLayout } from "@/components/WalletLayout";
import { Tokens } from "@/pages/Tokens";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WalletCreation />} />
      <Route element={<WalletLayout />}>
        <Route path="/dashboard" element={<WalletDashboard />} />
        <Route path="/send" element={<div>Send</div>} />
        <Route path="/receive" element={<div>Receive</div>} />
        <Route path="/tokens" element={<Tokens />} />
        <Route path="/settings" element={<div>Settings</div>} />
      </Route>
    </Routes>
  );
}

export default App;