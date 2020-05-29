import React, { useState, createContext } from "react";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([
    {
      product: "product 1",
      quantity: "1",
    },
  ]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
}
