import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage utility functions for AsyncStorage

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (error) {
    console.error('Error storing data:', error);
    return false;
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing data:', error);
    return false;
  }
};

export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing data:', error);
    return false;
  }
};

export const getAllKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (error) {
    console.error('Error getting keys:', error);
    return [];
  }
};

export const multiGet = async (keys) => {
  try {
    const values = await AsyncStorage.multiGet(keys);
    return values.map(([key, value]) => [key, JSON.parse(value)]);
  } catch (error) {
    console.error('Error in multiGet:', error);
    return [];
  }
};
