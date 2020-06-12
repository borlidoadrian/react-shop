import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import NavigationCartIcon from "../NavigationCartIcon";
import StoreList from "../StoreList";
import Carousel from "../Carousel";
import SearchBar from "../SearchBar";

const MainScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Carousel />
      <SearchBar />
      <StoreList />
    </SafeAreaView>
  );
};

MainScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
        <NavigationCartIcon />
      </TouchableOpacity>
    ),
    title: null,
    headerStyle: {
      shadowColor: "transparent",
      borderBottomWidth: 0,
    },
  };
};

export default MainScreen;
