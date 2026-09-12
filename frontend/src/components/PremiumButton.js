import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * Premium Button Component
 * Rectangular button with black base, gold gradient border, and shimmer animation
 */
export default function PremiumButton({ 
  onPress, 
  text = 'Unlock Premium',
  icon = '👑',
  style,
  compact = false 
}) {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Create shimmer animation
    const shimmer = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    );
    shimmer.start();
    return () => shimmer.stop();
  }, [shimmerAnim]);

  const shimmerTranslate = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100],
  });

  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.container, compact && styles.containerCompact, style]}
      activeOpacity={0.8}
    >
      {/* Outer glow */}
      <View style={styles.glowOuter}>
        <LinearGradient
          colors={['rgba(255, 215, 0, 0.2)', 'rgba(255, 215, 0, 0)', 'transparent']}
          style={styles.glowGradient}
        />
      </View>

      {/* Gold gradient border */}
      <LinearGradient
        colors={['#FFD700', '#FFA500', '#FFD700', '#FFA500', '#FFD700']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.borderGradient, compact && styles.borderGradientCompact]}
      >
        {/* Black inner container */}
        <View style={[styles.innerContainer, compact && styles.innerContainerCompact]}>
          {/* Shimmer effect */}
          <Animated.View
            style={[
              styles.shimmer,
              {
                transform: [{ translateX: shimmerTranslate }],
              },
            ]}
          >
            <LinearGradient
              colors={['transparent', 'rgba(255, 215, 0, 0.3)', 'transparent']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.shimmerGradient}
            />
          </Animated.View>

          {/* Button content */}
          <View style={styles.content}>
            {icon && <Text style={[styles.icon, compact && styles.iconCompact]}>{icon}</Text>}
            <Text style={[styles.text, compact && styles.textCompact]}>{text}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    shadowColor: '#FFD700',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  containerCompact: {
    shadowRadius: 6,
  },
  glowOuter: {
    position: 'absolute',
    top: -8,
    left: -8,
    right: -8,
    bottom: -8,
  },
  glowGradient: {
    flex: 1,
    borderRadius: 16,
  },
  borderGradient: {
    borderRadius: 14,
    padding: 2,
  },
  borderGradientCompact: {
    borderRadius: 10,
    padding: 2,
  },
  innerContainer: {
    backgroundColor: '#000000',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  innerContainerCompact: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  shimmer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 100,
  },
  shimmerGradient: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  icon: {
    fontSize: 20,
    textShadowColor: 'rgba(255, 215, 0, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  iconCompact: {
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
    textShadowColor: 'rgba(255, 215, 0, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    letterSpacing: 0.5,
  },
  textCompact: {
    fontSize: 14,
  },
});
