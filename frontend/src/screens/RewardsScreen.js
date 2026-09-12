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

export default function RewardsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Badges');
  const [storeCategory, setStoreCategory] = useState('All');
  
  // Dual currency system
  const userXP = 12450; // Non-spendable, for badges
  const userPoints = 850; // Spendable, for store items

  // Badges with XP thresholds
  const badges = [
    { id: 1, name: 'Fire Starter', icon: '🔥', xpRequired: 500, currentXP: 12450, unlocked: true, description: '7-day streak', unlockedDate: 'Jan 15, 2026' },
    { id: 2, name: 'Marathon King', icon: '👑', xpRequired: 1000, currentXP: 12450, unlocked: true, description: 'Completed 10 runs', unlockedDate: 'Jan 18, 2026' },
    { id: 3, name: 'Early Bird', icon: '🌅', xpRequired: 300, currentXP: 12450, unlocked: true, description: '10 morning workouts', unlockedDate: 'Jan 10, 2026' },
    { id: 4, name: 'Night Owl', icon: '🦉', xpRequired: 15000, currentXP: 12450, unlocked: false, description: '5 late workouts' },
    { id: 5, name: 'Social Butterfly', icon: '🦋', xpRequired: 400, currentXP: 12450, unlocked: true, description: 'Join 20 events', unlockedDate: 'Jan 12, 2026' },
    { id: 6, name: 'Champion', icon: '🏆', xpRequired: 20000, currentXP: 12450, unlocked: false, description: 'Win 5 battles' },
    { id: 7, name: 'Consistency Master', icon: '⭐', xpRequired: 25000, currentXP: 12450, unlocked: false, description: '30-day streak' },
    { id: 8, name: 'Distance Crusher', icon: '🚀', xpRequired: 18000, currentXP: 12450, unlocked: false, description: 'Run 100 km total' },
  ];

  // Store Items - cost in Points (spendable)
  const storeItems = [
    { id: 1, name: '₹100 Amazon Voucher', icon: '🛍️', pointsCost: 200, description: 'Amazon gift card', category: 'Amazon' },
    { id: 2, name: '₹200 Amazon Voucher', icon: '🛒', pointsCost: 380, description: 'Amazon gift card', category: 'Amazon' },
    { id: 3, name: '₹500 Amazon Voucher', icon: '🎁', pointsCost: 900, description: 'Amazon gift card', category: 'Amazon' },
    { id: 4, name: '₹50 Blinkit Credit', icon: '🥬', pointsCost: 100, description: 'Grocery delivery', category: 'Blinkit' },
    { id: 5, name: '₹100 Blinkit Credit', icon: '🛵', pointsCost: 190, description: 'Grocery delivery', category: 'Blinkit' },
    { id: 6, name: '₹200 Blinkit Credit', icon: '🥗', pointsCost: 360, description: 'Grocery delivery', category: 'Blinkit' },
    { id: 7, name: 'Gym Day Pass', icon: '🏋️', pointsCost: 150, description: '1-day gym access', category: 'Fitness' },
    { id: 8, name: 'Protein Shake', icon: '🥤', pointsCost: 80, description: 'Post-workout shake', category: 'Food' },
    { id: 9, name: 'Yoga Mat', icon: '🧘', pointsCost: 450, description: 'Professional yoga mat', category: 'Gear' },
    { id: 10, name: 'Water Bottle', icon: '💧', pointsCost: 120, description: 'Insulated bottle', category: 'Gear' },
  ];

  // History - both badges unlocked (XP) and products redeemed (Points)
  const history = [
    { id: 1, type: 'product', item: '₹100 Amazon Voucher', icon: '🛍️', pointsSpent: 200, date: 'Sep 10, 2026' },
    { id: 2, type: 'badge', item: 'Marathon King', icon: '👑', xpReached: 1000, date: 'Sep 8, 2026' },
    { id: 3, type: 'product', item: '₹50 Blinkit Credit', icon: '🥬', pointsSpent: 100, date: 'Sep 5, 2026' },
    { id: 4, type: 'badge', item: 'Fire Starter', icon: '🔥', xpReached: 500, date: 'Sep 3, 2026' },
    { id: 5, type: 'product', item: 'Protein Shake', icon: '🥤', pointsSpent: 80, date: 'Sep 1, 2026' },
    { id: 6, type: 'badge', item: 'Social Butterfly', icon: '🦋', xpReached: 400, date: 'Aug 28, 2026' },
    { id: 7, type: 'badge', item: 'Early Bird', icon: '🌅', xpReached: 300, date: 'Aug 25, 2026' },
  ];

  const renderBadges = () => {
    const nextBadge = badges.find(b => !b.unlocked);
    const progressToNext = nextBadge ? (userXP / nextBadge.xpRequired) * 100 : 100;
    
    return (
      <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
        {/* XP Balance with next badge progress */}
        <View style={styles.xpBalanceCard}>
          <View style={styles.xpBalanceHeader}>
            <Text style={styles.xpBalanceLabel}>Your XP (Non-Spendable)</Text>
            <Text style={styles.xpBalanceValue}>{userXP.toLocaleString()} XP</Text>
          </View>
          {nextBadge && (
            <>
              <View style={styles.xpBalanceBar}>
                <View style={[styles.xpBalanceProgress, { width: `${Math.min(progressToNext, 100)}%` }]} />
              </View>
              <Text style={styles.xpBalanceSubtext}>
                {nextBadge.xpRequired - userXP} XP to unlock "{nextBadge.name}"
              </Text>
            </>
          )}
          {!nextBadge && (
            <Text style={styles.xpBalanceSubtext}>All badges unlocked! 🎉</Text>
          )}
        </View>

        {/* Badges Grid */}
        <Text style={styles.sectionTitle}>Badges & Achievements</Text>
        <View style={styles.badgesGrid}>
          {badges.map((badge) => {
            const progress = badge.unlocked ? 100 : Math.min((badge.currentXP / badge.xpRequired) * 100, 100);
            
            return (
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
                
                {/* XP Progress Bar */}
                <View style={styles.badgeProgressContainer}>
                  <View style={styles.badgeProgressBar}>
                    <View style={[styles.badgeProgressFill, { width: `${progress}%` }]} />
                  </View>
                  <Text style={[styles.badgeXPText, !badge.unlocked && styles.badgeXPLocked]}>
                    {badge.unlocked ? 'Unlocked!' : `${badge.currentXP}/${badge.xpRequired} XP`}
                  </Text>
                </View>
                
                {badge.unlocked && badge.unlockedDate && (
                  <Text style={styles.badgeUnlockedDate}>Unlocked: {badge.unlockedDate}</Text>
                )}
                
                {!badge.unlocked && (
                  <View style={styles.lockedOverlay}>
                    <Text style={styles.lockIcon}>🔒</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Quick Stats */}
        <View style={styles.quickStatsCard}>
          <View style={styles.quickStat}>
            <Text style={styles.quickStatValue}>{badges.filter(b => b.unlocked).length}</Text>
            <Text style={styles.quickStatLabel}>Badges Unlocked</Text>
          </View>
          <View style={styles.quickStatDivider} />
          <View style={styles.quickStat}>
            <Text style={styles.quickStatValue}>{userXP.toLocaleString()}</Text>
            <Text style={styles.quickStatLabel}>Total XP</Text>
          </View>
          <View style={styles.quickStatDivider} />
          <View style={styles.quickStat}>
            <Text style={styles.quickStatValue}>{badges.filter(b => !b.unlocked).length}</Text>
            <Text style={styles.quickStatLabel}>To Unlock</Text>
          </View>
        </View>
      </ScrollView>
    );
  };

  const renderStore = () => {
    const categories = ['All', 'Amazon', 'Blinkit', 'Fitness', 'Food', 'Gear'];
    const filteredItems = storeCategory === 'All' 
      ? storeItems 
      : storeItems.filter(item => item.category === storeCategory);

    return (
      <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
        {/* Points Balance Banner */}
        <View style={styles.storeBanner}>
          <Text style={styles.storeBannerText}>You have</Text>
          <Text style={styles.storeBannerXP}>{userPoints.toLocaleString()} Points</Text>
          <Text style={styles.storeBannerSubtext}>to spend on rewards</Text>
          <Text style={styles.storeBannerHint}>💡 Earn Points by completing activities!</Text>
        </View>

        {/* Category Filter */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryChip,
                storeCategory === category && styles.categoryChipActive
              ]}
              onPress={() => setStoreCategory(category)}
            >
              <Text style={[
                styles.categoryChipText,
                storeCategory === category && styles.categoryChipTextActive
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Store Grid */}
        <View style={styles.storeGrid}>
          {filteredItems.map((item) => {
            const canAfford = userPoints >= item.pointsCost;
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
                      {item.pointsCost} Points
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
                    <Text style={styles.storeLockText}>
                      Need {item.pointsCost - userPoints} more
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  };

  const renderHistory = () => (
    <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
      {/* Currency Overview */}
      <View style={styles.currencyOverviewCard}>
        <View style={styles.currencyItem}>
          <Text style={styles.currencyIcon}>⭐</Text>
          <View>
            <Text style={styles.currencyValue}>{userXP.toLocaleString()}</Text>
            <Text style={styles.currencyLabel}>Total XP</Text>
          </View>
        </View>
        <View style={styles.currencyDivider} />
        <View style={styles.currencyItem}>
          <Text style={styles.currencyIcon}>💎</Text>
          <View>
            <Text style={styles.currencyValue}>{userPoints}</Text>
            <Text style={styles.currencyLabel}>Points Available</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Activity History</Text>
      <View style={styles.timeline}>
        {history.map((item, index) => (
          <View key={item.id} style={styles.timelineItem}>
            <View style={styles.timelineIconContainer}>
              <View style={[
                styles.timelineIcon, 
                item.type === 'badge' ? styles.timelineIconBadge : styles.timelineIconProduct
              ]}>
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
                  {item.type === 'badge' ? (
                    <View style={styles.timelineXPEarned}>
                      <Text style={styles.timelineXPEarnedText}>Badge Unlocked at {item.xpReached} XP</Text>
                      <View style={styles.timelineBadge}>
                        <Text style={styles.timelineBadgeText}>Achievement</Text>
                      </View>
                    </View>
                  ) : (
                    <View style={styles.timelineXPSpent}>
                      <Text style={styles.timelineXPSpentText}>-{item.pointsSpent} Points</Text>
                      <View style={styles.timelineRedeemed}>
                        <Text style={styles.timelineRedeemedText}>Redeemed</Text>
                      </View>
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
            <VybeLogo width={80} height={28} />
            <Text style={styles.headerTitle}>Rewards</Text>
          </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {['Badges', 'Store', 'History'].map((tab) => (
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
      {activeTab === 'Badges' && renderBadges()}
      {activeTab === 'Store' && renderStore()}
      {activeTab === 'History' && renderHistory()}

      <View style={styles.bottomSpacing} />
        </SafeAreaView>

      {/* Bottom Navigation */}
      <BottomNavBar navigation={navigation} activeTab="Rewards" />
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
  badgeProgressContainer: {
    width: '100%',
    marginTop: 8,
  },
  badgeProgressBar: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
    marginBottom: 6,
  },
  badgeProgressFill: {
    height: '100%',
    backgroundColor: '#4FFFB0',
    borderRadius: 3,
  },
  badgeXP: {
    backgroundColor: 'rgba(79, 255, 176, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeXPText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#4FFFB0',
    textAlign: 'center',
  },
  badgeXPLocked: {
    color: '#666',
  },
  badgeUnlockedDate: {
    fontSize: 10,
    color: '#4FFFB0',
    marginTop: 6,
    fontStyle: 'italic',
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
  storeBannerHint: {
    fontSize: 12,
    color: '#FFB84D',
    marginTop: 8,
    fontStyle: 'italic',
  },

  // Category Filter
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  categoryChip: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  categoryChipActive: {
    backgroundColor: 'rgba(91, 159, 255, 0.2)',
    borderColor: '#5B9FFF',
  },
  categoryChipText: {
    fontSize: 13,
    color: '#A0A0A0',
    fontWeight: '500',
  },
  categoryChipTextActive: {
    color: '#5B9FFF',
    fontWeight: 'bold',
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
    alignItems: 'center',
  },
  storeLockIcon: {
    fontSize: 16,
  },
  storeLockText: {
    fontSize: 9,
    color: '#666',
    marginTop: 2,
  },

  // History Timeline
  currencyOverviewCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  currencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  currencyIcon: {
    fontSize: 32,
  },
  currencyValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  currencyLabel: {
    fontSize: 11,
    color: '#A0A0A0',
  },
  currencyDivider: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },

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
  timelineIconBadge: {
    borderColor: '#FFB84D',
    backgroundColor: 'rgba(255, 184, 77, 0.15)',
  },
  timelineIconProduct: {
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
  timelineRedeemed: {
    backgroundColor: 'rgba(91, 159, 255, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  timelineRedeemedText: {
    fontSize: 11,
    color: '#5B9FFF',
    fontWeight: 'bold',
  },
  timelineXPEarned: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  timelineXPEarnedText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFB84D',
    marginBottom: 4,
  },
  timelineBadge: {
    backgroundColor: 'rgba(255, 184, 77, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  timelineBadgeText: {
    fontSize: 11,
    color: '#FFB84D',
    fontWeight: 'bold',
  },

  bottomSpacing: {
    height: 80,
  },
});

