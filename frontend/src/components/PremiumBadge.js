import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * Premium Badge Component
 * Displays a circular gold glowing badge with crown symbol
 */
export default function PremiumBadge({ size = 'medium', style }) {
  const sizeStyles = {
    small: { container: 32, icon: 16, glow: 40 },
    medium: { container: 48, icon: 24, glow: 60 },
    large: { container: 64, icon: 32, glow: 80 },
  };

  const dimensions = sizeStyles[size] || sizeStyles.medium;

  return (
    <View style={[styles.container, style]}>
      {/* Glow effect */}
      <View style={[styles.glowContainer, { width: dimensions.glow, height: dimensions.glow }]}>
        <LinearGradient
          colors={['rgba(255, 215, 0, 0.3)', 'rgba(255, 215, 0, 0)', 'transparent']}
          style={styles.glow}
        />
      </View>
      
      {/* Badge container with gradient border */}
      <LinearGradient
        colors={['#FFD700', '#FFA500', '#FFD700']}
        style={[styles.badgeGradient, { width: dimensions.container, height: dimensions.container }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={[styles.badgeInner, { width: dimensions.container - 4, height: dimensions.container - 4 }]}>
          <Text style={[styles.crownIcon, { fontSize: dimensions.icon }]}>👑</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  glowContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glow: {
    width: '100%',
    height: '100%',
    borderRadius: 9999,
  },
  badgeGradient: {
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FFD700',
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 10,
  },
  badgeInner: {
    borderRadius: 9999,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  crownIcon: {
    textShadowColor: 'rgba(255, 215, 0, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
});
