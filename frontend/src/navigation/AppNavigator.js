import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';
import MissionsScreen from '../screens/MissionsScreen';
import BattlesScreen from '../screens/BattlesScreen';
import CommunityScreen from '../screens/CommunityScreen';
import RewardsScreen from '../screens/RewardsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StreakScreen from '../screens/StreakScreen';
import { THEME } from '../constants/theme';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
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
        <Stack.Screen 
          name="Missions" 
          component={MissionsScreen}
        />
        <Stack.Screen 
          name="Battles" 
          component={BattlesScreen}
        />
        <Stack.Screen 
          name="Community" 
          component={CommunityScreen}
        />
        <Stack.Screen 
          name="Rewards" 
          component={RewardsScreen}
        />
        <Stack.Screen 
          name="Notifications" 
          component={NotificationsScreen}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen}
        />
        <Stack.Screen 
          name="Streak" 
          component={StreakScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
