import React from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import NavigationCartIcon from "../NavigationCartIcon";

const PurchaseHistoryScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Text>HISTORY</Text>
    </SafeAreaView>
  );
};

PurchaseHistoryScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
        <NavigationCartIcon />
      </TouchableOpacity>
    ),
    title: null,
    headerStyle: {
      shadowColor: "transparent",
      borderBottomWidth: 0,
    },
  };
};

export default PurchaseHistoryScreen;
