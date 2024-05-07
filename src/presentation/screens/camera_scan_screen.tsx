/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from '../../config/theme/styles';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import {Button, Text} from 'react-native-paper';

export const CameraScanScreen = () => {
  const device = useCameraDevice('back');
  const [isActive, setIsActive] = useState(true);
  const [code, setCode] = useState<string>();

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned(codes) {
      setCode(codes[0].value);
    },
  });
  useEffect(() => {
    if (code) {
      setIsActive(false);
      console.log(code);
    }
  }, [code]);

  return (
    <View style={globalStyles.full}>
      <Text variant="headlineSmall">{code}</Text>
      <Button
        mode="elevated"
        onPress={() => {
          setIsActive(true);
          setCode(undefined);
        }}>
        Re-scan
      </Button>
      <Camera
        device={device!}
        isActive={isActive}
        style={code ? {display: 'none'} : StyleSheet.absoluteFill}
        codeScanner={codeScanner}
      />
    </View>
  );
};
