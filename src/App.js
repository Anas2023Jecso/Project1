import BankAccount from "./pages/bankAccount";
import Fiscal from "./pages/fiscal";
import Home from "./pages/home";
import NIF from "./pages/nif";
import NISS from "./pages/niss";


import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="nif" element={<NIF />} />
    <Route path="niss" element={<NISS />} />
    <Route path="fiscal" element={<Fiscal />} />
    <Route path="bank" element={<BankAccount />} />
    <Route path="*" element={<Navigate to="/" replace={true} />} />
  </Routes>
    </div>
  );
}

export default App;

