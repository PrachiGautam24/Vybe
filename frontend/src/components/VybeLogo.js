import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function VybeLogo({ width = 100, height = 30, style }) {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../../assets/images/vybe-logo.png')}
        style={[styles.logo, { width, height }]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  logo: {
    width: 100,
    height: 30,
  },
});
