import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';
import { THEME } from '../constants/theme';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  // Simplified - only Dashboard for now
  // Login/Register screens can be added back later when you build them
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: THEME.colors.background,
          },
        }}
      >
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
