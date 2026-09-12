import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../constants/theme';

export default function SettingsScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [autoSyncEnabled, setAutoSyncEnabled] = useState(true);

  const SettingItem = ({ icon, title, type, value, onValueChange, onPress }) => {
    return (
      <TouchableOpacity 
        style={styles.settingItem}
        onPress={onPress}
        disabled={type === 'switch'}
      >
        <View style={styles.settingLeft}>
          <Text style={styles.settingIcon}>{icon}</Text>
          <Text style={styles.settingTitle}>{title}</Text>
        </View>
        {type === 'switch' ? (
          <Switch
            value={value}
            onValueChange={onValueChange}
            trackColor={{ false: '#3A3A3A', true: '#4FFFB0' }}
            thumbColor={value ? '#FFFFFF' : '#A0A0A0'}
          />
        ) : (
          <Text style={styles.settingArrow}>›</Text>
        )}
      </TouchableOpacity>
    );
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
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.logo}>VYBE</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Title */}
        <Text style={styles.title}>Settings</Text>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACCOUNT</Text>
          <View style={styles.sectionContent}>
            <SettingItem
              icon="👤"
              title="Edit Profile"
              type="navigation"
              onPress={() => {}}
            />
            <SettingItem
              icon="🔒"
              title="Privacy & Security"
              type="navigation"
              onPress={() => {}}
            />
            <SettingItem
              icon="🔗"
              title="Connected Apps"
              type="navigation"
              onPress={() => {}}
            />
          </View>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PREFERENCES</Text>
          <View style={styles.sectionContent}>
            <SettingItem
              icon="🔔"
              title="Notifications"
              type="switch"
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
            <SettingItem
              icon="🌙"
              title="Dark Mode"
              type="switch"
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
            />
            <SettingItem
              icon="🔊"
              title="Sound Effects"
              type="switch"
              value={soundEnabled}
              onValueChange={setSoundEnabled}
            />
            <SettingItem
              icon="🔄"
              title="Auto-Sync"
              type="switch"
              value={autoSyncEnabled}
              onValueChange={setAutoSyncEnabled}
            />
          </View>
        </View>

        {/* Fitness Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FITNESS</Text>
          <View style={styles.sectionContent}>
            <SettingItem
              icon="🎯"
              title="Difficulty Level"
              type="navigation"
              onPress={() => {}}
            />
            <SettingItem
              icon="📊"
              title="Goals & Targets"
              type="navigation"
              onPress={() => {}}
            />
            <SettingItem
              icon="⚡"
              title="Activity Tracking"
              type="navigation"
              onPress={() => {}}
            />
          </View>
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SUPPORT</Text>
          <View style={styles.sectionContent}>
            <SettingItem
              icon="❓"
              title="Help & FAQ"
              type="navigation"
              onPress={() => {}}
            />
            <SettingItem
              icon="💬"
              title="Contact Support"
              type="navigation"
              onPress={() => {}}
            />
            <SettingItem
              icon="📖"
              title="About VYBE"
              type="navigation"
              onPress={() => {}}
            />
          </View>
        </View>

        {/* Danger Zone */}
        <View style={styles.section}>
          <View style={styles.sectionContent}>
            <TouchableOpacity 
              style={styles.dangerButton}
              onPress={() => {}}
            >
              <Text style={styles.dangerButtonText}>🚪 Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.dangerButton, styles.deleteButton]}
              onPress={() => {}}
            >
              <Text style={styles.deleteButtonText}>🗑️ Delete Account</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Version Info */}
        <Text style={styles.versionText}>VYBE v1.0.0</Text>

        <View style={styles.bottomSpacing} />
          </ScrollView>
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
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: THEME.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: THEME.colors.primary,
  },
  backButtonText: {
    fontSize: 32,
    color: THEME.colors.textPrimary,
    marginTop: -4,
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
  placeholder: {
    width: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    textAlign: 'center',
    marginVertical: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    letterSpacing: 1.5,
    marginLeft: 20,
    marginBottom: 8,
  },
  sectionContent: {
    backgroundColor: '#1A1A1A',
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    fontSize: 24,
    marginRight: 12,
    width: 32,
  },
  settingTitle: {
    fontSize: 16,
    color: THEME.colors.textPrimary,
    fontWeight: '500',
  },
  settingArrow: {
    fontSize: 24,
    color: '#666',
  },
  dangerButton: {
    backgroundColor: 'rgba(255, 59, 48, 0.15)',
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  dangerButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF3B30',
  },
  deleteButton: {
    backgroundColor: 'rgba(255, 59, 48, 0.25)',
    borderBottomWidth: 0,
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF3B30',
  },
  versionText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  bottomSpacing: {
    height: 40,
  },
});
