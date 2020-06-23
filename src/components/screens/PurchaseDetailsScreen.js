import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import DetailsCard from "../DetailsCard";
import PurchaseDetailsFooter from "../PurchaseDetailsFooter";

const PurchaseDetailsScreen = ({ navigation }) => {
  const purchase = navigation.getParam("purchase");
  const totalPrice = navigation.getParam("price");

  const renderItem = (item) => {
    return <DetailsCard product={item} />;
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={styles.header}>Purchase Details</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={purchase.products}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
      />
      <PurchaseDetailsFooter total={totalPrice} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "space-between",
  },
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
