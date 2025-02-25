import React, { createContext, useState } from "react";
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [cartAmount, setCartAmount] = useState(0);

  function clearCart() {
    setCartAmount(0);
  }
  return (
    <MyContext.Provider value={{ cartAmount, setCartAmount,clearCart }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
