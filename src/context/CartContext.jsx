import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setItemCount(prev => prev + 1);
    setTotalPrice(prev => prev + product.price);
  };

  const removeFromCart = (productId) => {
    const removedItem = cart.find(item => item.id === productId);
    setCart(cart.filter(item => item.id !== productId));
    setItemCount(prev => prev - 1);
    setTotalPrice(prev => prev - removedItem.price);
  };

  const clearCart = () => {
    setCart([]);
    setItemCount(0);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider value={{ cart, itemCount, totalPrice, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};