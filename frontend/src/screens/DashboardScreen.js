import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../constants/theme';
import CircularProgress from '../components/CircularProgress';
import FriendCard from '../components/FriendCard';
import ChallengeCard from '../components/ChallengeCard';
import BottomNavBar from '../components/BottomNavBar';
import ProfileDrawer from '../components/ProfileDrawer';
import VybeLogo from '../components/VybeLogo';

const { width } = Dimensions.get('window');

export default function DashboardScreen({ navigation }) {
  const [profileVisible, setProfileVisible] = useState(false);
  const userName = 'Sehaj';
  const userData = {
    name: userName,
    level: 6,
    xp: 1820,
    badges: 12,
    streak: 17,
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#0A0A1F', '#000000']}
        style={styles.gradientBackground}
      >
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
          
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <VybeLogo width={100} height={32} />
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
                <LinearGradient
                  colors={['#4FFFB0', '#00B8A9']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.profileGradient}
                >
                  <Text style={styles.profileAvatar}>👤</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView 
            style={{flex: 1}} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
        {/* Greeting Section */}
        <View style={styles.greetingSection}>
          <View style={styles.greetingLeft}>
            <Text style={styles.greeting}>Good morning,</Text>
            <Text style={styles.userName}>{userName}</Text>
          </View>
          <TouchableOpacity style={styles.streakBadge}>
            <Text style={styles.streakIcon}>🔥</Text>
            <View>
              <Text style={styles.streakNumber}>17</Text>
              <Text style={styles.streakLabel}>Day Streak</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Stats Circles */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.statsScrollContent}
          style={styles.statsScroll}
        >
          <TouchableOpacity 
            style={styles.statItem}
            onPress={() => navigation.navigate('Missions')}
          >
            <CircularProgress
              size={100}
              strokeWidth={7}
              progress={84}
              color="#4FFFB0"
              value="8,432"
              maxValue="10K"
              label="Steps"
              icon="👣"
            />
          </TouchableOpacity>
          <View style={styles.statItem}>
            <CircularProgress
              size={100}
              strokeWidth={7}
              progress={62}
              color="#5B9FFF"
              value="1,240"
              maxValue="2K"
              label="XP"
              icon="⚡"
            />
          </View>
          <View style={styles.statItem}>
            <CircularProgress
              size={100}
              strokeWidth={7}
              progress={33}
              color="#FFB84D"
              value="1"
              maxValue="3"
              label="Coffee"
              icon="☕"
            />
          </View>
        </ScrollView>

        {/* Friends Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Friends</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Community', { tab: 'Friends' })}>
              <Text style={styles.seeAll}>See All ›</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScrollContent}
          >
            <FriendCard
              name="Divyansh"
              status="Online"
              avatar="👤"
              borderColor="#4FFFB0"
              onPress={() => navigation.navigate('Community', { tab: 'Friends' })}
            />
            <FriendCard
              name="Hariom"
              status="Offline • 2h"
              avatar="👤"
              borderColor="#FFB84D"
              onPress={() => navigation.navigate('Community', { tab: 'Friends' })}
            />
          </ScrollView>
        </View>

        {/* Community Run Card */}
        <View style={styles.section}>
          <TouchableOpacity 
            style={styles.communityEventCard}
            onPress={() => navigation.navigate('Community', { tab: 'Events' })}
          >
            <ImageBackground
              source={{ uri: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800' }}
              style={styles.communityEventBackground}
              imageStyle={styles.communityEventImage}
              blurRadius={8}
            >
              <LinearGradient
                colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.85)']}
                style={styles.communityEventGradient}
              >
                <View style={styles.communityBadge}>
                  <Text style={styles.communityBadgeText}>🏃 Community Event</Text>
                </View>
                <Text style={styles.communityEventTitle}>Run at Khan Market</Text>
                <Text style={styles.communityEventLocation}>📍 Khan Market, New Delhi</Text>
                <Text style={styles.communityEventTime}>📅 Sat, 14 Sep • 6:30 AM</Text>
                <View style={styles.communityEventFooter}>
                  <View style={styles.participantsRow}>
                    <View style={styles.participantAvatars}>
                      {[1, 2, 3].map((i) => (
                        <View key={i} style={[styles.participantAvatar, { left: (i - 1) * -10 }]}>
                          <Text style={styles.participantAvatarText}>👤</Text>
                        </View>
                      ))}
                    </View>
                    <Text style={styles.participantsText}>+30 people joining</Text>
                  </View>
                  <View style={styles.joinButtonDashboard}>
                    <Text style={styles.joinButtonTextDashboard}>Join Event</Text>
                  </View>
                </View>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        {/* Today's Challenge */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today's Challenge</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Missions')}>
              <Text style={styles.seeAll}>See All ›</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            style={styles.todayChallenge}
            onPress={() => navigation.navigate('Missions')}
          >
            <View style={styles.challengeIcon}>
              <Text style={styles.challengeEmoji}>🔥</Text>
            </View>
            <View style={styles.challengeInfo}>
              <Text style={styles.challengeTitle}>10K Steps Challenge</Text>
              <Text style={styles.challengeSubtitle}>3/3 friends joined</Text>
            </View>
            <View style={styles.startButton}>
              <Text style={styles.startButtonText}>Start</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Upcoming Challenges */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Challenges</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Battles', { tab: 'Upcoming' })}>
              <Text style={styles.seeAll}>See All ›</Text>
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScrollContent}
          >
            <ChallengeCard
              icon="🏀"
              title="Play 1 Hour"
              subtitle="Basketball"
              reward="+200 XP"
              onPress={() => navigation.navigate('Battles', { tab: 'Upcoming' })}
            />
            <ChallengeCard
              icon="🚴"
              title="Cycle 15 km"
              reward="+300 XP"
              onPress={() => navigation.navigate('Battles', { tab: 'Upcoming' })}
            />
            <ChallengeCard
              icon="🏊"
              title="Swim 500m"
              reward="+250 XP"
              onPress={() => navigation.navigate('Battles', { tab: 'Upcoming' })}
            />
          </ScrollView>
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

          {/* Bottom Navigation */}
          <BottomNavBar navigation={navigation} activeTab="Home" />

          {/* Profile Drawer */}
          <ProfileDrawer 
            visible={profileVisible}
            onClose={() => setProfileVisible(false)}
            userData={userData}
            navigation={navigation}
          />
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
  scrollContent: {
    paddingBottom: 20,
  },
  
  // Header - Updated for better positioning
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  headerLeft: {
    flex: 1,
  },
  logoGradient: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 4,
    textShadowColor: 'rgba(91, 159, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  notificationButton: {
    position: 'relative',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(91, 159, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#5B9FFF',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  notificationIcon: {
    fontSize: 20,
  },
  notificationDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF4D4D',
    shadowColor: '#FF4D4D',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 3,
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    shadowColor: '#4FFFB0',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  profileGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(79, 255, 176, 0.5)',
    borderRadius: 22,
  },
  profileAvatar: {
    fontSize: 22,
  },

  // Greeting Section
  greetingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  greetingLeft: {
    flex: 1,
  },
  greeting: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 4,
  },
  userName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(91, 159, 255, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 100, 50, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 100, 50, 0.4)',
    gap: 8,
    shadowColor: '#FF6435',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  streakIcon: {
    fontSize: 24,
  },
  streakNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    lineHeight: 22,
  },
  streakLabel: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 12,
  },

  // Stats Circles - Horizontal Scroll
  statsScroll: {
    marginBottom: 20,
  },
  statsScrollContent: {
    paddingHorizontal: 16,
    gap: 20,
  },
  statItem: {
    alignItems: 'center',
  },

  // Section
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    textShadowColor: 'rgba(91, 159, 255, 0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  seeAll: {
    fontSize: 14,
    color: '#5B9FFF',
    fontWeight: '600',
    textShadowColor: 'rgba(91, 159, 255, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },

  // Horizontal Scroll Content
  horizontalScrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },

  // Today's Challenge
  todayChallenge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.3)',
    shadowColor: '#4FFFB0',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  challengeIcon: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: 'rgba(79, 255, 176, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 2,
    borderColor: 'rgba(79, 255, 176, 0.5)',
    shadowColor: '#4FFFB0',
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 5,
  },
  challengeEmoji: {
    fontSize: 28,
  },
  challengeInfo: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 4,
    textShadowColor: 'rgba(91, 159, 255, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  challengeSubtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  startButton: {
    backgroundColor: THEME.colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: '#4FFFB0',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
  },
  startButtonText: {
    color: THEME.colors.background,
    fontSize: 15,
    fontWeight: 'bold',
  },

  // Bottom Spacing
  bottomSpacing: {
    height: 20,
  },

  // Community Event Card with Background Image
  communityEventCard: {
    marginHorizontal: 16,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
    shadowColor: '#5B9FFF',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  communityEventBackground: {
    width: '100%',
  },
  communityEventImage: {
    borderRadius: 20,
  },
  communityEventGradient: {
    padding: 20,
  },
  communityBadge: {
    backgroundColor: 'rgba(79, 255, 176, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.4)',
  },
  communityBadgeText: {
    color: '#4FFFB0',
    fontSize: 13,
    fontWeight: 'bold',
  },
  communityEventTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  communityEventLocation: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  communityEventTime: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  communityEventFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  participantsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  participantAvatars: {
    flexDirection: 'row',
    marginRight: 10,
  },
  participantAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2A2A2A',
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  participantAvatarText: {
    fontSize: 14,
  },
  participantsText: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  joinButtonDashboard: {
    backgroundColor: '#5B9FFF',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: '#5B9FFF',
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 5,
  },
  joinButtonTextDashboard: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
