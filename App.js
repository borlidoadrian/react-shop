import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./src/components/screens/MainScreen";
import CheckoutScreen from "./src/components/screens/CheckoutScreen";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers/reducers";
import { StatusBar } from "react-native";

const navigator = createStackNavigator(
  {
    Main: MainScreen,
    Checkout: CheckoutScreen,
  },
  {
    initialRouteName: "Main",
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={createStore(reducers)}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <App />
    </Provider>
  );
};
