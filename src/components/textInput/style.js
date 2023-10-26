import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Style = StyleSheet.create({
  textInput: {
    flex:1,
    marginHorizontal:hp(1),
    fontSize: hp(1.8),
    marginLeft: 10,
  },
});

export default Style;
