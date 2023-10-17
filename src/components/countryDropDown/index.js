import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image, FlatList} from 'react-native';
import constants from '../../constants';
import Style from './style';
import {CountryData} from './data';
import Modal from 'react-native-modal';

const CountryDropDown = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const selectCountry = country => {
    setSelectedCountry(country);
    closeModal();
  };
  const renderCountryItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => selectCountry(item)}
        style={Style.countryButton}>
        <Image source={{uri: item.flag}} style={Style.countryImage} />
        <Text style={Style.countryText}>{item.country}</Text>
      </TouchableOpacity>
    );
  };
  const ModalContent = () => {
    return (
      <View style={Style.modalContainer}>
        <FlatList
          data={CountryData}
          renderItem={renderCountryItem}
          keyExtractor={item => item.country}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };
  return (
    <TouchableOpacity style={Style.mainView} onPress={openModal}>
      <View style={Style.inputView}>
        {selectedCountry && (
          <Image
            source={{uri: selectedCountry.flag}}
            style={Style.countryImageView}
          />
        )}
        <Text style={Style.countryText}>
          {selectedCountry ? selectedCountry.country : 'Country'}
        </Text>
      </View>
      <Image source={constants.icon.arrowDown} style={Style.downArrow} />
      <Modal
        isVisible={modalVisible}
        style={Style.modalView}
        onBackdropPress={closeModal}>
        <ModalContent />
      </Modal>
    </TouchableOpacity>
  );
};

export default CountryDropDown;
