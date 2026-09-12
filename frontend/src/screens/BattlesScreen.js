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

export default function BattlesScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Ongoing');

  const ongoingBattles = [
    {
      id: 1,
      team1: {
        name: 'Fitness Titans',
        members: ['👤', '👤', '👤'],
        xp: 5320,
        progress: 55,
      },
      team2: {
        name: 'Step Squad',
        members: ['👤', '👤', '👤'],
        xp: 4750,
        progress: 48,
      },
      endTime: '2h 15m',
      status: 'LIVE',
    },
    {
      id: 2,
      team1: {
        name: 'The Power Lifters',
        members: ['👤', '👤', '👤'],
        xp: 8210,
        progress: 68,
      },
      team2: {
        name: 'Cardio Crew',
        members: ['👤', '👤', '👤'],
        xp: 7940,
        progress: 65,
      },
      endTime: '1h 45m',
      status: 'LIVE',
    },
  ];

  const upcomingChallenge = {
    icon: '🏃',
    title: 'Weekend Sprint Challenge',
    xp: 600,
    startTime: '8h',
    participants: ['👤', '👤', '👤', '👤', '👤'],
    daysLeft: '2 Days Left',
  };

  const leaderboard = [
    { rank: 1, name: 'Thunder Striders', xp: 12450, progress: 85 },
    { rank: 2, name: 'Peak Performers', xp: 11980, progress: 80 },
    { rank: 3, name: 'Speed Demons', xp: 10720, progress: 72 },
    { rank: 4, name: 'Trail Blazers', xp: 9860, progress: 68 },
    { rank: 5, name: 'Victory Crew', xp: 9320, progress: 65 },
  ];

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
          <Text style={styles.logo}>VYBE</Text>
          <TouchableOpacity 
            style={styles.profileButton}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Text style={styles.profileIcon}>👤</Text>
          </TouchableOpacity>
        </View>

        {/* Title */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Team Battles</Text>
          <Text style={styles.subtitle}>Compete with friends and earn XP.</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {['Ongoing', 'Upcoming', 'History'].map((tab) => (
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

        {/* Ongoing Battles */}
        {activeTab === 'Ongoing' && (
          <View style={styles.battlesContainer}>
            {ongoingBattles.map((battle) => (
              <View key={battle.id} style={styles.battleCard}>
                {/* Team 1 */}
                <View style={styles.teamSection}>
                  <Text style={styles.teamName}>{battle.team1.name}</Text>
                  <View style={styles.teamMembers}>
                    {battle.team1.members.map((member, idx) => (
                      <View key={idx} style={styles.memberAvatar}>
                        <Text style={styles.memberAvatarText}>{member}</Text>
                      </View>
                    ))}
                  </View>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${battle.team1.progress}%` }]} />
                  </View>
                  <Text style={styles.xpText}>{battle.team1.xp.toLocaleString()} XP</Text>
                </View>

                {/* VS Section */}
                <View style={styles.vsSection}>
                  <Text style={styles.vsText}>VS</Text>
                  <View style={styles.liveContainer}>
                    <View style={styles.liveDot} />
                    <Text style={styles.liveText}>{battle.status}</Text>
                  </View>
                  <Text style={styles.endTimeText}>Ends in {battle.endTime}</Text>
                </View>

                {/* Team 2 */}
                <View style={styles.teamSection}>
                  <Text style={styles.teamName}>{battle.team2.name}</Text>
                  <View style={styles.teamMembers}>
                    {battle.team2.members.map((member, idx) => (
                      <View key={idx} style={styles.memberAvatar}>
                        <Text style={styles.memberAvatarText}>{member}</Text>
                      </View>
                    ))}
                  </View>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${battle.team2.progress}%` }]} />
                  </View>
                  <Text style={styles.xpText}>{battle.team2.xp.toLocaleString()} XP</Text>
                </View>

                {/* View Battle Button */}
                <TouchableOpacity style={styles.viewBattleButton}>
                  <Text style={styles.viewBattleText}>View Battle</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        {/* Upcoming Challenge */}
        <View style={styles.upcomingSection}>
          <Text style={styles.sectionTitle}>Upcoming Challenge</Text>
          <View style={styles.upcomingCard}>
            <View style={styles.upcomingContent}>
              <Text style={styles.upcomingIcon}>{upcomingChallenge.icon}</Text>
              <View style={styles.upcomingInfo}>
                <Text style={styles.upcomingTitle}>{upcomingChallenge.title}</Text>
                <Text style={styles.upcomingDetails}>
                  +{upcomingChallenge.xp} XP • Starts in {upcomingChallenge.startTime}
                </Text>
                <View style={styles.participantsRow}>
                  {upcomingChallenge.participants.map((participant, idx) => (
                    <View 
                      key={idx} 
                      style={[styles.participantAvatar, { left: idx * -8 }]}
                    >
                      <Text style={styles.participantText}>{participant}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
            <View style={styles.upcomingRight}>
              <TouchableOpacity style={styles.joinNowButton}>
                <Text style={styles.joinNowText}>Join Now</Text>
              </TouchableOpacity>
              <Text style={styles.daysLeftText}>⏱ {upcomingChallenge.daysLeft}</Text>
            </View>
          </View>
        </View>

        {/* Top Teams Leaderboard */}
        <View style={styles.leaderboardSection}>
          <Text style={styles.leaderboardTitle}>Top Teams Leaderboard</Text>
          <View style={styles.leaderboardContainer}>
            {leaderboard.map((team) => (
              <View key={team.rank} style={styles.leaderboardItem}>
                <View style={styles.leaderboardLeft}>
                  <View style={[
                    styles.rankBadge,
                    team.rank === 1 && styles.rank1Badge
                  ]}>
                    {team.rank === 1 ? (
                      <Text style={styles.crownIcon}>👑</Text>
                    ) : (
                      <Text style={styles.rankNumber}>{team.rank}</Text>
                    )}
                  </View>
                  <View style={styles.teamInfo}>
                    <Text style={styles.leaderboardTeamName}>{team.name}</Text>
                    <View style={styles.leaderboardProgress}>
                      <View style={[styles.leaderboardProgressFill, { width: `${team.progress}%` }]} />
                    </View>
                  </View>
                </View>
                <Text style={styles.leaderboardXp}>{team.xp.toLocaleString()} XP</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Bottom Stats Bar */}
        <View style={styles.bottomStatsWrapper}>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statIcon}>⚡</Text>
              <View style={styles.statTextContainer}>
                <Text style={styles.statLabel}>Today's XP</Text>
                <Text style={styles.statValue}>1,280</Text>
              </View>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statIcon}>🔥</Text>
              <View style={styles.statTextContainer}>
                <Text style={styles.statLabel}>Streak</Text>
                <Text style={styles.statValue}>17 Days</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.claimButton}>
            <Text style={styles.claimButtonText}>🎁 Claim Rewards</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacing} />
          </ScrollView>

          {/* Bottom Navigation */}
          <BottomNavBar navigation={navigation} activeTab="Battles" />
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
  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    letterSpacing: 3,
    textShadowColor: 'rgba(91, 159, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
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
  titleSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#A0A0A0',
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
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: THEME.colors.textPrimary,
    fontWeight: '600',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    width: '60%',
    backgroundColor: '#5B9FFF',
    borderRadius: 2,
  },
  battlesContainer: {
    paddingHorizontal: 16,
  },
  battleCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  teamSection: {
    alignItems: 'center',
    marginBottom: 12,
  },
  teamName: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
    marginBottom: 8,
  },
  teamMembers: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  memberAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2A2A2A',
    borderWidth: 2,
    borderColor: '#1A1A2E',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  memberAvatarText: {
    fontSize: 16,
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(91, 159, 255, 0.2)',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#5B9FFF',
    borderRadius: 3,
  },
  xpText: {
    fontSize: 14,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
  },
  vsSection: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  vsText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 8,
  },
  liveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 77, 77, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 4,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF4D4D',
    marginRight: 6,
  },
  liveText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF4D4D',
  },
  endTimeText: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  viewBattleButton: {
    backgroundColor: 'rgba(91, 159, 255, 0.15)',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
    marginTop: 8,
  },
  viewBattleText: {
    color: '#5B9FFF',
    fontSize: 15,
    fontWeight: '600',
  },
  upcomingSection: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#A0A0A0',
    marginBottom: 12,
    textAlign: 'center',
  },
  upcomingCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  upcomingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  upcomingIcon: {
    fontSize: 40,
    marginRight: 12,
  },
  upcomingInfo: {
    flex: 1,
  },
  upcomingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
    marginBottom: 4,
  },
  upcomingDetails: {
    fontSize: 12,
    color: '#A0A0A0',
    marginBottom: 8,
  },
  participantsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  participantAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2A2A2A',
    borderWidth: 2,
    borderColor: '#1A1A2E',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  participantText: {
    fontSize: 14,
  },
  upcomingRight: {
    alignItems: 'flex-end',
  },
  joinNowButton: {
    backgroundColor: '#5B9FFF',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 6,
  },
  joinNowText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  daysLeftText: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  leaderboardSection: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  leaderboardTitle: {
    fontSize: 16,
    color: '#A0A0A0',
    marginBottom: 12,
    textAlign: 'center',
  },
  leaderboardContainer: {
    backgroundColor: '#1A1A2E',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  leaderboardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rankBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rank1Badge: {
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
  },
  crownIcon: {
    fontSize: 18,
  },
  rankNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
  },
  teamInfo: {
    flex: 1,
  },
  leaderboardTeamName: {
    fontSize: 15,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
    marginBottom: 4,
  },
  leaderboardProgress: {
    width: '100%',
    height: 4,
    backgroundColor: 'rgba(91, 159, 255, 0.2)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  leaderboardProgressFill: {
    height: '100%',
    backgroundColor: '#5B9FFF',
    borderRadius: 2,
  },
  leaderboardXp: {
    fontSize: 14,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
    marginLeft: 12,
  },
  bottomStatsWrapper: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  statCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A2E',
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  statIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  statTextContainer: {
    flex: 1,
  },
  statLabel: {
    fontSize: 11,
    color: '#A0A0A0',
    marginBottom: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
  },
  claimButton: {
    backgroundColor: '#5B9FFF',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#5B9FFF',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  claimButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  bottomSpacing: {
    height: 20,
  },
});
