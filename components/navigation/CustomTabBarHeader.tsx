import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import { useRouter } from 'expo-router';

export function CustomTabBarHeader() {
  const router = useRouter();

  return (
    <View style={styles.tabContainer}>
      {/* Home Tab */}
      <TouchableOpacity style={styles.tabButton} onPress={() => router.push('/')}>
        <Ionicons name="home-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>

      {/* Profile Tab */}
      <TouchableOpacity style={styles.tabButton} onPress={() => router.push('/explore')}>
        <Ionicons name="person-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.tabText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fdecdf',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 30,
    
    // Add shadow for iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // Add elevation for Android
    elevation: 5,
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  tabText: {
    fontSize: 16,
    marginLeft: 5, // Add space between the icon and text
  },
  icon: {
    marginRight: 5, // Add some margin to the icon
  },
});
