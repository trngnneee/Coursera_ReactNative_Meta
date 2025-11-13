import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

import SubscribeScreen from "./SubscribeScreen";
import WelcomeScreen from "./WelcomeScreen";

function LogoTitle(){
  return <Image
    source={require('./../img/logo.png')}
    style={{
      height: 40,
      width: 300,
      resizeMode: 'contain',
      alignSelf: 'center'
    }}
  />
}

export default function Index() {
  return (
    <>
      {/* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#333333",
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen
          options={{ 
            title: "Home", 
            headerTitle: () => <LogoTitle /> 
          }}
          name="Home"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator> */}

      {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon({ focused, color, size }) {
              let icon;
              if (route.name == 'Home')
              {
                icon = <FontAwesome name="home" size={24} color="black" />
              }
              else if (route.name == 'Login')
              {
                icon = <AntDesign name="user-add" size={24} color="black" />
              }
              return icon
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray'
        })}
      >
        <Tab.Screen
          name="Home"
          component={WelcomeScreen}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
        />
      </Tab.Navigator> */}

      {/* <Drawer.Navigator 
        useLegacyImplementation
        screenOptions={{
          drawerPosition: 'left'
        }}
      >
        <Drawer.Screen name="Home" component={WelcomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator> */}

      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Subscribe" component={SubscribeScreen} />
      </Stack.Navigator>
    </>
  )
}
