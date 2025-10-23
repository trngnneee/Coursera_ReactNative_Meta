import { StyleSheet, View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import MenuItems from './components/MenuItems';
export default function App() {
  return (
    <>
      <View
        style={style.container}
      >
        <LittleLemonHeader />
        <MenuItems />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57"
  }
})
