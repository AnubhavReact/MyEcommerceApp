import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Style from './style';
import {LOGOUT} from '../../../components/redux/action';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../../../constants';
import {FlatList, TextInput} from 'react-native-gesture-handler';

const Home = () => {
  const dispatch = useDispatch();

  //Funtion For LogOut
  const onLogOut = async () => {
    await AsyncStorage.removeItem('token');
    console.log('Successfully LogOut');
    dispatch(LOGOUT());
  };

  const home_tabs = [
    {
      id: 0,
      label: 'Product',
    },
    {
      id: 1,
      label: 'My Chart',
    },
    {
      id: 2,
      label: 'Service',
    },
  ];

  return (
    <SafeAreaView style={Style.safeView}>
      <View style={Style.mainView}>
        <View style={Style.headerView}>
          <View style={Style.firstHeaderView}>
            <TouchableOpacity onPress={onLogOut} >
              <Image style={Style.ByLogoIcon} source={constants.icon.ByLogo} />
            </TouchableOpacity>
            <Text style={Style.homeText}>
              {constants.constant.dashboard_screens.home}
            </Text>
          </View>
          <View style={Style.secondHeaderView}>
            <TouchableOpacity style={Style.iconView}>
              <Image
                style={Style.ByLogoIcon}
                source={constants.icon.ShoppingBag}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={Style.ByLogoIcon} source={constants.icon.Bell} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={Style.ByLogoIcon}
                source={constants.icon.ShoppingCart}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Style.searchView}>
          <View style={Style.searchButtonView}>
            <TouchableOpacity>
              <Image source={constants.icon.Search} style={Style.ByLogoIcon} />
            </TouchableOpacity>
            <TextInput placeholder="Search Product" style={Style.textInputStyle}  />
            <TouchableOpacity>
              <Image
                source={constants.icon.secondCamera}
                style={Style.ByLogoIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={Style.listView}>
            <FlatList
              data={home_tabs}
              renderItem={({item}) => {
                return (
                  <View style={Style.listSideView} >
                    <Text>{item.label}</Text>
                  </View>
                );
              }}
              horizontal
            />
          </View>
        </View>
        <View style={Style.contentView}>
          <ScrollView>
            <View style={Style.bannerOneView}>
              <Image
                source={constants.icon.BannerOne}
                style={Style.bannerOne}
              />
            </View>
            <View style={Style.mainContentView}>
              <View style={Style.firstListView} >

              </View>
              <View style={Style.firstListView}>

              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
