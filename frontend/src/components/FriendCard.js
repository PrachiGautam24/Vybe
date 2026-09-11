import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { THEME } from '../constants/theme';

export default function FriendCard({ name, status, avatar, borderColor, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.avatarContainer, { borderColor }]}>
        <Text style={styles.avatarText}>{avatar}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 18,
    padding: 14,
    marginRight: 12,
    minWidth: 160,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  avatarContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    shadowColor: '#4FFFB0',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  avatarText: {
    fontSize: 20,
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  status: {
    color: '#A0A0A0',
    fontSize: 12,
  },
  arrow: {
    color: '#A0A0A0',
    fontSize: 20,
    marginLeft: 8,
  },
});
