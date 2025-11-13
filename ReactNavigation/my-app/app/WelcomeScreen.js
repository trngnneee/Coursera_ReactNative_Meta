import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={styles.imageContainer}
        >
          <Image
            source={require("./../img/little-lemon-logo.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>Little Lemon, your local Mediterranean Bistro</Text>
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Subscribe')}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </>
  )
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 250,
    height: 250,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    marginHorizontal: 40,
    fontWeight: 'bold',
    marginTop: 30
  },
  button: {
    marginBottom: 50,
    backgroundColor: '#495E57',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  }
})