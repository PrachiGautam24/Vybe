import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Switch,
  Dimensions,
  Platform,
} from 'react-native';
import { THEME } from '../constants/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const MOBILE_WIDTH = 430; // iPhone 14 Pro Max width
const isWeb = Platform.OS === 'web';
const drawerWidth = isWeb ? Math.min(SCREEN_WIDTH, MOBILE_WIDTH) : SCREEN_WIDTH;

export default function ProfileDrawer({ visible, onClose, navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const userLevel = 6;
  const levelTitle = 'Fitness Pro';
  const currentXP = 1820;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.overlay} 
        activeOpacity={1} 
        onPress={onClose}
      >
        <View style={styles.drawer}>
          <TouchableOpacity activeOpacity={1}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Profile Drawer</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Profile Section */}
            <View style={styles.profileSection}>
              <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>👤</Text>
                </View>
                <View style={styles.levelBadge}>
                  <Text style={styles.levelBadgeText}>6</Text>
                </View>
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.levelText}>Level {userLevel}</Text>
                <Text style={styles.levelTitle}>{levelTitle}</Text>
              </View>
            </View>

            {/* XP Section */}
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                onClose();
                navigation.navigate('Rewards', { tab: 'Badges' });
              }}
            >
              <Text style={styles.menuIcon}>💎</Text>
              <Text style={styles.menuText}>{currentXP.toLocaleString()} XP</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>

            {/* Badges Earned */}
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                onClose();
                navigation.navigate('Rewards', { tab: 'Badges' });
              }}
            >
              <Text style={styles.menuIcon}>🏆</Text>
              <Text style={styles.menuText}>Badges Earned</Text>
              <View style={styles.badgeCount}>
                <Text style={styles.badgeCountText}>6</Text>
              </View>
            </TouchableOpacity>

            {/* Streak Shield */}
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                onClose();
                navigation.navigate('Streak');
              }}
            >
              <Text style={styles.menuIcon}>🛡️</Text>
              <Text style={styles.menuText}>Streak Shield</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>

            {/* Difficulty */}
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                onClose();
                navigation.navigate('Settings');
              }}
            >
              <Text style={styles.menuIcon}>🎯</Text>
              <Text style={styles.menuText}>Difficulty: Intermediate</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>

            {/* Notifications */}
            <View style={styles.menuItem}>
              <Text style={styles.menuIcon}>🔔</Text>
              <Text style={styles.menuText}>Notifications</Text>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#3A3A3A', true: '#4FFFB0' }}
                thumbColor={notificationsEnabled ? '#FFFFFF' : '#A0A0A0'}
              />
            </View>

            {/* Settings */}
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => {
                onClose();
                navigation.navigate('Settings');
              }}
            >
              <Text style={styles.menuIcon}>⚙️</Text>
              <Text style={styles.menuText}>Settings</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>

            {/* Logout */}
            <TouchableOpacity 
              style={[styles.menuItem, styles.logoutItem]}
              onPress={() => {
                onClose();
                navigation.navigate('Login');
              }}
            >
              <Text style={styles.menuIcon}>🚪</Text>
              <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  drawer: {
    backgroundColor: '#1A1A1A',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 40,
    borderWidth: 2,
    borderColor: 'rgba(91, 159, 255, 0.3)',
    shadowColor: '#5B9FFF',
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    width: drawerWidth,
    maxWidth: MOBILE_WIDTH,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },

  // Profile
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(91, 159, 255, 0.1)',
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#5B9FFF',
  },
  avatarText: {
    fontSize: 40,
  },
  levelBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFB84D',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#1A1A1A',
  },
  levelBadgeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  profileInfo: {
    flex: 1,
  },
  levelText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  levelTitle: {
    fontSize: 16,
    color: '#A0A0A0',
  },

  // Menu Items
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 16,
    width: 32,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  menuArrow: {
    fontSize: 24,
    color: '#A0A0A0',
  },
  badgeCount: {
    backgroundColor: '#FFB84D',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeCountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  logoutItem: {
    marginTop: 8,
    borderBottomWidth: 0,
  },
  logoutText: {
    color: '#FF3B30',
  },
});
