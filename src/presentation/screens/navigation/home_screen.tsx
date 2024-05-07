import React, {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {View} from 'react-native';

GoogleSignin.configure({
  webClientId:
    '688125565319-b4qrjrr60uitnd3qf5hcch8me83aj4l2.apps.googleusercontent.com',
});

export const HomeScreen = () => {
  useEffect(() => {}, []);

  return <View />;
};
