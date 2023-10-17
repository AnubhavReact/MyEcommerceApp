import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const Slice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action);
      state.count = action.payload;
    },
    decrement: state => {
      state.count = '';
    },
  },
});

export const {increment, decrement} = Slice.actions;
export default Slice.reducer;
