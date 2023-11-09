import {onLogin, onSignUp, onOtp, onGetData, Login, LogOut,inInstall} from './constants';

export const LOGIN = () => {
  return {
    type: Login,
  };
};
export const LOGOUT = () => {
  return {
    type: LogOut,
  };
};
export const GetLogin = payload => {
  return {
    type: onLogin,
    payload,
  };
};
export const GetSignUp = payload => {
  return {
    type: onSignUp,
    payload: payload,
  };
};
export const GetOtp = () => {
  return {
    type: onOtp,
  };
};
export const GetData = () => {
  return {
    type: onGetData,
  };
};
export const Install = () => {
  return {
    type: inInstall,
  };
};
