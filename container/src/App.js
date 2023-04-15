import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* <hr /> */}
        <MarketingApp />
      </div>
    </BrowserRouter>
  )
}

export default App