//For Otp Pattern
// {
// const [otp, setOtp] = useState(['', '', '', '']);

// //Handle input change for each digit
// const handleInputChange = (text, index) => {
//   // Check if the input is a number and not empty
//   if (/^\d+$/.test(text) || text === '') {
//     const newOtp = [...otp];
//     newOtp[index] = text;
//     setOtp(newOtp);
//     // Focus the next input field if available
//     if (index < 3 && text !== '') {
//       refs[index + 1].focus();
//     }
//   }
// };

//  //Refs for each input field
//  const refs = [null, null, null, null];
// {
//    {otp.map((digit, index) => (
//               <TextInput
//                 key={index}
//                 ref={input => (refs[index] = input)}
//                 style={Style.inputMainView}
//                 value={digit}
//                 onChangeText={text => handleInputChange(text, index)}
//                 maxLength={1}
//                 keyboardType="numeric"
//                 returnKeyType="next"
//                 autoCapitalize='none'
//                 autoCorrect={false}
//               />
//             ))} 
// }
// }
