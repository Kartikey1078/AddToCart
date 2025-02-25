import React, { createContext, useState } from "react";
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [cartAmount, setCartAmount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  function clearCart() {
    setCartAmount(0);
    setCartCount(0);
  }
  return (
    <MyContext.Provider value={{cartCount, setCartCount, cartAmount, setCartAmount,clearCart }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
