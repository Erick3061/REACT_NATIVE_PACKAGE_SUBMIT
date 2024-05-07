/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useLayoutEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {
  Avatar,
  Divider,
  List,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  NavigationScreensProps,
  StackScreensProps,
} from '../../../infrastructure/types';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {Style} from 'react-native-paper/lib/typescript/components/List/utils';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const SettingsScreen = ({
  navigation,
}:
  | BottomTabScreenProps<NavigationScreensProps, 'SettingsScreen'>
  | DrawerScreenProps<NavigationScreensProps, 'SettingsScreen'>) => {
  const {colors} = useTheme();
  const stack =
    useNavigation<
      NativeStackNavigationProp<StackScreensProps, 'BottomTabNavigation'>
    >();

  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const RenderItem = (icon: string) =>
    useCallback(
      (props: {color: string; style?: Style}) => (
        <List.Icon {...{...props, icon, color: colors.primary}} />
      ),
      [icon],
    );

  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: 10,
          backgroundColor: colors.elevation.level1,
          alignItems: 'center',
        }}>
        <Surface style={{borderRadius: 100}} elevation={3}>
          <Avatar.Image
            source={{
              uri: 'https://lh3.googleusercontent.com/a/ACg8ocKUpbCsDhQ0tH5Mjm-6e2crsx8lpwYF9m4nKb4B9sC-NT01WCPD3g=s96-c',
            }}
          />
        </Surface>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 30,
          }}>
          <Text variant="titleSmall">Erick Andrade Ramos</Text>
          <Text variant="bodySmall">grillo.erick1@gmail.com</Text>
        </View>
      </View>
      <List.Section>
        <List.Item
          left={RenderItem('home-outline')}
          title="Home"
          onPress={() => navigation.jumpTo('HomeScreen')}
        />
        <Divider style={{marginHorizontal: 15}} />
        <List.Item
          left={RenderItem('package')}
          title="Paquetes"
          onPress={() => navigation.jumpTo('PackageScreen')}
        />
        <Divider style={{marginHorizontal: 15}} />
        <List.Item
          left={RenderItem('account-group-outline')}
          title="Clientes"
          onPress={() => navigation.jumpTo('ClientsScreen')}
        />
        <Divider style={{marginHorizontal: 15}} />
        <List.Item
          left={RenderItem('palette')}
          title="theme"
          right={RenderItem('chevron-right')}
          onPress={() => stack.navigate('ThemeScreen')}
        />
        <Divider style={{marginHorizontal: 15}} />
        <List.Item left={RenderItem('logout')} title="salir" />
      </List.Section>
    </ScrollView>
  );
};
