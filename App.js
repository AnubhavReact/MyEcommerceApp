import React from 'react';
import {View} from 'react-native';
import Login from './src/screens/Auth/Login';
import MainNavigation from './src/navigation/stack';
import ToolKitScreen from './src/screens/Auth/Practice/toolKit';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <MainNavigation />
      {/* <ToolKitScreen /> */}
    </View>
  );
};

export default App;
