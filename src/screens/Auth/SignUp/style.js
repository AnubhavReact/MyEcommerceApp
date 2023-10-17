import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import constants from '../../../constants';

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
    //backgroundColor: 'yellow',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    //backgroundColor: 'green',
  },
  wrongTextView: {
    height: 15,
    alignItems: 'flex-end',
    right: 10,
  },
  wrongPassView: {
    height: 15,
    alignItems: 'flex-end',
    right: 10,
    //backgroundColor:'red'
  },
  wrongText: {
    fontSize: 16,
    color: 'red',
  },
  inputView: {
    height: hp(5),
    //marginTop: 8,
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
    //backgroundColor: 'blue',
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
  fourView: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orView: {
    flex: 0.2,
    justifyContent: 'center',
  },
  orText: {
    fontSize: 20,
  },
  socialIconView: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    height: '70%',
    width: '15%',
    backgroundColor: 'lightgrey',
    borderWidth: 0.1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  socialImage: {
    height: '60%',
    width: '50%',
    tintColor: 'black',
  },
  checkboxContainer: {
    flexDirection: 'row',
    height: hp(6),
    alignItems: 'center',
    width: wp(85),
    marginVertical: hp(1),
  },
  checkbox: {
    height: hp(3),
    width: wp(7),
    marginLeft: 10,
    tintColor:'grey',
  },
  checkboxLabel:{
    fontSize:hp(1.8),
    fontWeight:'400'
  },
  termView:{
     marginLeft:hp(1),
     width:wp(75),
     height:hp(6),
     marginTop:hp(1),
  }
});

export default Style;
