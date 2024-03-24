import { createSlice } from "@reduxjs/toolkit";
import DummyData  from "../component/DummyData";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: 0,
    length: DummyData.length,
  },
  reducers: {
   
    nextSlide(state, action) {
        console.log(state, action.payload)
        return {
      ...state,
      value: (state.value + 1) % state.length,
        }
    },
    prevSlide(state, action) {
        console.log(state);
        return{
     ...state,
      value:  (state.value - 1 + state.length) % state.length,
        }
    },
    dotSlide(state, action) {
      return{
        ...state,
        value: action.payload,
      }
    },
  },
});

export const { initializeSliderLength, nextSlide, prevSlide, dotSlide} = sliderSlice.actions;
export default sliderSlice.reducer;