import * as React from 'react';
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Image, View } from 'react-native';

export default function WelcomeScreen() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <KeyboardAvoidingView
      styl={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <ScrollView indicatorStyle="white" keyboardDismissMode='on-drag'>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image
            source={require('./../img/logo.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.regularText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would love
          to hear more about your experience with us!
        </Text>
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          placeholder='First Name'
          style={styles.input}
          secureTextEntry={true}
        />
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          placeholder='Last Name'
          style={styles.input}
        />
        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder='Phone'
          style={styles.input}
          keyboardType='phone-pad'
        />
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder='Message'
          style={styles.messageInput}
          multiline={true}
          maxLength={250}
        />
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20
        }}>
          <Image
            source={require("./../img/img1.png")}
            style={styles.img}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  messageInput: {
    backgroundColor: 'white',
    color: '#333333',
    margin: 10,
    padding: 5,
    borderRadius: 10,
    height: 100
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: 'contain',
  },
  img: {
    height: 300,
    width: 300,
    resizeMode: 'center',
  }
});
