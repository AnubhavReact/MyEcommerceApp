import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/HomeScreen';
import CategoryScreen from '../../screens/Home/CategoryScreen';
import SearchScreen from '../../screens/Home/SaechScreen';
import PromoScreen from '../../screens/Home/PromoScreen';
import ProfileScreen from '../../screens/Home/ProfileScreen';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Promo"
        component={PromoScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Main;
