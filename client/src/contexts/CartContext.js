import React, { useState, createContext } from "react";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const initialCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  };
  const [cart, setCart] = useState(initialCart);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
}
