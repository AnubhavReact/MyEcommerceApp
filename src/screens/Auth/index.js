import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import SignUp from './SignUp';
import ForgetScreen from './ForgetPassword';
import Verification from './OtpVeification';
import WalkThrough from './walkthrough';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="WalkThrough">
      <Stack.Screen
        name="WalkThrough"
        component={WalkThrough}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpVerification"
        component={Verification}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Auth;
