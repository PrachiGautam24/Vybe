import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { THEME } from '../constants/theme';

export default function MissionsScreen() {
  const [activeTab, setActiveTab] = useState('Daily');

  const dailyMissions = [
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
    },
    {
      id: 3,
      title: 'Complete 40 Push-Ups',
      xp: 200,
      icon: '💪',
      status: 'completed',
      earnedXp: 200,
    },
  ];

  const specialMission = {
    title: 'Weekend 10K Run',
    xp: 800,
    icon: '🏃',
    friendsJoined: 8,
    timeLeft: '2 Days Left',
  };

  const recommendedMissions = [
    {
      id: 1,
      title: 'Walk 5 km',
      xp: 250,
      icon: '🔥',
      subtitle: 'Based on your activity',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>VYBE</Text>
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

        {/* XP Progress */}
        <View style={styles.xpProgressContainer}>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '64%' }]} />
          </View>
          <Text style={styles.xpProgressText}>1,280 / 2,000 XP Today</Text>
        </View>

        {/* Daily Missions */}
        <View style={styles.missionsContainer}>
          {dailyMissions.map((mission) => (
            <View key={mission.id} style={styles.missionCard}>
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
                  <TouchableOpacity style={styles.resumeButton}>
                    <Text style={styles.resumeButtonText}>Resume</Text>
                    <Text style={styles.timeLeftText}>⏱ Ends in {mission.timeLeft}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.startButton}>
                    <Text style={styles.startButtonText}>Start</Text>
                    <Text style={styles.notStartedText}>Not Started • {mission.timeLeft}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* Special Mission (Weekend 10K) */}
        <View style={styles.specialMissionCard}>
          <View style={styles.specialGradient}>
            <View style={styles.specialContent}>
              <Text style={styles.specialIcon}>{specialMission.icon}</Text>
              <View style={styles.specialInfo}>
                <Text style={styles.specialTitle}>{specialMission.title}</Text>
                <Text style={styles.specialXp}>Earn {specialMission.xp} XP</Text>
                <View style={styles.friendsRow}>
                  <View style={styles.friendAvatars}>
                    {[...Array(5)].map((_, i) => (
                      <View key={i} style={[styles.friendAvatar, { left: i * -8 }]}>
                        <Text style={styles.friendAvatarText}>👤</Text>
                      </View>
                    ))}
                  </View>
                  <Text style={styles.friendsJoinedText}>+{specialMission.friendsJoined} friends joined</Text>
                </View>
              </View>
            </View>
            <View style={styles.specialRight}>
              <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Join</Text>
              </TouchableOpacity>
              <Text style={styles.specialTimeLeft}>⏱ {specialMission.timeLeft}</Text>
            </View>
          </View>
        </View>

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
            <TouchableOpacity style={styles.recommendedButton}>
              <Text style={styles.recommendedButtonText}>Start</Text>
            </TouchableOpacity>
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
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    letterSpacing: 2,
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
  resumeButton: {
    backgroundColor: 'rgba(91, 159, 255, 0.15)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
    alignItems: 'center',
  },
  resumeButtonText: {
    color: '#5B9FFF',
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
    height: 40,
  },
});
