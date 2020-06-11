import React, { Component, useState } from "react";
import { connect } from "react-redux";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";

class Carousel extends Component {
  renderItem(article) {
    return (
      <ImageBackground
        source={{ uri: article.item.image }}
        style={styles.image}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Product of the month</Text>
          <Text style={styles.subtitle}>{article.item.title}</Text>
        </View>
      </ImageBackground>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.props.publicity}
          keyExtractor={(article) => article.title}
          renderItem={this.renderItem}
          style={styles.list}
          pagingEnabled
          snapToAlignment={"start"}
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").width - 30}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    margin: 15,
    borderRadius: 4,
  },
  image: {
    width: Dimensions.get("window").width - 30,
    height: 180,
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  title: {
    marginLeft: 15,
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 0.5,
  },
  subtitle: {
    marginLeft: 15,
    marginBottom: 15,
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    textShadowColor: "black",
    textShadowRadius: 0.5,
  },
});

const mapStateToProps = (state) => {
  return { publicity: state.data.publicity };
};

export default connect(mapStateToProps)(Carousel);
