import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, Pressable, StyleSheet, Modal, Button } from 'react-native';

export default function GoalList({ courseGoals, startUpdateGoalHandler, deleteGoalHandler }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [goalToDelete, setGoalToDelete] = useState(null); 

  const handleDelete = (goal) => {
    setGoalToDelete(goal);  
    setIsDeleteModalVisible(true); 
  };

  const confirmDeleteHandler = () => {
    deleteGoalHandler(goalToDelete.id);  
    setIsDeleteModalVisible(false);  
    setGoalToDelete(null); 
  };

  useEffect(() => {
    if (courseGoals.length > 5) {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(false);
    }
  }, [courseGoals]);

 

  return (
    <View style={styles.goalListContainer}>
      <Text style={styles.headingText}>Course Goals:</Text>
      <FlatList
        data={courseGoals}
        renderItem={({ item }) => (
          <View style={styles.goalCard}>
            <Text style={styles.goalText}>{item.text}</Text>
            <View style={styles.goalActions}>
              <Pressable onPress={() => startUpdateGoalHandler(item)}>
                <Text style={styles.updateButtonText}>Update</Text>
              </Pressable>
              <Pressable onPress={() => handleDelete(item)}>
                <Text style={styles.deleteButtonText}>X</Text>
              </Pressable>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.noGoalsText}>No goals added yet.</Text>}
      />

      {/* Modal to warn about too many goals */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>You have more than 5 goals. Don't overwhelm yourself!</Text>
            <Button title="OK" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <Modal
        visible={isDeleteModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsDeleteModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to delete "{goalToDelete?.text}"?
            </Text>
            <View style={styles.modalActions}>
              <Button title="Delete" onPress={confirmDeleteHandler} color="red" />
              <Button title="Cancel" onPress={() => setIsDeleteModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  goalListContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 10,
    marginBottom: 20,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  goalCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  goalText: {
    fontSize: 16,
  },
  goalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  updateButtonText: {
    color: 'blue',
  },
  deleteButtonText: {
    color: 'red',
  },
  noGoalsText: {
    textAlign: 'center',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
