
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productSlice.js';

export default configureStore({
  reducer: {
    products: productsReducer
  },
});
