import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, StyleSheet } from "react-native";
import AddButton from "./AddButton";
import AmountButton from "./AmountButton";

class ListItem extends Component {
  contains = (article) => {
    // Checks if array contains the article
    let articleExists = false;
    this.props.cart.forEach((p) => {
      if (article.id === p.id) {
        articleExists = true;
      }
    });
    return articleExists;
  };

  quantity = (article) => {
    // Returns the amount of articles with the same id
    let count = 0;
    this.props.cart.forEach((p) => {
      if (article.id === p.id) {
        count++;
      }
    });
    return count;
  };

  render() {
    const article = this.props.article.item;

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: article.image }} />
        <View style={styles.view}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.subtitle}>{"$" + article.price}</Text>
        </View>
        {this.contains(article) ? (
          <AmountButton article={article} quantity={this.quantity(article)} />
        ) : (
          <AddButton article={article} />
        )}
      </View>
    );
  }
}

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
    // Removing black color of the border in some images
    // Should find and reupload other images
    borderWidth: 0.5,
    borderColor: "white",
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

export default connect(mapStateToProps)(ListItem);
