import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/auth.slice'
import products from "./slices/products.slice";
import cartSlice from "./slices/cart.slice";

const store = configureStore({
  reducer: {
    products,
    cartSlice,
    user: userSlice,
    
  }
})

export default store