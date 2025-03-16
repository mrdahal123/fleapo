import {StyleSheet, TextInput, Text, View, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import Orientation from 'react-native-orientation-locker';
import AppNavigator from './src/navigations/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {COLORS} from './src/utils/theme';

const App = () => {
  useEffect(() => {
    // to fix the app screen in potrait mode for this App
    Orientation.lockToPortrait();
  }, []);

  // To prevent the excess font size of system
  if (Text.defaultProps == null) {
    Text.defaultProps = {};
  }
  if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
  }
  Text.defaultProps.allowFontScaling = false;
  TextInput.defaultProps.allowFontScaling = false;

  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <AppNavigator />
    </>
  );
};

export default App;
