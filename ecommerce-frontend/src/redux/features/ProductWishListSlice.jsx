import { createSlice } from "@reduxjs/toolkit";

const ProductWishlistSlice = createSlice({
  name: "ProductWishlist",
  initialState: {
    like : []
  },
  reducers: {
    AddWishlist: (state, action) => {
      console.log("like ");
      const existlikedItem = state.like.find((item) => item.id === action.payload.id);
      if (!existlikedItem) {
        state.like.push(action.payload);
      } else {
        state.like = state.like.filter((item) => item.id !== action.payload.id);
      } 
    },

    RemoveWishlist: (state, action) => {
      state.like = state.like.filter((item) => item.id !== action.payload.id);
    },

    ClearWishlist: (state) => {
      state.like = []
    }
  },
});

export const { AddWishlist, RemoveWishlist, ClearWishlist } =
  ProductWishlistSlice.actions;
export default ProductWishlistSlice.reducer