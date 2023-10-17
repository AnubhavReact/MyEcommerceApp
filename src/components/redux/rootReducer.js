import {combineReducers} from 'redux';
import Reducers from './reducer';
import cartItemReducer from '../reduxToolKit/slice';

export default combineReducers({
  root: Reducers,
  cart: cartItemReducer,
});
