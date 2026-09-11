import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../context/AuthContext';
import COLORS from '../constants/colors';
import SIZES from '../constants/sizes';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await logout();
            } catch (error) {
              Alert.alert('Error', 'Failed to logout');
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Your MERN App!</Text>
        <Text style={styles.subtitle}>React Native Frontend</Text>
        
        {user && (
          <View style={styles.userInfo}>
            <Text style={styles.welcomeText}>Hello, {user.name || 'User'}!</Text>
            <Text style={styles.emailText}>{user.email}</Text>
          </View>
        )}
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => Alert.alert('Info', 'Start building your app features here!')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.logoutButton]}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.lg,
  },
  title: {
    fontSize: SIZES.fontTitle,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: SIZES.xs,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: SIZES.fontMd,
    color: COLORS.textSecondary,
    marginBottom: SIZES.xl,
    textAlign: 'center',
  },
  userInfo: {
    backgroundColor: COLORS.white,
    padding: SIZES.lg,
    borderRadius: SIZES.radiusMd,
    marginBottom: SIZES.xl,
    width: '100%',
    alignItems: 'center',
    elevation: 2,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  welcomeText: {
    fontSize: SIZES.fontLg,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SIZES.xs,
  },
  emailText: {
    fontSize: SIZES.fontSm,
    color: COLORS.textSecondary,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.xl,
    paddingVertical: SIZES.md,
    borderRadius: SIZES.radiusMd,
    width: '100%',
    alignItems: 'center',
    marginBottom: SIZES.md,
    elevation: 3,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logoutButton: {
    backgroundColor: COLORS.error,
  },
  buttonText: {
    color: COLORS.textOnPrimary,
    fontSize: SIZES.fontMd,
    fontWeight: '600',
  },
});
