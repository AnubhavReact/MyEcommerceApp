import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { hpx } from '../../../utility/metrics';
import { COLORS } from '../../../constants/themes';

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
    justifyContent: 'space-around',
  },
  walkthroughText: {
    fontSize: hpx(30),
    fontWeight: 'bold',
    color: COLORS.blue,
    textAlign: 'center'
  },
  walkthroughIcon1: {
    width: wp(100),
    height:hp(30)
  },
  walkthroughIcon2: {
    width: wp(100),
    height:hp(40)
  },
  walkthroughIcon3: {
    width: wp(100),
    height:hp(70)
  },
  bottomView: {
    flex: 0.2,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  getStartedBtn: {
    height: hp(6),
    width: wp(90),
    backgroundColor: 'red',
    borderRadius: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hpx(20),
    left: hpx(20)
  },
  skipBtn: {
    height: hp(5),
    width: wp(30),
    backgroundColor: 'red',
    borderRadius: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hpx(30),
    left: hpx(30)
  },
  skipText: {
    fontSize: hpx(23),
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute'
  },
  progressBarStyle: {
    height: hp(5),
    width: wp(30),
    borderRadius: hp(1),
    justifyContent: 'center',
    backgroundColor: 'grey',
    bottom: hpx(20),
    left: hpx(120)
  }
});

export default Style;
