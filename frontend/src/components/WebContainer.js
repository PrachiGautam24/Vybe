import React from 'react';
import { View, StyleSheet, Platform, Dimensions } from 'react-native';

const WebContainer = ({ children }) => {
  // Only apply container on web
  if (Platform.OS !== 'web') {
    return children;
  }

  const screenWidth = Dimensions.get('window').width;
  const isMobile = screenWidth < 768;

  return (
    <View style={styles.webWrapper}>
      <View style={[styles.mobileFrame, isMobile && styles.fullWidth]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  webWrapper: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileFrame: {
    width: 430,
    maxWidth: '100%',
    height: '100vh',
    maxHeight: 932,
    backgroundColor: '#000000',
    overflow: 'hidden',
    boxShadow: '0 0 50px rgba(79, 255, 176, 0.3)',
    borderRadius: 0,
  },
  fullWidth: {
    width: '100%',
    height: '100vh',
    maxHeight: '100vh',
  },
});

export default WebContainer;
