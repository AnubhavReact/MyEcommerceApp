const SignInContinue = 'Sign in to Continue';
const Continue = 'Continue.';
const Email = 'Email';
const Password = 'Password';
const Forget = 'Forget Password?';
const Login = 'Login';
const Dont = "Dont't have an account?";
const Create = 'Create New Account';
const OR = 'OR login with';
const SignUp = 'Create Account';
const Already = 'I already have an account?';
const SignIn = 'Sign In';
const Name = 'Name';
const Phone = 'Phone';
const Forgot = 'Forgot Password';
const Verification = 'Send Verification Code';
const ContinuePhone = 'Continue using phone number.';
const ContinueEmail = 'Continue using Email.';
const HomeScreen = 'Home Screen';
const Home = 'Home';
const SearchScreen = 'Search Screen';
const ProfileScreen = 'Profile Screen';
const Profile = 'Profile';
const VerificationScreen = 'Verification';
const EnterOtp = 'Enter OTP sent to your phone ';
const Resend = 'Resend Code';
const Submit = 'Submit';
const TermCondition =
  'By registering, you agree to out Terms and that you have read our Data Use Policy.';

const walkthrough_01_01_images = [
  // require('../assets/images/walkthrough/walkthrough_01_01.png'),
  // require('../assets/images/walkthrough/walkthrough_01_02.png'),
  // require('../assets/images/walkthrough/walkthrough_01_03.png'),
  // require('../assets/images/walkthrough/walkthrough_01_04.png'),
];

const walkthrough_01_02_images = [
  // require('../assets/images/walkthrough/walkthrough_01_05.png'),
  // require('../assets/images/walkthrough/walkthrough_01_06.png'),
  // require('../assets/images/walkthrough/walkthrough_01_07.png'),
  // require('../assets/images/walkthrough/walkthrough_01_01.png'),
];

const walkthrough = [
  {
    id: 0,
    title: 'Genuine product',
    sub_title: 'Diversified items of products in life, genuine product, safe',
  },
  {
    id: 1,
    title: 'Convenient ordering',
    sub_title: 'Order multiple items from multiple brands at the same time',
  },
  {
    id: 2,
    title: 'Easy search',
    sub_title:
      'Find products easy with Scanning camera, pay with just one camera scan',
  },
  {
    id: 3,
    title: 'Super fast delivery',
    sub_title: 'Delivery within the next day including Saturday and Sunday',
  },
];

const dashboard_screens = {
  home: 'Home',
  category: 'Category',
  promo: 'Promo',
  profile: 'Profile',
};

const bottom_tabs = [
  {
    id: 0,
    label: dashboard_screens.home,
  },
  {
    id: 1,
    label: dashboard_screens.category,
  },
  {
    id: 2,
    label: dashboard_screens.promo,
  },
  {
    id: 3,
    label: dashboard_screens.profile,
  },
];

const scan_product_option = {
  qr: 'QR',
  camera: 'CAMERA',
};

export default {
  SignInContinue,
  Continue,
  Email,
  Password,
  Forget,
  Login,
  Dont,
  Create,
  OR,
  SignUp,
  Already,
  Name,
  Phone,
  Forgot,
  Verification,
  ContinuePhone,
  SignInContinue,
  SignIn,
  Home,
  HomeScreen,
  Profile,
  ProfileScreen,
  SearchScreen,
  VerificationScreen,
  EnterOtp,
  Resend,
  Submit,
  ContinueEmail,
  walkthrough_01_01_images,
  walkthrough_01_02_images,
  walkthrough,
  dashboard_screens,
  bottom_tabs,
  scan_product_option,
  TermCondition,
};
