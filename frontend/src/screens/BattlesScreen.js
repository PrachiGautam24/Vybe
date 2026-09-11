import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { THEME } from '../constants/theme';

export default function BattlesScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Ongoing');

  const ongoingBattles = [
    {
      id: 1,
      team1: 'Fitness Titans',
      team2: 'Step Squad',
      team1XP: '5,320 XP',
      team2XP: '4,750 XP',
      team1Progress: 0.65,
      team2Progress: 0.55,
      endTime: 'Ends in 2h 15m',
      isLive: true,
    },
    {
      id: 2,
      team1: 'The Power Lifters',
      team2: 'Cardio Crew',
      team1XP: '8,210 XP',
      team2XP: '7,940 XP',
      team1Progress: 0.75,
      team2Progress: 0.72,
      endTime: 'Ends in 1h 45m',
      isLive: true,
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Thunder Striders', xp: '12,450 XP', icon: '🔥' },
    { rank: 2, name: 'Peak Performers', xp: '11,980 XP' },
    { rank: 3, name: 'Speed Demons', xp: '10,720 XP' },
    { rank: 4, name: 'Trail Blazers', xp: '9,860 XP' },
    { rank: 5, name: 'Victory Crew', xp: '9,320 XP' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={THEME.colors.background} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>VYBE</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>Team Battles</Text>
        <Text style={styles.subtitle}>Compete with friends and earn XP.</Text>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {['Ongoing', 'Upcoming', 'History'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.tab}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
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
                {/* Team Names */}
                <View style={styles.battleHeader}>
                  <Text style={styles.teamName}>{battle.team1}</Text>
                  <Text style={styles.teamName}>{battle.team2}</Text>
                </View>

                {/* Battle Content */}
                <View style={styles.battleContent}>
                  {/* Team 1 Avatars */}
                  <View style={styles.teamAvatars}>
                    <View style={styles.avatarGroup}>
                      <View style={[styles.avatar, { zIndex: 3 }]}><Text>👤</Text></View>
                      <View style={[styles.avatar, { marginLeft: -10, zIndex: 2 }]}><Text>👤</Text></View>
                      <View style={[styles.avatar, { marginLeft: -10, zIndex: 1 }]}><Text>👤</Text></View>
                    </View>
                  </View>

                  {/* Progress and VS */}
                  <View style={styles.vsContainer}>
                    <View style={styles.progressSection}>
                      <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: `${battle.team1Progress * 100}%`, backgroundColor: '#5B9FFF' }]} />
                      </View>
                      <Text style={styles.xpText}>{battle.team1XP}</Text>
                    </View>

                    <Text style={styles.vsText}>VS</Text>

                    <View style={styles.progressSection}>
                      <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: `${battle.team2Progress * 100}%`, backgroundColor: '#5B9FFF' }]} />
                      </View>
                      <Text style={styles.xpText}>{battle.team2XP}</Text>
                    </View>
                  </View>

                  {/* Team 2 Avatars */}
                  <View style={styles.teamAvatars}>
                    <View style={styles.avatarGroup}>
                      <View style={[styles.avatar, { zIndex: 3 }]}><Text>👤</Text></View>
                      <View style={[styles.avatar, { marginLeft: -10, zIndex: 2 }]}><Text>👤</Text></View>
                      <View style={[styles.avatar, { marginLeft: -10, zIndex: 1 }]}><Text>👤</Text></View>
                    </View>
                  </View>
                </View>

                {/* Bottom Info */}
                <View style={styles.battleFooter}>
                  <View style={styles.liveTag}>
                    <View style={styles.liveDot} />
                    <Text style={styles.liveText}>LIVE</Text>
                    <Text style={styles.endTime}>{battle.endTime}</Text>
                  </View>
                  <TouchableOpacity style={styles.viewButton}>
                    <Text style={styles.viewButtonText}>View Battle</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Upcoming Challenge */}
        <Text style={styles.sectionTitle}>Upcoming Challenge</Text>
        <View style={styles.upcomingCard}>
          <View style={styles.upcomingLeft}>
            <Text style={styles.upcomingIcon}>🏃</Text>
            <View style={styles.upcomingInfo}>
              <Text style={styles.upcomingTitle}>Weekend Sprint Challenge</Text>
              <Text style={styles.upcomingDetails}>+600 XP • Starts in 8h</Text>
              <View style={styles.friendsJoined}>
                <View style={styles.smallAvatarGroup}>
                  <View style={[styles.smallAvatar, { zIndex: 5 }]}><Text style={styles.smallAvatarText}>👤</Text></View>
                  <View style={[styles.smallAvatar, { marginLeft: -8, zIndex: 4 }]}><Text style={styles.smallAvatarText}>👤</Text></View>
                  <View style={[styles.smallAvatar, { marginLeft: -8, zIndex: 3 }]}><Text style={styles.smallAvatarText}>👤</Text></View>
                  <View style={[styles.smallAvatar, { marginLeft: -8, zIndex: 2 }]}><Text style={styles.smallAvatarText}>👤</Text></View>
                  <View style={[styles.smallAvatar, { marginLeft: -8, zIndex: 1 }]}><Text style={styles.smallAvatarText}>👤</Text></View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.upcomingRight}>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join Now</Text>
            </TouchableOpacity>
            <Text style={styles.daysLeft}>⏱ 2 Days Left</Text>
          </View>
        </View>

        {/* Leaderboard */}
        <Text style={styles.sectionTitle}>Top Teams Leaderboard</Text>
        <View style={styles.leaderboardCard}>
          {leaderboard.map((team) => (
            <View key={team.rank} style={styles.leaderboardRow}>
              <View style={styles.leaderboardLeft}>
                <View style={[styles.rankBadge, team.rank === 1 && styles.rankBadgeFirst]}>
                  <Text style={styles.rankText}>{team.icon || team.rank}</Text>
                </View>
                <Text style={styles.teamNameLeaderboard}>{team.name}</Text>
                <View style={styles.leaderboardProgress}>
                  <View style={[styles.leaderboardProgressFill, { width: '80%' }]} />
                </View>
              </View>
              <Text style={styles.leaderboardXP}>{team.xp}</Text>
            </View>
          ))}
        </View>

        {/* Bottom Stats Bar */}
        <View style={styles.bottomBar}>
          <View style={styles.bottomStat}>
            <Text style={styles.bottomLabel}>Today's XP</Text>
            <Text style={styles.bottomValue}>1,280</Text>
          </View>
          <View style={styles.bottomStat}>
            <Text style={styles.bottomLabel}>🔥 Streak</Text>
            <Text style={styles.bottomValue}>17 Days</Text>
          </View>
          <TouchableOpacity style={styles.claimButton}>
            <Text style={styles.claimButtonText}>Claim Rewards</Text>
          </TouchableOpacity>
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
    paddingBottom: 16,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#A0A0A0',
    textAlign: 'center',
    marginBottom: 24,
  },

  // Tabs
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  tab: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginHorizontal: 12,
  },
  tabText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  tabIndicator: {
    height: 3,
    backgroundColor: '#5B9FFF',
    borderRadius: 2,
    marginTop: 6,
  },

  // Battle Cards
  battlesContainer: {
    paddingHorizontal: 16,
  },
  battleCard: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'rgba(91, 159, 255, 0.4)',
    shadowColor: '#5B9FFF',
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  battleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
  },
  battleContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  teamAvatars: {
    width: 70,
  },
  avatarGroup: {
    flexDirection: 'row',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  vsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  progressSection: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 4,
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
    shadowColor: '#5B9FFF',
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 4,
  },
  xpText: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  vsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5B9FFF',
    marginVertical: 8,
  },
  battleFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  liveTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 59, 48, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF3B30',
    marginRight: 6,
  },
  liveText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginRight: 8,
  },
  endTime: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  viewButton: {
    backgroundColor: 'rgba(91, 159, 255, 0.15)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  viewButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5B9FFF',
  },

  // Upcoming Challenge
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#A0A0A0',
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  upcomingCard: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 20,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  upcomingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  upcomingIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  upcomingInfo: {
    flex: 1,
  },
  upcomingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  upcomingDetails: {
    fontSize: 13,
    color: '#A0A0A0',
    marginBottom: 8,
  },
  friendsJoined: {
    flexDirection: 'row',
  },
  smallAvatarGroup: {
    flexDirection: 'row',
  },
  smallAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  smallAvatarText: {
    fontSize: 12,
  },
  upcomingRight: {
    alignItems: 'flex-end',
  },
  joinButton: {
    backgroundColor: 'rgba(91, 159, 255, 0.2)',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.5)',
    marginBottom: 8,
  },
  joinButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5B9FFF',
  },
  daysLeft: {
    fontSize: 12,
    color: '#A0A0A0',
  },

  // Leaderboard
  leaderboardCard: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 16,
    borderWidth: 2,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  leaderboardRow: {
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rankBadgeFirst: {
    backgroundColor: 'rgba(255, 184, 77, 0.2)',
  },
  rankText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  teamNameLeaderboard: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    flex: 1,
  },
  leaderboardProgress: {
    width: 60,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 2,
    marginLeft: 12,
  },
  leaderboardProgressFill: {
    height: '100%',
    backgroundColor: '#5B9FFF',
    borderRadius: 2,
  },
  leaderboardXP: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5B9FFF',
    marginLeft: 12,
  },

  // Bottom Bar
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(26, 26, 26, 0.9)',
    marginHorizontal: 16,
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  bottomStat: {
    alignItems: 'center',
  },
  bottomLabel: {
    fontSize: 12,
    color: '#A0A0A0',
    marginBottom: 4,
  },
  bottomValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  claimButton: {
    backgroundColor: '#4FFFB0',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  claimButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },

  bottomSpacing: {
    height: 100,
  },
});
