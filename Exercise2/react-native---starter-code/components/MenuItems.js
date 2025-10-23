import { ScrollView, Text, View, StyleSheet } from "react-native";

const menuItemsToDisplay = [
  'Hummus \nPanna Cotta \nTiramisu \nBruschetta \nSpaghetti Carbonara \nMargherita Pizza \nCaesar Salad \nMushroom Risotto \nGarlic Bread \nCaprese Salad \nLasagna \nFettuccine Alfredo \nGnocchi \nMinestrone Soup \nAntipasto Platter \nRavioli \nChicken Parmesan \nGelato \nCannoli \nEspresso \nLimoncello \nProsciutto e Melone \nArancini \nPolenta \nCaponata \nZuppa Toscana \nPesto Pasta \nPanini \nCalzone \nSeafood Risotto \nGrilled Vegetables \nAffogato \nCrostini \nTortellini \nRisotto ai Funghi \nPanzanella \nSaltimbocca \nOssobuco \nFocaccia \nRicotta Cheesecake'
];

const MenuItems = () => {

  return (
    <View style={menuStyle.container}>
      <ScrollView
        style={menuStyle.innerContainer}
        horizontal={false}
        indicatorStyle={'white'}
      >
        <Text style={menuStyle.headerText}>
          View Menu
        </Text>
        <Text style={menuStyle.itemText}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  )
}

export default MenuItems;

const menuStyle = StyleSheet.create({
  container: {
    flex: 0.75
  },
  innerContainer: {
    paddingHorizontal: 40,
    backgroundColor: '#495E57',
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap'
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 30
  }
})