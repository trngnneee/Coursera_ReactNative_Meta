import { Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <LittleLemonHeader />

      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: "white",
            flex: 1,
            justifyContent: "center"
          }}
        >
          Welcome to Little Lemon
        </Text>
      </View>

      <LittleLemonFooter />
    </View>
  );
}
