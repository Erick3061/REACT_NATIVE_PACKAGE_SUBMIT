import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {StackNavigation} from './presentation/navigation';
import {globalStyles} from './config/theme/styles';
import {PaperProvider} from 'react-native-paper';
import {useConfig} from './presentation/hooks';

export const PackageSubmit = () => {
  const {theme} = useConfig();
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <SafeAreaView style={globalStyles.full}>
          <StackNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
};
