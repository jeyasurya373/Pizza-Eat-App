import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from "./globalstyle";
import Hero from "./components/Hero";
import Products from "./components/Produts";
import { productData } from "./components/Produts/data"
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="which one you like" data={productData} />
    </Router>
  );
}

export default App;
