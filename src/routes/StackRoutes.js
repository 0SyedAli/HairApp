import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AppStatusBar from '../components/AppStatusBar';
import Splash from '../screens/Splash';
import GetStarted from '../screens/GetStarted';
import Confirmation from '../screens/Confirmation';
import Confirmation2 from '../screens/Confirmation2';
import BottomTabs from './BottomTabs';
import StylishDetails from '../screens/services/StylishDetails';

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <>
      <AppStatusBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StylishDetails">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Confirmation"
            component={Confirmation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Confirmation2"
            component={Confirmation2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={BottomTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StylishDetails"
            component={StylishDetails}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default StackRoutes;
