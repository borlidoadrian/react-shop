import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";

const PurchaseDetailsScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={styles.header}>Purchase Details</Text>
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

PurchaseDetailsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.pop()}>
        <AntDesign name="arrowleft" size={30} style={{ marginLeft: 15 }} />
      </TouchableOpacity>
    ),
    headerBackTitleVisible: false,
    title: null,
    headerStyle: {
      shadowColor: "transparent",
      borderBottomWidth: 0,
    },
  };
};

export default PurchaseDetailsScreen;
