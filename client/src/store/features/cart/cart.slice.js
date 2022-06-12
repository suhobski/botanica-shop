import { createSlice } from '@reduxjs/toolkit';

import {
  addItemToCart,
  decreaseCartItem,
  increaseCartItem,
} from './cart.utils';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    hidden: true,
    cartItems: [],
  },
  reducers: {
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden;
    },
    closeCartDrawer: (state) => {
      state.hidden = true;
    },
    addItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseItemsCount: (state, action) => {
      state.cartItems = increaseCartItem(action.payload, state.cartItems);
    },
    decreaseItemsCount: (state, action) => {
      state.cartItems = decreaseCartItem(action.payload, state.cartItems);
    },
  },
});

export const {
  toggleCartHidden,
  closeCartDrawer,
  addItem,
  deleteItem,
  increaseItemsCount,
  decreaseItemsCount,
} = cartSlice.actions;

export default cartSlice.reducer;
