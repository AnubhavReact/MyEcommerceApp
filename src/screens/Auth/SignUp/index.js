import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import Style from './style';
import constants from '../../../constants';
import TextInputField from '../../../components/textInput';
import utility from '../../../utility';
import CountryDropDown from '../../../components/countryDropDown/index';
import {useDispatch} from 'react-redux';
import {GetSignUp} from '../../../components/redux/action';
import CheckBox from '@react-native-community/checkbox';

const SignUp = ({navigation}) => {
  //State fot Get Input
  const [data, setData] = useState({
    email: '',
    password: '',
    seePassword: true,
    validEmail: false,
    validPassword: false,
    name: '',
    number: '',
    validPhone: false,
    validName: false,
    termsAccepted: false,
  });

  // Function For Set Value
  const onHandle = (value, text) => {
    setData({
      ...data,
      [value]: text,
    });
  };

  // Variable For Regex
  const reEmail = utility.regex.emailRegex;
  const rePass = utility.regex.passwordRegex;

  // Function For Regex
  const Validation = (item, value) => {
    if (item == 'validEmail') {
      if (reEmail.test(value)) {
        setData(prev => ({
          ...prev,
          validEmail: false,
        }));
      } else {
        setData(prev => ({
          ...prev,
          validEmail: true,
        }));
      }
    } else if (item == 'validPassword') {
      if (rePass.test(value)) {
        setData(prev => ({
          ...prev,
          validPassword: false,
        }));
      } else {
        setData(prev => ({
          ...prev,
          validPassword: true,
        }));
      }
    } else {
    }
  };

  // Object To Store Data
  const SignUpData = {
    email: data.email,
    password: data.password,
    phoneNumber: data.number,
    userName: data.name,
  };

  const dispatch = useDispatch();

  //Funtion For Submit And Api
  const onSubmit = () => {
    console.log(SignUpData);
    if (data.validEmail == false && data.validPassword == false) {
      dispatch(GetSignUp(SignUpData));
      setData(prev => ({
        ...prev,
        email: '',
        password: '',
        seePassword: true,
        validEmail: false,
        validPassword: false,
        name: '',
        number: '',
        validPhone: false,
        validName: false,
        termsAccepted: false,
      }));
    } else {
      Alert.alert('Please Enter Valid Details');
    }
  };

  return (
    <SafeAreaView style={Style.mainView}>
      <View style={Style.firstView}>
        <View style={Style.logoView}>
          <Image source={constants.icon.Logo} style={Style.logoImage} />
        </View>
        <View style={Style.secondView}>
          {/* Its Sign In Text View */}
          <View style={Style.signView}>
            <Text style={Style.signText} numberOfLines={2} ellipsizeMode="tail">
              {constants.constant.Create}
            </Text>
          </View>
          <View style={Style.dataView}>
            <ScrollView
              style={Style.scrollView}
              showsVerticalScrollIndicator={false}>
              {/* Its Email Input View */}
              <View style={Style.inputView}>
                <Image source={constants.icon.Person} style={Style.iconImage} />
                {/* Its Name InputField View */}
                <TextInputField
                  placeholder={constants.constant.Name}
                  value={data.name}
                  onChangeText={text => {
                    onHandle('name', text);
                    Validation('validName', text);
                  }}
                />
              </View>
              {data.validEmail && data.email ? (
                <View style={Style.wrongTextView}>
                  <Text style={Style.wrongText}>Enter Valid Email</Text>
                </View>
              ) : null}
              <View style={Style.inputView}>
                <Image source={constants.icon.Email} style={Style.iconImage} />
                {/* Its Email InputField View */}
                <TextInputField
                  placeholder={constants.constant.Email}
                  value={data.email}
                  onChangeText={text => {
                    onHandle('email', text);
                    Validation('validEmail', text);
                  }}
                />
              </View>
              <View style={Style.inputView}>
                <Image source={constants.icon.Phone} style={Style.iconImage} />
                {/* Its Email InputField View */}
                <TextInputField
                  placeholder={constants.constant.Phone}
                  value={data.number}
                  onChangeText={text => {
                    onHandle('number', text);
                    Validation('validPhone', text);
                  }}
                />
              </View>
              <CountryDropDown />
              {/* Its Password Input View */}
              <View style={Style.inputView}>
                <Image source={constants.icon.Lock} style={Style.iconImage} />
                {/* Its Password InputField View */}
                <TextInputField
                  placeholder={constants.constant.Password}
                  see={data.seePassword}
                  value={data.password}
                  onChangeText={text => {
                    onHandle('password', text);
                    Validation('validPassword', text);
                  }}
                />
                <TouchableOpacity
                  style={Style.eyeView}
                  onPress={() => onHandle('seePassword', !data.seePassword)}>
                  {data.seePassword ? (
                    <Image source={constants.icon.Eye} style={Style.eyeImage} />
                  ) : (
                    <Image
                      source={constants.icon.EyeOff}
                      style={Style.eyeImage}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {data.validPassword && data.password ? (
                <View style={Style.wrongPassView}>
                  <Text style={Style.wrongText}>Enter Valid Password</Text>
                </View>
              ) : null}
              <View style={Style.checkboxContainer}>
                <CheckBox
                  value={data.termsAccepted}
                  onValueChange={newValue =>
                    setData(prev => ({
                      ...prev,
                      termsAccepted: newValue,
                    }))
                  }
                  style={Style.checkbox}
                  boxType="square"
                />
                <View style={Style.termView}>
                  <Text numberOfLines={5} style={Style.checkboxLabel}>
                    {constants.constant.TermCondition}
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
          {/* Its Login View */}
          <View style={Style.loginView}>
            {(data.email && data.password && data.name && data.number) ||
            data.termsAccepted ? (
              <TouchableOpacity
                style={Style.loginButtonView}
                onPress={onSubmit}>
                <Text style={Style.loginText}>{constants.constant.SignUp}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={Style.loginButtonView} disabled={true}>
                <Text style={Style.loginText}>{constants.constant.SignUp}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={Style.thirdView}>
          <Text style={Style.dontText}>{constants.constant.Already}</Text>
          {/* Its Create Account View */}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={Style.createText}>{constants.constant.SignIn}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
