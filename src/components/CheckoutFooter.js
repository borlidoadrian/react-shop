import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as actions from "../actions/CartActions";

class CheckoutFooter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.price}>${this.props.totalPrice}</Text>
        </View>
        <TouchableOpacity
          disabled={this.props.totalPrice === 0}
          onPress={() => {
            this.presentAlert();
          }}
        >
          <View
            style={
              this.props.totalPrice === 0
                ? styles.buttonContainerDisabled
                : styles.buttonContainer
            }
          >
            <Text style={styles.text}>Checkout</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  presentAlert() {
    Alert.alert(
      "The purchase was successful",
      null,
      [
        {
          text: "OK",
          onPress: () => {
            this.props.emptyCart();
            this.props.onPress();
          },
        },
      ],
      { cancelable: false }
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#502bf2",
    height: 60,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  buttonContainerDisabled: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "black",
    opacity: 0.1,
    height: 60,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
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
  return { totalPrice: state.cart.totalPrice };
};

export default connect(mapStateToProps, actions)(CheckoutFooter);
