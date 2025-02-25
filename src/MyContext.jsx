import React, { createContext, useState } from "react";
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [cartAmount, setCartAmount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [like,setLike] = useState(false)
  function clearCart() {
    setCartAmount(0);
    setCartCount(0);
  }
  
  return (
    <MyContext.Provider value={{cartCount, setCartCount, cartAmount, setCartAmount,clearCart,like,setLike }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
