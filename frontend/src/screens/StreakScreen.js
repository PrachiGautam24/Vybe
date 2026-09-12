import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../constants/theme';

export default function StreakScreen({ navigation }) {
  const currentStreak = 17;
  const longestStreak = 45;
  const streakShields = 2;

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weekStatus = [true, true, true, true, true, false, false];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#0A0A1F', '#000000']}
        style={styles.gradientBackground}
      >
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.logo}>VYBE</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Title */}
        <Text style={styles.title}>Your Streak</Text>
        <Text style={styles.subtitle}>Keep the momentum going!</Text>

        {/* Current Streak Card */}
        <View style={styles.currentStreakCard}>
          <View style={styles.streakIconContainer}>
            <Text style={styles.streakIcon}>🔥</Text>
          </View>
          <Text style={styles.currentStreakNumber}>{currentStreak}</Text>
          <Text style={styles.currentStreakLabel}>Day Streak</Text>
          <Text style={styles.streakMessage}>You're on fire! Keep it up!</Text>
        </View>

        {/* This Week */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>This Week</Text>
          <View style={styles.weekContainer}>
            {weekDays.map((day, index) => (
              <View key={index} style={styles.dayItem}>
                <View style={[
                  styles.dayCircle,
                  weekStatus[index] && styles.dayCircleActive
                ]}>
                  {weekStatus[index] ? (
                    <Text style={styles.checkmark}>✓</Text>
                  ) : (
                    <Text style={styles.dayNumber}>{index + 1}</Text>
                  )}
                </View>
                <Text style={[
                  styles.dayLabel,
                  weekStatus[index] && styles.dayLabelActive
                ]}>
                  {day}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>🏆</Text>
            <Text style={styles.statValue}>{longestStreak}</Text>
            <Text style={styles.statLabel}>Longest Streak</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>🛡️</Text>
            <Text style={styles.statValue}>{streakShields}</Text>
            <Text style={styles.statLabel}>Streak Shields</Text>
          </View>
        </View>

        {/* Streak Shield Info */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>About Streak Shields 🛡️</Text>
          <View style={styles.infoCard}>
            <Text style={styles.infoText}>
              Streak Shields protect your streak if you miss a day. You earn one shield for every 7-day streak you complete!
            </Text>
            <View style={styles.shieldProgress}>
              <View style={styles.shieldProgressBar}>
                <View style={[styles.shieldProgressFill, { width: '71%' }]} />
              </View>
              <Text style={styles.shieldProgressText}>5/7 days to next shield</Text>
            </View>
          </View>
        </View>

        {/* Milestones */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Milestones</Text>
          <View style={styles.milestoneCard}>
            <Text style={styles.milestoneIcon}>⭐</Text>
            <View style={styles.milestoneInfo}>
              <Text style={styles.milestoneTitle}>20 Day Streak</Text>
              <Text style={styles.milestoneSubtitle}>3 more days to unlock</Text>
              <View style={styles.milestoneProgress}>
                <View style={[styles.milestoneProgressFill, { width: '85%' }]} />
              </View>
            </View>
          </View>

          <View style={styles.milestoneCard}>
            <Text style={styles.milestoneIcon}>💎</Text>
            <View style={styles.milestoneInfo}>
              <Text style={styles.milestoneTitle}>30 Day Streak</Text>
              <Text style={styles.milestoneSubtitle}>13 more days • +500 XP</Text>
              <View style={styles.milestoneProgress}>
                <View style={[styles.milestoneProgressFill, { width: '57%' }]} />
              </View>
            </View>
          </View>

          <View style={styles.milestoneCard}>
            <Text style={styles.milestoneIcon}>👑</Text>
            <View style={styles.milestoneInfo}>
              <Text style={styles.milestoneTitle}>50 Day Streak</Text>
              <Text style={styles.milestoneSubtitle}>33 more days • +1000 XP</Text>
              <View style={styles.milestoneProgress}>
                <View style={[styles.milestoneProgressFill, { width: '34%' }]} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottomSpacing} />
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: THEME.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: THEME.colors.primary,
  },
  backButtonText: {
    fontSize: 32,
    color: THEME.colors.textPrimary,
    marginTop: -4,
  },
  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    letterSpacing: 3,
    textShadowColor: 'rgba(91, 159, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  placeholder: {
    width: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#A0A0A0',
    textAlign: 'center',
    marginBottom: 24,
  },
  currentStreakCard: {
    backgroundColor: 'rgba(255, 107, 53, 0.15)',
    marginHorizontal: 16,
    padding: 32,
    borderRadius: 24,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 107, 53, 0.3)',
    shadowColor: '#FF6B35',
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  streakIconContainer: {
    marginBottom: 16,
  },
  streakIcon: {
    fontSize: 64,
  },
  currentStreakNumber: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#FF6B35',
    marginBottom: 8,
  },
  currentStreakLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
    marginBottom: 8,
  },
  streakMessage: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  section: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 16,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayItem: {
    alignItems: 'center',
  },
  dayCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1A1A1A',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  dayCircleActive: {
    backgroundColor: 'rgba(255, 107, 53, 0.2)',
    borderColor: '#FF6B35',
  },
  checkmark: {
    fontSize: 20,
    color: '#FF6B35',
  },
  dayNumber: {
    fontSize: 14,
    color: '#666',
  },
  dayLabel: {
    fontSize: 12,
    color: '#666',
  },
  dayLabelActive: {
    color: THEME.colors.textPrimary,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 32,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  statIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: '#A0A0A0',
    textAlign: 'center',
  },
  infoSection: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 12,
  },
  infoCard: {
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  infoText: {
    fontSize: 14,
    color: '#A0A0A0',
    lineHeight: 20,
    marginBottom: 16,
  },
  shieldProgress: {
    marginTop: 8,
  },
  shieldProgressBar: {
    height: 6,
    backgroundColor: 'rgba(79, 255, 176, 0.2)',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  shieldProgressFill: {
    height: '100%',
    backgroundColor: '#4FFFB0',
    borderRadius: 3,
  },
  shieldProgressText: {
    fontSize: 12,
    color: '#A0A0A0',
    textAlign: 'center',
  },
  milestoneCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  milestoneIcon: {
    fontSize: 40,
    marginRight: 16,
  },
  milestoneInfo: {
    flex: 1,
  },
  milestoneTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
    marginBottom: 4,
  },
  milestoneSubtitle: {
    fontSize: 13,
    color: '#A0A0A0',
    marginBottom: 8,
  },
  milestoneProgress: {
    height: 4,
    backgroundColor: 'rgba(91, 159, 255, 0.2)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  milestoneProgressFill: {
    height: '100%',
    backgroundColor: '#5B9FFF',
    borderRadius: 2,
  },
  bottomSpacing: {
    height: 40,
  },
});
