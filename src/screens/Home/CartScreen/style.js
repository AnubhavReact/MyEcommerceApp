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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:'row'
  },
  headerText: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
  },
  headerIconView: {
    height: hp(3),
    width: wp(9),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: hp(1),
  },
  headerIcon: {
    height: hp(4),
    width: wp(10),
    tintColor: 'grey',
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
    flex: 1.8,
  },
  listMainVew: {
    height: hp(6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: hp(1),
  },
  listContentView: {
    height: hp(5),
    width: wp(20),
    backgroundColor: constants.appTheme.COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(2),
  },
  ListValueText: {
    fontSize: hp(1.5),
    fontWeight: 'bold',
    color: 'white',
  },
  priceView: {
    height: hp(5),
    width: wp(15),
    borderRadius: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: constants.appTheme.COLORS.green,
  },
  priceText: {
    fontSize: hp(1.5),
    fontWeight: 'bold',
    color: 'white',
  },
  quantityView: {
    height: hp(5),
    width: wp(15),
    backgroundColor: constants.appTheme.COLORS.transparentPrimary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: hp(2),
  },
  quantityText: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: 'white',
  },
  operatorIcon: {
    height: hp(2),
    width: wp(4),
  },
  deleteButtonView: {
    height: hp(4),
    width: wp(8),
    borderRadius: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteIcon: {
    height: hp(3),
    width: wp(7),
    tintColor: constants.appTheme.COLORS.orange,
  },
  emptyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  emptyText: {
    fontSize: hp(3),
    fontWeight: 'bold',
    color: 'orange',
  },
  addItemButton: {
    flex: 0.15,
    backgroundColor: 'cyan',
    width: wp(50),
    borderRadius: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  addItemText: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: 'white',
  },
  bottomView: {
    flex: 1.2,
  },
  favText: {
    fontSize: hp(2),
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Style;
