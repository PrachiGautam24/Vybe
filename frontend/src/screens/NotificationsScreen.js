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

export default function NotificationsScreen({ navigation }) {
  const notifications = [
    {
      id: 1,
      type: 'achievement',
      icon: '🏆',
      title: 'Achievement Unlocked!',
      message: 'You earned the "Week Warrior" badge for completing 7 days streak',
      time: '2 min ago',
      unread: true,
      color: '#FFB84D',
    },
    {
      id: 2,
      type: 'friend',
      icon: '👤',
      title: 'Sehaj is now online',
      message: 'Join them for a workout session',
      time: '15 min ago',
      unread: true,
      color: '#4FFFB0',
    },
    {
      id: 3,
      type: 'challenge',
      icon: '🔥',
      title: 'New Challenge Available',
      message: '10K Steps challenge is now live. Start now!',
      time: '1 hour ago',
      unread: true,
      color: '#FF6B6B',
    },
    {
      id: 4,
      type: 'event',
      icon: '🏃',
      title: 'Community Run Tomorrow',
      message: 'Run at Khan Market starts at 6:30 AM. 30 people joining',
      time: '2 hours ago',
      unread: false,
      color: '#5B9FFF',
    },
    {
      id: 5,
      type: 'reward',
      icon: '💎',
      title: 'XP Milestone Reached!',
      message: 'You earned 200 XP bonus for reaching 1,000 XP',
      time: '5 hours ago',
      unread: false,
      color: '#9B59FF',
    },
    {
      id: 6,
      type: 'friend',
      icon: '👤',
      title: 'Hariom completed a challenge',
      message: 'Hariom completed "Play 1 Hour Basketball" and earned 200 XP',
      time: '1 day ago',
      unread: false,
      color: '#4FFFB0',
    },
    {
      id: 7,
      type: 'battle',
      icon: '⚔️',
      title: 'Battle Challenge Invite',
      message: 'Sehaj challenged you to a 5K Run battle',
      time: '1 day ago',
      unread: false,
      color: '#FF6B6B',
    },
    {
      id: 8,
      type: 'coffee',
      icon: '☕',
      title: 'Free Coffee Reward!',
      message: 'You earned a free coffee at Starbucks. Redeem now!',
      time: '2 days ago',
      unread: false,
      color: '#FFB84D',
    },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#0A0A1F', '#000000']}
        style={styles.gradientBackground}
      >
        <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
          
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Notifications</Text>
            <TouchableOpacity style={styles.markAllButton}>
              <Text style={styles.markAllText}>Mark all read</Text>
            </TouchableOpacity>
          </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Unread Section */}
        <Text style={styles.sectionTitle}>New</Text>
        {notifications.filter(n => n.unread).map(notification => (
          <TouchableOpacity 
            key={notification.id}
            style={[styles.notificationCard, styles.unreadCard]}
            activeOpacity={0.7}
          >
            <View style={[styles.iconContainer, { backgroundColor: notification.color + '20' }]}>
              <Text style={styles.notificationIcon}>{notification.icon}</Text>
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
            {notification.unread && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        ))}

        {/* Earlier Section */}
        <Text style={[styles.sectionTitle, styles.sectionTitleMargin]}>Earlier</Text>
        {notifications.filter(n => !n.unread).map(notification => (
          <TouchableOpacity 
            key={notification.id}
            style={styles.notificationCard}
            activeOpacity={0.7}
          >
            <View style={[styles.iconContainer, { backgroundColor: notification.color + '20' }]}>
              <Text style={styles.notificationIcon}>{notification.icon}</Text>
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.bottomSpacing} />
      </ScrollView>
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
    backgroundColor: THEME.colors.background,
  },
  
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: THEME.spacing.base,
    paddingVertical: THEME.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: THEME.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: THEME.colors.textPrimary,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
  },
  markAllButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  markAllText: {
    fontSize: 14,
    color: THEME.colors.primary,
    fontWeight: '600',
  },

  // Section Titles
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    paddingHorizontal: THEME.spacing.base,
    paddingTop: THEME.spacing.lg,
    paddingBottom: THEME.spacing.sm,
  },
  sectionTitleMargin: {
    marginTop: THEME.spacing.base,
  },

  // Notification Cards
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: THEME.colors.surface,
    marginHorizontal: THEME.spacing.base,
    marginBottom: THEME.spacing.sm,
    padding: THEME.spacing.md,
    borderRadius: THEME.borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  unreadCard: {
    backgroundColor: 'rgba(91, 159, 255, 0.05)',
    borderColor: 'rgba(91, 159, 255, 0.2)',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: THEME.spacing.md,
  },
  notificationIcon: {
    fontSize: 24,
  },
  notificationContent: {
    flex: 1,
    paddingRight: THEME.spacing.sm,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: THEME.colors.textSecondary,
    lineHeight: 20,
    marginBottom: 6,
  },
  notificationTime: {
    fontSize: 12,
    color: THEME.colors.textTertiary,
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: THEME.colors.primary,
    marginLeft: THEME.spacing.xs,
    marginTop: 4,
  },

  bottomSpacing: {
    height: 40,
  },
});
