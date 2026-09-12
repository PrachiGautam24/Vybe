import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Modal,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../constants/theme';
import BottomNavBar from '../components/BottomNavBar';
import VybeLogo from '../components/VybeLogo';
import PremiumFrame from '../components/PremiumFrame';
import { usePremium } from '../context/PremiumContext';

export default function BattlesScreen({ navigation, route }) {
  const [activeTab, setActiveTab] = useState(route.params?.tab || 'Ongoing');
  const [joinedBattles, setJoinedBattles] = useState([]);
  const { isPremium, openSubscriptionFlow } = usePremium();
  const [joinedUpcoming, setJoinedUpcoming] = useState([]);
  
  // Ground Play states
  const [isGroundPlayLoggedIn, setIsGroundPlayLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [password, setPassword] = useState('');
  const [userTeam, setUserTeam] = useState(null); // 'team1' or 'team2'
  const [userContributions, setUserContributions] = useState({});

  const handleJoinBattle = (battleId) => {
    if (joinedBattles.includes(battleId)) {
      setJoinedBattles(joinedBattles.filter(id => id !== battleId));
    } else {
      setJoinedBattles([...joinedBattles, battleId]);
    }
  };

  const handleJoinUpcoming = (challengeId) => {
    if (joinedUpcoming.includes(challengeId)) {
      setJoinedUpcoming(joinedUpcoming.filter(id => id !== challengeId));
    } else {
      setJoinedUpcoming([...joinedUpcoming, challengeId]);
    }
  };

  // Ground Play handlers
  const handleGroundPlayLogin = (asGuest = false) => {
    if (asGuest) {
      setIsGroundPlayLoggedIn(true);
      setUserTeam('team1'); // Default guest to team1
      setShowLoginModal(false);
      setUsername('Guest');
      return;
    }

    if (username && teamCode && password) {
      setIsGroundPlayLoggedIn(true);
      // Determine team based on team code (simplified logic)
      setUserTeam(teamCode.toLowerCase().includes('a') ? 'team1' : 'team2');
      setShowLoginModal(false);
    }
  };

  const handleParticipate = (battleId) => {
    // Simulate contributing XP and Points
    const contribution = {
      xp: Math.floor(Math.random() * 500) + 100,
      points: Math.floor(Math.random() * 300) + 50,
    };
    
    setUserContributions({
      ...userContributions,
      [battleId]: contribution,
    });
  };

  const ongoingBattles = [
    {
      id: 1,
      team1: {
        name: 'Fitness Titans',
        members: ['👤', '👤', '👤'],
        xp: 5320,
        points: 3200,
        xpProgress: 55,
        pointsProgress: 64,
      },
      team2: {
        name: 'Step Squad',
        members: ['👤', '👤', '👤'],
        xp: 4750,
        points: 2850,
        xpProgress: 48,
        pointsProgress: 57,
      },
      endTime: '2h 15m',
      countdown: 8100, // seconds
      status: 'LIVE',
      isPremium: true,
    },
    {
      id: 2,
      team1: {
        name: 'The Power Lifters',
        members: ['👤', '👤', '👤'],
        xp: 8210,
        points: 4500,
        xpProgress: 68,
        pointsProgress: 75,
      },
      team2: {
        name: 'Cardio Crew',
        members: ['👤', '👤', '👤'],
        xp: 7940,
        points: 4200,
        xpProgress: 65,
        pointsProgress: 70,
      },
      endTime: '1h 45m',
      countdown: 6300, // seconds
      status: 'LIVE',
    },
  ];

  // Leaderboard data (ranked by Points)
  const groundPlayLeaderboard = [
    { rank: 1, name: 'Fitness Titans', points: 3200, xp: 5320, isPremium: true },
    { rank: 2, name: 'The Power Lifters', points: 4500, xp: 8210, isPremium: false },
    { rank: 3, name: 'Cardio Crew', points: 4200, xp: 7940, isPremium: false },
    { rank: 4, name: 'Step Squad', points: 2850, xp: 4750, isPremium: false },
  ].sort((a, b) => b.points - a.points).map((team, index) => ({ ...team, rank: index + 1 }));

  const upcomingChallenge = {
    id: 'upcoming-1',
    icon: '🏃',
    title: 'Weekend Sprint Challenge',
    xp: 600,
    startTime: '8h',
    participants: ['👤', '👤', '👤', '👤', '👤'],
    daysLeft: '2 Days Left',
  };

  const premiumTournament = {
    id: 'premium-1',
    icon: '🏆',
    title: 'Elite Championship Tournament',
    xp: 2000,
    startTime: '24h',
    participants: ['👤', '👤', '👤', '👤', '👤', '👤'],
    daysLeft: '1 Day Left',
    prize: '₹5000 Prize Pool',
    isPremium: true,
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
          <VybeLogo width={80} height={28} />
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

        {/* Ongoing Battles - Ground Play */}
        {activeTab === 'Ongoing' && (
          <View style={styles.battlesContainer}>
            {/* Login to Ground Play Button or Ground Play Content */}
            {!isGroundPlayLoggedIn ? (
              <View style={styles.groundPlayLoginContainer}>
                <Text style={styles.groundPlayIcon}>🎮</Text>
                <Text style={styles.groundPlayTitle}>Ground Play Battles</Text>
                <Text style={styles.groundPlaySubtitle}>
                  Join live team battles and compete in real-time!
                </Text>
                <TouchableOpacity 
                  style={styles.groundPlayLoginButton}
                  onPress={() => setShowLoginModal(true)}
                >
                  <Text style={styles.groundPlayLoginText}>Login to Ground Play</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <>
                {/* Logged in - Show Battle Cards */}
                {ongoingBattles.map((battle) => {
                  const userContribution = userContributions[battle.id];
                  const CardWrapper = battle.isPremium ? 
                    ({ children }) => <View style={styles.premiumBattleFrame}>{children}</View> :
                    ({ children }) => <View>{children}</View>;

                  return (
                    <CardWrapper key={battle.id}>
                      <View style={[
                        styles.groundPlayBattleCard,
                        battle.isPremium && styles.premiumBattleCard
                      ]}>
                        {/* Premium Badge */}
                        {battle.isPremium && (
                          <View style={styles.premiumEntryBadge}>
                            <Text style={styles.premiumEntryText}>👑 Premium Tournament</Text>
                          </View>
                        )}

                        {/* Countdown Timer */}
                        <View style={styles.countdownContainer}>
                          <Text style={styles.countdownIcon}>⏱</Text>
                          <Text style={styles.countdownText}>Ends in {battle.endTime}</Text>
                          <View style={styles.liveContainer}>
                            <View style={styles.liveDot} />
                            <Text style={styles.liveText}>LIVE</Text>
                          </View>
                        </View>

                        {/* Team A */}
                        <View style={styles.teamSection}>
                          <Text style={styles.teamName}>{battle.team1.name}</Text>
                          <View style={styles.teamMembers}>
                            {battle.team1.members.map((member, idx) => (
                              <View key={idx} style={styles.memberAvatar}>
                                <Text style={styles.memberAvatarText}>{member}</Text>
                              </View>
                            ))}
                          </View>
                          
                          {/* XP Progress (Indigo) */}
                          <View style={styles.progressContainer}>
                            <Text style={styles.progressLabel}>XP</Text>
                            <View style={styles.progressBar}>
                              <View style={[styles.progressFillIndigo, { width: `${battle.team1.xpProgress}%` }]} />
                            </View>
                            <Text style={styles.progressValue}>{battle.team1.xp.toLocaleString()}</Text>
                          </View>

                          {/* Points Progress (Emerald) */}
                          <View style={styles.progressContainer}>
                            <Text style={styles.progressLabel}>Points</Text>
                            <View style={styles.progressBar}>
                              <View style={[styles.progressFillEmerald, { width: `${battle.team1.pointsProgress}%` }]} />
                            </View>
                            <Text style={styles.progressValue}>{battle.team1.points.toLocaleString()}</Text>
                          </View>
                        </View>

                        {/* VS Section */}
                        <View style={styles.vsSection}>
                          <Text style={styles.vsText}>VS</Text>
                        </View>

                        {/* Team B */}
                        <View style={styles.teamSection}>
                          <Text style={styles.teamName}>{battle.team2.name}</Text>
                          <View style={styles.teamMembers}>
                            {battle.team2.members.map((member, idx) => (
                              <View key={idx} style={styles.memberAvatar}>
                                <Text style={styles.memberAvatarText}>{member}</Text>
                              </View>
                            ))}
                          </View>
                          
                          {/* XP Progress (Indigo) */}
                          <View style={styles.progressContainer}>
                            <Text style={styles.progressLabel}>XP</Text>
                            <View style={styles.progressBar}>
                              <View style={[styles.progressFillIndigo, { width: `${battle.team2.xpProgress}%` }]} />
                            </View>
                            <Text style={styles.progressValue}>{battle.team2.xp.toLocaleString()}</Text>
                          </View>

                          {/* Points Progress (Emerald) */}
                          <View style={styles.progressContainer}>
                            <Text style={styles.progressLabel}>Points</Text>
                            <View style={styles.progressBar}>
                              <View style={[styles.progressFillEmerald, { width: `${battle.team2.pointsProgress}%` }]} />
                            </View>
                            <Text style={styles.progressValue}>{battle.team2.points.toLocaleString()}</Text>
                          </View>
                        </View>

                        {/* Participate Button */}
                        <TouchableOpacity 
                          style={[
                            styles.participateButton,
                            userContribution && styles.participatedButton
                          ]}
                          onPress={() => handleParticipate(battle.id)}
                          disabled={!!userContribution}
                        >
                          <Text style={[
                            styles.participateButtonText,
                            userContribution && styles.participatedButtonText
                          ]}>
                            {userContribution ? '✓ Participated' : '⚡ Participate Now'}
                          </Text>
                        </TouchableOpacity>

                        {/* User Contribution Display */}
                        {userContribution && (
                          <View style={[
                            styles.userContributionCard,
                            isPremium && styles.premiumUserContribution
                          ]}>
                            {isPremium && (
                              <View style={styles.goldBadge}>
                                <Text style={styles.goldBadgeText}>👑 Premium</Text>
                              </View>
                            )}
                            <Text style={styles.contributionUsername}>{username}</Text>
                            <View style={styles.contributionStats}>
                              <View style={styles.contributionStat}>
                                <Text style={styles.contributionLabel}>XP</Text>
                                <Text style={styles.contributionValue}>
                                  +{userContribution.xp}{isPremium ? ' ×2' : ''}
                                </Text>
                              </View>
                              <View style={styles.contributionStat}>
                                <Text style={styles.contributionLabel}>Points</Text>
                                <Text style={styles.contributionValueEmerald}>
                                  +{userContribution.points}{isPremium ? ' ×2' : ''}
                                </Text>
                              </View>
                            </View>
                            {isPremium && (
                              <Text style={styles.doubleRewardText}>🌟 Double Rewards Applied!</Text>
                            )}
                          </View>
                        )}
                      </View>
                    </CardWrapper>
                  );
                })}

                {/* Ground Play Leaderboard */}
                <View style={styles.groundPlayLeaderboard}>
                  <Text style={styles.leaderboardTitle}>🏆 Ground Play Leaderboard</Text>
                  <Text style={styles.leaderboardSubtitle}>Ranked by Points</Text>
                  <View style={styles.leaderboardContainer}>
                    {groundPlayLeaderboard.map((team) => (
                      <View 
                        key={team.rank} 
                        style={[
                          styles.leaderboardItem,
                          team.isPremium && styles.premiumLeaderboardItem
                        ]}
                      >
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
                            <Text style={[
                              styles.leaderboardTeamName,
                              team.isPremium && styles.premiumTeamName
                            ]}>
                              {team.name}
                              {team.isPremium && ' 👑'}
                            </Text>
                            <Text style={styles.leaderboardXpPoints}>
                              {team.xp.toLocaleString()} XP
                            </Text>
                          </View>
                        </View>
                        <Text style={styles.leaderboardPoints}>
                          {team.points.toLocaleString()} pts
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              </>
            )}
          </View>
        )}

        {/* Upcoming Tab */}
        {activeTab === 'Upcoming' && (
          <View style={styles.upcomingSection}>
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
                <TouchableOpacity 
                  style={[
                    styles.joinNowButton,
                    joinedUpcoming.includes(upcomingChallenge.id) && styles.joinNowButtonJoined
                  ]}
                  onPress={() => handleJoinUpcoming(upcomingChallenge.id)}
                >
                  <Text style={[
                    styles.joinNowText,
                    joinedUpcoming.includes(upcomingChallenge.id) && styles.joinNowTextJoined
                  ]}>
                    {joinedUpcoming.includes(upcomingChallenge.id) ? '✓ Joined' : 'Join Now'}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.daysLeftText}>⏱ {upcomingChallenge.daysLeft}</Text>
              </View>
            </View>

            {/* Premium Tournament in Upcoming */}
            <View style={styles.premiumTournamentCard}>
              <View style={styles.upcomingContent}>
                <Text style={styles.premiumIcon}>{premiumTournament.icon}</Text>
                <View style={styles.upcomingInfo}>
                  <View style={styles.premiumTitleRow}>
                    <Text style={styles.premiumTournamentTitle}>{premiumTournament.title}</Text>
                  </View>
                  <Text style={styles.premiumPrize}>{premiumTournament.prize}</Text>
                  <Text style={styles.upcomingDetails}>
                    +{premiumTournament.xp} XP • Starts in {premiumTournament.startTime}
                  </Text>
                  <View style={styles.participantsRow}>
                    {premiumTournament.participants.map((participant, idx) => (
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
                <TouchableOpacity 
                  style={[
                    styles.premiumJoinButton,
                    joinedUpcoming.includes(premiumTournament.id) && styles.premiumJoinButtonJoined
                  ]}
                  onPress={() => handleJoinUpcoming(premiumTournament.id)}
                >
                  <Text style={[
                    styles.joinNowText,
                    joinedUpcoming.includes(premiumTournament.id) && styles.premiumJoinTextJoined
                  ]}>
                    {joinedUpcoming.includes(premiumTournament.id) ? '✓ Joined' : 'Join Now'}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.daysLeftText}>⏱ {premiumTournament.daysLeft}</Text>
              </View>
            </View>
          </View>
        )}

        {/* History Tab */}
        {activeTab === 'History' && (
          <View style={styles.historySection}>
            <View style={styles.emptyStateContainer}>
              <Text style={styles.emptyStateIcon}>📜</Text>
              <Text style={styles.emptyStateTitle}>No Battle History Yet</Text>
              <Text style={styles.emptyStateText}>Join battles to see your history here</Text>
            </View>
          </View>
        )}

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

          {/* Login Modal */}
          <Modal
            visible={showLoginModal}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setShowLoginModal(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Login to Ground Play</Text>
                <Text style={styles.modalSubtitle}>Join live battles and compete with teams!</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="#666"
                  value={username}
                  onChangeText={setUsername}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Team Code (e.g., TEAM-A-001)"
                  placeholderTextColor="#666"
                  value={teamCode}
                  onChangeText={setTeamCode}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#666"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />

                <TouchableOpacity 
                  style={styles.loginButton}
                  onPress={() => handleGroundPlayLogin(false)}
                >
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.divider}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>OR</Text>
                  <View style={styles.dividerLine} />
                </View>

                <TouchableOpacity 
                  style={styles.guestButton}
                  onPress={() => handleGroundPlayLogin(true)}
                >
                  <Text style={styles.guestButtonText}>Continue as Guest</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.closeButton}
                  onPress={() => setShowLoginModal(false)}
                >
                  <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

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
  viewBattleButtonJoined: {
    backgroundColor: 'rgba(79, 255, 176, 0.15)',
    borderColor: 'rgba(79, 255, 176, 0.3)',
  },
  viewBattleTextJoined: {
    color: '#4FFFB0',
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
  joinNowButtonJoined: {
    backgroundColor: 'rgba(79, 255, 176, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.4)',
  },
  joinNowTextJoined: {
    color: '#4FFFB0',
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

  // Premium styles
  battleFrameWrapper: {
    marginBottom: 16,
  },
  premiumEntryBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.4)',
    zIndex: 10,
  },
  premiumEntryText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFD700',
    textShadowColor: 'rgba(255, 215, 0, 0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
  premiumTournamentCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 215, 0, 0.4)',
    shadowColor: '#FFD700',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  premiumIcon: {
    fontSize: 48,
    marginRight: 16,
    textShadowColor: 'rgba(255, 215, 0, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  premiumTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  premiumTournamentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
    textShadowColor: 'rgba(255, 215, 0, 0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  premiumPrize: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFA500',
    marginBottom: 4,
  },
  premiumJoinButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 14,
    marginBottom: 8,
    shadowColor: '#FFD700',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  premiumJoinButtonJoined: {
    backgroundColor: 'rgba(79, 255, 176, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.4)',
    shadowColor: '#4FFFB0',
  },
  premiumJoinTextJoined: {
    color: '#4FFFB0',
  },
  premiumOnlyText: {
    fontSize: 11,
    color: '#FFD700',
    marginTop: 6,
    fontWeight: '600',
    textAlign: 'center',
  },
  historySection: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateContainer: {
    alignItems: 'center',
  },
  emptyStateIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#A0A0A0',
    textAlign: 'center',
  },

  // Ground Play styles
  groundPlayLoginContainer: {
    backgroundColor: '#1A1A2E',
    borderRadius: 24,
    padding: 40,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(91, 159, 255, 0.4)',
    marginBottom: 20,
  },
  groundPlayIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  groundPlayTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 8,
  },
  groundPlaySubtitle: {
    fontSize: 14,
    color: '#A0A0A0',
    textAlign: 'center',
    marginBottom: 24,
  },
  groundPlayLoginButton: {
    backgroundColor: '#5B9FFF',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 16,
    shadowColor: '#5B9FFF',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  groundPlayLoginText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  groundPlayBattleCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  premiumBattleCard: {
    borderColor: 'rgba(255, 215, 0, 0.5)',
    borderWidth: 2,
  },
  premiumBattleFrame: {
    borderRadius: 24,
    padding: 4,
    marginBottom: 16,
    shadowColor: '#FFD700',
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 10,
  },
  countdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  countdownIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  countdownText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
  },
  progressContainer: {
    marginBottom: 8,
    width: '100%',
  },
  progressLabel: {
    fontSize: 12,
    color: '#A0A0A0',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  progressValue: {
    fontSize: 12,
    color: THEME.colors.textPrimary,
    fontWeight: '600',
    marginTop: 4,
  },
  progressFillIndigo: {
    height: '100%',
    backgroundColor: '#5B9FFF',
    borderRadius: 3,
  },
  progressFillEmerald: {
    height: '100%',
    backgroundColor: '#10B981',
    borderRadius: 3,
  },
  participateButton: {
    backgroundColor: 'rgba(91, 159, 255, 0.2)',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.4)',
    marginTop: 12,
  },
  participateButtonText: {
    color: '#5B9FFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  participatedButton: {
    backgroundColor: 'rgba(79, 255, 176, 0.2)',
    borderColor: 'rgba(79, 255, 176, 0.4)',
  },
  participatedButtonText: {
    color: '#4FFFB0',
  },
  userContributionCard: {
    backgroundColor: 'rgba(91, 159, 255, 0.1)',
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  premiumUserContribution: {
    backgroundColor: 'rgba(255, 215, 0, 0.15)',
    borderColor: 'rgba(255, 215, 0, 0.5)',
    borderWidth: 2,
    shadowColor: '#FFD700',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  goldBadge: {
    position: 'absolute',
    top: -8,
    right: 12,
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  goldBadgeText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
  },
  contributionUsername: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 12,
  },
  contributionStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contributionStat: {
    alignItems: 'center',
  },
  contributionLabel: {
    fontSize: 11,
    color: '#A0A0A0',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  contributionValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5B9FFF',
  },
  contributionValueEmerald: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10B981',
  },
  doubleRewardText: {
    fontSize: 12,
    color: '#FFD700',
    textAlign: 'center',
    marginTop: 12,
    fontWeight: '600',
  },
  groundPlayLeaderboard: {
    marginTop: 24,
    marginBottom: 20,
  },
  leaderboardSubtitle: {
    fontSize: 12,
    color: '#A0A0A0',
    textAlign: 'center',
    marginBottom: 16,
  },
  premiumLeaderboardItem: {
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    borderLeftWidth: 3,
    borderLeftColor: '#FFD700',
  },
  premiumTeamName: {
    color: '#FFD700',
  },
  leaderboardXpPoints: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  leaderboardPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10B981',
    marginLeft: 12,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#1A1A2E',
    borderRadius: 24,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    borderWidth: 2,
    borderColor: 'rgba(91, 159, 255, 0.4)',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    textAlign: 'center',
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#A0A0A0',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#0A0A1F',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    fontSize: 15,
    color: THEME.colors.textPrimary,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.2)',
  },
  loginButton: {
    backgroundColor: '#5B9FFF',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#5B9FFF',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  loginButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  dividerText: {
    fontSize: 12,
    color: '#666',
    marginHorizontal: 12,
  },
  guestButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  guestButtonText: {
    color: THEME.colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: THEME.colors.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
