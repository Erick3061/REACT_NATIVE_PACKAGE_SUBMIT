import React, {useCallback} from 'react';
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  NavigationScreensProps,
  StackScreensProps,
} from '../../infrastructure/types';
import {
  ClientsScreen,
  HomeScreen,
  PackageScreen,
  SettingsScreen,
} from '../screens';
import {Icon, IconButton, Surface} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator<NavigationScreensProps>();

interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}
interface Props
  extends NativeStackScreenProps<StackScreensProps, 'BottomTabNavigation'> {}

export const BottomTabNavigation = (props: Props) => {
  const RenderIcon = (source: string) =>
    useCallback(
      (iconProps: IconProps) => <Icon {...{...iconProps, source}} />,
      [source],
    );

  const RenderBtn = () =>
    useCallback(
      ({}: BottomTabBarButtonProps) => (
        <View style={Styles.btn}>
          <Surface style={Styles.surface}>
            <IconButton
              style={Styles.icon}
              icon="qrcode"
              mode="contained"
              size={40}
              onPress={() => props.navigation.navigate('CameraScanScreen')}
            />
          </Surface>
        </View>
      ),
      [],
    );

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{tabBarIcon: RenderIcon('home-outline'), title: 'Inicio'}}
      />
      <Tab.Screen
        name="PackageScreen"
        component={PackageScreen}
        options={{tabBarIcon: RenderIcon('package'), title: 'Paquetes'}}
      />
      <Tab.Screen
        name="CameraScanScreen"
        children={() => <></>}
        options={{tabBarButton: RenderBtn()}}
      />
      <Tab.Screen
        name="ClientsScreen"
        component={ClientsScreen}
        options={{
          tabBarIcon: RenderIcon('account-group-outline'),
          title: 'Clientes',
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{tabBarIcon: RenderIcon('menu'), title: 'Mas'}}
      />
    </Tab.Navigator>
  );
};

const Styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {margin: 0},
  surface: {
    position: 'absolute',
    bottom: 10,
    borderRadius: 1000,
  },
});
