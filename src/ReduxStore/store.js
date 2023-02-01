import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./ItemsSlice";

export const store = configureStore({
  reducer: {
    products: itemsReducer,
  },
});
