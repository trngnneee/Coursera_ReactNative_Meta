import { SectionList, StyleSheet, Text, View } from "react-native";

export default function MenuItems() {
  const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        'Hummus',
        'Moutabal',
        'Falafel',
        'Marinated Olives',
        'Kofta',
        'Eggplant Salad',
      ],
    },
    {
      title: 'Main Dishes',
      data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
    },
    {
      title: 'Sides',
      data: [
        'Fries',
        'Buttered Rice',
        'Bread Sticks',
        'Pita Pocket',
        'Lentil Soup',
        'Greek Salad',
        'Rice Pilaf',
      ],
    },
    {
      title: 'Desserts',
      data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
    },
  ];

  const Seperator = () => <View style={menuItemsStyle.seperator} />

  const Header = () => <Text style={menuItemsStyle.headerText}>View Menu</Text>
  const Footer = () => <Text style={menuItemsStyle.footerText}>All Rights Reserved by Little Lemon 2022</Text>

  const Item = ({ name }) => {
    return (
      <View
        style={menuItemsStyle.container}
      >
        <Text
          style={menuItemsStyle.menuText}
        >
          {name}
        </Text>
      </View>
    )
  }

  const renderItem = ({ item }) => <Item name={item} />
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuItemsStyle.sectionHeader}>{title}</Text>
  )

  return (
    <SectionList
      keyExtractor={(item, index) => item + index}
      sections={menuItemsToDisplay}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      ItemSeparatorComponent={Seperator}
      ListHeaderComponent={Header}
      ListFooterComponent={Footer}
    />
  )
}

const menuItemsStyle = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 30
  },
  menuText: {
    color: '#F4CE14',
    fontSize: 20
  },
  seperator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE"
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  footerText: {
    olor: '#EDEFEE',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  sectionHeader: {
    backgroundColor: '#fbdabb',
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
})