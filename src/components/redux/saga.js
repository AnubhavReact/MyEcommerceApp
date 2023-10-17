import {takeEvery, put} from 'redux-saga/effects';
import {Alert} from 'react-native';
import axios from 'react-native-axios';
import {onSignUp, onLogin, Login} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationService from '../../navigation/NavigationService';

function* LoginApi({payload}) {
  console.log('I Am Login Saga', payload);
  yield put({type: Login});
  yield AsyncStorage.setItem('token', 'false');
  // try {
  //   const url = 'https://fdcb-14-99-89-70.ngrok-free.app/login';
  //   const response = yield axios.post(url, {
  //     email: 'techahead2023@gmail.com',
  //     password: 'Tech2023@',
  //   });
  //   const result = response.data;
  //   //console.log(result.data.accessToken);
  //   // AsyncStorage.setItem('deviceToken', result.data.accessToken);
  //   if (response.status === 200) {
  //     Alert.alert(result.msg);
  //     yield put({type: Login});
  //     yield AsyncStorage.setItem('token', 'false');
  //   } else {
  //     Alert.alert(result.msg);
  //   }
  // } catch (error) {
  //   console.error('Error:', error.msg);
  // }
}

function* SignUpApi({payload}) {
  console.log('I Am SignUpSaga');
  NavigationService.navigate('Login');
  // console.log('i am in saga signUp caller', payload);
  // try {
  //   const url = 'https://fdcb-14-99-89-70.ngrok-free.app/signup';
  //   let response = yield axios.post(url, {
  //     email: payload.email,
  //     phoneNumber: payload.phoneNumber,
  //     password: payload.password,
  //   });
  //   const result = response.data;
  //   console.log(response);
  //   if (result) {
  //     if (response.status == 200) {
  //       Alert.alert(result.msg);
  //     } else {
  //       Alert.alert(result.msg);
  //     }
  //   } else {
  //     Alert.alert(result.msg);
  //   }
  // } catch (error) {
  //   Alert.alert('Error', error.msg);
  //   console.log(error.msg);
  // }
}

function* SagaData() {
  yield takeEvery(onLogin, LoginApi);
  yield takeEvery(onSignUp, SignUpApi);
}

export default SagaData;
