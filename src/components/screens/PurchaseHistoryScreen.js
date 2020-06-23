import React from "react";
import { SafeAreaView } from "react-native";
import HistoryList from "../HistoryList";

const PurchaseHistoryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <HistoryList navigation={navigation} />
    </SafeAreaView>
  );
};

PurchaseHistoryScreen.navigationOptions = () => {
  return {
    title: null,
    headerStyle: {
      shadowColor: "transparent",
      borderBottomWidth: 0,
    },
  };
};

export default PurchaseHistoryScreen;
