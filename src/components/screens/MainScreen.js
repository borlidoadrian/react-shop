import React from "react";
import { TouchableOpacity, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import ArticlesList from "../ArticlesList";
import Carousel from "../Carousel";
import SearchBar from "../SearchBar";

const MainScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Carousel />
      <SearchBar />
      <ArticlesList />
    </SafeAreaView>
  );
};

MainScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
        <Feather style={{ marginRight: 15 }} name="shopping-cart" size={30} />
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
