import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  mainView: {
    height: '100%',
  },
  firstView: {
    flex: 1,
  },
  logoView: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    height: '60%',
    width: '10%',
  },
  secondView: {
    flex: 0.6,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 15,
    borderWidth: 0.2,
    borderColor: 'grey',
  },
  signView: {
    marginVertical: 5,
    flex: 0.2,
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  signText: {
    fontSize: 28,
    fontWeight: '800',
    left: 10,
  },
  dataView: {
    flex: 0.5,
    justifyContent: 'center',
  },
  wrongTextView: {
    height: 15,
    alignItems: 'flex-end',
    right: 10,
  },
  wrongText: {
    fontSize: 16,
    color: 'red',
  },
  inputView: {
    height: '25%',
    marginHorizontal: 15,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImage: {
    height: '50%',
    width: '10%',
    marginLeft: 10,
  },
  eyeView: {
    height: '60%',
    width: '10%',
    marginLeft: 5,
  },
  eyeImage: {
    height: '100%',
    width: '100%',
  },
  forgetView: {
    marginTop: 5,
    height: '12%',
    alignItems: 'flex-end',
    marginHorizontal: 15,
  },
  forgetText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'cyan',
  },
  loginView: {
    flex: 0.3,
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  loginButtonView: {
    height: '40%',
    backgroundColor: 'darkblue',
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    top: 15,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 20,
    color: 'lightblue',
  },
  thirdView: {
    flex: 0.04,
    marginHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dontText: {
    fontSize: 15,
    color: 'darkgrey',
  },
  createText: {
    fontSize: 16,
    color: 'cyan',
    left: 10,
  },
  fourView: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orView: {
    flex: 0.2,
    justifyContent: 'center',
  },
  orText: {
    fontSize: 20,
  },
  socialIconView: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    height: '70%',
    width: '15%',
    backgroundColor: 'lightgrey',
    borderWidth: 0.1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  socialImage: {
    height: '60%',
    width: '50%',
    tintColor: 'black',
  },
});

export default Style;
