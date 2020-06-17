import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const Card = ({ article }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: article.photoUrl }}
        defaultSource={require("../../assets/loadingImage.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{article.name}</Text>
        <Text style={styles.price}>${article.price}</Text>
      </View>
      <Text style={styles.subtitle}>{article.quantity} units</Text>
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

export default Card;
