import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PremiumButton from './PremiumButton';

/**
 * Premium Lock Overlay Component
 * Displays a gold lock overlay with optional "Premium Required" message
 */
export default function PremiumLockOverlay({ 
  onPress, 
  message = 'Premium Required',
  showButton = true,
  style 
}) {
  return (
    <View style={[styles.overlay, style]}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.85)']}
        style={styles.overlayGradient}
      >
        {/* Lock icon with glow */}
        <View style={styles.lockContainer}>
          <View style={styles.lockGlow}>
            <LinearGradient
              colors={['rgba(255, 215, 0, 0.3)', 'rgba(255, 215, 0, 0)', 'transparent']}
              style={styles.lockGlowGradient}
            />
          </View>
          <Text style={styles.lockIcon}>🔒</Text>
        </View>

        {/* Message */}
        <Text style={styles.message}>{message}</Text>

        {/* Premium button */}
        {showButton && (
          <PremiumButton 
            onPress={onPress}
            text="Unlock"
            compact
            style={styles.unlockButton}
          />
        )}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 16,
    overflow: 'hidden',
  },
  overlayGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  lockContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  lockGlow: {
    position: 'absolute',
    width: 60,
    height: 60,
  },
  lockGlowGradient: {
    flex: 1,
    borderRadius: 9999,
  },
  lockIcon: {
    fontSize: 32,
    textShadowColor: 'rgba(255, 215, 0, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  message: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: 'rgba(255, 215, 0, 0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  unlockButton: {
    marginTop: 4,
  },
});
