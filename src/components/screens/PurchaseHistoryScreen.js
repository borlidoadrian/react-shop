import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import HistoryList from "../HistoryList";

const PurchaseHistoryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={styles.header}>Purchase History</Text>
      <HistoryList navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 15,
    marginBottom: 25,
  },
});

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
