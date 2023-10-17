import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import Style from './style';
import constants from '../../../constants';
import utility from '../../../utility';

const ForgetScreen = ({navigation}) => {
  const [value, setValue] = useState({
    email: '',
    varifyEmail: false,
  });

  const numRegex = utility.regex.emailRegex;

  const onChange = text => {
    if (numRegex.test(text)) {
      setValue(prev => ({
        ...prev,
        varifyEmail: false,
      }));
      console.log('Valid Number');
    } else {
      setValue(prev => ({
        ...prev,
        varifyEmail: true,
      }));
      console.log('Invalid Number');
    }
  };

  const onSubmit = async () => {
    navigation.navigate('OtpVerification');
    // try {
    //   const url = 'https://30c6-14-99-89-70.ngrok-free.app/sendMail';
    //   const response = await fetch(url, {
    //     method: 'post',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({Email_id: value.email}),
    //   });
    //   const result = await response.json();
    //   if (response.status == 200) {
    //     Alert.alert('Otp Send Successfully');
    //     navigation.navigate('OtpVerification');
    //     setValue(prev => ({
    //       ...prev,
    //       email: '',
    //     }));
    //   } else {
    //     Alert.alert(result.message);
    //   }
    // } catch (error) {
    //   console.error('Error:', error.message);
    // }
  };

  return (
    <SafeAreaView style={Style.safeView}>
      <View style={Style.mainView}>
        <View style={Style.headerView}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image source={constants.icon.Back} style={Style.backImageStyle} />
          </TouchableOpacity>
          <Text style={Style.textStyle}>{constants.constant.Forgot}</Text>
        </View>
        <View style={Style.mainContentStyle}>
          <View style={Style.textView}>
            <Text style={Style.textTwoStyle}>
              {constants.constant.ContinueEmail}
            </Text>
          </View>
          <View style={Style.inputView}>
            <View style={Style.inputMainView}>
              <Image
                source={constants.icon.Email}
                style={Style.backImageStyle}
              />
              <TextInput
                placeholder="Email"
                style={Style.textInputStyle}
                //maxLength={10}
                keyboardType="email-address"
                onChangeText={text => {
                  onChange(text);
                  setValue(prev => ({
                    ...prev,
                    email: text,
                  }));
                }}
                value={value.email}
              />
            </View>
            {value.email && value.varifyEmail ? (
              <View style={Style.wrongMsgView}>
                <Text style={Style.wrongMsgStyle}>
                  Please Enter Valid Email
                </Text>
              </View>
            ) : null}
          </View>
          <View style={Style.bottomViewStyle}>
            <TouchableOpacity style={Style.buttonViewStyle} onPress={onSubmit}>
              <Text style={Style.sendTextStyle}>
                {constants.constant.Verification}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetScreen;
