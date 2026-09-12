import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Premium Context
 * Manages Premium subscription status across the app
 */
const PremiumContext = createContext();

export const usePremium = () => {
  const context = useContext(PremiumContext);
  if (!context) {
    throw new Error('usePremium must be used within a PremiumProvider');
  }
  return context;
};

export const PremiumProvider = ({ children }) => {
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  // Load premium status from storage on mount
  useEffect(() => {
    loadPremiumStatus();
  }, []);

  const loadPremiumStatus = async () => {
    try {
      const status = await AsyncStorage.getItem('premium_status');
      setIsPremium(status === 'true');
    } catch (error) {
      console.error('Error loading premium status:', error);
    } finally {
      setLoading(false);
    }
  };

  const activatePremium = async () => {
    try {
      await AsyncStorage.setItem('premium_status', 'true');
      setIsPremium(true);
      setShowPremiumModal(false);
      return true;
    } catch (error) {
      console.error('Error activating premium:', error);
      return false;
    }
  };

  const deactivatePremium = async () => {
    try {
      await AsyncStorage.setItem('premium_status', 'false');
      setIsPremium(false);
      return true;
    } catch (error) {
      console.error('Error deactivating premium:', error);
      return false;
    }
  };

  const openSubscriptionFlow = () => {
    setShowPremiumModal(true);
  };

  const closeSubscriptionFlow = () => {
    setShowPremiumModal(false);
  };

  const value = {
    isPremium,
    loading,
    activatePremium,
    deactivatePremium,
    openSubscriptionFlow,
    closeSubscriptionFlow,
    showPremiumModal,
  };

  return (
    <PremiumContext.Provider value={value}>
      {children}
    </PremiumContext.Provider>
  );
};

export default PremiumContext;
