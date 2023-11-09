import React, { useState, useRef } from 'react';
import { View, SafeAreaView, TouchableOpacity, Image, Text } from 'react-native';
import Style from './style';
import Swiper from 'react-native-swiper';
import constants from '../../../constants';
import NavigationService from '../../../navigation/NavigationService';
import * as Progress from 'react-native-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { wpx } from '../../../utility/metrics';
import { useDispatch } from 'react-redux';
import { Install } from '../../../components/redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WalkThrough = () => {
  const [value, setValue] = useState(0);
  const [score, setScore] = useState(0);
  const dispatch = useDispatch();
  const onPress = (index) => {
    const totalIndex = 3;
    setValue(index);
    setScore((index / (totalIndex - 1)));
  }
  return (
    <SafeAreaView style={Style.safeView}>
      <View style={Style.mainView}>
        <View style={Style.containerView}>
          <Text style={Style.walkthroughText}>WalkThrough Screen</Text>
          <View style={{ flexDirection: 'row' }} >
            <Swiper
              style={Style.wrapper}
              loop={false}
              onIndexChanged={index => onPress(index)}
              showsPagination={false}
              nextButton={
                <Progress.Bar style={Style.progressBarStyle} borderWidth={0} progress={score} height={hp(5)}>
                  <Text style={[Style.skipText, { left: wpx(40) }]}>Next</Text>
                </Progress.Bar>
              }
              showsButtons={true}
              buttonWrapperStyle={{ justifyContent: 'flex-end', flexDirection: 'column' }}
              prevButton={<View></View>}
            >
              <View style={Style.slide}>
                <Image
                  source={constants.image.walkthrough01}
                  style={Style.walkthroughIcon1}
                />
              </View>
              <View style={Style.slide}>
                <Image
                  source={constants.image.walkthrough02}
                  style={Style.walkthroughIcon2}
                />
              </View>
              <View style={Style.slide}>
                <Image
                  source={constants.image.walkthrough03}
                  style={Style.walkthroughIcon3}
                />
              </View>
            </Swiper>
            {
              value == 2 ? (
                <TouchableOpacity style={Style.getStartedBtn} onPress={() => {
                  NavigationService.navigate('Login')
                  dispatch(Install())
                  AsyncStorage.setItem('install', 'false')
                }} >
                  <Text style={Style.skipText}>Get Started</Text>
                </TouchableOpacity>

              ) : (<TouchableOpacity style={Style.skipBtn} onPress={() => {
                NavigationService.navigate('Login')
                dispatch(Install())
                AsyncStorage.setItem('install', 'false')
              }}>
                <Text style={Style.skipText}>Skip</Text>
              </TouchableOpacity>)
            }
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default WalkThrough;
