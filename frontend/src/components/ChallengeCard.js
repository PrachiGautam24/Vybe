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
    borderRadius: 16,
    padding: 14,
    marginRight: 10,
    minWidth: 180,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(79, 255, 176, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  icon: {
    fontSize: 22,
  },
  smallContent: {
    flex: 1,
  },
  smallTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 3,
  },
  subtitle: {
    color: '#A0A0A0',
    fontSize: 11,
    marginBottom: 3,
  },
  reward: {
    color: '#4FFFB0',
    fontSize: 11,
    fontWeight: '600',
  },
  arrow: {
    color: '#A0A0A0',
    fontSize: 18,
    marginLeft: 6,
  },
  
  largeContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#0F2A1F',
    marginBottom: 0,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.3)',
  },
  largeContent: {
    padding: 18,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  badgeIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
  largeTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationIcon: {
    fontSize: 13,
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
    marginBottom: 14,
  },
  participantsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarGroup: {
    flexDirection: 'row',
    marginRight: 6,
    alignItems: 'center',
  },
  miniAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2A2A2A',
    borderWidth: 2,
    borderColor: '#0F2A1F',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  miniAvatarText: {
    fontSize: 12,
  },
  plusText: {
    color: '#A0A0A0',
    fontSize: 11,
    marginLeft: 2,
    fontWeight: '600',
  },
  participantsText: {
    color: '#A0A0A0',
    fontSize: 11,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  timeIcon: {
    fontSize: 13,
    marginRight: 4,
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '500',
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});
