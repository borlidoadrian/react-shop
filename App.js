import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./src/components/screens/MainScreen";
import CheckoutScreen from "./src/components/screens/CheckoutScreen";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers/reducers";
import { StatusBar } from "react-native";
import ReduxThunk from "redux-thunk";

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
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <App />
    </Provider>
  );
};
