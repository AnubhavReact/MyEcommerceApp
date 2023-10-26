import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Style = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  mainView: {
    flex: 1,
  },
  containerView: {
    flex: 2,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  walkthroughIcon1: {
    width: wp(100),
    height: hp(33),
  },
  walkthroughIcon2: {
    width: wp(100),
    height: hp(50),
  },
  walkthroughIcon3: {
    width: wp(100),
    height: hp(60),
  },
  bottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderView: {
    height: hp(12),
    borderRadius: hp(6),
    backgroundColor: 'red',
    width: hp(12),  
  },
  sliderButton: {
    height: hp(12),
    width: hp(12),
    borderRadius: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    alignSelf: 'center',
  },
  sliderStyle: {
    height: hp(8),
    width: hp(8),
  },
});

export default Style;
