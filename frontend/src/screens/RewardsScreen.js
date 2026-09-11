import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { THEME } from '../constants/theme';
import BottomNavBar from '../components/BottomNavBar';

export default function RewardsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={THEME.colors.background} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.icon}>🎁</Text>
          <Text style={styles.title}>Rewards Store</Text>
          <Text style={styles.subtitle}>Redeem your XP for amazing prizes</Text>
          
          <View style={styles.rewardsContainer}>
            <TouchableOpacity style={styles.rewardCard}>
              <Text style={styles.rewardIcon}>🎁</Text>
              <Text style={styles.rewardText}>Redeem Prizes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rewardCard}>
              <Text style={styles.rewardIcon}>🎟️</Text>
              <Text style={styles.rewardText}>Coupons & Offers</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <BottomNavBar navigation={navigation} activeTab="Rewards" />
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
    width: '100%',
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
    marginBottom: THEME.spacing.xl,
  },
  rewardsContainer: {
    width: '100%',
    gap: THEME.spacing.md,
  },
  rewardCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.colors.surface,
    padding: THEME.spacing.lg,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 184, 77, 0.3)',
  },
  rewardIcon: {
    fontSize: 32,
    marginRight: THEME.spacing.md,
  },
  rewardText: {
    fontSize: 18,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
  },
});
