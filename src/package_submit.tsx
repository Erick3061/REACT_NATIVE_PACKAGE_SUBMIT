import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import {StackNavigation} from './presentation/navigation';
import {globalStyles} from './config/theme/styles';
import {PaperProvider} from 'react-native-paper';
import {useConfig} from './presentation/hooks';

export const PackageSubmit = () => {
  const {theme} = useConfig();
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar
          backgroundColor={theme.colors.elevation.level1}
          barStyle={'dark-content'}
        />
        <SafeAreaView style={globalStyles.full}>
          <StackNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
};
