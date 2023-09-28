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

const Verification = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  // Handle input change for each digit
  const handleInputChange = (text, index) => {
    // Check if the input is a number and not empty
    if (/^\d+$/.test(text) || text === '') {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      // Focus the next input field if available
      if (index < 3 && text !== '') {
        refs[index + 1].focus();
      }
    }
  };

  // Refs for each input field
  const refs = [null, null, null, null];

  const onSubmit = async () => {
    const concatenatedString = otp.join('');
    const Value = parseInt(concatenatedString, 10);  
    try {
      const url = 'https://30c6-14-99-89-70.ngrok-free.app/verifyOtp';
      const response = await fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          Email_id: 'shuklaanubhav0512@gmail.com',
          Otp: Value,
        }),
      });
      console.log(typeof Value);
      console.log(Value);
      const result = await response.json();
      if (response.status === 200) {
        Alert.alert('Password Reset Successfully');
        navigation.navigate('Login');
      } else {
        Alert.alert(result.message);
      }
      console.log(response.status);
    } catch (error) {
      console.error('Error:', error.message);
    }
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
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={input => (refs[index] = input)}
                style={Style.inputMainView}
                value={digit}
                onChangeText={text => handleInputChange(text, index)}
                maxLength={1}
                keyboardType="numeric"
                returnKeyType="next"
                autoCapitalize='none'
                autoCorrect={false}
              />
            ))}
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
