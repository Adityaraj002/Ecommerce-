import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductCartSlice";
import ProductWishlist from "../features/ProductWishListSlice"

const store = configureStore({
  reducer: {
    product: productReducer,
    ProductWishlist: ProductWishlist,
  },
});

export default store;
