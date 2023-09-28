import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Style from './style';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={Style.safeView}>
      <View style={Style.mainView}>
        <Text>Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
