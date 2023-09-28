import React from 'react';
import {View} from 'react-native';
import Login from './src/screens/Auth/Login';
import MainNavigation from './src/navigation/stack';

const App = () => {
  return (
    <View style={{flex:1}} >
      <MainNavigation />
    </View>
  );
};

export default App;
