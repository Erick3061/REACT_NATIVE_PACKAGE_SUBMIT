import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigation} from './';
import {CameraScanScreen, ThemeScreen} from '../screens';
import {StackScreensProps} from '../../infrastructure/types';

const Stack = createNativeStackNavigator<StackScreensProps>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="DrawerNavigation"
        options={{headerShown: false}}
        component={DrawerNavigation}
      /> */}
      <Stack.Screen
        options={{headerShown: false}}
        name="BottomTabNavigation"
        component={BottomTabNavigation}
      />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="CameraScanScreen"
          component={CameraScanScreen}
          options={{animation: 'fade_from_bottom'}}
        />
      </Stack.Group>
      <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
    </Stack.Navigator>
  );
};
