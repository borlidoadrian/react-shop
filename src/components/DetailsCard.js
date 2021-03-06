import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const DetailsCard = ({ product }) => {
  const article = product.product;

  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: article.photoUrl }}
        defaultSource={require("../../assets/placeholder.jpg")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{article.name}</Text>
        <Text style={styles.price}>${Math.round(article.price * 10) / 10}</Text>
      </View>
      <Text style={styles.subtitle}>{product.quantity} units</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 10,
    marginHorizontal: 10,
  },
  image: {
    aspectRatio: 1,
    borderRadius: 8,
    height: Dimensions.get("window").width / 2,
  },
  title: {
    fontWeight: "bold",
  },
  price: {
    color: "grey",
  },
  subtitle: {
    color: "grey",
    marginLeft: 10,
    fontSize: 12,
  },
});

export default DetailsCard;
