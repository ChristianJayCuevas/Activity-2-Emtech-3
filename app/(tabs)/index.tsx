import { StyleSheet, View, Pressable, Text, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return; // Prevent adding empty goals
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }, // Add unique ID
    ]);
    setEnteredGoalText(''); // Clear input after adding a goal
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText} // Bind input value to state
        />
        <Pressable style={styles.button} onPress={addGoalHandler}>
          <Text style={styles.text}>ADD GOAL</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.goalsContainer}>
        <Text style={styles.headingText}>Course Goals:</Text>
        {courseGoals.length === 0 ? (
          <Text style={styles.noGoalsText}>No goals added yet.</Text>
        ) : (
          courseGoals.map((goal) => (
            <View key={goal.id} style={styles.goalCard}>
              <Text style={styles.goalText}>{goal.text}</Text>
              <Pressable onPress={() => deleteGoalHandler(goal.id)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>X</Text>
              </Pressable>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
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
  goalsContainer: {
    paddingBottom: 20,
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
  deleteButtonText: {
    color: 'red',
    textAlign: 'right',
  }
});
