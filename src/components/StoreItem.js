import React from "react";
import { connect } from "react-redux";
import { Text, View, Image, StyleSheet } from "react-native";
import AddButton from "./AddButton";
import AmountButton from "./AmountButton";

const StoreItem = ({ cart, article }) => {
  const product = article.item;

  const contains = (product) => {
    // Checks if array contains the product
    return cart.findIndex((element) => element.id == product.id) !== -1;
  };

  const quantity = (product) => {
    let index = cart.findIndex((element) => element.id == product.id);
    return cart[index].quantity;
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          product.photoUrl
            ? { uri: product.photoUrl }
            : require("../../assets/placeholder.jpg")
        }
      />
      <View style={styles.view}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.subtitle}>{"$" + product.price}</Text>
      </View>
      {contains(product) ? (
        <AmountButton article={product} quantity={quantity(product)} />
      ) : (
        <AddButton article={product} />
      )}
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

const mapStateToProps = (state) => {
  return { cart: state.cart.articles };
};

export default connect(mapStateToProps)(StoreItem);
