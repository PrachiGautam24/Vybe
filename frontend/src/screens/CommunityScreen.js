import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../constants/theme';
import BottomNavBar from '../components/BottomNavBar';

export default function CommunityScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Feed');
  const [searchText, setSearchText] = useState('');

  const feedPosts = [
    {
      id: 1,
      user: 'Prachi',
      time: '2h ago',
      activity: 'Morning Run',
      distance: '5.2 km',
      xp: 4420,
      duration: '28:15',
      calories: 320,
      location: 'Lodhi Garden, New Delhi',
      hasMap: true,
      likes: 256,
      comments: 34,
      topComment: { user: 'Sehaj', text: 'Great pace today! 👍' },
    },
    {
      id: 2,
      user: 'Vikram',
      time: '1h ago',
      activity: 'Evening Gym Session 💪',
      xp: 350,
      hasImage: true,
      likes: 192,
      comments: 18,
    },
  ];

  const nearbyEvents = [
    {
      id: 1,
      icon: '🏃',
      title: 'Run at Khan Market',
      date: 'Sat, Apr 20',
      time: '6:45 AM',
      location: 'New Delhi',
      participants: ['👤', '👤', '👤', '👤'],
      joining: 32,
      xp: 500,
    },
    {
      id: 2,
      icon: '🧘',
      title: 'Sunset Yoga in the Park',
      date: 'Sun, Apr 21',
      time: '6:00 PM',
      location: 'Central Park',
      participants: ['👤', '👤', '👤', '👤'],
      xp: 400,
    },
  ];

  const renderPost = (post) => (
    <View key={post.id} style={styles.postCard}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <View style={styles.postUserInfo}>
          <View style={styles.userAvatar}>
            <Text style={styles.userAvatarText}>👤</Text>
          </View>
          <View>
            <Text style={styles.userName}>{post.user}</Text>
            <Text style={styles.postTime}>{post.time}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreIcon}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* Post Content */}
      <View style={styles.postContent}>
        <Text style={styles.activityTitle}>
          {post.activity} • {post.distance || ''} {post.xp && `• ${post.xp} XP`}
        </Text>
      </View>

      {/* Map/Image Placeholder */}
      <View style={styles.postImageContainer}>
        {post.hasMap ? (
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapIcon}>🗺️</Text>
            <Text style={styles.locationText}>{post.location}</Text>
          </View>
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imageIcon}>💪</Text>
            <Text style={styles.imageText}>Gym Session</Text>
          </View>
        )}
      </View>

      {/* Stats Row */}
      {post.distance && (
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Distance</Text>
            <Text style={styles.statValue}>{post.distance}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Time</Text>
            <Text style={styles.statValue}>{post.duration}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Calories</Text>
            <Text style={styles.statValue}>{post.calories} Cal</Text>
          </View>
        </View>
      )}

      {/* Interactions */}
      <View style={styles.interactionsRow}>
        <TouchableOpacity style={styles.interactionButton}>
          <Text style={styles.heartIcon}>❤️</Text>
          <Text style={styles.interactionText}>{post.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionButton}>
          <Text style={styles.commentIcon}>💬</Text>
          <Text style={styles.interactionText}>{post.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionButton}>
          <Text style={styles.shareIcon}>↗️</Text>
          <Text style={styles.interactionText}>Share</Text>
        </TouchableOpacity>
      </View>

      {/* Top Comment */}
      {post.topComment && (
        <View style={styles.commentSection}>
          <View style={styles.commentAvatar}>
            <Text style={styles.commentAvatarText}>👤</Text>
          </View>
          <Text style={styles.commentText}>
            <Text style={styles.commentUser}>{post.topComment.user}:</Text> {post.topComment.text}
          </Text>
        </View>
      )}
    </View>
  );

  const renderEvent = (event) => (
    <View key={event.id} style={styles.eventCard}>
      <View style={styles.eventContent}>
        <Text style={styles.eventIcon}>{event.icon}</Text>
        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventDetails}>
            {event.date} • {event.time} • {event.location}
          </Text>
          <View style={styles.eventParticipants}>
            {event.participants.map((participant, idx) => (
              <View 
                key={idx} 
                style={[styles.participantAvatar, { left: idx * -8 }]}
              >
                <Text style={styles.participantText}>{participant}</Text>
              </View>
            ))}
            <Text style={styles.joiningText}>+{event.joining} Joining</Text>
          </View>
        </View>
      </View>
      <View style={styles.eventRight}>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
        <Text style={styles.eventXp}>+ {event.xp} XP</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#0A0A1F', '#000000']}
        style={styles.gradientBackground}
      >
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
          
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.logo}>VYBE</Text>
            <TouchableOpacity 
              style={styles.profileButton}
              onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search people, posts, or events..."
          placeholderTextColor="#666"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {['Feed', 'Events'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {activeTab === 'Feed' ? (
          <View style={styles.feedContainer}>
            {feedPosts.map((post) => renderPost(post))}
          </View>
        ) : (
          <View style={styles.eventsContainer}>
            <Text style={styles.sectionTitle}>Happening Near You</Text>
            {nearbyEvents.map((event) => renderEvent(event))}
          </View>
        )}

        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar navigation={navigation} activeTab="Community" />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
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
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: THEME.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: THEME.colors.primary,
  },
  profileIcon: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: THEME.colors.textPrimary,
    fontSize: 14,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    position: 'relative',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#5B9FFF',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: THEME.colors.textPrimary,
    fontWeight: '600',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    width: '100%',
    backgroundColor: '#5B9FFF',
  },
  feedContainer: {
    paddingHorizontal: 16,
  },
  postCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  postUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  userAvatarText: {
    fontSize: 20,
  },
  userName: {
    fontSize: 15,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
    marginBottom: 2,
  },
  postTime: {
    fontSize: 12,
    color: '#666',
  },
  moreButton: {
    padding: 4,
  },
  moreIcon: {
    fontSize: 20,
    color: '#666',
  },
  postContent: {
    marginBottom: 12,
  },
  activityTitle: {
    fontSize: 14,
    color: THEME.colors.textPrimary,
    fontWeight: '500',
  },
  postImageContainer: {
    marginBottom: 12,
  },
  mapPlaceholder: {
    height: 180,
    backgroundColor: '#0F2A1F',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.2)',
  },
  mapIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  locationText: {
    fontSize: 13,
    color: '#A0A0A0',
  },
  imagePlaceholder: {
    height: 180,
    backgroundColor: '#1A1F2E',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.2)',
  },
  imageIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  imageText: {
    fontSize: 13,
    color: '#A0A0A0',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 11,
    color: '#666',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
  },
  interactionsRow: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 12,
  },
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  heartIcon: {
    fontSize: 18,
  },
  commentIcon: {
    fontSize: 18,
  },
  shareIcon: {
    fontSize: 18,
  },
  interactionText: {
    fontSize: 14,
    color: '#A0A0A0',
    fontWeight: '500',
  },
  commentSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },
  commentAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  commentAvatarText: {
    fontSize: 14,
  },
  commentText: {
    flex: 1,
    fontSize: 13,
    color: THEME.colors.textPrimary,
  },
  commentUser: {
    fontWeight: '600',
  },
  eventsContainer: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#A0A0A0',
    marginBottom: 16,
  },
  eventCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  eventContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  eventIcon: {
    fontSize: 36,
    marginRight: 12,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: THEME.colors.textPrimary,
    marginBottom: 4,
  },
  eventDetails: {
    fontSize: 11,
    color: '#A0A0A0',
    marginBottom: 8,
  },
  eventParticipants: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  participantAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2A2A2A',
    borderWidth: 2,
    borderColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  participantText: {
    fontSize: 12,
  },
  joiningText: {
    fontSize: 11,
    color: '#A0A0A0',
    marginLeft: 8,
  },
  eventRight: {
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  joinButton: {
    backgroundColor: 'rgba(91, 159, 255, 0.15)',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
    marginBottom: 6,
  },
  joinButtonText: {
    color: '#5B9FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  eventXp: {
    fontSize: 12,
    color: '#4FFFB0',
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 20,
  },
});
