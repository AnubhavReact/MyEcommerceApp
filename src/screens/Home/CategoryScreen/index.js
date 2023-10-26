import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import Style from './style';
import constants from '../../../constants';
import {Data} from './data';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, addToFav} from '../../../components/reduxToolKit/slice';
import NavigationService from '../../../navigation/NavigationService';

const CategoryScreen = () => {
  const [temp, setTemp] = useState();

  const Value = useSelector(State => State.cart.Value);

  const Fav = useSelector(State => State.cart.Fav);

  const FavList = useSelector(State => State.cart.FavItem);

  const dispatch = useDispatch();

  const Add = item => {
    dispatch(addToCart(item));
    setTemp(item);
  };

  const Addfav = item => {
    dispatch(addToFav(item));
  };
  
  const renderItem = ({item}) => {
    const tintColor = FavList?.some(val => val?.id == item?.id);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={Style.listContentView}
          onPress={() => Add(item)}>
          <Text style={Style.ListValueText}>{item.name}</Text>
          <Text style={Style.ListPriceText}>{item.price}Rs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.favIconView}
          onPress={() => {
            Addfav(item);
          }}>
          <Image
            source={constants.icon.Fav}
            style={[Style.favIcon, {tintColor: tintColor ? 'red' : null}]}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={Style.safeView}>
      <View style={Style.mainView}>
        <View style={Style.headerView}>
          <View style={Style.headerTextView}>
            <Text style={Style.headerText}>CategoryScreen</Text>
          </View>
          <View style={Style.headerIconContainerView}>
            <TouchableOpacity
              style={Style.headerIconView}
              onPress={() => NavigationService.navigate('CartScreen')}>
              <Image
                style={Style.headerIcon}
                source={constants.icon.ShoppingCart}
              />
              {Value ? (
                <View style={Style.headerIconValueView}>
                  <Text>{Value}</Text>
                </View>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={Style.headerIconView}
              onPress={() => NavigationService.navigate('CartScreen')}>
              <Image style={Style.headerIcon} source={constants.icon.Fav} />
              {Fav ? (
                <View style={Style.headerIconValueView}>
                  <Text>{Fav}</Text>
                </View>
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
        <View style={Style.containerView}>
          <View style={Style.containerHeaderView}>
            <Text style={Style.containerHeaderText}>Food Item List</Text>
          </View>
          <View style={Style.listView}>
            <FlatList
              data={Data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              bounces={false}
            />
          </View>
        </View>
        <View style={Style.bottomView}>
          {temp ? (
            <View style={Style.bottomValueView}>
              <Text style={Style.bottomValueText}>{temp.name}</Text>
              <Text style={Style.bottomValueText}>{temp.id}</Text>
              <Text style={Style.bottomValueText}>{temp.quantity}</Text>
              <Text style={Style.bottomValueText}>{temp.price}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
