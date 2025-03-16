import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="BottomNav" options={{
        headerShown:false
      }} component={BottomNav} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;