import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { THEME } from '../constants/theme';

export default function BottomNavBar({ navigation, activeTab = 'Home' }) {
  const insets = useSafeAreaInsets();
  
  const tabs = [
    { name: 'Home', icon: '🏠', route: 'Dashboard' },
    { name: 'Missions', icon: '🎯', route: 'Missions' },
    { name: 'Battles', icon: '⚔️', route: 'Battles' },
    { name: 'Community', icon: '👥', route: 'Community' },
    { name: 'Rewards', icon: '🎁', route: 'Rewards' },
  ];

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom || 8 }]}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tab}
          onPress={() => navigation.navigate(tab.route)}
          activeOpacity={0.7}
        >
          <View style={[
            styles.iconContainer,
            activeTab === tab.name && styles.iconContainerActive
          ]}>
            <Text style={[
              styles.icon,
              activeTab === tab.name && styles.iconActive
            ]}>
              {tab.icon}
            </Text>
          </View>
          <Text style={[
            styles.label,
            activeTab === tab.name && styles.labelActive
          ]}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  iconContainerActive: {
    backgroundColor: 'rgba(79, 255, 176, 0.15)',
  },
  icon: {
    fontSize: 24,
  },
  iconActive: {
    transform: [{ scale: 1.1 }],
  },
  label: {
    fontSize: 10,
    color: THEME.colors.textSecondary,
    fontWeight: '500',
  },
  labelActive: {
    color: THEME.colors.primary,
    fontWeight: '600',
  },
});
