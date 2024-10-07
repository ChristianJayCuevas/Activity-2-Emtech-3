import { Image, StyleSheet, Platform, View, Button, Pressable, Text, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal!"/>
        <Pressable />
      </View>
      <View style={styles.newContainer}>
        <Text>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  newContainer: {
    justifyContent: 'center',
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
    padding: 13,
    marginRight: 8,
    marginTop: 8,
    width: '70%',
  }
});

const styles2 = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'blue',
    color: 'white',
    padding: 16,
  },
};