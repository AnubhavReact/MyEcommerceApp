import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import constants from '../../../constants';
import { hpx } from '../../../utility/metrics';

const Style = StyleSheet.create({
  mainView: {
    height: '100%',
  },
  firstView: {
    flex: 1,
  },
  logoView: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    height: '60%',
    width: '10%',
  },
  secondView: {
    flex: 0.7,
    backgroundColor: constants.appTheme.COLORS.white2,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 15,
    borderWidth: 0.2,
    borderColor: 'grey',
  },
  signView: {
    marginVertical: 5,
    flex: 0.2,
    justifyContent: 'center',
    marginHorizontal: 15,
    //backgroundColor: 'red',
  },
  signText: {
    fontSize: 28,
    fontWeight: '800',
    left: 10,
  },
  dataView: {
    flex: 1,
    alignItems: 'center',
  },
  wrongTextView: {
    height: hp(2),
    alignItems: 'flex-end',
    right: hp(1),
  },
  wrongPassView: {
    height: hp(2),
    alignItems: 'flex-end',
    right: hp(1),
  },
  wrongText: {
    fontSize: hp(1.7),
    color: 'red',
  },
  inputView: {
    height: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: constants.appTheme.COLORS.white2,
    width: wp(85),
    marginVertical: hp(1),
  },
  iconImage: {
    height: hp(3),
    width: wp(7),
    marginLeft: 10,
  },
  eyeView: {
    height: '60%',
    width: '10%',
    marginLeft: 5,
  },
  eyeImage: {
    height: '100%',
    width: '100%',
  },
  loginView: {
    flex: 0.3,
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  loginButtonView: {
    height: '40%',
    backgroundColor: 'darkblue',
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    top: 15,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 20,
    color: 'lightblue',
  },
  thirdView: {
    flex: 0.04,
    marginHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dontText: {
    fontSize: 15,
    color: 'darkgrey',
  },
  createText: {
    fontSize: 16,
    color: 'cyan',
    left: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(85),
    marginVertical: hp(1),
  },
  checkbox: {
    height: hp(3),
    width: wp(7),
    marginLeft: 10,
    tintColor: 'grey',
  },
  checkboxLabel: {
    fontSize: hpx(14),
    fontWeight: '400',
  },
  termView: {
    marginLeft: hp(1),
    flex: 1,
    height: hp(6),
    alignItems:'center',
    justifyContent:'center'
  },
});

export default Style;
