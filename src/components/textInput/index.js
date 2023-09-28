import {TextInput} from 'react-native';
import Style from './style';

const TextInputField = props => {
  const {onChangeText, value} = props;

  return (
    <TextInput
      style={Style.textInput}
      placeholder={props.placeholder}
      secureTextEntry={props.see}
      value={value}
      onChangeText={text => onChangeText(text)}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};

export default TextInputField;
