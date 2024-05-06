import React, { useEffect, useState } from 'react';
import {Button, Text} from 'react-native-paper';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '688125565319-b4qrjrr60uitnd3qf5hcch8me83aj4l2.apps.googleusercontent.com',
});

interface User{
    id: string;
    name: string | null;
    email: string;
    photo: string | null;
    familyName: string | null;
    givenName: string | null;
}

export const HomeScreen = () => {
  const [token, setToken] = useState<string>();
  const [User, setUser] = useState<User>();

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken, user,serverAuthCode,scopes} = await GoogleSignin.signIn();
      console.log(user);
      
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    
  }, []);

  return (
    <View>
      <Text>home_screen</Text>
      <Button
        children="Sign in"
        onPress={onGoogleButtonPress}
        onLongPress={async () => await GoogleSignin.signOut()}
      />
      <Button children="add" />
    </View>
  );
};
