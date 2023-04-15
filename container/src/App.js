import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          {/* <hr /> */}
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  )
}

export default App