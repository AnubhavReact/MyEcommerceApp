const initialState = {
  token: true,
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        token: true,
      };
    default:
      return state;
  }
};

export default Reducers;
