import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
  totalCount: 0,
  totalPrice: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const {product, count = 1} = action.payload;
      state.totalPrice += Math.round(count * product.price * 100) / 100;
      if ( state.products[product.id] ) {
        state.products[product.id] += count;
      } else {
        state.products[product.id] = count;
        state.totalCount += 1;
      }
    },
    deleteProduct: (state, action) => {
      if ( state.products[action.payload.id] ) {
        if (state.products[action.payload.id] > 1) {
          state.products[action.payload.id] -= 1;
        } else {
          delete state.products[action.payload.id];
          state.totalCount -= 1;
        }
        state.totalPrice = Math.round((state.totalPrice - action.payload.price) * 100) / 100;
      }
    },
    removeProductFromCart: (state, action) => {
      if ( state.products[action.payload.id] ) {
        const productCount = state.products[action.payload.id];
        const productPrice = action.payload.price * productCount;
        delete state.products[action.payload.id];
        state.totalCount -= 1;
        state.totalPrice = state.totalPrice - productPrice;
      }
    },
    clearCart: (state) => {
      state.products = {};
      state.totalCount = 0;
      state.totalPrice = 0;
    }
  }
});

export const { addProduct, deleteProduct, removeProductFromCart, clearCart }  = cartSlice.actions;
export default cartSlice.reducer;