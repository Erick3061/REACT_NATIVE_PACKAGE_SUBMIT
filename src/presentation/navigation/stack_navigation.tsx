import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerNavigation} from './';
import {CameraScanScreen, ThemeScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerNavigation"
        options={{headerShown: false}}
        component={DrawerNavigation}
      />
      <Stack.Screen name="CameraScanScreen" component={CameraScanScreen} />
      <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
    </Stack.Navigator>
  );
};
