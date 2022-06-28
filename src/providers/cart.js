import { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  function addProduct(product) {
    const duplicateIndex = cart.findIndex(
      (element) => element.id === product.id
    );
    if (duplicateIndex !== -1) {
      cart[duplicateIndex].quantity += 1;

      const updatedCart = [...cart];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  }

  function removeProduct(product) {
    product.quantity = 1;
    const updatedCart = cart.filter((element) => element.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}
