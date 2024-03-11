import { configureStore } from '@reduxjs/toolkit'
import sliderSlice from '../Features/Slider/sliderSlice'
export const store = configureStore({
  reducer: {
    slider: sliderSlice
  },
})