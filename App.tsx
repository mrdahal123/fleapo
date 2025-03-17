import React, {useEffect} from 'react';
import {StyleSheet, TextInput, Text, View, StatusBar} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import AppNavigator from './src/navigations/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {COLORS} from './src/utils/theme';

const App: React.FC = () => {
  useEffect(() => {
    // to fix the app screen in portrait mode for this App
    Orientation.lockToPortrait();
  }, []);
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <AppNavigator />
    </>
  );
};

export default App;
