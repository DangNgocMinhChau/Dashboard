import React from "react";
import "./assets/scss/index.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/routers/Index";

function App() {
  return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  );
}

export default App;
