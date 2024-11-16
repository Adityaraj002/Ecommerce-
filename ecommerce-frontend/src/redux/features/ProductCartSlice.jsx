import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    product: [],
  },
  reducers: {
    add: (state, action) => {
      const isExistProduct = state.product.find(
        (item) => item.id === action.payload.id,
      );
      if (!isExistProduct) {
        state.product.push({ ...action.payload, quantity: 1 });
      } else {
        isExistProduct.quantity += 1; //incrementing item if it already exist
      }
    },

    remove: (state, action) => {
      state.product = state.product.filter(
        (product) => product.id !== action.payload.id,
      );
    },

    clearAll: (state) => {
      state.product = [];
    },

    IncrementProduct: (state, action) => {
      const productQuentity = state.product.find(
        (item) => item.id === action.payload.id,
      );
      if (productQuentity && productQuentity.quantity < productQuentity.stock) {
        productQuentity.quantity += 1;
      }
    },

    DecrementProduct: (state, action) => {
      const productQuentity = state.product.find(
        (item) => item.id === action.payload.id,
      );
      if (productQuentity && productQuentity.quantity > 1) {
        productQuentity.quantity -= 1;
      }
    },
  },
});

export const selectTotalAmount = (state) =>
  state.product.product.reduce((total, product) => total + product.price * product.quantity, 0);

export const { add, remove, clearAll, IncrementProduct, DecrementProduct } =
  productSlice.actions;

export default productSlice.reducer;
