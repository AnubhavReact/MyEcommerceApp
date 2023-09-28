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
    fontSize: 22,
    fontWeight: '700',
    color: 'black',
    left: 10,
  },
  mainContentStyle: {
    height: hp(85),
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  textTwoStyle: {
    fontSize: 28,
    fontWeight: '800',
    color: 'black',
  },
  inputView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputMainView: {
    height: hp(6),
    width: wp(85),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: constants.appTheme.COLORS.lightGray1,
  },
  textInputStyle: {
    height: hp(5),
    width: wp(70),
    fontSize: 18,
  },
  wrongMsgView:{
    alignSelf:'flex-end',
    right:hp(4),
    top:hp(1)
  },
  wrongMsgStyle:{
    fontSize:17,
    color:constants.appTheme.COLORS.red,
 },
  bottomViewStyle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
