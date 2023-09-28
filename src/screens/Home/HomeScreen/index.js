import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Style from './style';
import {LOGOUT} from '../../../components/redux/action';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const dispatch = useDispatch();

  const onLogOut = async () => {
    await AsyncStorage.removeItem('token');
    console.log('Successfully LogOut');
    dispatch(LOGOUT());
  };

  return (
    <SafeAreaView style={Style.safeView}>
      <View style={Style.mainView}>
        <Text style={Style.homeText}>Home Screen</Text>
        <TouchableOpacity style={Style.logoutView} onPress={onLogOut}>
          <Text style={Style.logOutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
