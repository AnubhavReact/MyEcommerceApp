const initialState = {
  token: true,
  install: true
};
import { Login, LogOut, inInstall } from './constants';

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
    case inInstall:
      return {
        ...state,
        install: false
      };
    default:
      return state;
  }
};

export default Reducers;
