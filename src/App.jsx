// App.jsx
import React from "react";
import { MyContextProvider } from "./MyContext"; // Correctly import MyContextProvider
import Header from "./Components/Header";
import ProductCart from "./Components/ProductCart";

function App() {
  return (
    <MyContextProvider>
      <Header />
      <ProductCart />
    </MyContextProvider>
  );
}

export default App;
