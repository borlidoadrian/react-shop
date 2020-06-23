import React from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as actions from "../reducers/cartReducer";

const AddButton = ({ article, addArticle }) => {
  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => {
        //Add 1 item to the cart
        addArticle(article);
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Add</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    borderColor: "#6b44d8",
    borderWidth: 2,
    height: 36,
    width: 100,
  },
  text: {
    fontWeight: "bold",
    color: "#6b44d8",
    fontSize: 15,
  },
  touchableOpacity: {
    marginRight: 15,
  },
});

export default connect(null, actions)(AddButton);
