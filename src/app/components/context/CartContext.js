"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart
  useEffect(() => {
    const storedCart =
      localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart),
    );
  }, [cart]);

  // ➕ Add to cart
  const addToCart = (product) => {
    const newItem = {
      ...product,
      cartId: Date.now() + Math.random(),
      quantity: 1,
    };

    setCart((prev) => [...prev, newItem]);
  };

  // ❌ Remove
  const removeFromCart = (cartId) => {
    setCart((prev) =>
      prev.filter(
        (item) => item.cartId !== cartId,
      ),
    );
  };

  // 🔁 Update quantity
  const updateQuantity = (cartId, newQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity: Math.max(1, newQty),
            }
          : item,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () =>
  useContext(CartContext);

// "use client";
// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prev) => [...prev, product]);
//     console.log("Tilføjet til kurv:", product.title);
//   };

//   return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
// };

// export const useCart = () => useContext(CartContext);
