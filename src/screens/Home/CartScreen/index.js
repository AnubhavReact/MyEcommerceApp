import React from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {
  addQuantity,
  removeQuantity,
  removeToCart,
} from '../../../components/reduxToolKit/slice';
import NavigationService from '../../../navigation/NavigationService';

const CartScreen = () => {
  const CartList = useSelector(State => State.cart.Cartitem);
  const FavList = useSelector(State => State.cart.FavItem);
  const TotalPrice = useSelector(State => State.cart.totalPrice);

  const dispatch = useDispatch();

  const Delete = item => {
    dispatch(removeToCart(item));
  };

  const Add = item => {
    dispatch(addQuantity(item));
    console.log('AfterAdd', TotalPrice);
  };

  const Remove = item => {
    dispatch(removeQuantity(item));
    console.log('AfterRemove', TotalPrice);
  };

  const renderItem = ({item}) => {
    const totalItemPrice = item.price * item.quantity;
    return (
      <View style={Style.listMainVew}>
        <View style={Style.listContentView}>
          <Text style={Style.ListValueText}>{item.name}</Text>
        </View>
        <View style={Style.priceView}>
          <Text style={Style.priceText}>{totalItemPrice}</Text>
        </View>
        <View style={Style.quantityView}>
          <TouchableOpacity onPress={() => Add(item)}>
            <Image source={constants.icon.Plus} style={Style.operatorIcon} />
          </TouchableOpacity>
          <Text style={Style.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => Remove(item)}>
            <Image source={constants.icon.Minus} style={Style.operatorIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={Style.deleteButtonView}
          onPress={() => Delete(item)}>
          <Image source={constants.icon.Delete} style={Style.deleteIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  const FavRenderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={Style.listContentView}>
          <Text style={Style.ListValueText}>{item.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={Style.safeView}>
      <View style={Style.mainView}>
        <View style={Style.headerView}>
          <TouchableOpacity
            style={Style.headerIconView}
            onPress={() => NavigationService.goBack('CategoryScreen')}>
            <Image source={constants.icon.Back} style={Style.headerIcon} />
          </TouchableOpacity>
          <View style={Style.headerTextView}>
            <Text style={Style.headerText}>Cart Screen</Text>
            <Text style={Style.headerText}>{TotalPrice}</Text>
          </View>
        </View>
        <View style={Style.containerView}>
          <View style={Style.containerHeaderView}>
            <Text style={Style.containerHeaderText}>Your Cart Item </Text>
          </View>
          <View style={Style.listView}>
            {CartList.length ? (
              <FlatList
                data={CartList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                bounces={false}
              />
            ) : (
              <View style={Style.emptyView}>
                <Text style={Style.emptyText}>Sorry Your Cart Is Empty</Text>
                <TouchableOpacity
                  style={Style.addItemButton}
                  onPress={() => NavigationService.goBack('CategoryScreen')}>
                  <Text style={Style.addItemText}>Add Item </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={Style.bottomView}>
          <Text style={Style.favText}>Your Fav Item List</Text>
          {FavList.length ? (
            <FlatList
              data={FavList}
              renderItem={FavRenderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              bounces={false}
            />
          ) : (
            <View style={Style.emptyView}>
              <Text style={Style.emptyText}>Sorry Your Fav Item Is Empty</Text>
              <TouchableOpacity
                style={Style.addItemButton}
                onPress={() => NavigationService.goBack('CategoryScreen')}>
                <Text style={Style.addItemText}>Add Item </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
