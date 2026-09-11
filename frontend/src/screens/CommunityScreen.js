import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import { THEME } from '../constants/theme';

export default function CommunityScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Feed');
  const [searchText, setSearchText] = useState('');

  // Feed Posts Data
  const feedPosts = [
    {
      id: 1,
      user: 'Prachi',
      time: '2h ago',
      activity: 'Morning Run',
      distance: '5.2 km',
      xp: '4420 XP',
      duration: '28:15',
      calories: '320 Cal',
      location: 'Lodhi Garden, New Delhi',
      mapImage: true,
      likes: 256,
      comments: 34,
      topComment: { user: 'Sehaj', text: 'Great pace today! 👍' },
    },
    {
      id: 2,
      user: 'Vikram',
      time: '1h ago',
      activity: 'Evening Gym Session 💪',
      xp: '+ 350 XP',
      workoutImage: true,
      likes: 192,
      comments: 18,
    },
  ];

  // Events Data
  const events = [
    {
      id: 1,
      title: 'Run at Khan Market',
      time: 'Today 6:45 AM',
      location: 'Khan Market, New Delhi',
      participants: '10k Smiles',
      avatars: 3,
    },
    {
      id: 2,
      title: 'Yoga Session at India Gate',
      time: 'Tomorrow 7:00 AM',
      location: 'India Gate, New Delhi',
      participants: '5k Attendees',
      avatars: 3,
    },
  ];

  // Friends/Suggested Users Data
  const suggestedUsers = [
    {
      id: 1,
      name: 'Aisha',
      status: 'You both joined 2 classes',
      isOnline: true,
    },
    {
      id: 2,
      name: 'Kunal',
      status: 'Near by - Fitness Enthusiast',
      isOnline: true,
    },
    {
      id: 3,
      name: 'Rohit',
      status: 'Completed 50 challenges',
      isOnline: false,
    },
  ];

  const renderFeed = () => (
    <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
      {feedPosts.map((post) => (
        <View key={post.id} style={styles.postCard}>
          {/* Post Header */}
          <View style={styles.postHeader}>
            <View style={styles.postUserInfo}>
              <View style={styles.postAvatar}>
                <Text style={styles.avatarText}>👤</Text>
              </View>
              <View>
                <Text style={styles.postUserName}>{post.user}</Text>
                <Text style={styles.postTime}>{post.time}</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.postMenu}>•••</Text>
            </TouchableOpacity>
          </View>

          {/* Activity Title */}
          <Text style={styles.activityTitle}>
            {post.activity} · {post.distance || ''} · {post.xp}
          </Text>

          {/* Map or Image */}
          {post.mapImage && (
            <View style={styles.mapContainer}>
              <View style={styles.mapPlaceholder}>
                <Text style={styles.mapPin}>📍</Text>
                <Text style={styles.mapLocation}>{post.location}</Text>
              </View>
              {/* Stats Row */}
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
                  <Text style={styles.statValue}>{post.calories}</Text>
                </View>
              </View>
            </View>
          )}

          {post.workoutImage && (
            <View style={styles.workoutImagePlaceholder}>
              <Text style={styles.workoutEmoji}>💪🏋️</Text>
            </View>
          )}

          {/* Engagement Row */}
          <View style={styles.engagementRow}>
            <TouchableOpacity style={styles.engagementButton}>
              <Text style={styles.likeIcon}>❤️</Text>
              <Text style={styles.engagementText}>{post.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.engagementButton}>
              <Text style={styles.commentIcon}>💬</Text>
              <Text style={styles.engagementText}>{post.comments}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.engagementButton}>
              <Text style={styles.shareIcon}>↗️</Text>
              <Text style={styles.engagementText}>Share</Text>
            </TouchableOpacity>
          </View>

          {/* Top Comment */}
          {post.topComment && (
            <View style={styles.commentSection}>
              <View style={styles.commentAvatar}>
                <Text style={styles.commentAvatarText}>👤</Text>
              </View>
              <Text style={styles.commentText}>
                <Text style={styles.commentUser}>{post.topComment.user}</Text> {post.topComment.text}
              </Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );

  const renderEvents = () => (
    <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
      {events.map((event) => (
        <View key={event.id} style={styles.eventCard}>
          <View style={styles.eventImagePlaceholder}>
            <Text style={styles.eventIcon}>🏃</Text>
          </View>
          <View style={styles.eventInfo}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <View style={styles.eventDetails}>
              <Text style={styles.eventTime}>📅 {event.time}</Text>
              <Text style={styles.eventLocation}>📍 {event.location}</Text>
            </View>
            <View style={styles.eventParticipants}>
              <View style={styles.eventAvatarGroup}>
                <View style={[styles.eventAvatar, { zIndex: 3 }]}><Text>👤</Text></View>
                <View style={[styles.eventAvatar, { marginLeft: -8, zIndex: 2 }]}><Text>👤</Text></View>
                <View style={[styles.eventAvatar, { marginLeft: -8, zIndex: 1 }]}><Text>👤</Text></View>
              </View>
              <Text style={styles.participantsText}>{event.participants}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.eventJoinButton}>
            <Text style={styles.eventJoinText}>Join</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Suggested Events */}
      <Text style={styles.sectionTitle}>Suggested for You</Text>
      <View style={styles.suggestedEventCard}>
        <Text style={styles.suggestedEventIcon}>🔥</Text>
        <View style={styles.suggestedEventInfo}>
          <Text style={styles.suggestedEventTitle}>Weekend Marathon</Text>
          <Text style={styles.suggestedEventDetails}>Based on your activity</Text>
        </View>
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreButtonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const renderFriends = () => (
    <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
      {/* Active Friends */}
      <Text style={styles.sectionTitle}>Active Now</Text>
      <View style={styles.activeFriendsRow}>
        {[1, 2, 3, 4].map((i) => (
          <TouchableOpacity key={i} style={styles.activeFriendItem}>
            <View style={styles.activeFriendAvatar}>
              <Text>👤</Text>
              <View style={styles.onlineDot} />
            </View>
            <Text style={styles.activeFriendName}>User {i}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Suggested Friends */}
      <Text style={styles.sectionTitle}>Suggested for You</Text>
      {suggestedUsers.map((user) => (
        <View key={user.id} style={styles.friendCard}>
          <View style={styles.friendAvatar}>
            <Text style={styles.friendAvatarText}>👤</Text>
            {user.isOnline && <View style={styles.onlineDotLarge} />}
          </View>
          <View style={styles.friendInfo}>
            <Text style={styles.friendName}>{user.name}</Text>
            <Text style={styles.friendStatus}>{user.status}</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Your Friends */}
      <Text style={styles.sectionTitle}>Your Friends (24)</Text>
      {[1, 2, 3].map((i) => (
        <TouchableOpacity key={i} style={styles.chatFriendCard}>
          <View style={styles.chatFriendAvatar}>
            <Text>👤</Text>
            <View style={styles.onlineDotLarge} />
          </View>
          <View style={styles.chatFriendInfo}>
            <Text style={styles.chatFriendName}>Friend {i}</Text>
            <Text style={styles.chatFriendMessage}>Last message preview...</Text>
          </View>
          <View style={styles.chatTimestamp}>
            <Text style={styles.chatTime}>2h ago</Text>
            {i === 1 && <View style={styles.unreadBadge}><Text style={styles.unreadText}>3</Text></View>}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={THEME.colors.background} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Community Hub</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search people, posts, or events..."
            placeholderTextColor="#666"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>+ Share Activity</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {['Feed', 'Events', 'Friends'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.tab}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      {activeTab === 'Feed' && renderFeed()}
      {activeTab === 'Events' && renderEvents()}
      {activeTab === 'Friends' && renderFriends()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  // Search Bar
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    gap: 8,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    paddingVertical: 12,
  },
  shareButton: {
    backgroundColor: 'rgba(91, 159, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.4)',
    justifyContent: 'center',
  },
  shareButtonText: {
    color: '#5B9FFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  // Tabs
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  tabText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  tabIndicator: {
    height: 3,
    backgroundColor: '#5B9FFF',
    borderRadius: 2,
    marginTop: 8,
  },

  tabContent: {
    flex: 1,
    paddingHorizontal: 16,
  },

  // Feed Posts
  postCard: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
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
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarText: {
    fontSize: 20,
  },
  postUserName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  postTime: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  postMenu: {
    fontSize: 20,
    color: '#A0A0A0',
  },
  activityTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  mapContainer: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  mapPlaceholder: {
    height: 150,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapPin: {
    fontSize: 32,
    marginBottom: 8,
  },
  mapLocation: {
    fontSize: 13,
    color: '#A0A0A0',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 11,
    color: '#A0A0A0',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  workoutImagePlaceholder: {
    height: 200,
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  workoutEmoji: {
    fontSize: 48,
  },
  engagementRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 12,
  },
  engagementButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  likeIcon: {
    fontSize: 18,
  },
  commentIcon: {
    fontSize: 18,
  },
  shareIcon: {
    fontSize: 18,
  },
  engagementText: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  commentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10,
    borderRadius: 8,
  },
  commentAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  commentAvatarText: {
    fontSize: 12,
  },
  commentText: {
    fontSize: 13,
    color: '#FFFFFF',
    flex: 1,
  },
  commentUser: {
    fontWeight: 'bold',
  },

  // Events
  eventCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.2)',
    alignItems: 'center',
  },
  eventImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  eventIcon: {
    fontSize: 28,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  eventDetails: {
    marginBottom: 6,
  },
  eventTime: {
    fontSize: 12,
    color: '#A0A0A0',
    marginBottom: 2,
  },
  eventLocation: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  eventParticipants: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventAvatarGroup: {
    flexDirection: 'row',
    marginRight: 8,
  },
  eventAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  participantsText: {
    fontSize: 11,
    color: '#A0A0A0',
  },
  eventJoinButton: {
    backgroundColor: 'rgba(79, 255, 176, 0.15)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(79, 255, 176, 0.3)',
  },
  eventJoinText: {
    color: '#4FFFB0',
    fontSize: 13,
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 12,
  },

  suggestedEventCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 184, 77, 0.2)',
    alignItems: 'center',
  },
  suggestedEventIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  suggestedEventInfo: {
    flex: 1,
  },
  suggestedEventTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  suggestedEventDetails: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  exploreButton: {
    backgroundColor: 'rgba(91, 159, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.4)',
  },
  exploreButtonText: {
    color: '#5B9FFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  // Friends
  activeFriendsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  activeFriendItem: {
    alignItems: 'center',
  },
  activeFriendAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    position: 'relative',
    borderWidth: 2,
    borderColor: '#4FFFB0',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4FFFB0',
    borderWidth: 2,
    borderColor: '#000',
  },
  activeFriendName: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  friendCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
  },
  friendAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    position: 'relative',
  },
  friendAvatarText: {
    fontSize: 24,
  },
  onlineDotLarge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#4FFFB0',
    borderWidth: 2,
    borderColor: '#000',
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  friendStatus: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  followButton: {
    backgroundColor: 'rgba(91, 159, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(91, 159, 255, 0.4)',
  },
  followButtonText: {
    color: '#5B9FFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  // Chat Friends
  chatFriendCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
  },
  chatFriendAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    position: 'relative',
  },
  chatFriendInfo: {
    flex: 1,
  },
  chatFriendName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  chatFriendMessage: {
    fontSize: 13,
    color: '#A0A0A0',
  },
  chatTimestamp: {
    alignItems: 'flex-end',
  },
  chatTime: {
    fontSize: 11,
    color: '#A0A0A0',
    marginBottom: 4,
  },
  unreadBadge: {
    backgroundColor: '#5B9FFF',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
  },
});
