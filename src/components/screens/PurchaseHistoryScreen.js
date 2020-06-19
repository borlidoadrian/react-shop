import React from "react";
import { SafeAreaView } from "react-native";
import HistoryList from "../HistoryList";

const PurchaseHistoryScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <HistoryList />
    </SafeAreaView>
  );
};

PurchaseHistoryScreen.navigationOptions = ({ navigation }) => {
  return {
    title: null,
    headerStyle: {
      shadowColor: "transparent",
      borderBottomWidth: 0,
    },
  };
};

export default PurchaseHistoryScreen;