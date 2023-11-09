import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import SignUp from './SignUp';
import ForgetScreen from './ForgetPassword';
import Verification from './OtpVeification';
import WalkThrough from './walkthrough';
import { useDispatch, useSelector } from 'react-redux';
import { Install } from '../../components/redux/action';
import { useState,useEffect } from 'react';
import {View , ActivityIndicator,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const Auth = () => {
  const Value = useSelector(State => State.root.install);
  
  const dispatch = useDispatch();

  const [loadNavigation, setLoadNavigation] = useState(true);

  useEffect(() => {
    getName();
  }, []);

  const onLoad = () => {
    dispatch(Install());
  };

  const getName = async () => {
    const token = await AsyncStorage.getItem('install');
    setTimeout(() => {
      setLoadNavigation(false);
    }, 200);
    if (token == 'false') {
      onLoad();
      console.log('Set Value', token);
      return token;
    }
  };

  return loadNavigation ? (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  ) : (
    <Stack.Navigator initialRouteName={Value?"WalkThrough":"Login"}>
      {Value&&<Stack.Screen
        name="WalkThrough"
        component={WalkThrough}
        options={{ headerShown: false }}
      />}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpVerification"
        component={Verification}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
};

export default Auth;
