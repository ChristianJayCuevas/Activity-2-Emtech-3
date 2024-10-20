import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

export default function GoalInput({ enteredGoalText, goalInputHandler, addGoalHandler }) {
  const [hoverColor, setHoverColor] = useState('#577371');
  const [buttonText, setButtonText] = useState('ADD GOAL');

  const handlePressIn = () => {
    setButtonText('GOAL ADDED');
  };

  const handlePressOut = () => {
    setButtonText('ADD GOAL');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Pressable
        style={[styles.button, { backgroundColor: hoverColor }]}
        onPress={addGoalHandler}
        android_disableSound={false}
        testOnly_pressed={true}
        android_ripple={{ color: 'white' }}
        pressRetentionOffset={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Text style={styles.text}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
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
});

