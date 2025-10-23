import { ScrollView, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <>
      <View
        style={{
          padding: 40
        }}
      >
        <ScrollView>
          <Text
            style={{
              fontSize: 50,
              textAlign: "center",
              marginTop: 40,
              color: "white"
            }}
          >
            Welcome to Little Lemon
          </Text>
          <Text
            style={{
              fontSize: 38,
              textAlign: "center",
              marginTop: 40,
              color: "white"
            }}
          >
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
          </Text>
        </ScrollView>
      </View>
    </>
  );
}