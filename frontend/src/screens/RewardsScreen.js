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

export default function RewardsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('My Rewards');
  const userXP = 12450;

  // Badges & Achievements
  const badges = [
    { id: 1, name: 'Fire Starter', icon: '🔥', xp: 500, unlocked: true, description: '7-day streak' },
    { id: 2, name: 'Marathon King', icon: '👑', xp: 1000, unlocked: true, description: 'Completed 10 runs' },
    { id: 3, name: 'Early Bird', icon: '🌅', xp: 300, unlocked: true, description: '10 morning workouts' },
    { id: 4, name: 'Night Owl', icon: '🦉', xp: 200, unlocked: false, description: '5 late workouts' },
    { id: 5, name: 'Social Butterfly', icon: '🦋', xp: 400, unlocked: true, description: 'Join 20 events' },
    { id: 6, name: 'Champion', icon: '🏆', xp: 2000, unlocked: false, description: 'Win 5 battles' },
  ];

  // Streak Bonuses
  const streakBonus = {
    currentStreak: 17,
    nextMilestone: 30,
    reward: '500 XP',
    daysLeft: 13,
  };

  // Store Items
  const storeItems = [
    { id: 1, name: 'Free Coffee', icon: '☕', xpCost: 1000, description: 'At partner cafes', category: 'Food' },
    { id: 2, name: 'Gym Day Pass', icon: '🏋️', xpCost: 2500, description: '1-day gym access', category: 'Fitness' },
    { id: 3, name: 'Protein Shake', icon: '🥤', xpCost: 800, description: 'Post-workout shake', category: 'Food' },
    { id: 4, name: 'Massage Session', icon: '💆', xpCost: 5000, description: '30-min massage', category: 'Wellness' },
    { id: 5, name: 'Sports Shoes', icon: '👟', xpCost: 15000, description: 'Premium running shoes', category: 'Gear' },
    { id: 6, name: 'Yoga Mat', icon: '🧘', xpCost: 3000, description: 'Professional yoga mat', category: 'Gear' },
    { id: 7, name: 'Water Bottle', icon: '💧', xpCost: 1500, description: 'Insulated bottle', category: 'Gear' },
    { id: 8, name: 'Energy Bar', icon: '🍫', xpCost: 500, description: 'Protein energy bar', category: 'Food' },
  ];

  // History Items
  const history = [
    { id: 1, item: 'Free Coffee', icon: '☕', xpSpent: 1000, date: 'Today', status: 'claimed' },
    { id: 2, item: 'Streak Bonus', icon: '🔥', xpEarned: 500, date: 'Yesterday', status: 'earned' },
    { id: 3, item: 'Protein Shake', icon: '🥤', xpSpent: 800, date: '2 days ago', status: 'claimed' },
    { id: 4, item: 'Marathon Badge', icon: '👑', xpEarned: 1000, date: '3 days ago', status: 'earned' },
    { id: 5, item: 'Gym Day Pass', icon: '🏋️', xpSpent: 2500, date: '1 week ago', status: 'claimed' },
  ];

  const renderMyRewards = () => (
    <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
      {/* XP Balance */}
      <View style={styles.xpBalanceCard}>
        <View style={styles.xpBalanceHeader}>
          <Text style={styles.xpBalanceLabel}>Your XP Balance</Text>
          <Text style={styles.xpBalanceValue}>{userXP.toLocaleString()} XP</Text>
        </View>
        <View style={styles.xpBalanceBar}>
          <View style={[styles.xpBalanceProgress, { width: '75%' }]} />
        </View>
        <Text style={styles.xpBalanceSubtext}>750 XP to next reward tier</Text>
      </View>

      {/* Streak Bonus */}
      <View style={styles.streakBonusCard}>
        <View style={styles.streakBonusLeft}>
          <Text style={styles.streakBonusIcon}>🔥</Text>
          <View style={styles.streakBonusInfo}>
            <Text style={styles.streakBonusTitle}>{streakBonus.currentStreak}-Day Streak!</Text>
            <Text style={styles.streakBonusSubtitle}>
              {streakBonus.daysLeft} days to {streakBonus.reward}
            </Text>
            <View style={styles.streakProgressBar}>
              <View style={[styles.streakProgressFill, { width: `${(streakBonus.currentStreak / streakBonus.nextMilestone) * 100}%` }]} />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.claimButton}>
          <Text style={styles.claimButtonText}>Claim</Text>
        </TouchableOpacity>
      </View>

      {/* Badges Grid */}
      <Text style={styles.sectionTitle}>Your Badges</Text>
      <View style={styles.badgesGrid}>
        {badges.map((badge) => (
          <TouchableOpacity 
            key={badge.id} 
            style={[styles.badgeCard, !badge.unlocked && styles.badgeCardLocked]}
          >
            <View style={[styles.badgeIconContainer, !badge.unlocked && styles.badgeIconLocked]}>
              <Text style={styles.badgeIcon}>{badge.icon}</Text>
            </View>
            <Text style={[styles.badgeName, !badge.unlocked && styles.badgeNameLocked]}>
              {badge.name}
            </Text>
            <Text style={styles.badgeDescription}>{badge.description}</Text>
            <View style={styles.badgeXP}>
              <Text style={[styles.badgeXPText, !badge.unlocked && styles.badgeXPLocked]}>
                +{badge.xp} XP
              </Text>
            </View>
            {!badge.unlocked && (
              <View style={styles.lockedOverlay}>
                <Text style={styles.lockIcon}>🔒</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Quick Stats */}
      <View style={styles.quickStatsCard}>
        <View style={styles.quickStat}>
          <Text style={styles.quickStatValue}>6</Text>
          <Text style={styles.quickStatLabel}>Badges Earned</Text>
        </View>
        <View style={styles.quickStatDivider} />
        <View style={styles.quickStat}>
          <Text style={styles.quickStatValue}>4</Text>
          <Text style={styles.quickStatLabel}>Rewards Claimed</Text>
        </View>
        <View style={styles.quickStatDivider} />
        <View style={styles.quickStat}>
          <Text style={styles.quickStatValue}>5.2k</Text>
          <Text style={styles.quickStatLabel}>XP Spent</Text>
        </View>
      </View>
    </ScrollView>
  );

  const renderStore = () => (
    <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
      {/* XP Balance Banner */}
      <View style={styles.storeBanner}>
        <Text style={styles.storeBannerText}>You have</Text>
        <Text style={styles.storeBannerXP}>{userXP.toLocaleString()} XP</Text>
        <Text style={styles.storeBannerSubtext}>to spend</Text>
      </View>

      {/* Store Grid */}
      <View style={styles.storeGrid}>
        {storeItems.map((item) => {
          const canAfford = userXP >= item.xpCost;
          return (
            <View key={item.id} style={[styles.storeItemCard, !canAfford && styles.storeItemCardDisabled]}>
              <View style={[styles.storeItemIconContainer, !canAfford && styles.storeItemIconDisabled]}>
                <Text style={styles.storeItemIcon}>{item.icon}</Text>
              </View>
              <Text style={[styles.storeItemName, !canAfford && styles.storeItemNameDisabled]}>
                {item.name}
              </Text>
              <Text style={styles.storeItemDescription}>{item.description}</Text>
              <View style={styles.storeItemFooter}>
                <View style={[styles.storeItemXP, !canAfford && styles.storeItemXPDisabled]}>
                  <Text style={[styles.storeItemXPText, !canAfford && styles.storeItemXPTextDisabled]}>
                    {item.xpCost.toLocaleString()} XP
                  </Text>
                </View>
                <TouchableOpacity 
                  style={[styles.redeemButton, !canAfford && styles.redeemButtonDisabled]}
                  disabled={!canAfford}
                >
                  <Text style={[styles.redeemButtonText, !canAfford && styles.redeemButtonTextDisabled]}>
                    {canAfford ? 'Redeem' : 'Locked'}
                  </Text>
                </TouchableOpacity>
              </View>
              {!canAfford && (
                <View style={styles.storeLockedOverlay}>
                  <Text style={styles.storeLockIcon}>🔒</Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );

  const renderHistory = () => (
    <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionTitle}>Reward History</Text>
      <View style={styles.timeline}>
        {history.map((item, index) => (
          <View key={item.id} style={styles.timelineItem}>
            <View style={styles.timelineIconContainer}>
              <View style={[styles.timelineIcon, item.status === 'earned' ? styles.timelineIconEarned : styles.timelineIconClaimed]}>
                <Text style={styles.timelineIconText}>{item.icon}</Text>
              </View>
              {index < history.length - 1 && <View style={styles.timelineLine} />}
            </View>
            <View style={styles.timelineContent}>
              <View style={styles.timelineCard}>
                <View style={styles.timelineHeader}>
                  <Text style={styles.timelineItemName}>{item.item}</Text>
                  <Text style={styles.timelineDate}>{item.date}</Text>
                </View>
                <View style={styles.timelineFooter}>
                  {item.status === 'claimed' ? (
                    <View style={styles.timelineXPSpent}>
                      <Text style={styles.timelineXPSpentText}>-{item.xpSpent} XP</Text>
                      <Text style={styles.timelineStatus}>Redeemed</Text>
                    </View>
                  ) : (
                    <View style={styles.timelineXPEarned}>
                      <Text style={styles.timelineXPEarnedText}>+{item.xpEarned} XP</Text>
                      <Text style={styles.timelineStatusEarned}>Earned</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );

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
            <Text style={styles.logo}>VYBE</Text>
            <Text style={styles.headerTitle}>Rewards</Text>
          </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {['My Rewards', 'Store', 'History'].map((tab) => (
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

      {/* Tab Content */}
      {activeTab === 'My Rewards' && renderMyRewards()}
      {activeTab === 'Store' && renderStore()}
      {activeTab === 'History' && renderHistory()}

      <View style={styles.bottomSpacing} />
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
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 2,
    marginBottom: 4,
    textShadowColor: 'rgba(91, 159, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  // Tabs
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  tabText: {
    fontSize: 15,
    color: '#666',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  tabIndicator: {
    height: 3,
    backgroundColor: '#FFB84D',
    borderRadius: 2,
    marginTop: 8,
  },

  tabContent: {
    flex: 1,
    paddingHorizontal: 16,
  },

  // XP Balance Card
  xpBalanceCard: {
    backgroundColor: 'rgba(255, 184, 77, 0.1)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 184, 77, 0.3)',
    shadowColor: '#FFB84D',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  xpBalanceHeader: {
    marginBottom: 12,
  },
  xpBalanceLabel: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 6,
  },
  xpBalanceValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFB84D',
  },
  xpBalanceBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    marginBottom: 8,
  },
  xpBalanceProgress: {
    height: '100%',
    backgroundColor: '#FFB84D',
    borderRadius: 4,
    shadowColor: '#FFB84D',
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  xpBalanceSubtext: {
    fontSize: 12,
    color: '#A0A0A0',
  },

  // Streak Bonus Card
  streakBonusCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 18,
    padding: 16,
    marginBottom: 24,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 107, 53, 0.3)',
  },
  streakBonusLeft: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  streakBonusIcon: {
    fontSize: 40,
    marginRight: 14,
  },
  streakBonusInfo: {
    flex: 1,
  },
  streakBonusTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  streakBonusSubtitle: {
    fontSize: 13,
    color: '#A0A0A0',
    marginBottom: 8,
  },
  streakProgressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
  },
  streakProgressFill: {
    height: '100%',
    backgroundColor: '#FF6B35',
    borderRadius: 3,
  },
  claimButton: {
    backgroundColor: '#4FFFB0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  claimButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },

  // Badges Grid
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  badgeCard: {
    width: '48%',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(79, 255, 176, 0.3)',
    position: 'relative',
  },
  badgeCardLocked: {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    opacity: 0.6,
  },
  badgeIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(79, 255, 176, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  badgeIconLocked: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  badgeIcon: {
    fontSize: 32,
  },
  badgeName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  badgeNameLocked: {
    color: '#666',
  },
  badgeDescription: {
    fontSize: 11,
    color: '#A0A0A0',
    textAlign: 'center',
    marginBottom: 8,
  },
  badgeXP: {
    backgroundColor: 'rgba(79, 255, 176, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeXPText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4FFFB0',
  },
  badgeXPLocked: {
    color: '#666',
  },
  lockedOverlay: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  lockIcon: {
    fontSize: 16,
  },

  // Quick Stats
  quickStatsCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  quickStat: {
    alignItems: 'center',
  },
  quickStatValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFB84D',
    marginBottom: 4,
  },
  quickStatLabel: {
    fontSize: 11,
    color: '#A0A0A0',
    textAlign: 'center',
  },
  quickStatDivider: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },

  // Store
  storeBanner: {
    backgroundColor: 'rgba(91, 159, 255, 0.1)',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  storeBannerText: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  storeBannerXP: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5B9FFF',
    marginVertical: 4,
  },
  storeBannerSubtext: {
    fontSize: 14,
    color: '#A0A0A0',
  },

  storeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  storeItemCard: {
    width: '48%',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'rgba(91, 159, 255, 0.3)',
    position: 'relative',
  },
  storeItemCardDisabled: {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    opacity: 0.5,
  },
  storeItemIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(91, 159, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    alignSelf: 'center',
  },
  storeItemIconDisabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  storeItemIcon: {
    fontSize: 28,
  },
  storeItemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  storeItemNameDisabled: {
    color: '#666',
  },
  storeItemDescription: {
    fontSize: 11,
    color: '#A0A0A0',
    textAlign: 'center',
    marginBottom: 10,
  },
  storeItemFooter: {
    alignItems: 'center',
  },
  storeItemXP: {
    backgroundColor: 'rgba(91, 159, 255, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 8,
  },
  storeItemXPDisabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  storeItemXPText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#5B9FFF',
  },
  storeItemXPTextDisabled: {
    color: '#666',
  },
  redeemButton: {
    backgroundColor: '#4FFFB0',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  redeemButtonDisabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  redeemButtonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  redeemButtonTextDisabled: {
    color: '#666',
  },
  storeLockedOverlay: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  storeLockIcon: {
    fontSize: 16,
  },

  // History Timeline
  timeline: {
    marginBottom: 20,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timelineIconContainer: {
    alignItems: 'center',
    marginRight: 14,
  },
  timelineIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#4FFFB0',
    backgroundColor: 'rgba(79, 255, 176, 0.15)',
  },
  timelineIconEarned: {
    borderColor: '#FFB84D',
    backgroundColor: 'rgba(255, 184, 77, 0.15)',
  },
  timelineIconClaimed: {
    borderColor: '#5B9FFF',
    backgroundColor: 'rgba(91, 159, 255, 0.15)',
  },
  timelineIconText: {
    fontSize: 24,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: 8,
  },
  timelineContent: {
    flex: 1,
  },
  timelineCard: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  timelineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  timelineItemName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  timelineDate: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  timelineFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timelineXPSpent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  timelineXPSpentText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5B9FFF',
  },
  timelineStatus: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  timelineXPEarned: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  timelineXPEarnedText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4FFFB0',
  },
  timelineStatusEarned: {
    fontSize: 12,
    color: '#A0A0A0',
  },

  bottomSpacing: {
    height: 80,
  },
});
