import {CommonActions} from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  console.log(navigatorRef);
  _navigator = navigatorRef;
}

function navigate(name, params) {
  console.log(_navigator, name);
  _navigator.current?.navigate(name, params);
}

function goBack() {
  _navigator.current?.goBack();
}

function reset(name, index = 0, params = {}) {
  _navigator.current?.dispatch(
    CommonActions.reset({
      index,
      routes: [
        {
          name,
          params,
        },
      ],
    }),
  );
}

function getCurrentRoute() {
  let rootState = _navigator.current.getRootState();
  let route = rootState.routes[rootState.index];
  while (route.state) {
    route = route.state.routes[route.state.index];
  }
  return route;
}

export default {
  setTopLevelNavigator,
  navigate,
  reset,
  goBack,
  getCurrentRoute,
};
