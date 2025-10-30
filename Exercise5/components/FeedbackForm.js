import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput } from "react-native";

export default function FeedbackForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headingSection}>How was your visit to Little Lemon?</Text>
      <Text style={styles.infoSection}>Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us! </Text>

        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.messageInput}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
        />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#F4CE14',
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#F4CE14',
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
}); 