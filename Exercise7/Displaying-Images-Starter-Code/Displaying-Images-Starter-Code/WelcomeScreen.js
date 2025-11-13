import * as React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { ScrollView, Text, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen() {
  const { width, height, fontScale } = useWindowDimensions();

  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require('./img/logo.png')}
          style={styles.logo}
          resizeMode='contain'
        />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={styles.regularText}>Window Dimensions</Text>
        <Text style={styles.regularText}>Width: {width}</Text>
        <Text style={styles.regularText}>Height: {height}</Text>
        <Text style={styles.regularText}>Font scale: {fontScale}</Text>
      </View>
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
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 0,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  logo: {
    width: 100,
    height: 100
  }
});
