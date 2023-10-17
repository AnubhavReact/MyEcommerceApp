import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Style from './style';

const SearchScreen = () => {
  return (
    <SafeAreaView style={Style.safeView}>
      <View style={Style.mainView}>
        <Text>Search Screen</Text>
      </View>
    </SafeAreaView>
  );i
};

export default SearchScreen;