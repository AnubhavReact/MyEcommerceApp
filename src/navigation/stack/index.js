import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../tab';
import Auth from '../../screens/Auth';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {LOGIN} from '../../components/redux/action';
import {useState, useEffect} from 'react';
import NavigationService from '../NavigationService';

const Stack = createStackNavigator();

const MainNavigation = () => {
  const Value = useSelector(State => State.root.token);

  const dispatch = useDispatch();

  const [loadNavigation, setLoadNavigation] = useState(true);

  useEffect(() => {
    getName();
  }, []);

  const navigationRef = React.createRef();

  NavigationService.setTopLevelNavigator(navigationRef);

  // useEffect(() => {
  //   if (navigationRef.current) {
  //     NavigationService.setTopLevelNavigator(navigationRef);
  //   }
  // }, [navigationRef.current, loadNavigation]);

  const onLoad = () => {
    dispatch(LOGIN());
  };

  const getName = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setTimeout(() => {
        setLoadNavigation(false);
      }, 200);
      if (token == 'false') {
        onLoad();
        console.log('Set Value', token);
        return token;
      } else {
        console.log('No Value', token);
        return null;
      }
    } catch (error) {
      console.error('Error retrieving name:', error);
      return null;
    }
  };

  return loadNavigation ? (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          //backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  ) : (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Auth">
        {Value ? (
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
