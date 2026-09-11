import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { THEME } from '../constants/theme';
import BottomNavBar from '../components/BottomNavBar';

export default function MissionsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={THEME.colors.background} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.icon}>🎯</Text>
          <Text style={styles.title}>Missions</Text>
          <Text style={styles.subtitle}>Daily quests & tasks coming soon</Text>
        </View>
      </View>
      <BottomNavBar navigation={navigation} activeTab="Missions" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: THEME.spacing.base,
  },
  content: {
    alignItems: 'center',
  },
  icon: {
    fontSize: 80,
    marginBottom: THEME.spacing.lg,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: THEME.spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: THEME.colors.textSecondary,
    textAlign: 'center',
  },
});
