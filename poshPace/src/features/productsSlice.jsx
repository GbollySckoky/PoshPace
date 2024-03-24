import { createSlice } from "@reduxjs/toolkit";
import Products from '../component/Data';

export const sliderSlice = createSlice({
  name: "products",
  initialState: {
    filteredProduct: []
  },
  reducers: {
    filteredProduct(state, action) {
        const { payload: category } = action;
        // Filter Products based on category and update filteredProduct array
        state.filteredProduct = Products.filter(product => product.category === category);
        console.log(state.filteredProduct)
    }
  },
});

export const { filteredProduct } = sliderSlice.actions;
export default sliderSlice.reducer;
