import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Style from './style';

const PromoScreen = () => {
  return (
    <SafeAreaView style={Style.safeView}>
      <View style={Style.mainView}>
        <Text>Promo Screen</Text>
      </View>
    </SafeAreaView>
  );i
};

export default PromoScreen;
