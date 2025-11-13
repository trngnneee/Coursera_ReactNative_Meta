import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SubscribeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={styles.imageContainer}
        >
          <Image
            source={require("./../img/logo.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>Subscribe to our newsletter for our latest delicious recipes!</Text>
        <TextInput textContentType='email' style={styles.input} placeholder='Type your email'/>
        <Pressable style={styles.button} onPress={() => alert('Thanks for subscribing stay tuned!')}>
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </View>
    </>
  )
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50
  },
  imageContainer: {
    width: 100,
    height: 100,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 40,
    marginTop: 30
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    marginTop: 20,
    borderRadius: 5
  },  
  button: {
    height: 40,
    width: '90%',
    marginBottom: 50,
    backgroundColor: '#495E57',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  }
})