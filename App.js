import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MainScreen from "./src/components/screens/MainScreen";
import CheckoutScreen from "./src/components/screens/CheckoutScreen";
import PurchaseHistoryScreen from "./src/components/screens/PurchaseHistoryScreen";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers/reducers";
import { StatusBar } from "react-native";
import ReduxThunk from "redux-thunk";

const navigator = createBottomTabNavigator({
  mainFlow: createStackNavigator({
    Main: MainScreen,
    Checkout: CheckoutScreen,
  }),
  PurchaseHistory: PurchaseHistoryScreen,
});

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
