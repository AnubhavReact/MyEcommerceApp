import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Style from './style';
import constants from '../../../constants';
import TextInputField from '../../../components/textInput';
import utility from '../../../utility';
import {useDispatch} from 'react-redux';
import {GetLogin} from '../../../components/redux/action';
import NavigationService from '../../../navigation/NavigationService';

const Login = ({navigation}) => {
  //State fot Get Input
  const [data, setData] = useState({
    email: '',
    password: '',
    seePassword: true,
    validEmail: false,
    validPassword: false,
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
    } else {
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
    }
  };

  const dispatch = useDispatch();

  // Object To Store Data
  const LoginData = {
    email: data.email,
    password: data.password,
  };

  const onSubmit = () => {
    console.log(LoginData);
    dispatch(GetLogin(LoginData));
    // if (data.email != '' && data.password != '') {
    //   dispatch(GetLogin(LoginData));
    //   setData(prev => ({
    //     ...prev,
    //     email: '',
    //     password: '',
    //     seePassword: true,
    //     validEmail: false,
    //     validPassword: false,
    //   }));
    // } else {
    //   Alert.alert('Please Enter Valid Details');
    // }
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
              {constants.constant.SignInContinue}
            </Text>
          </View>
          <View style={Style.dataView}>
            {/* Its Email Input View */}
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
            {/* Its Forget Password View */}
            <View style={Style.forgetView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={Style.forgetText}>
                  {constants.constant.Forget}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Its Login View */}
          <View style={Style.loginView}>
            {data.email || data.password ? (
              <TouchableOpacity
                style={Style.loginButtonView}
                onPress={() => onSubmit()}>
                <Text style={Style.loginText}>{constants.constant.Login}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={Style.loginButtonView} disabled={true}>
                <Text style={Style.loginText}>{constants.constant.Login}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={Style.thirdView}>
          <Text style={Style.dontText}>{constants.constant.Dont}</Text>
          {/* Its Create Account View */}
          <TouchableOpacity onPress={() => NavigationService.navigate('SignUp')}>
            <Text style={Style.createText}>{constants.constant.Create}</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.fourView}>
          {/* Its OrText View */}
          <View style={Style.orView}>
            <Text style={Style.orText}>{constants.constant.OR}</Text>
          </View>
          <View style={Style.socialIconView}>
            {/* Its Twiiter View */}
            <TouchableOpacity style={Style.iconView}>
              <Image
                source={constants.icon.Twitter}
                style={Style.socialImage}
              />
            </TouchableOpacity>
            {/* Its Google View */}
            <TouchableOpacity style={Style.iconView} onPress={() => onChange()}>
              <Image source={constants.icon.Google} style={Style.socialImage} />
            </TouchableOpacity>
            {/* Its LinkedIn View */}
            <TouchableOpacity style={Style.iconView}>
              <Image source={constants.icon.Linked} style={Style.socialImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
