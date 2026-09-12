import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { PremiumProvider } from './src/context/PremiumContext';
import AppNavigator from './src/navigation/AppNavigator';
import WebContainer from './src/components/WebContainer';

export default function App() {
  return (
    <AuthProvider>
      <PremiumProvider>
        <WebContainer>
          <AppNavigator />
        </WebContainer>
      </PremiumProvider>
    </AuthProvider>
  );
}
