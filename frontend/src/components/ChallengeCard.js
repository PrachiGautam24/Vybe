import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ChallengeCard({ 
  type = 'small',
  title, 
  subtitle, 
  icon, 
  reward, 
  onPress,
  buttonText = 'Join',
  badge,
  location,
  time,
  participants
}) {
  if (type === 'large') {
    return (
      <TouchableOpacity style={styles.largeContainer} onPress={onPress}>
        <View style={styles.largeContent}>
          {badge && (
            <View style={styles.badge}>
              <Text style={styles.badgeIcon}>🏃</Text>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          )}
          
          <Text style={styles.largeTitle}>{title}</Text>
          
          {location && (
            <View style={styles.locationRow}>
              <Text style={styles.locationIcon}>📍</Text>
              <Text style={styles.locationText}>{location}</Text>
            </View>
          )}
          
          <View style={styles.bottomRow}>
            <View style={styles.participantsContainer}>
              <View style={styles.avatarGroup}>
                <View style={[styles.miniAvatar, { left: 0, zIndex: 3 }]}>
                  <Text style={styles.miniAvatarText}>👤</Text>
                </View>
                <View style={[styles.miniAvatar, { left: -8, zIndex: 2 }]}>
                  <Text style={styles.miniAvatarText}>👤</Text>
                </View>
                <View style={[styles.miniAvatar, { left: -16, zIndex: 1 }]}>
                  <Text style={styles.miniAvatarText}>👤</Text>
                </View>
                <Text style={styles.plusText}>+27</Text>
              </View>
              <Text style={styles.participantsText}>{participants}</Text>
            </View>
            
            {time && (
              <View style={styles.timeContainer}>
                <Text style={styles.timeIcon}>📅</Text>
                <Text style={styles.timeText}>{time}</Text>
              </View>
            )}
          </View>
          
          <TouchableOpacity style={styles.joinButton} onPress={onPress}>
            <Text style={styles.joinButtonText}>{buttonText}</Text>
            <Text style={styles.joinButtonArrow}>›</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.smallContainer} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.smallContent}>
        <Text style={styles.smallTitle}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        {reward && <Text style={styles.reward}>{reward}</Text>}
      </View>
      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // Small Challenge Card
  smallContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
    padding: 18,
    marginRight: 12,
    minWidth: 200,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
    shadowColor: '#5B9FFF',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(79, 255, 176, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 24,
  },
  smallContent: {
    flex: 1,
  },
  smallTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitle: {
    color: '#A0A0A0',
    fontSize: 12,
    marginBottom: 4,
  },
  reward: {
    color: '#4FFFB0',
    fontSize: 12,
    fontWeight: '600',
  },
  arrow: {
    color: '#A0A0A0',
    fontSize: 20,
    marginLeft: 8,
  },
  
  // Large Challenge Card (Community Run)
  largeContainer: {
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#0A1F1A',
    marginBottom: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.2)',
    shadowColor: '#4FFFB0',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  largeContent: {
    padding: 20,
    backgroundColor: 'rgba(10, 31, 26, 0.9)',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  badgeIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  largeTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  locationText: {
    color: '#A0A0A0',
    fontSize: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  participantsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarGroup: {
    flexDirection: 'row',
    marginRight: 8,
    alignItems: 'center',
  },
  miniAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2A2A2A',
    borderWidth: 1,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  miniAvatarText: {
    fontSize: 12,
  },
  plusText: {
    color: '#A0A0A0',
    fontSize: 12,
    marginLeft: 4,
  },
  participantsText: {
    color: '#A0A0A0',
    fontSize: 12,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  timeIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  joinButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4FFFB0',
    paddingVertical: 12,
    borderRadius: 12,
  },
  joinButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4,
  },
  joinButtonArrow: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
