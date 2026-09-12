import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * Premium Frame Component
 * Creates a glowing gold frame around premium content (e.g., tournaments)
 */
export default function PremiumFrame({ children, style, animated = true }) {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (animated) {
      const pulse = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.2,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
          }),
        ])
      );
      pulse.start();
      return () => pulse.stop();
    }
  }, [pulseAnim, animated]);

  return (
    <View style={[styles.container, style]}>
      {/* Animated outer glow */}
      {animated && (
        <Animated.View
          style={[
            styles.outerGlow,
            {
              opacity: pulseAnim.interpolate({
                inputRange: [1, 1.2],
                outputRange: [0.3, 0.6],
              }),
              transform: [{ scale: pulseAnim }],
            },
          ]}
        >
          <LinearGradient
            colors={['rgba(255, 215, 0, 0.2)', 'rgba(255, 215, 0, 0)', 'transparent']}
            style={styles.glowGradient}
          />
        </Animated.View>
      )}

      {/* Gold gradient frame */}
      <LinearGradient
        colors={['#FFD700', '#FFA500', '#FFD700', '#FFA500', '#FFD700']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.frameGradient}
      >
        {/* Inner content container */}
        <View style={styles.contentContainer}>
          {children}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  outerGlow: {
    position: 'absolute',
    top: -12,
    left: -12,
    right: -12,
    bottom: -12,
  },
  glowGradient: {
    flex: 1,
    borderRadius: 24,
  },
  frameGradient: {
    borderRadius: 20,
    padding: 3,
    shadowColor: '#FFD700',
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  contentContainer: {
    backgroundColor: '#1A1A2E',
    borderRadius: 17,
    overflow: 'hidden',
  },
});
