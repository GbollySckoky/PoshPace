import { configureStore } from '@reduxjs/toolkit'
import sliderSlice from '../Features/Slider/sliderSlice'
import Product from '../features/ProductSlice'
export const store = configureStore({
  reducer: {
    slider: sliderSlice,
    product:ProductSlice
  },
})