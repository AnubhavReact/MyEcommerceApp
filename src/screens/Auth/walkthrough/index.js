import React, {useState, useRef} from 'react';
import {View, SafeAreaView, TouchableOpacity, Image,Text} from 'react-native';
import Style from './style';
import Swiper from 'react-native-swiper';
import constants from '../../../constants';
import NavigationService from '../../../navigation/NavigationService';
import * as Progress from 'react-native-progress';

const WalkThrough = () => {
  const [value, setValue] = useState(0);

  const swiperRef = useRef(null);

  const scrollToPage = index => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(index);
    }
    console.log(index);
  };

  const onNextPress = () => {
    if (value < 2) {
      setValue(value + 1);
    }
    console.log(value);
  };

  const totalLists = 3;

  const buttonWidth = `${(value / (totalLists - 1)) * 26}%`;

  const onMove = () => {
    NavigationService.navigate('Login');
  };

  return (
    <SafeAreaView style={Style.safeView}>
      <View style={Style.mainView}>
        <View style={Style.containerView}>
          <Swiper
            style={Style.wrapper}
            loop={false}
            index={value}
            onIndexChanged={index => setValue(index)}
            showsPagination={false}>
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
        </View>
        <View style={Style.bottomView}>
          <View style={[Style.sliderView]}>
            {value < 2 ? (
              <TouchableOpacity
                style={Style.sliderButton}
                onPress={() => onNextPress()}>
                <Image
                  style={Style.sliderStyle}
                  source={constants.icon.ForwardIcon}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={Style.sliderButton}
                onPress={() => onMove()}>
                <Image
                  style={Style.sliderStyle}
                  source={constants.icon.ForwardIcon}
                />
              </TouchableOpacity>
            )}
          </View>
          <Progress.Circle size={30} indeterminate={true}>
            <Text>hiio</Text>
          </Progress.Circle>
          <Progress.Pie progress={0.1} size={100} indeterminate={true} color='red'/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WalkThrough;
