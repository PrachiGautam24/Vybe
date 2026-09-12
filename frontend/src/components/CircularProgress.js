import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CircularProgress({ 
  size = 110, 
  strokeWidth = 8, 
  progress = 0, 
  color = '#4FFFB0',
  value,
  maxValue,
  label,
  icon
}) {
  const progressValue = Math.min(Math.max(progress, 0), 100) / 100;

  return (
    <View style={[styles.container, { width: size + 40, height: size + 40 }]}>
      {/* Outer glow effect */}
      <View 
        style={[
          styles.glowOuter, 
          { 
            width: size + 20, 
            height: size + 20, 
            borderRadius: (size + 20) / 2,
            shadowColor: color,
            shadowOpacity: 0.6,
            shadowRadius: 15,
            elevation: 10,
          }
        ]} 
      />
      
      {/* Background Circle */}
      <View 
        style={[
          styles.backgroundCircle, 
          { 
            width: size, 
            height: size, 
            borderRadius: size / 2,
            borderWidth: strokeWidth,
            borderColor: 'rgba(255, 255, 255, 0.08)'
          }
        ]} 
      />
      
      {/* Progress Circle */}
      <View 
        style={[
          styles.progressCircle, 
          { 
            width: size, 
            height: size, 
            borderRadius: size / 2,
            borderWidth: strokeWidth,
            borderColor: color,
            borderRightColor: progressValue > 0.25 ? color : 'transparent',
            borderBottomColor: progressValue > 0.5 ? color : 'transparent',
            borderLeftColor: progressValue > 0.75 ? color : 'transparent',
            transform: [{ rotate: '-90deg' }]
          }
        ]} 
      />
      
      {/* Inner glow */}
      <View 
        style={[
          styles.innerGlow, 
          { 
            width: size - strokeWidth * 2, 
            height: size - strokeWidth * 2, 
            borderRadius: (size - strokeWidth * 2) / 2,
            backgroundColor: `${color}15`,
          }
        ]} 
      />
      
      {/* Content */}
      <View style={styles.content}>
        {icon && <Text style={styles.icon}>{icon}</Text>}
        <Text style={[styles.value, { color }]}>{value}</Text>
        {maxValue && (
          <Text style={styles.maxValue}>/ {maxValue}</Text>
        )}
      </View>
      
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  glowOuter: {
    position: 'absolute',
  },
  backgroundCircle: {
    position: 'absolute',
  },
  progressCircle: {
    position: 'absolute',
  },
  innerGlow: {
    position: 'absolute',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  icon: {
    fontSize: 18,
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  maxValue: {
    fontSize: 10,
    color: '#A0A0A0',
    marginTop: -1,
  },
  label: {
    position: 'absolute',
    bottom: -22,
    fontSize: 11,
    color: '#A0A0A0',
    fontWeight: '500',
  },
});
