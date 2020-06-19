import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import AddButton from "./AddButton";

const HistoryItem = ({ article }) => {
  const product = article.item;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.photoUrl }}
        defaultSource={require("../../assets/placeholder.jpg")}
      />
      <View style={styles.view}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.subtitle}>{"$" + product.price}</Text>
      </View>
      <AddButton article={product} />
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
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 15,
    borderWidth: 0.5,
    borderColor: "black",
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

export default HistoryItem;
