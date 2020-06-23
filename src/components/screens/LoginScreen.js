import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Button, Text } from "react-native";
import * as actions from "../../reducers/authReducer";

const LoginScreen = ({ navigation, login }) => {
  return (
    <View style={styles.container}>
      <Button
        title="LOGIN"
        onPress={() => {
          login().then(navigation.navigate("mainFlow"));
        }}
      />
    </View>
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
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default connect(null, actions)(LoginScreen);
