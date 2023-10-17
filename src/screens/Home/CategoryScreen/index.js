import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Style from './style';

const CategoryScreen = () => {
  return (
    <SafeAreaView style={Style.safeView}>
      <View style={Style.mainView}>
        <Text>Category Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
