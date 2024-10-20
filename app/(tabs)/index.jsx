// HomeScreen.jsx
import React, { useState } from 'react';
import { View, StyleSheet, Image, Button, Modal, Text, Alert } from 'react-native';
import GoalInput from '@/components/GoalInput.jsx';
import GoalList from '@/components/GoalList.jsx';
import GoalUpdateModal from '@/components/GoalUpdateModal.jsx';

export default function HomeScreen() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [goalToUpdate, setGoalToUpdate] = useState(null);
  const [updatedGoalText, setUpdatedGoalText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [exampleModal, setExampleModal] = useState(false);
  const handleOnShow = () =>{
    Alert.alert('Notice','Modal is shown');
  } 
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText('');
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== goalId);
    });
  }

  function startUpdateGoalHandler(goal) {
    setGoalToUpdate(goal);
    setUpdatedGoalText(goal.text);
    setModalVisible(true);
  }

  function saveUpdatedGoalHandler() {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.map((goal) =>
        goal.id === goalToUpdate.id ? { ...goal, text: updatedGoalText } : goal
      );
    });
    setModalVisible(false);
    setGoalToUpdate(null);
    setUpdatedGoalText('');
  }

  return (
    <View style={styles.appContainer}>
       <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/Goal1.png')}
          style={styles.image}
        />
      </View>
      <GoalInput
        enteredGoalText={enteredGoalText}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />
      <GoalList
        courseGoals={courseGoals}
        startUpdateGoalHandler={startUpdateGoalHandler}
        deleteGoalHandler={deleteGoalHandler}
      />
      <GoalUpdateModal
        modalVisible={modalVisible}
        updatedGoalText={updatedGoalText}
        setUpdatedGoalText={setUpdatedGoalText}
        saveUpdatedGoalHandler={saveUpdatedGoalHandler}
        setModalVisible={setModalVisible}
      />
      <View style={styles.modalContainer1}>
       <Button title="Show Finished Goals" onPress={() => setExampleModal(true)} />
        
       <Modal
        animationType="fade"               // animationType: 'none' | 'slide' | 'fade' 
        hardwareAccelerated={true}           // hardwareAccelerated: boolean
        onDismiss={() => console.log('Modal dismissed')} // onDismiss: Function (called after the modal is dismissed)
        onOrientationChange={(event) => console.log(event)} // onOrientationChange: Function (triggered when orientation changes)
        onRequestClose={() => setExampleModal(false)} // onRequestClose: Function (for Android's back button)
        presentationStyle="overFullScreen"  // presentationStyle: 'fullScreen' | 'pageSheet' | 'formSheet' | 'overFullScreen'
        statusBarTranslucent={false}          // statusBarTranslucent: boolean (for transparent status bar)
        supportedOrientations={['portrait', 'landscape']} // supportedOrientations: Array of orientations
        transparent={true}                  // transparent: boolean (if the modal's background should be transparent)
        visible={exampleModal}              // visible: boolean (modal visibility)
      >
        <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }, styles.modalBackground]}>
          <View style={{ width: 300, height: 200, backgroundColor: 'white', padding: 20, borderRadius: 30 }}>
            <Text style={{marginBottom: 20}}>Hello, no finished goals yet!</Text>
            <Button title="Hide Modal" onPress={() => setExampleModal(false)} />
          </View>
        </View>
      </Modal>
      </View> 
   
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer1: {
    marginBottom: 20,
    justifyContent: 'center',
  },
  goalListContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 10,
    marginBottom: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,  
    padding: 0,
  },
  image: {
    width: 200,  
    height: 110,
  },
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#bed2d5',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 13,
    marginRight: 8,
    width: '70%',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  textInputModal: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 13,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#577371',
    padding: 10,
    borderRadius: 5,
    width: '30%',
  },
  text: {
    color: 'white',
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  noGoalsText: {
    fontStyle: 'italic',
    color: 'gray',
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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#d9534f',
    padding: 10,
    borderRadius: 5,
  },
});