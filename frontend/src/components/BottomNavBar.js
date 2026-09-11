import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { THEME } from '../constants/theme';

export default function BottomNavBar({ navigation, activeTab = 'Home' }) {
  const tabs = [
    { name: 'Home', icon: '🏠', route: 'Dashboard' },
    { name: 'Missions', icon: '🎯', route: 'Missions' },
    { name: 'Battles', icon: '⚔️', route: 'Battles' },
    { name: 'Community', icon: '👥', route: 'Community' },
    { name: 'Rewards', icon: '🎁', route: 'Rewards' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tab}
          onPress={() => navigation.navigate(tab.route)}
        >
          <View style={[
            styles.iconContainer,
            activeTab === tab.name && styles.iconContainerActive
          ]}>
            <Text style={styles.icon}>{tab.icon}</Text>
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
    backgroundColor: THEME.colors.surface,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingBottom: 8,
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
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
  label: {
    fontSize: 11,
    color: THEME.colors.textSecondary,
    fontWeight: '500',
  },
  labelActive: {
    color: THEME.colors.primary,
    fontWeight: '600',
  },
});
