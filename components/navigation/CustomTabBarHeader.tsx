import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import { useRouter } from 'expo-router';

export function CustomTabBarHeader() {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleProfileClick = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      router.push('/explore'); 
    }, 2000); 
  };

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity style={styles.tabButton} onPress={() => router.push('/')}>
        <Ionicons name="home" size={24} color="black" style={styles.icon} />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabButton} onPress={handleProfileClick}>
        <Ionicons name="person" size={24} color="black" style={styles.icon} />
        <Text style={styles.tabText}>Profile</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.welcomeText}>Welcome to your profile!</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
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
    marginLeft: 5, 
  },
  icon: {
    marginRight: 5, 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
