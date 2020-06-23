import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Dots from "react-native-dots-pagination";
import * as actions from "../reducers/dataReducer";

const Carousel = ({ promoted, isLoading }) => {
  const [index, setIndex] = useState(0);

  const onViewableItemsChanged = React.useRef((info) => {
    setIndex(info.changed[0].index);
  });

  const renderItem = (product) => {
    return (
      <ImageBackground
        source={{ uri: product.item.photoUrl }}
        style={styles.image}
        defaultSource={require("../../assets/loadingImage.png")}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{product.item.description}</Text>
          <Text style={styles.subtitle}>{product.item.name}</Text>
        </View>
      </ImageBackground>
    );
  };

  return isLoading ? (
    <ActivityIndicator size="large" style={styles.activityIndicator} />
  ) : (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={promoted}
        keyExtractor={(product) => product.name}
        renderItem={renderItem}
        style={styles.list}
        pagingEnabled
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").width - 30}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />
      <Dots
        passiveDotWidth={8}
        passiveDotHeight={8}
        activeDotHeight={10}
        activeDotWidth={10}
        length={promoted.length}
        active={index}
      />
    </View>
  );
};

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
  activityIndicator: {
    height: 220,
  },
});

const mapStateToProps = (state) => {
  return {
    promoted: state.data.promoted,
    isLoading: state.data.loadingPromoted,
  };
};

export default connect(mapStateToProps, actions)(Carousel);
