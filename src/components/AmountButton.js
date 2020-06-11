import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as actions from "../actions/CartActions";

class AmountButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            //Remove 1 item of the cart
            this.props.removeArticle(this.props.article);
          }}
        >
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{this.props.quantity}</Text>
        <TouchableOpacity
          onPress={() => {
            //Add 1 item to the cart
            this.props.addArticle(this.props.article);
          }}
        >
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    borderColor: "lightgrey",
    borderWidth: 2,
    flexDirection: "row",
    marginRight: 15,
    height: 36,
    width: 100,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 7,
  },
});

export default connect(null, actions)(AmountButton);
