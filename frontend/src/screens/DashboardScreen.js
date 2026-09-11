import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { THEME } from '../constants/theme';
import CircularProgress from '../components/CircularProgress';
import FriendCard from '../components/FriendCard';
import ChallengeCard from '../components/ChallengeCard';
import BottomNavBar from '../components/BottomNavBar';
import ProfileDrawer from '../components/ProfileDrawer';

export default function DashboardScreen({ navigation }) {
  const [profileVisible, setProfileVisible] = useState(false);
  const userName = 'Divyansh';
  const userData = {
    name: userName,
    level: 6,
    xp: 1820,
    badges: 12,
    streak: 17,
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={THEME.colors.background} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.logo}>VYBE</Text>
            <Text style={styles.subtitle}>Good morning,{'\n'}Dashboard</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity 
              style={styles.notificationButton}
              onPress={() => navigation.navigate('Notifications')}
            >
              <Text style={styles.notificationIcon}>🔔</Text>
              <View style={styles.notificationDot} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.profileButton}
              onPress={() => setProfileVisible(true)}
            >
              <Text style={styles.profileAvatar}>👤</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Greeting with Streak Badge */}
        <View style={styles.greetingContainer}>
          <View style={styles.greetingRow}>
            <View style={styles.greetingText}>
              <Text style={styles.greeting}>Good morning,</Text>
              <Text style={styles.userName}>{userName}</Text>
            </View>
            <TouchableOpacity style={styles.streakBadge}>
              <Text style={styles.streakIcon}>🔥</Text>
              <View style={styles.streakInfo}>
                <Text style={styles.streakNumber}>17</Text>
                <Text style={styles.streakLabel}>Day Streak</Text>
              </View>
              <Text style={styles.streakArrow}>›</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Circles */}
        <View style={styles.statsContainer}>
          <TouchableOpacity 
            style={styles.statItem}
            onPress={() => navigation.navigate('Missions')}
          >
            <CircularProgress
              size={110}
              strokeWidth={8}
              progress={84}
              color="#4FFFB0"
              value="8,432"
              maxValue="10,000"
              label="Steps"
              icon="👣"
            />
          </TouchableOpacity>
          <View style={styles.statItem}>
            <CircularProgress
              size={110}
              strokeWidth={8}
              progress={62}
              color="#5B9FFF"
              value="1,240"
              maxValue="2,000"
              label="XP"
              icon="⚡"
            />
          </View>
          <View style={styles.statItem}>
            <CircularProgress
              size={110}
              strokeWidth={8}
              progress={33}
              color="#FFB84D"
              value="1"
              maxValue="3"
              label="Free Coffee"
              icon="☕"
            />
          </View>
        </View>

        {/* Friends Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Friends</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Community', { tab: 'Friends' })}>
            <Text style={styles.seeAll}>See All ›</Text>
          </TouchableOpacity>
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.friendsList}
          contentContainerStyle={styles.friendsListContent}
        >
          <FriendCard
            name="Sehaj"
            status="Online"
            avatar="👤"
            borderColor="#4FFFB0"
            onPress={() => navigation.navigate('Community', { tab: 'Friends' })}
          />
          <FriendCard
            name="Hariom"
            status="Offline • 2h ago"
            avatar="👤"
            borderColor="#FFB84D"
            onPress={() => navigation.navigate('Community', { tab: 'Friends' })}
          />
        </ScrollView>

        {/* Community Run Card */}
        <ChallengeCard
          type="large"
          badge="Community Run"
          title="Run at Khan Market"
          location="Khan Market, New Delhi"
          time="Sat, 14 Sep 6:30 AM"
          participants="30 people joining"
          buttonText="Join"
          onPress={() => navigation.navigate('Community', { tab: 'Events' })}
        />

        {/* Today's Challenge */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today's Challenge</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Missions')}>
            <Text style={styles.seeAll}>See All ›</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.todayChallengeContainer}>
          <View style={styles.todayChallengeIcon}>
            <Text style={styles.challengeFireIcon}>🔥</Text>
          </View>
          <View style={styles.todayChallengeContent}>
            <Text style={styles.todayChallengeTitle}>10K Steps</Text>
            <Text style={styles.todayChallengeSubtitle}>3/3 friends joined</Text>
          </View>
          <TouchableOpacity 
            style={styles.startButton}
            onPress={() => navigation.navigate('Missions')}
          >
            <Text style={styles.startButtonText}>Start</Text>
            <Text style={styles.startButtonArrow}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Progress Dots */}
        <View style={styles.progressDots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Upcoming Challenges */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Challenges</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Battles')}>
            <Text style={styles.seeAll}>See All ›</Text>
          </TouchableOpacity>
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.upcomingChallengesContent}
        >
          <ChallengeCard
            icon="🏀"
            title="Play 1 Hour"
            subtitle="of Basketball"
            reward="+200 XP"
            onPress={() => navigation.navigate('Battles')}
          />
          <ChallengeCard
            icon="🚴"
            title="Cycle 15 km"
            subtitle=""
            reward="+300 XP"
            onPress={() => navigation.navigate('Battles')}
          />
          <ChallengeCard
            icon="🏊"
            title="Swim 500m"
            subtitle=""
            reward="+250 XP"
            onPress={() => navigation.navigate('Battles')}
          />
        </ScrollView>

        {/* Bottom Spacing for Nav Bar */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar navigation={navigation} activeTab="Home" />

      {/* Profile Drawer */}
      <ProfileDrawer 
        visible={profileVisible}
        onClose={() => setProfileVisible(false)}
        userData={userData}
      />
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
    alignItems: 'flex-start',
    paddingHorizontal: THEME.spacing.base,
    paddingTop: THEME.spacing.md,
    paddingBottom: THEME.spacing.base,
  },
  headerLeft: {
    flex: 1,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    letterSpacing: 2,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: THEME.colors.textSecondary,
    lineHeight: 18,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  notificationButton: {
    position: 'relative',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: THEME.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationIcon: {
    fontSize: 20,
  },
  notificationDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: THEME.colors.primary,
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: THEME.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: THEME.colors.primary,
    shadowColor: THEME.colors.primary,
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  profileAvatar: {
    fontSize: 22,
  },

  // Greeting with inline Streak Badge
  greetingContainer: {
    paddingHorizontal: THEME.spacing.base,
    marginBottom: THEME.spacing.xl,
  },
  greetingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  greetingText: {
    flex: 1,
  },
  greeting: {
    fontSize: THEME.fontSizes.base,
    color: THEME.colors.textSecondary,
    marginBottom: 4,
  },
  userName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
  },

  // Streak Badge (next to name)
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: 8,
  },
  streakIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  streakInfo: {
    marginRight: 8,
  },
  streakNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    lineHeight: 22,
  },
  streakLabel: {
    fontSize: 10,
    color: THEME.colors.textSecondary,
    lineHeight: 12,
  },
  streakArrow: {
    fontSize: 20,
    color: THEME.colors.textSecondary,
  },

  // Stats Circles
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: THEME.spacing.base,
    marginBottom: THEME.spacing.xxl,
  },
  statItem: {
    alignItems: 'center',
  },

  // Section Headers
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: THEME.spacing.base,
    marginBottom: THEME.spacing.base,
    marginTop: THEME.spacing.lg,
  },
  sectionTitle: {
    fontSize: THEME.fontSizes.lg,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
  },
  seeAll: {
    fontSize: THEME.fontSizes.md,
    color: THEME.colors.textSecondary,
  },

  // Friends List
  friendsList: {
    marginBottom: THEME.spacing.lg,
  },
  friendsListContent: {
    paddingHorizontal: THEME.spacing.base,
  },

  // Today's Challenge
  todayChallengeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    marginHorizontal: THEME.spacing.base,
    padding: 18,
    borderRadius: 20,
    marginBottom: THEME.spacing.base,
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.2)',
    shadowColor: '#4FFFB0',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  todayChallengeIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(79, 255, 176, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: THEME.spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.3)',
  },
  challengeFireIcon: {
    fontSize: 32,
  },
  todayChallengeContent: {
    flex: 1,
  },
  todayChallengeTitle: {
    fontSize: THEME.fontSizes.lg,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 4,
  },
  todayChallengeSubtitle: {
    fontSize: THEME.fontSizes.sm,
    color: THEME.colors.textSecondary,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.colors.primary,
    paddingHorizontal: THEME.spacing.lg,
    paddingVertical: THEME.spacing.md,
    borderRadius: THEME.borderRadius.md,
  },
  startButtonText: {
    color: THEME.colors.background,
    fontSize: THEME.fontSizes.md,
    fontWeight: 'bold',
    marginRight: THEME.spacing.xs,
  },
  startButtonArrow: {
    color: THEME.colors.background,
    fontSize: 20,
    fontWeight: 'bold',
  },

  // Progress Dots
  progressDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: THEME.spacing.base,
    marginBottom: THEME.spacing.base,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: THEME.colors.surfaceLight,
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: THEME.colors.primary,
    width: 20,
  },

  // Upcoming Challenges
  upcomingChallengesContent: {
    paddingHorizontal: THEME.spacing.base,
  },

  // Bottom Spacing
  bottomSpacing: {
    height: 100,
  },
});
