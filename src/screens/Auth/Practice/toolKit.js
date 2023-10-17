import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../../components/reduxToolKit/slice';

const ToolKitScreen = () => {
  const Value = useSelector(State => State.cart.count);

  const dispatch = useDispatch();

  const AddItem = () => {
    dispatch(increment(input));
    setInput('');
  };

  const RemoveItem = () => {
    dispatch(decrement());
  };

  const [input, setInput] = useState();

  return (
    <SafeAreaView style={Style.safeView}>
      <View style={Style.mainView}>
        <View style={Style.headerView}>
          <Text style={Style.headerText}>ToolKitScreen</Text>
        </View>
        <View style={Style.containerView}>
          <TextInput
            placeholder="Enter Any Value"
            style={Style.inputStyle}
            value={input}
            onChangeText={text => setInput(text)}></TextInput>
          <Text style={Style.valueView}>{Value}</Text>
          <TouchableOpacity style={Style.buttonView} onPress={() => AddItem()}>
            <Text style={Style.titleView}>Add Item</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.buttonView}
            onPress={() => RemoveItem()}>
            <Text style={Style.titleView}>Remove Item</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ToolKitScreen;

const Style = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  mainView: {
    flex: 1,
  },
  headerView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  containerView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputStyle: {
    width: '60%',
    height: '8%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    fontSize: 18,
    paddingLeft: 9,
  },
  valueView: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonView: {
    backgroundColor: 'cyan',
    width: '60%',
    height: '8%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
});
