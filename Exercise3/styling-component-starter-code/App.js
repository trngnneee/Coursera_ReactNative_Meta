import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';

export default function App() {
  return (
    <>
      <View
        style={style.HeaderContainer}
      >
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View 
        style={style.FooterContainer}
      >
        <LittleLemonFooter />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  HeaderContainer: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  FooterContainer: {
    backgroundColor: '#495E57'
  }
})