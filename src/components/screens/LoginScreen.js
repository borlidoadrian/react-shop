import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="LOGIN"
        onPress={() => {
          login().then((token) => {
            storeToken(token).then(navigation.navigate("mainFlow"));
          });
        }}
      />
    </View>
  );
};

async function login() {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 3000 + 500)
  );
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  return Array.from({ length: 36 }, (_, i) => i)
    .map(() => characters.charAt(Math.floor(Math.random() * charactersLength)))
    .join("");
}

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem("@token", token);
  } catch (e) {
    console.log(e);
  }
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

export default LoginScreen;
