import React, { useState } from 'react';
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
import BottomNavBar from '../components/BottomNavBar';
import VybeLogo from '../components/VybeLogo';
import PremiumBadge from '../components/PremiumBadge';
import PremiumLockOverlay from '../components/PremiumLockOverlay';
import { usePremium } from '../context/PremiumContext';

export default function MissionsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Daily');
  const { isPremium, openSubscriptionFlow } = usePremium();
  
  // State for mission statuses
  const [dailyMissions, setDailyMissions] = useState([
    {
      id: 1,
      title: 'Walk 7 km',
      xp: 300,
      icon: '🏃',
      status: 'in-progress',
      progress: 70,
      timeLeft: '8h',
    },
    {
      id: 2,
      title: 'Run 5 km',
      xp: 400,
      icon: '🏃',
      difficulty: 'Medium',
      status: 'not-started',
      timeLeft: '8h',
      isPremium: true,
    },
    {
      id: 3,
      title: 'Complete 40 Push-Ups',
      xp: 200,
      icon: '💪',
      status: 'completed',
      earnedXp: 200,
    },
  ]);

  const [weeklyMissions, setWeeklyMissions] = useState([
    {
      id: 1,
      title: 'Run 30 km this week',
      xp: 1500,
      icon: '🏃',
      status: 'in-progress',
      progress: 45,
      timeLeft: '5d',
      isPremium: true,
    },
    {
      id: 2,
      title: 'Complete 200 Push-Ups',
      xp: 800,
      icon: '💪',
      difficulty: 'Hard',
      status: 'not-started',
      timeLeft: '5d',
      isPremium: true,
    },
    {
      id: 3,
      title: 'Cycle 50 km',
      xp: 1200,
      icon: '🚴',
      status: 'in-progress',
      progress: 30,
      timeLeft: '5d',
      isPremium: true,
    },
    {
      id: 4,
      title: 'Workout 5 times',
      xp: 1000,
      icon: '🔥',
      status: 'completed',
      earnedXp: 1000,
    },
  ]);

  const [specialMissions, setSpecialMissions] = useState([
    {
      id: 1,
      title: 'Weekend 10K Run',
      xp: 800,
      icon: '🏃',
      friendsJoined: 8,
      timeLeft: '2 Days Left',
      type: 'special',
      status: 'not-joined',
    },
    {
      id: 2,
      title: 'Marathon Training Challenge',
      xp: 2000,
      icon: '🏆',
      friendsJoined: 15,
      timeLeft: '1 Week Left',
      type: 'special',
      status: 'not-joined',
    },
    {
      id: 3,
      title: 'Mountain Hike Adventure',
      xp: 1500,
      icon: '⛰️',
      friendsJoined: 12,
      timeLeft: '3 Days Left',
      type: 'special',
      status: 'not-joined',
    },
  ]);

  const [recommendedMissions, setRecommendedMissions] = useState([
    {
      id: 1,
      title: 'Walk 5 km',
      xp: 250,
      icon: '🔥',
      subtitle: 'Based on your activity',
      status: 'not-started',
    },
    {
      id: 2,
      title: 'Evening Yoga Session',
      xp: 150,
      icon: '🧘',
      subtitle: 'Perfect for recovery',
      status: 'not-started',
    },
  ]);

  // Handler functions for mission status changes
  const handleDailyMissionToggle = (missionId) => {
    setDailyMissions(dailyMissions.map(mission => {
      if (mission.id === missionId) {
        if (mission.status === 'not-started') {
          return { ...mission, status: 'in-progress', progress: 0 };
        } else if (mission.status === 'in-progress') {
          return { ...mission, status: 'completed', earnedXp: mission.xp, progress: 100 };
        }
      }
      return mission;
    }));
  };

  const handleWeeklyMissionToggle = (missionId) => {
    setWeeklyMissions(weeklyMissions.map(mission => {
      if (mission.id === missionId) {
        if (mission.status === 'not-started') {
          return { ...mission, status: 'in-progress', progress: 0 };
        } else if (mission.status === 'in-progress') {
          return { ...mission, status: 'completed', earnedXp: mission.xp, progress: 100 };
        }
      }
      return mission;
    }));
  };

  const handleSpecialMissionToggle = (missionId) => {
    setSpecialMissions(specialMissions.map(mission => {
      if (mission.id === missionId) {
        return { 
          ...mission, 
          status: mission.status === 'joined' ? 'not-joined' : 'joined',
          friendsJoined: mission.status === 'joined' ? mission.friendsJoined - 1 : mission.friendsJoined + 1
        };
      }
      return mission;
    }));
  };

  const handleRecommendedMissionToggle = (missionId) => {
    setRecommendedMissions(recommendedMissions.map(mission => {
      if (mission.id === missionId) {
        if (mission.status === 'not-started') {
          return { ...mission, status: 'in-progress' };
        } else if (mission.status === 'in-progress') {
          return { ...mission, status: 'completed', earnedXp: mission.xp };
        }
      }
      return mission;
    }));
  };

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
          <VybeLogo width={80} height={28} />
          <View style={styles.headerRight}>
            <TouchableOpacity 
              style={styles.profileButton}
              onPress={() => navigation.navigate('Dashboard')}
            >
              <Text style={styles.profileIcon}>👤</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Your Missions</Text>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {['Daily', 'Weekly', 'Special'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* XP Progress - Changes based on tab */}
        {activeTab === 'Daily' && (
          <View style={styles.xpProgressContainer}>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '64%' }]} />
            </View>
            <Text style={styles.xpProgressText}>1,280 / 2,000 XP Today</Text>
          </View>
        )}

        {activeTab === 'Weekly' && (
          <View style={styles.xpProgressContainer}>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '48%' }]} />
            </View>
            <Text style={styles.xpProgressText}>4,800 / 10,000 XP This Week</Text>
          </View>
        )}

        {activeTab === 'Special' && (
          <View style={styles.xpProgressContainer}>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '0%' }]} />
            </View>
            <Text style={styles.xpProgressText}>0 / 5,000 XP from Special Events</Text>
          </View>
        )}

        {/* Daily Missions */}
        {activeTab === 'Daily' && (
          <View style={styles.missionsContainer}>
            {dailyMissions.map((mission) => {
              const isLocked = mission.isPremium && !isPremium;
              return (
              <View key={mission.id} style={[
                styles.missionCard,
                mission.isPremium && styles.missionCardPremium
              ]}>
                {/* Premium badge indicator */}
                {mission.isPremium && (
                  <View style={styles.missionPremiumBadge}>
                    <Text style={styles.goldCrownIcon}>👑</Text>
                  </View>
                )}

                <View style={styles.missionLeft}>
                  <View style={[
                    styles.missionIcon,
                    mission.status === 'completed' && styles.missionIconCompleted
                  ]}>
                    <Text style={styles.missionEmoji}>{mission.icon}</Text>
                  </View>
                  <View style={styles.missionInfo}>
                    <Text style={styles.missionTitle}>{mission.title}</Text>
                    <Text style={styles.missionXp}>
                      +{mission.xp} XP
                      {mission.progress && ` • ${mission.progress}% Complete`}
                      {mission.difficulty && ` • ${mission.difficulty}`}
                    </Text>
                  </View>
                </View>

                <View style={styles.missionRight}>
                  {mission.status === 'completed' ? (
                    <View style={styles.completedBadge}>
                      <Text style={styles.completedText}>✓ Completed!</Text>
                      <Text style={styles.earnedXpText}>⚡ {mission.earnedXp} XP</Text>
                    </View>
                  ) : mission.status === 'in-progress' ? (
                    <TouchableOpacity 
                      style={styles.endButton}
                      onPress={() => handleDailyMissionToggle(mission.id)}
                    >
                      <Text style={styles.endButtonText}>End Mission</Text>
                      <Text style={styles.timeLeftText}>⏱ Ends in {mission.timeLeft}</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity 
                      style={styles.startButton}
                      onPress={() => !isLocked && handleDailyMissionToggle(mission.id)}
                      disabled={isLocked}
                    >
                      <Text style={styles.startButtonText}>{isLocked ? 'Premium' : 'Start'}</Text>
                      <Text style={styles.notStartedText}>
                        {isLocked ? 'Premium Only' : `Not Started • ${mission.timeLeft}`}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>

                {/* Premium lock overlay */}
                {isLocked && (
                  <PremiumLockOverlay 
                    onPress={openSubscriptionFlow}
                    message="Premium Required"
                    showButton={true}
                  />
                )}
              </View>
            )})}
          </View>
        )}

        {/* Weekly Missions */}
        {activeTab === 'Weekly' && (
          <View style={styles.missionsContainer}>
            {weeklyMissions.map((mission) => {
              const isLocked = mission.isPremium && !isPremium;
              return (
              <View key={mission.id} style={[
                styles.missionCard,
                mission.isPremium && styles.missionCardPremium
              ]}>
                {/* Premium badge indicator */}
                {mission.isPremium && (
                  <View style={styles.missionPremiumBadge}>
                    <Text style={styles.goldCrownIcon}>👑</Text>
                  </View>
                )}

                <View style={styles.missionLeft}>
                  <View style={[
                    styles.missionIcon,
                    mission.status === 'completed' && styles.missionIconCompleted
                  ]}>
                    <Text style={styles.missionEmoji}>{mission.icon}</Text>
                  </View>
                  <View style={styles.missionInfo}>
                    <Text style={styles.missionTitle}>{mission.title}</Text>
                    <Text style={styles.missionXp}>
                      +{mission.xp} XP
                      {mission.progress && ` • ${mission.progress}% Complete`}
                      {mission.difficulty && ` • ${mission.difficulty}`}
                    </Text>
                  </View>
                </View>

                <View style={styles.missionRight}>
                  {mission.status === 'completed' ? (
                    <View style={styles.completedBadge}>
                      <Text style={styles.completedText}>✓ Completed!</Text>
                      <Text style={styles.earnedXpText}>⚡ {mission.earnedXp} XP</Text>
                    </View>
                  ) : mission.status === 'in-progress' ? (
                    <TouchableOpacity 
                      style={styles.endButton}
                      onPress={() => handleWeeklyMissionToggle(mission.id)}
                    >
                      <Text style={styles.endButtonText}>End Mission</Text>
                      <Text style={styles.timeLeftText}>⏱ Ends in {mission.timeLeft}</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity 
                      style={styles.startButton}
                      onPress={() => !isLocked && handleWeeklyMissionToggle(mission.id)}
                      disabled={isLocked}
                    >
                      <Text style={styles.startButtonText}>{isLocked ? 'Premium' : 'Start'}</Text>
                      <Text style={styles.notStartedText}>
                        {isLocked ? 'Premium Only' : `Not Started • ${mission.timeLeft}`}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>

                {/* Premium lock overlay */}
                {isLocked && (
                  <PremiumLockOverlay 
                    onPress={openSubscriptionFlow}
                    message="Premium Required"
                    showButton={true}
                  />
                )}
              </View>
            )})}
          </View>
        )}

        {/* Special Missions */}
        {activeTab === 'Special' && (
          <View style={styles.missionsContainer}>
            {specialMissions.map((mission) => (
              <View key={mission.id} style={styles.specialMissionCard}>
                <View style={styles.specialGradient}>
                  <View style={styles.specialContent}>
                    <Text style={styles.specialIcon}>{mission.icon}</Text>
                    <View style={styles.specialInfo}>
                      <Text style={styles.specialTitle}>{mission.title}</Text>
                      <Text style={styles.specialXp}>Earn {mission.xp} XP</Text>
                      <View style={styles.friendsRow}>
                        <View style={styles.friendAvatars}>
                          {[...Array(5)].map((_, i) => (
                            <View key={i} style={[styles.friendAvatar, { left: i * -8 }]}>
                              <Text style={styles.friendAvatarText}>👤</Text>
                            </View>
                          ))}
                        </View>
                        <Text style={styles.friendsJoinedText}>+{mission.friendsJoined} friends joined</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.specialRight}>
                    <TouchableOpacity 
                      style={[
                        styles.joinButton,
                        mission.status === 'joined' && styles.joinedSpecialButton
                      ]}
                      onPress={() => handleSpecialMissionToggle(mission.id)}
                    >
                      <Text style={[
                        styles.joinButtonText,
                        mission.status === 'joined' && styles.joinedSpecialButtonText
                      ]}>
                        {mission.status === 'joined' ? '✓ Joined' : 'Join'}
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles.specialTimeLeft}>⏱ {mission.timeLeft}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Recommended Section */}
        <Text style={styles.sectionTitle}>Recommended for You</Text>
        {recommendedMissions.map((mission) => (
          <View key={mission.id} style={styles.recommendedCard}>
            <View style={styles.recommendedIcon}>
              <Text style={styles.recommendedEmoji}>{mission.icon}</Text>
            </View>
            <View style={styles.recommendedInfo}>
              <Text style={styles.recommendedTitle}>{mission.title}</Text>
              <Text style={styles.recommendedSubtitle}>{mission.subtitle} • +{mission.xp} XP</Text>
            </View>
            {mission.status === 'completed' ? (
              <View style={styles.recommendedCompletedBadge}>
                <Text style={styles.recommendedCompletedText}>✓</Text>
              </View>
            ) : (
              <TouchableOpacity 
                style={[
                  styles.recommendedButton,
                  mission.status === 'in-progress' && styles.recommendedButtonInProgress
                ]}
                onPress={() => handleRecommendedMissionToggle(mission.id)}
              >
                <Text style={[
                  styles.recommendedButtonText,
                  mission.status === 'in-progress' && styles.recommendedButtonTextInProgress
                ]}>
                  {mission.status === 'in-progress' ? 'End' : 'Start'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}

        {/* Progress Dots */}
        <View style={styles.progressDots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.bottomSpacing} />
          </ScrollView>
          
          {/* Bottom Navigation */}
          <BottomNavBar navigation={navigation} activeTab="Missions" />
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
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
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
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: THEME.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: THEME.colors.primary,
  },
  profileIcon: {
    fontSize: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    textAlign: 'center',
    marginVertical: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 4,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
    position: 'relative',
  },
  activeTab: {
    backgroundColor: '#2A2A2A',
  },
  tabText: {
    fontSize: 15,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: THEME.colors.textPrimary,
    fontWeight: '600',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: -2,
    height: 3,
    width: '60%',
    backgroundColor: '#5B9FFF',
    borderRadius: 2,
  },
  xpProgressContainer: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  progressBarBg: {
    height: 6,
    backgroundColor: 'rgba(91, 159, 255, 0.2)',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#5B9FFF',
    borderRadius: 3,
  },
  xpProgressText: {
    fontSize: 14,
    color: '#A0A0A0',
    textAlign: 'center',
  },
  missionsContainer: {
    paddingHorizontal: 16,
  },
  missionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  missionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  missionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(91, 159, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 2,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  missionIconCompleted: {
    backgroundColor: 'rgba(79, 255, 176, 0.15)',
    borderColor: 'rgba(79, 255, 176, 0.3)',
  },
  missionEmoji: {
    fontSize: 28,
  },
  missionInfo: {
    flex: 1,
  },
  missionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
    marginBottom: 4,
  },
  missionXp: {
    fontSize: 13,
    color: '#A0A0A0',
  },
  missionRight: {
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  endButton: {
    backgroundColor: 'rgba(255, 107, 107, 0.15)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 107, 107, 0.3)',
    alignItems: 'center',
  },
  endButtonText: {
    color: '#FF6B6B',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  timeLeftText: {
    fontSize: 11,
    color: '#A0A0A0',
  },
  startButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },
  startButtonText: {
    color: THEME.colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  notStartedText: {
    fontSize: 10,
    color: '#666',
  },
  completedBadge: {
    alignItems: 'flex-end',
  },
  completedText: {
    color: '#4FFFB0',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  earnedXpText: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  specialMissionCard: {
    marginHorizontal: 16,
    marginVertical: 20,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#1A1F3A',
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
    shadowColor: '#5B9FFF',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  specialGradient: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  specialContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  specialIcon: {
    fontSize: 40,
    marginRight: 16,
  },
  specialInfo: {
    flex: 1,
  },
  specialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 4,
  },
  specialXp: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 8,
  },
  friendsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  friendAvatars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  friendAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2A2A2A',
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  friendAvatarText: {
    fontSize: 12,
  },
  friendsJoinedText: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  specialRight: {
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  joinButton: {
    backgroundColor: '#5B9FFF',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 14,
    marginBottom: 8,
  },
  joinButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  joinedSpecialButton: {
    backgroundColor: 'rgba(79, 255, 176, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.3)',
  },
  joinedSpecialButtonText: {
    color: '#4FFFB0',
  },
  specialTimeLeft: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  recommendedCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  recommendedIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 107, 53, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 2,
    borderColor: 'rgba(255, 107, 53, 0.3)',
  },
  recommendedEmoji: {
    fontSize: 28,
  },
  recommendedInfo: {
    flex: 1,
  },
  recommendedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
    marginBottom: 4,
  },
  recommendedSubtitle: {
    fontSize: 13,
    color: '#A0A0A0',
  },
  recommendedButton: {
    backgroundColor: 'rgba(91, 159, 255, 0.15)',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  recommendedButtonText: {
    color: '#5B9FFF',
    fontSize: 15,
    fontWeight: '600',
  },
  recommendedButtonInProgress: {
    backgroundColor: 'rgba(255, 107, 107, 0.15)',
    borderColor: 'rgba(255, 107, 107, 0.3)',
  },
  recommendedButtonTextInProgress: {
    color: '#FF6B6B',
  },
  recommendedCompletedBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(79, 255, 176, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recommendedCompletedText: {
    fontSize: 20,
    color: '#4FFFB0',
  },
  progressDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2A2A2A',
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: '#5B9FFF',
    width: 20,
  },
  bottomSpacing: {
    height: 20,
  },

  // Premium styles
  missionCardPremium: {
    borderColor: 'rgba(255, 215, 0, 0.4)',
    shadowColor: '#FFD700',
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  missionPremiumBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 10,
  },
  goldCrownIcon: {
    fontSize: 20,
    textShadowColor: 'rgba(255, 215, 0, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
});


