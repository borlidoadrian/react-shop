import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const HistoryItem = ({ article }) => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.title}>{new Date(article.date).toString()}</Text>
        <Text style={styles.subtitle}>{"$" + getPrice(article)}</Text>
      </View>
      <Button title="DETAILS" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  view: {
    flex: 2,
    paddingLeft: 15,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 16,
  },
  subtitle: {
    color: "grey",
  },
});

const getPrice = (purchase) => {
  let total = 0;

  purchase.products.forEach((e) => {
    for (let i = 0; i < e.quantity; i++) {
      total += e.product.price;
    }
  });

  return total;
};

export default HistoryItem;
