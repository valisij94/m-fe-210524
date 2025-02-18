
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productSlice.js';
import cartReducer from './slices/cartSlice.js';


export default configureStore({
  reducer: {
    products: productsReducer,
    cart:     cartReducer
  }
});
