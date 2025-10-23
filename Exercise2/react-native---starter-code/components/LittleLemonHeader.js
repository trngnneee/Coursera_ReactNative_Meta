import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyle.container}>
      <Text
        style={headerStyle.headerText}>
        Little Lemon
      </Text>
    </View>
  );
}

const headerStyle = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
    flex: 0.1
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center'
  }
})
