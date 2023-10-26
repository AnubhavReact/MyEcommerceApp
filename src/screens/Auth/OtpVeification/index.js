import React, {useState} from 'react';
import {
  View,
  TextInput,
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Style from './style';
import constants from '../../../constants';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Verification = ({navigation}) => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = text => {
    setOtp(text);
  };

  const onSubmit = async () => {
    console.log(otp);
    //const concatenatedString = otp.join('');
    //   const Value = parseInt(concatenatedString, 10);
    //   try {
    //     const url = 'https://30c6-14-99-89-70.ngrok-free.app/verifyOtp';
    //     const response = await fetch(url, {
    //       method: 'post',
    //       headers: {'Content-Type': 'application/json'},
    //       body: JSON.stringify({
    //         Email_id: 'shuklaanubhav0512@gmail.com',
    //         Otp: otp,
    //       }),
    //     });
    //     console.log(typeof Value);
    //     console.log(Value);
    //     const result = await response.json();
    //     if (response.status === 200) {
    //       Alert.alert('Password Reset Successfully');
    //       navigation.navigate('Login');
    //     } else {
    //       Alert.alert(result.message);
    //     }
    //     console.log(response.status);
    //   } catch (error) {
    //     console.error('Error:', error.message);
    //   }
    //
    setOtp('');
  };

  return (
    <SafeAreaView style={Style.safeView}>
      <View style={Style.mainView}>
        <View style={Style.headerView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Image source={constants.icon.Back} style={Style.backImageStyle} />
          </TouchableOpacity>
          <Text style={Style.textStyle}>
            {constants.constant.VerificationScreen}
          </Text>
        </View>
        <View style={Style.mainContentStyle}>
          <View style={Style.textView}>
            <Text style={Style.textTwoStyle}>
              {constants.constant.EnterOtp}
            </Text>
          </View>
          <View style={Style.inputView}>
            <OTPInputView
              style={{width: '80%', height: 200}}
              pinCount={4}
              code={otp}
              onCodeChanged={code => handleOtpChange(code)}
              autoFocusOnLoadz={true}
              codeInputFieldStyle={{
                width: 70,
                height: 70,
                borderWidth: 3,
                borderRadius: 35,
                fontSize: 25,
                color: 'cyan',
                borderColor: 'cyan',
              }}
              keyboardAppearance="dark"
              keyboardType="numeric"
              secureTextEntry={true}
            />
          </View>
          <View style={Style.bottomViewStyle}>
            <TouchableOpacity>
              <Text style={Style.sendTextStyle}>
                {constants.constant.Resend}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.buttonViewStyle} onPress={onSubmit}>
              <Text style={Style.sendTextStyle}>
                {constants.constant.Submit}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Verification;
