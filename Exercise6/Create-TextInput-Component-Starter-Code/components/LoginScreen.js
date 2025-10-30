import { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Alert} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder='email'
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder='password'
        style={styles.input}
        secureTextEntry={true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    color: '#333333',
    margin: 10,
    padding: 5,
    borderRadius: 10
  }
});