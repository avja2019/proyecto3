import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/auth.slice'
import products from "./slices/products.slice";

const store = configureStore({
  reducer: {
    products,
    user: userSlice
  }
})

export default store