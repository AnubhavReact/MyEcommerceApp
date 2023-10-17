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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerView: {
    flex: 1,
    backgroundColor: constants.appTheme.COLORS.primary,
    flexDirection: 'row',
  },
  firstHeaderView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ByLogoIcon: {
    height: hp(4),
    width: wp(8),
  },
  homeText: {
    fontSize: constants.appTheme.SIZES.h2,
    color: constants.appTheme.COLORS.white2,
    fontWeight: 'bold',
  },
  secondHeaderView: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconView: {
    // backgroundColor: 'blue',
  },
  logOutText: {
    fontSize: constants.appTheme.SIZES.h2,
    fontWeight: 'bold',
    color: constants.appTheme.COLORS.white,
  },
  searchView: {
    flex: 1,
    backgroundColor: constants.appTheme.COLORS.primary,
    width: wp(100),
  },
  searchButtonView: {
    flex: 1,
    backgroundColor: constants.appTheme.COLORS.white2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: hp(1),
    borderRadius: 10,
  },
  listView: {
    flex: 1,
    backgroundColor: constants.appTheme.COLORS.blue,
  },
  listSideView:{
    flex: 1,
    backgroundColor: constants.appTheme.COLORS.red,
    widht:wp(20),
    margin:hp(2)
  },
  contentView: {
    flex: 1,
    backgroundColor: constants.appTheme.COLORS.white2,
    width: wp(100),
  },
  bannerOneView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: constants.appTheme.COLORS.primary,
    height: hp(20),
  },
  bannerOne: {
    height: hp(20),
    width: wp(85),
    borderRadius: 10,
    top: hp(10),
  },
  mainContentView: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Style;
