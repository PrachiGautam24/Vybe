import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import { THEME } from '../constants/theme';

export default function ProfileDrawer({ visible, onClose, userData }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} onPress={onClose} />
        <View style={styles.drawer}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Profile</Text>
          </View>

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Profile Avatar and Level */}
            <View style={styles.profileSection}>
              <View style={styles.avatarContainer}>
                <Text style={styles.avatar}>👤</Text>
              </View>
              <Text style={styles.userName}>{userData?.name || 'Divyansh'}</Text>
              <View style={styles.levelBadge}>
                <Text style={styles.levelText}>Level 6</Text>
                <Text style={styles.levelSubtext}>Fitness Pro</Text>
              </View>
            </View>

            {/* XP Progress */}
            <View style={styles.xpSection}>
              <View style={styles.xpRow}>
                <Text style={styles.xpIcon}>⚡</Text>
                <Text style={styles.xpText}>1,820 XP</Text>
              </View>
              <View style={styles.xpBar}>
                <View style={[styles.xpFill, { width: '72%' }]} />
              </View>
              <Text style={styles.xpSubtext}>180 XP to next level</Text>
            </View>

            {/* Stats Grid */}
            <View style={styles.statsGrid}>
              <View style={styles.statCard}>
                <Text style={styles.statIcon}>🏆</Text>
                <Text style={styles.statValue}>12</Text>
                <Text style={styles.statLabel}>Badges Earned</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statIcon}>🛡️</Text>
                <Text style={styles.statValue}>17</Text>
                <Text style={styles.statLabel}>Streak Shield</Text>
              </View>
            </View>

            {/* Difficulty Level */}
            <View style={styles.menuItem}>
              <Text style={styles.menuIcon}>🎯</Text>
              <View style={styles.menuContent}>
                <Text style={styles.menuLabel}>Difficulty</Text>
                <Text style={styles.menuValue}>Intermediate</Text>
              </View>
              <Text style={styles.menuArrow}>›</Text>
            </View>

            {/* Notifications Toggle */}
            <View style={styles.menuItem}>
              <Text style={styles.menuIcon}>🔔</Text>
              <View style={styles.menuContent}>
                <Text style={styles.menuLabel}>Notifications</Text>
              </View>
              <View style={styles.toggleContainer}>
                <View style={[styles.toggle, styles.toggleActive]}>
                  <View style={styles.toggleThumb} />
                </View>
              </View>
            </View>

            {/* Leaderboard Button */}
            <TouchableOpacity style={styles.leaderboardButton}>
              <Text style={styles.leaderboardIcon}>🏆</Text>
              <Text style={styles.leaderboardText}>View Leaderboards</Text>
              <Text style={styles.leaderboardArrow}>›</Text>
            </TouchableOpacity>

            {/* Leaderboard Options */}
            <View style={styles.leaderboardOptions}>
              <TouchableOpacity style={styles.leaderboardOption}>
                <Text style={styles.leaderboardOptionIcon}>👥</Text>
                <Text style={styles.leaderboardOptionText}>Team vs Team</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.leaderboardOption}>
                <Text style={styles.leaderboardOptionIcon}>⚡</Text>
                <Text style={styles.leaderboardOptionText}>XP Leaderboards</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  drawer: {
    width: '85%',
    height: '100%',
    backgroundColor: THEME.colors.background,
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(255, 255, 255, 0.1)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: THEME.spacing.base,
    paddingBottom: THEME.spacing.base,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: THEME.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: THEME.spacing.md,
  },
  closeIcon: {
    fontSize: 20,
    color: THEME.colors.textPrimary,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
  },
  content: {
    flex: 1,
    padding: THEME.spacing.base,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: THEME.spacing.xl,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: THEME.colors.surface,
    borderWidth: 3,
    borderColor: THEME.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: THEME.spacing.md,
    shadowColor: THEME.colors.primary,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  avatar: {
    fontSize: 48,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: THEME.spacing.sm,
  },
  levelBadge: {
    backgroundColor: THEME.colors.surface,
    paddingHorizontal: THEME.spacing.base,
    paddingVertical: THEME.spacing.sm,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.3)',
  },
  levelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.colors.primary,
    textAlign: 'center',
  },
  levelSubtext: {
    fontSize: 12,
    color: THEME.colors.textSecondary,
    textAlign: 'center',
  },
  xpSection: {
    backgroundColor: THEME.colors.surface,
    padding: THEME.spacing.base,
    borderRadius: 16,
    marginBottom: THEME.spacing.base,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  xpRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: THEME.spacing.sm,
  },
  xpIcon: {
    fontSize: 24,
    marginRight: THEME.spacing.sm,
  },
  xpText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
  },
  xpBar: {
    height: 8,
    backgroundColor: 'rgba(91, 159, 255, 0.2)',
    borderRadius: 4,
    marginBottom: THEME.spacing.xs,
    overflow: 'hidden',
  },
  xpFill: {
    height: '100%',
    backgroundColor: THEME.colors.secondary,
    borderRadius: 4,
  },
  xpSubtext: {
    fontSize: 12,
    color: THEME.colors.textSecondary,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: THEME.spacing.md,
    marginBottom: THEME.spacing.base,
  },
  statCard: {
    flex: 1,
    backgroundColor: THEME.colors.surface,
    padding: THEME.spacing.base,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 184, 77, 0.3)',
  },
  statIcon: {
    fontSize: 32,
    marginBottom: THEME.spacing.xs,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: THEME.spacing.xs,
  },
  statLabel: {
    fontSize: 11,
    color: THEME.colors.textSecondary,
    textAlign: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.colors.surface,
    padding: THEME.spacing.base,
    borderRadius: 12,
    marginBottom: THEME.spacing.sm,
  },
  menuIcon: {
    fontSize: 24,
    marginRight: THEME.spacing.md,
  },
  menuContent: {
    flex: 1,
  },
  menuLabel: {
    fontSize: 16,
    color: THEME.colors.textPrimary,
    fontWeight: '500',
  },
  menuValue: {
    fontSize: 14,
    color: THEME.colors.textSecondary,
    marginTop: 2,
  },
  menuArrow: {
    fontSize: 24,
    color: THEME.colors.textSecondary,
  },
  toggleContainer: {
    marginLeft: THEME.spacing.sm,
  },
  toggle: {
    width: 50,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 2,
    justifyContent: 'center',
  },
  toggleActive: {
    backgroundColor: THEME.colors.primary,
    alignItems: 'flex-end',
  },
  toggleThumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: THEME.colors.background,
  },
  leaderboardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(79, 255, 176, 0.15)',
    padding: THEME.spacing.base,
    borderRadius: 12,
    marginTop: THEME.spacing.base,
    marginBottom: THEME.spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.3)',
  },
  leaderboardIcon: {
    fontSize: 24,
    marginRight: THEME.spacing.md,
  },
  leaderboardText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: THEME.colors.primary,
  },
  leaderboardArrow: {
    fontSize: 24,
    color: THEME.colors.primary,
  },
  leaderboardOptions: {
    marginBottom: THEME.spacing.xl,
  },
  leaderboardOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.colors.surface,
    padding: THEME.spacing.base,
    borderRadius: 12,
    marginBottom: THEME.spacing.sm,
  },
  leaderboardOptionIcon: {
    fontSize: 20,
    marginRight: THEME.spacing.md,
  },
  leaderboardOptionText: {
    fontSize: 15,
    color: THEME.colors.textPrimary,
    fontWeight: '500',
  },
});
