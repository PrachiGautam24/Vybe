import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import WebContainer from './src/components/WebContainer';

export default function App() {
  return (
    <AuthProvider>
      <WebContainer>
        <AppNavigator />
      </WebContainer>
    </AuthProvider>
  );
}
