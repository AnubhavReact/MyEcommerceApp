import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import constants from '../../../constants';

const Style = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: 'rgba(247, 247, 247, 1)',
  },
  headerView: {
    height: hp(6),
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
    alignSelf: 'center',
  },
  backImageStyle: {
    height: '50%',
    width: 30,
  },
  textStyle: {
    fontSize: 23,
    fontWeight: '700',
    color: 'black',
    left: 10,
  },
  textTwoStyle: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
  },
  mainContentStyle: {
    height: hp(85),
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
  },
  textTwoStyle: {
    fontSize: 28,
    fontWeight: '800',
    color: 'black',
    textAlign: 'center',
  },
  inputView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  inputMainView: {
    height: hp(6.5),
    width: wp(14),
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 24,
    textAlign: 'center',
    borderRadius: 15,
  },
  textInputStyle: {
    height: hp(5),
    width: wp(70),
    fontSize: 18,
  },
  bottomViewStyle: {
    height: hp(60),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: hp(1),
  },
  buttonViewStyle: {
    height: hp(6),
    width: wp(80),
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'cyan',
  },
});

export default Style;
