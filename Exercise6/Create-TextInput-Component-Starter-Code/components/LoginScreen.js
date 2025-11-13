import { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Alert, Pressable } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLogin, setIsLogin] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {!isLogin ? (
        <>
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
          <Pressable style={styles.button} onPress={() => {
            if (email.length <= 0 || password.length <= 0)
            {
              Alert.alert("Please fill in the email and password!");
            }
            else
            {
              setIsLogin(true);
            }
          }}>
            {/* <Text style={styles.buttonText}>Login</Text> */}
          </Pressable>
        </>
      ) : (
        <>
          <Text style={styles.headerText}>You are logged in!</Text>
        </>
      )}
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
  },
  button: {
    backgroundColor: '#EE9972',
    justifyContent: 'center',
    marginHorizontal: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
});