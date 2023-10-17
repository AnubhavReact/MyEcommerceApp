import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import constants from '../../constants';

const Style = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    height: hp(5),
    alignItems: 'center',
    backgroundColor: constants.appTheme.COLORS.white2,
    paddingHorizontal: hp(2),
    marginVertical: hp(1),
  },
  inputView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: 'green',
  },
  countryText: {
    color: constants.appTheme.COLORS.black,
    fontSize: 16,
    fontWeight: '500',
  },
  downArrow: {
    width: 32,
    height: 32,
  },
  modalView: {
    flex: 1,
    borderRadius: 20,
    width: wp(80),
    alignSelf: 'center',
    margin: hp(25),
    backgroundColor: constants.appTheme.COLORS.white2,
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
  },
  countryButton: {
    flexDirection: 'row',
    marginVertical: hp(1),
    //justifyContent: 'space-between',
    width: wp(70),
  },
  countryImage: {
    width: 30,
    height: 30,
    marginRight:10
  },
  countryImageView: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default Style;
