import React from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

const PurchaseDetailsFooter = ({ totalPrice }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.total}>Total:</Text>
        <Text style={styles.price}>${totalPrice}</Text>
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

const mapStateToProps = (state) => {
  return { totalPrice: Math.round(state.cart.totalPrice * 10) / 10 };
};

export default connect(mapStateToProps)(PurchaseDetailsFooter);
