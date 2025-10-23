import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyle.container}>
      <Text
        style={headerStyle.headerTitle}
      >
        Little Lemon
      </Text>
    </View>
  );
}

const headerStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14'
  },
  headerTitle: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center'
  }
})
