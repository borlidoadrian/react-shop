import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import * as actions from "../actions/CartActions";

class Card extends Component {
  quantity = (article) => {
    // Returns amount of articles with the same id
    return this.props.cart.filter((p) => p.id === article.id).length;
  };

  render() {
    return (
      <>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={{ uri: this.props.article.image }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{this.props.article.title}</Text>
            <Text style={styles.price}>${this.props.article.price}</Text>
          </View>
          <Text style={styles.subtitle}>
            {this.quantity(this.props.article)} units
          </Text>
        </TouchableOpacity>
      </>
    );
  }
}

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
    // Removing black color of the border in some images
    // Should find and reupload other images
    borderWidth: 0.5,
    borderColor: "white",
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

const mapStateToProps = (state) => {
  return {
    cart: state.cart.articles,
  };
};

export default connect(mapStateToProps, actions)(Card);
