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

export default function ChatScreen({ navigation, route }) {
  const friend = route.params?.friend;
  const [message, setMessage] = useState('');
  
  const messages = [
    {
      id: 1,
      sender: friend?.name || 'Friend',
      text: 'Hey! Ready for the morning run?',
      time: '10:30 AM',
      isMe: false,
    },
    {
      id: 2,
      sender: 'You',
      text: 'Yes! See you at 6:30 AM',
      time: '10:32 AM',
      isMe: true,
    },
    {
      id: 3,
      sender: friend?.name || 'Friend',
      text: 'Great! Don\'t forget to warm up 💪',
      time: '10:33 AM',
      isMe: false,
    },
  ];

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
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <View style={styles.headerCenter}>
              <View style={styles.headerAvatar}>
                <Text style={styles.headerAvatarText}>👤</Text>
              </View>
              <View>
                <Text style={styles.headerName}>{friend?.name || 'Friend'}</Text>
                <Text style={styles.headerStatus}>Online</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.moreIcon}>⋮</Text>
            </TouchableOpacity>
          </View>

          {/* Messages */}
          <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
            {messages.map((msg) => (
              <View 
                key={msg.id} 
                style={[styles.messageRow, msg.isMe && styles.messageRowMe]}
              >
                {!msg.isMe && (
                  <View style={styles.messageAvatar}>
                    <Text style={styles.messageAvatarText}>👤</Text>
                  </View>
                )}
                <View style={[styles.messageBubble, msg.isMe && styles.messageBubbleMe]}>
                  <Text style={[styles.messageText, msg.isMe && styles.messageTextMe]}>
                    {msg.text}
                  </Text>
                  <Text style={[styles.messageTime, msg.isMe && styles.messageTimeMe]}>
                    {msg.time}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Input */}
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.attachButton}>
              <Text style={styles.attachIcon}>📎</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              placeholderTextColor="#666"
              value={message}
              onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendIcon}>➤</Text>
            </TouchableOpacity>
          </View>
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
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: THEME.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: THEME.colors.textPrimary,
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#4FFFB0',
  },
  headerAvatarText: {
    fontSize: 20,
  },
  headerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME.colors.textPrimary,
  },
  headerStatus: {
    fontSize: 12,
    color: '#4FFFB0',
  },
  moreButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreIcon: {
    fontSize: 24,
    color: '#666',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  messageRow: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-end',
  },
  messageRowMe: {
    justifyContent: 'flex-end',
  },
  messageAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  messageAvatarText: {
    fontSize: 16,
  },
  messageBubble: {
    maxWidth: '70%',
    backgroundColor: '#2A2A2A',
    borderRadius: 16,
    borderBottomLeftRadius: 4,
    padding: 12,
  },
  messageBubbleMe: {
    backgroundColor: '#4FFFB0',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 15,
    color: THEME.colors.textPrimary,
    marginBottom: 4,
  },
  messageTextMe: {
    color: '#000000',
  },
  messageTime: {
    fontSize: 11,
    color: '#666',
  },
  messageTimeMe: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: '#000000',
  },
  attachButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  attachIcon: {
    fontSize: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    color: THEME.colors.textPrimary,
    marginRight: 8,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4FFFB0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendIcon: {
    fontSize: 20,
    color: '#000000',
  },
});
