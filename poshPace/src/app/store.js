import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../features/productsSlice'
import sliderSlice from '../features/sliderSlice'
export const store = configureStore({
  reducer: {
   slider: sliderSlice,
   products: productsSlice
  },
})