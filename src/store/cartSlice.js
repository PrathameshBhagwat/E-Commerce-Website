import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    itemCount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.cart.push(product);
      state.itemCount += 1;
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const removedItem = state.cart.find(item => item.id === productId);
      state.cart = state.cart.filter(item => item.id !== productId);
      state.itemCount -= 1;
      state.totalPrice -= removedItem.price;
    },
    clearCart: (state) => {
      state.cart = [];
      state.itemCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;