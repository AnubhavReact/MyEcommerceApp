const initialState = {
  token: true,
};
import {Login, LogOut} from './constants';

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case Login:
      return {
        ...state,
        token: false,
      };
    case LogOut:
      return {
        ...state,
        token: true,
      };
    default:
      return state;
  }
};

export default Reducers;
