import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../constants/theme';

export default function EventDetailScreen({ navigation, route }) {
  const [isJoined, setIsJoined] = React.useState(false);
  
  const event = route.params?.event || {
    id: 1,
    icon: '🏃',
    title: 'Run to Starbucks Khan Market',
    subtitle: 'From Nehru Park to Starbucks, Khan Market',
    date: 'Sat, 14 Sep',
    time: '6:30 AM',
    location: 'Khan Market, New Delhi',
    distance: '5 km',
    difficulty: 'All levels',
    type: 'Community Event',
    participants: 30,
    imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800',
    checkpoints: [
      { name: 'Nehru Park', distance: 'Start', time: '6:30 AM', type: 'start' },
      { name: 'India Gate', distance: '~ 2.5 km', time: '', type: 'checkpoint' },
      { name: 'Lodhi Road', distance: '~ 4 km', time: '', type: 'checkpoint' },
      { name: 'Starbucks, Khan Market', distance: '~ 5 km', time: 'Finish', type: 'finish' },
    ],
    joinedFriends: [
      { name: 'Sehaj', status: 'is joining', message: 'See you there!' },
    ],
    sponsor: 'SUPERVOU',
    sponsorTagline: 'Better Humans\nA Healthier Tomorrow',
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Header with Background Image */}
      <ImageBackground
        source={event.imageUrl ? { uri: event.imageUrl } : require('../../assets/images/vybe-logo.png')}
        style={styles.headerBackground}
        blurRadius={10}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']}
          style={styles.headerGradient}
        >
          <SafeAreaView edges={['top']}>
            <View style={styles.header}>
              <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.backIcon}>←</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                <Text style={styles.closeIcon}>✕</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.headerContent}>
              <View style={styles.eventBadge}>
                <Text style={styles.eventBadgeIcon}>{event.icon}</Text>
                <Text style={styles.eventBadgeText}>Community Run</Text>
              </View>
              
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventSubtitle}>{event.subtitle}</Text>

              <View style={styles.participantsRow}>
                <View style={styles.avatarStack}>
                  <View style={[styles.avatar, { left: 0, zIndex: 3 }]}>
                    <Text style={styles.avatarText}>👤</Text>
                  </View>
                  <View style={[styles.avatar, { left: -12, zIndex: 2 }]}>
                    <Text style={styles.avatarText}>👤</Text>
                  </View>
                  <View style={[styles.avatar, { left: -24, zIndex: 1 }]}>
                    <Text style={styles.avatarText}>👤</Text>
                  </View>
                  <Text style={styles.plusCount}>+{event.participants - 3}</Text>
                </View>
                <Text style={styles.participantsText}>{event.participants} people joining</Text>
              </View>

              <View style={styles.dateTimeCard}>
                <Text style={styles.dateTimeIcon}>📅</Text>
                <View>
                  <Text style={styles.dateText}>{event.date}</Text>
                  <Text style={styles.timeText}>{event.time}</Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Event Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>📍</Text>
            <View>
              <Text style={styles.statValue}>~ {event.distance}</Text>
              <Text style={styles.statLabel}>Total Distance</Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>📊</Text>
            <View>
              <Text style={styles.statValue}>{event.difficulty}</Text>
              <Text style={styles.statLabel}>Welcome</Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statIcon}>👥</Text>
            <View>
              <Text style={styles.statValue}>{event.type}</Text>
              <Text style={styles.statLabel}>Event</Text>
            </View>
          </View>
        </View>

        {/* Friends Joining */}
        {event.joinedFriends.map((friend, idx) => (
          <View key={idx} style={styles.friendJoiningCard}>
            <View style={styles.friendAvatar}>
              <Text style={styles.friendAvatarText}>👤</Text>
            </View>
            <View style={styles.friendInfo}>
              <Text style={styles.friendName}>{friend.name} {friend.status}</Text>
              <Text style={styles.friendMessage}>{friend.message}</Text>
            </View>
            <Text style={styles.friendArrow}>›</Text>
          </View>
        ))}

        {/* Route & Checkpoints */}
        <View style={styles.routeSection}>
          <View style={styles.routeHeader}>
            <Text style={styles.sectionTitle}>Route & Checkpoints</Text>
            <TouchableOpacity style={styles.viewMapButton}>
              <Text style={styles.viewMapText}>View Map</Text>
              <Text style={styles.viewMapArrow}>›</Text>
            </TouchableOpacity>
          </View>

          {event.checkpoints.map((checkpoint, idx) => (
            <View key={idx} style={styles.checkpointItem}>
              <View style={styles.checkpointIconContainer}>
                {checkpoint.type === 'start' ? (
                  <View style={[styles.checkpointIcon, styles.checkpointStart]}>
                    <Text style={styles.checkpointIconText}>●</Text>
                  </View>
                ) : checkpoint.type === 'finish' ? (
                  <View style={[styles.checkpointIcon, styles.checkpointFinish]}>
                    <Text style={styles.checkpointIconText}>P</Text>
                  </View>
                ) : (
                  <View style={[styles.checkpointIcon, styles.checkpointMid]}>
                    <Text style={styles.checkpointIconText}>○</Text>
                  </View>
                )}
                {idx < event.checkpoints.length - 1 && (
                  <View style={styles.checkpointLine} />
                )}
              </View>
              <View style={styles.checkpointContent}>
                <Text style={styles.checkpointName}>{checkpoint.name}</Text>
                <Text style={styles.checkpointDistance}>
                  {checkpoint.distance} {checkpoint.time && `• ${checkpoint.time}`}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Sponsor */}
        <View style={styles.sponsorCard}>
          <Text style={styles.sponsorLabel}>In collaboration with</Text>
          <Text style={styles.sponsorName}>{event.sponsor}</Text>
          <Text style={styles.sponsorTagline}>{event.sponsorTagline}</Text>
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Join Button */}
      <SafeAreaView edges={['bottom']} style={styles.joinButtonContainer}>
        <TouchableOpacity 
          style={[styles.joinButton, isJoined && styles.joinedButton]} 
          onPress={() => setIsJoined(!isJoined)}
        >
          <Text style={[styles.joinButtonText, isJoined && styles.joinedButtonText]}>
            {isJoined ? '✓ Joined - You\'re In!' : 'Join Challenge'}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerBackground: {
    width: '100%',
    height: 360,
  },
  headerGradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  headerContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  eventBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(79, 255, 176, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.4)',
  },
  eventBadgeIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  eventBadgeText: {
    color: '#4FFFB0',
    fontSize: 13,
    fontWeight: 'bold',
  },
  eventTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    lineHeight: 34,
  },
  eventSubtitle: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 16,
    lineHeight: 20,
  },
  participantsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarStack: {
    flexDirection: 'row',
    marginRight: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#000',
    position: 'relative',
  },
  avatarText: {
    fontSize: 16,
  },
  plusCount: {
    fontSize: 13,
    color: '#A0A0A0',
    marginLeft: 4,
    fontWeight: '600',
  },
  participantsText: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  dateTimeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  dateTimeIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  dateText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 2,
  },
  timeText: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 10,
  },
  statCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  statIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  statValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 10,
    color: '#666',
  },
  friendJoiningCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.2)',
  },
  friendAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  friendAvatarText: {
    fontSize: 22,
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  friendMessage: {
    fontSize: 13,
    color: '#A0A0A0',
  },
  friendArrow: {
    fontSize: 24,
    color: '#666',
  },
  routeSection: {
    marginBottom: 20,
  },
  routeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  viewMapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(91, 159, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  viewMapText: {
    fontSize: 13,
    color: '#5B9FFF',
    fontWeight: '600',
    marginRight: 4,
  },
  viewMapArrow: {
    fontSize: 16,
    color: '#5B9FFF',
  },
  checkpointItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkpointIconContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  checkpointIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  checkpointStart: {
    backgroundColor: 'rgba(79, 255, 176, 0.2)',
    borderColor: '#4FFFB0',
  },
  checkpointMid: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: '#666',
  },
  checkpointFinish: {
    backgroundColor: 'rgba(255, 184, 77, 0.2)',
    borderColor: '#FFB84D',
  },
  checkpointIconText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  checkpointLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#333',
    marginTop: 4,
  },
  checkpointContent: {
    flex: 1,
    paddingTop: 6,
  },
  checkpointName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  checkpointDistance: {
    fontSize: 13,
    color: '#A0A0A0',
  },
  sponsorCard: {
    backgroundColor: '#1A1A1A',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  sponsorLabel: {
    fontSize: 11,
    color: '#666',
    marginBottom: 8,
  },
  sponsorName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    letterSpacing: 2,
  },
  sponsorTagline: {
    fontSize: 12,
    color: '#A0A0A0',
    textAlign: 'center',
    lineHeight: 18,
  },
  bottomSpacing: {
    height: 100,
  },
  joinButtonContainer: {
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },
  joinButton: {
    backgroundColor: '#4FFFB0',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#4FFFB0',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  joinedButton: {
    backgroundColor: 'rgba(79, 255, 176, 0.2)',
    borderWidth: 2,
    borderColor: '#4FFFB0',
  },
  joinButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  joinedButtonText: {
    color: '#4FFFB0',
  },
});
