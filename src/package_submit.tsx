import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {StackNavigation} from './presentation/navigation';
import {globalStyles} from './config/theme/styles';

export const PackageSubmit = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <SafeAreaView style={globalStyles.full}>
          <StackNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
};
