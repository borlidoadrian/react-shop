import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

class NavigationCartIcon extends Component {
  render() {
    return (
      <>
        {this.props.cart.length > 0 && <View style={styles.dotView} />}
        <Feather style={{ marginRight: 15 }} name="shopping-cart" size={30} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  dotView: {
    position: "absolute",
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#6b44d8",
    right: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
  },
});

const mapStateToProps = (state) => {
  return {
    cart: state.cart.articles,
  };
};

export default connect(mapStateToProps)(NavigationCartIcon);
