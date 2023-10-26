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
  },
  headerView: {
    flex: 0.25,
    flexDirection: 'row',
  },
  headerTextView: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
  },
  headerIconContainerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerIconView: {
    flexDirection: 'row',
    height: hp(5.5),
    width: wp(13),
    alignItems: 'center',
  },
  headerIcon: {
    height: hp(4),
    width: wp(10),
    tintColor: 'grey',
  },
  headerIconValueView: {
    height: hp(2.5),
    width: hp(2.5),
    backgroundColor: constants.appTheme.COLORS.orange,
    borderRadius: hp(1.25),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: hp(3),
    left: hp(3),
  },
  containerView: {
    flex: 2,
  },
  containerHeaderView: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeaderText: {
    fontSize: hp(3),
    fontWeight: 'bold',
    color: constants.appTheme.COLORS.error80,
  },
  listView: {
    flex: 2,
  },
  listContentView: {
    height: hp(5),
    margin: hp(2),
    width: wp(70),
    backgroundColor: constants.appTheme.COLORS.primary,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: hp(2),
    flexDirection: 'row',
  },
  ListValueText: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: 'white',
  },
  ListPriceText: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: 'lightgreen',
  },
  favIconView: {
    height: hp(4),
    width: wp(7),
    borderRadius: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  favIcon: {
    height: hp(3.5),
    width: wp(7),
  },
  bottomView: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomValueView: {
    backgroundColor: constants.appTheme.COLORS.primary,
    height: hp(7),
    width: wp(50),
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderRadius: hp(2),
    flexDirection: 'row',
  },
  bottomValueText: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Style;
