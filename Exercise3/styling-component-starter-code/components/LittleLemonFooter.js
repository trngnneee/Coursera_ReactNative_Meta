import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={footerStyle.container}
    >
      <Text
        style={footerStyle.footerTitle}
      >
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

const footerStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
    marginBottom: 10,
  },
  footerTitle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  }
}) 