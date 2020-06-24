import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";
import * as actions from "../../reducers/authReducer";
import ShadowButton from "../ShadowButton";

const LoginScreen = ({ navigation, login }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.image}
      />
      <ShadowButton
        title="GET IN"
        onPress={() => {
          login().then(navigation.navigate("mainFlow"));
        }}
      />
    </SafeAreaView>
  );
};

LoginScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6b44d8",
    opacity: 0.9,
    justifyContent: "space-evenly",
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: "center",
    tintColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
});

export default connect(null, actions)(LoginScreen);
