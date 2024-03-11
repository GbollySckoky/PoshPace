import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  length: 4,
};

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    nextSlide: function (state, action) {
      return {
        ...state,
        value: action.payload > state.length ? 0 : action.payload,
      };
    },
    prevSlide: function (state, action) {
      return {
        ...state,
        value: action.payload < 0 ? state.length - 1 : action.payload,
      };
    },
    dotSlide: function (state, action) {
      console.log(action.payload);
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;

export default sliderSlice.reducer;
