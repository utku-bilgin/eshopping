import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const useBasketContext = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log(product);
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const clearBasket = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    clearBasket,
  };

  return (
    <BasketContext.Provider value={value}>
      {children}
    </BasketContext.Provider>
  );
};
