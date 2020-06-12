import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import Dots from "react-native-dots-pagination";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  onViewableItemsChanged = ({ viewableItems, changed }) => {
    this.setState({
      index: changed[0].index,
    });
  };

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
          onViewableItemsChanged={this.onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
        />
        <Dots
          passiveDotWidth={8}
          passiveDotHeight={8}
          activeDotHeight={10}
          activeDotWidth={10}
          length={this.props.publicity.length}
          active={this.state.index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    margin: 15,
    marginBottom: 5,
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
