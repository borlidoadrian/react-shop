import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ShadowButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: "white",
    height: 50,
    marginHorizontal: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
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

export default ShadowButton;
