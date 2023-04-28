import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mai from "./pages/mai";
import Detail from "./pages/detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");

  return (
    <BrowserRouter>
      <div className="bg-red-100">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Mai account={account} />} />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
