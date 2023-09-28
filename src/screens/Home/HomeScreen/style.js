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
    justifyContent:'space-around',
    alignItems:'center',
  },
  homeText: {
    fontSize:constants.appTheme.SIZES.h1,
    color:constants.appTheme.COLORS.black,
    fontWeight:'bold'
  },
  logoutView: {
    height:hp(6),
    width:wp(50),
    backgroundColor:constants.appTheme.COLORS.primary,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
  },
  logOutText:{
    fontSize:constants.appTheme.SIZES.h2,
    fontWeight:'bold',
    color:constants.appTheme.COLORS.white
  }
});

export default Style;
