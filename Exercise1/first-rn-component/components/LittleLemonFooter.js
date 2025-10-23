import { Text, View } from "react-native";

export default function LittleLemonFooter(){
  return (
    <View
      style={{ backgroundColor: '#F4CE14' }}
    >
      <Text
        style={{
          padding: 10,
          fontSize: 16,
          color: 'black',
          textAlign: 'center',
        }}
      >
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}