import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../constants/theme';
import BottomNavBar from '../components/BottomNavBar';
import VybeLogo from '../components/VybeLogo';

export default function CommunityScreen({ navigation, route }) {
  const [activeTab, setActiveTab] = useState(route.params?.tab || 'Feed');
  const [searchText, setSearchText] = useState('');
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [followedFriends, setFollowedFriends] = useState([]);

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
      imageUrl: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800',
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
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
      likes: 192,
      comments: 18,
    },
  ];

  const nearbyEvents = [
    {
      id: 1,
      icon: '🏃',
      title: 'Run at Khan Market',
      subtitle: 'From Nehru Park to Starbucks, Khan Market',
      date: 'Sat, 14 Sep',
      time: '6:30 AM',
      location: 'Khan Market, New Delhi',
      participants: ['👤', '👤', '👤', '👤'],
      joining: 30,
      xp: 500,
      distance: '5 km',
      difficulty: 'All levels',
      type: 'Community Event',
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
    },
    {
      id: 2,
      icon: '🧘',
      title: 'Sunset Yoga in the Park',
      subtitle: 'Relax and unwind with sunset yoga',
      date: 'Sun, 15 Sep',
      time: '6:00 PM',
      location: 'Central Park, Delhi',
      participants: ['👤', '👤', '👤', '👤'],
      xp: 400,
      joining: 20,
      distance: '0 km',
      difficulty: 'All levels',
      type: 'Community Event',
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
      checkpoints: [
        { name: 'Central Park', distance: 'Location', time: '6:00 PM', type: 'start' },
      ],
      joinedFriends: [
        { name: 'Priya', status: 'is joining', message: 'Perfect for recovery!' },
      ],
      sponsor: 'SUPERVOU',
      sponsorTagline: 'Better Humans\nA Healthier Tomorrow',
    },
  ];

  const friends = [
    {
      id: 1,
      name: 'Sehaj',
      status: 'Online',
      avatar: '👤',
      level: 8,
      xp: 2340,
      streak: 21,
      recentActivity: '5K Run • 2h ago',
      badges: ['🔥', '👑', '🌅'],
    },
    {
      id: 2,
      name: 'Hariom',
      status: 'Offline • 2h ago',
      avatar: '👤',
      level: 6,
      xp: 1890,
      streak: 14,
      recentActivity: 'Gym Session • 5h ago',
      badges: ['💪', '🏀', '⚡'],
    },
    {
      id: 3,
      name: 'Priya',
      status: 'Online',
      avatar: '👤',
      level: 10,
      xp: 3420,
      streak: 45,
      recentActivity: 'Yoga Class • 1h ago',
      badges: ['🧘', '🌟', '🏆'],
    },
    {
      id: 4,
      name: 'Vikram',
      status: 'Offline • 1d ago',
      avatar: '👤',
      level: 7,
      xp: 2100,
      streak: 18,
      recentActivity: 'Cycling • 1d ago',
      badges: ['🚴', '🎯', '💎'],
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

      {/* Map/Image with actual photos */}
      <View style={styles.postImageContainer}>
        {post.imageUrl ? (
          <ImageBackground
            source={{ uri: post.imageUrl }}
            style={post.hasMap ? styles.mapPlaceholder : styles.imagePlaceholder}
            imageStyle={styles.postImage}
          >
            <LinearGradient
              colors={post.hasMap 
                ? ['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)']
                : ['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.7)']
              }
              style={styles.postImageOverlay}
            >
              {post.hasMap ? (
                <>
                  <Text style={styles.mapIcon}>🗺️</Text>
                  <Text style={styles.locationText}>{post.location}</Text>
                </>
              ) : (
                <>
                  <Text style={styles.imageIcon}>💪</Text>
                  <Text style={styles.imageText}>Gym Session</Text>
                </>
              )}
            </LinearGradient>
          </ImageBackground>
        ) : (
          <View style={post.hasMap ? styles.mapPlaceholder : styles.imagePlaceholder}>
            {post.hasMap ? (
              <>
                <Text style={styles.mapIcon}>🗺️</Text>
                <Text style={styles.locationText}>{post.location}</Text>
              </>
            ) : (
              <>
                <Text style={styles.imageIcon}>💪</Text>
                <Text style={styles.imageText}>Gym Session</Text>
              </>
            )}
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

  const renderEvent = (event) => {
    const isJoined = joinedEvents.includes(event.id);
    
    return (
    <TouchableOpacity 
      key={event.id} 
      style={styles.eventCard}
      onPress={() => navigation.navigate('EventDetail', { event })}
    >
      <ImageBackground
        source={{ uri: event.imageUrl }}
        style={styles.eventBackground}
        imageStyle={styles.eventBackgroundImage}
        blurRadius={8}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.85)']}
          style={styles.eventGradient}
        >
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
            <TouchableOpacity 
              style={styles.joinButton}
              onPress={(e) => {
                e.stopPropagation();
                navigation.navigate('EventDetail', { event });
              }}
            >
              <Text style={styles.joinButtonText}>Join</Text>
            </TouchableOpacity>
            <Text style={styles.eventXp}>+ {event.xp} XP</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
  };

  const renderFriend = (friend) => (
    <View key={friend.id} style={styles.friendCard}>
      <View style={styles.friendHeader}>
        <View style={styles.friendAvatar}>
          <Text style={styles.friendAvatarText}>{friend.avatar}</Text>
          <View style={[styles.statusDot, friend.status === 'Online' && styles.statusOnline]} />
        </View>
        <View style={styles.friendInfo}>
          <View style={styles.friendNameRow}>
            <Text style={styles.friendName}>{friend.name}</Text>
            <View style={styles.friendLevel}>
              <Text style={styles.friendLevelText}>Lvl {friend.level}</Text>
            </View>
          </View>
          <Text style={styles.friendStatus}>{friend.status}</Text>
        </View>
      </View>

      <View style={styles.friendStats}>
        <View style={styles.friendStat}>
          <Text style={styles.friendStatValue}>{friend.xp}</Text>
          <Text style={styles.friendStatLabel}>XP</Text>
        </View>
        <View style={styles.friendStatDivider} />
        <View style={styles.friendStat}>
          <Text style={styles.friendStatValue}>{friend.streak} 🔥</Text>
          <Text style={styles.friendStatLabel}>Streak</Text>
        </View>
      </View>

      <View style={styles.friendActivity}>
        <Text style={styles.friendActivityLabel}>Recent Activity:</Text>
        <Text style={styles.friendActivityText}>{friend.recentActivity}</Text>
      </View>

      <View style={styles.friendBadges}>
        {friend.badges.map((badge, idx) => (
          <View key={idx} style={styles.friendBadge}>
            <Text style={styles.friendBadgeIcon}>{badge}</Text>
          </View>
        ))}
      </View>

      <View style={styles.friendActions}>
        <TouchableOpacity style={styles.challengeButton}>
          <Text style={styles.challengeButtonText}>⚔️ Challenge</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.messageButton}
          onPress={() => navigation.navigate('Chat', { friend })}
        >
          <Text style={styles.messageButtonText}>💬</Text>
        </TouchableOpacity>
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
            <VybeLogo width={80} height={28} />
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
        {['Feed', 'Events', 'Friends'].map((tab) => (
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
        ) : activeTab === 'Events' ? (
          <View style={styles.eventsContainer}>
            <Text style={styles.sectionTitle}>Happening Near You</Text>
            {nearbyEvents.map((event) => renderEvent(event))}
          </View>
        ) : (
          <View style={styles.friendsContainer}>
            <Text style={styles.sectionTitle}>Your Friends</Text>
            {friends.map((friend) => renderFriend(friend))}
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
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.2)',
  },
  imagePlaceholder: {
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.2)',
  },
  postImage: {
    borderRadius: 12,
  },
  postImageOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  locationText: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  imageIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  imageText: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
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
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
    overflow: 'hidden',
  },
  eventBackground: {
    width: '100%',
  },
  eventBackgroundImage: {
    borderRadius: 16,
  },
  eventGradient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
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
  joinedButton: {
    backgroundColor: 'rgba(79, 255, 176, 0.15)',
    borderColor: 'rgba(79, 255, 176, 0.3)',
  },
  joinedButtonText: {
    color: '#4FFFB0',
  },
  eventXp: {
    fontSize: 12,
    color: '#4FFFB0',
    fontWeight: '600',
  },

  // Friends Section
  friendsContainer: {
    paddingHorizontal: 16,
  },
  friendCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.2)',
  },
  friendHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  friendAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    position: 'relative',
    borderWidth: 2,
    borderColor: 'rgba(79, 255, 176, 0.3)',
  },
  friendAvatarText: {
    fontSize: 28,
  },
  statusDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#666',
    borderWidth: 2,
    borderColor: '#1A1A1A',
  },
  statusOnline: {
    backgroundColor: '#4FFFB0',
  },
  friendInfo: {
    flex: 1,
  },
  friendNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  friendName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginRight: 8,
  },
  friendLevel: {
    backgroundColor: 'rgba(255, 184, 77, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 184, 77, 0.3)',
  },
  friendLevelText: {
    fontSize: 11,
    color: '#FFB84D',
    fontWeight: 'bold',
  },
  friendStatus: {
    fontSize: 13,
    color: '#A0A0A0',
  },
  friendStats: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    justifyContent: 'space-around',
  },
  friendStat: {
    alignItems: 'center',
  },
  friendStatValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
    marginBottom: 2,
  },
  friendStatLabel: {
    fontSize: 11,
    color: '#666',
  },
  friendStatDivider: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  friendActivity: {
    marginBottom: 12,
  },
  friendActivityLabel: {
    fontSize: 11,
    color: '#666',
    marginBottom: 4,
  },
  friendActivityText: {
    fontSize: 13,
    color: THEME.colors.textPrimary,
    fontWeight: '500',
  },
  friendBadges: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  friendBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(91, 159, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  friendBadgeIcon: {
    fontSize: 18,
  },
  friendActions: {
    flexDirection: 'row',
    gap: 8,
  },
  challengeButton: {
    flex: 1,
    backgroundColor: 'rgba(255, 107, 107, 0.15)',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 107, 107, 0.3)',
  },
  challengeButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  messageButton: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(91, 159, 255, 0.15)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.3)',
  },
  messageButtonText: {
    fontSize: 20,
  },

  bottomSpacing: {
    height: 20,
  },
});
