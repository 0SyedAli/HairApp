import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import GetStarted from '../screens/GetStarted';
import Confirmation from '../screens/Confirmation';
import colors from '../asset/colors/index';
import {StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#CD8A1A',
        tabBarInactiveTintColor: '#CD8A1A',
        tabBarStyle: {
          borderTopWidth: 0,
          height: Platform.OS === 'ios' ? 100 : 65,
          backgroundColor: colors.primary,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          paddingTop: 5,
          borderTopRightRadius: 35,
          borderTopLeftRadius: 35,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <View style={styles.iconView}>
                <Icon name="home" color={color} size={21}/>
              </View>
            ) : (
              <Icon name="home" color={color} size={21}/>
            ),
        }}
      />
      <Tab.Screen
        name="Splash"
        component={Splash}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <View style={styles.iconView}>
                <Icon name="map-pin" color={color} size={19}/>
              </View>
            ) : (
              <Icon name="map-pin" color={color} size={19}/>
            ),
        }}
      />
      <Tab.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <View style={styles.iconView}>
                <Icon name="shopping-cart" color={color} size={21}/>
              </View>
            ) : (
              <Icon name="shopping-cart" color={color} size={21}/>
            ),
        }}
      />
      <Tab.Screen
        name="Confirmation"
        component={Confirmation}
        options={{
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <View style={styles.iconView}>
                <Icon name="settings" color={color} size={20}/>
              </View>
            ) : (
              <Icon name="settings" color={color} size={20}/>
            ),
        }}
        
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  iconView: {
    backgroundColor: '#cd8a1a24',
    borderRadius:100,
    height:50,
    width:50,
    justifyContent:'center',
    alignItems:'center'
  }
});
