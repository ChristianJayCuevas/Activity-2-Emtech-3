import React from 'react';
import { Modal, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function GoalUpdateModal({
  modalVisible,
  updatedGoalText,
  setUpdatedGoalText,
  saveUpdatedGoalHandler,
  setModalVisible,
}) {
  return (
    <Modal visible={modalVisible} transparent={true} animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Update Goal</Text>
          <TextInput
            style={styles.textInputModal}
            value={updatedGoalText}
            onChangeText={setUpdatedGoalText}
            placeholder="Update your goal"
          />
          <View style={styles.modalButtonContainer}>
            <Pressable style={styles.button} onPress={saveUpdatedGoalHandler}>
              <Text style={styles.text}>Save</Text>
            </Pressable>
            <Pressable style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.text}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInputModal: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  cancelButton: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});