import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const PurchaseDetailsFooter = ({ total }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.total}>Total:</Text>
        <Text style={styles.price}>${total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 25,
    marginHorizontal: 25,
  },
  total: {
    fontSize: 25,
  },
  price: {
    fontWeight: "bold",
    fontSize: 35,
  },
});

export default connect()(PurchaseDetailsFooter);
