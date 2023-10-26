import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  count: [{id: 1, text: 'Hello'}],
  Cartitem: [],
  FavItem: [],
  Value: null,
  Fav: null,
  totalPrice: 0,
};

const Slice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    increment: (state, action) => {
      const Value = {
        id: nanoid(),
        text: action.payload,
      };
      state.count.push(Value);
    },
    decrement: (state, action) => {
      state.count = state.count.filter(Value => Value.id !== action.payload);
    },
    addToCart: (state, action) => {
      const textAlreadyExists = state.Cartitem.some(
        item => item.id === action.payload.id,
      );
      if (!textAlreadyExists) {
        state.Value += 1;
        state.Cartitem.push(action.payload);
        state.totalPrice += action.payload.price;
      }
    },
    removeToCart: (state, action) => {
      const textAlreadyExists = state.Cartitem.some(
        item => item.id === action.payload.id,
      );
      if (textAlreadyExists) {
        state.Value -= 1;
        state.totalPrice -= action.payload.price * action.payload.quantity;
      }
      state.Cartitem = state.Cartitem.filter(
        Value => Value.id !== action.payload.id,
      );
    },
    addToFav: (state, action) => {
      const textAlreadyExists = state.FavItem.some(
        item => item.id === action.payload.id,
      );
      if (!textAlreadyExists) {
        state.Fav += 1;
        state.FavItem.push(action.payload);
      } else {
        state.Fav -= 1;
        state.FavItem = state.FavItem.filter(
          Value => Value.id !== action.payload.id,
        );
      }
    },
    addQuantity: (state, action) => {
      const itemIndex = state.Cartitem.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        state.Cartitem[itemIndex].quantity += 1;
      }
      const textAlreadyExists = state.Cartitem.some(
        item => item.id === action.payload.id,
      );
      if (textAlreadyExists) {
        state.totalPrice += action.payload.price;
      }
    },
    removeQuantity: (state, action) => {
      const itemIndex = state.Cartitem.findIndex(
        item => item.id === action.payload.id,
      );
      const textAlreadyExists = state.Cartitem.some(
        item => item.id === action.payload.id,
      );
      if (textAlreadyExists) {
        state.totalPrice -= action.payload.price;
      }
      if (state.Cartitem[itemIndex].quantity > 1) {
        state.Cartitem[itemIndex].quantity -= 1;
      } else if (state.Cartitem[itemIndex].quantity === 1) {
        state.Cartitem = state.Cartitem.filter(
          Value => Value.id !== action.payload.id,
          (state.Value -= 1),
        );
      }
    },
  },
});

export const {
  increment,
  decrement,
  addToCart,
  removeToCart,
  addToFav,
  addQuantity,
  removeQuantity,
} = Slice.actions;
export default Slice.reducer;
