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
import TextInputField  from '../../../components/textInput';
import utility from '../../../utility';

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

  const onSubmit = async () => {
    console.log(data.email);
    console.log(data.password);
    if (data.validEmail == false && data.validPassword == false) {
      try {
        const url = 'https://a62c-14-99-89-70.ngrok-free.app/signup';
        const response = await fetch(url, {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phoneNumber: data.number,
            password: data.password,
          }),
        });
        const result = await response.json();
        if (result) {
          if (response.status == 200) {
            Alert.alert(result.msg);
           // navigation.navigate('Login');
          } else {
            Alert.alert(result.msg);
          }
        }
      } catch (error) {
        console.log('Error');
        console.error('Error:', error.msg);
      }
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
            {/* {data.validEmail ? (
              <View style={Style.wrongTextView}>
                <Text style={Style.wrongText}>Enter Valid Email</Text>
              </View>
            ) : null} */}
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
            {/* {data.validPassword ? (
              <View style={Style.wrongPassView}>
                <Text style={Style.wrongText}>Enter Valid Password</Text>
              </View>
            ) : null} */}
          </View>
          {/* Its Login View */}
          <View style={Style.loginView}>
            {data.email && data.password && data.name && data.number ? (
              <TouchableOpacity
                style={Style.loginButtonView}
                onPress={onSubmit}>
                <Text style={Style.loginText}>{constants.constant.Sign}</Text>
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