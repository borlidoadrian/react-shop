import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MainScreen from "./src/components/screens/MainScreen";
import CheckoutScreen from "./src/components/screens/CheckoutScreen";
import PurchaseHistoryScreen from "./src/components/screens/PurchaseHistoryScreen";
import PurchaseDetailsScreen from "./src/components/screens/PurchaseDetailsScreen";
import LoginScreen from "./src/components/screens/LoginScreen";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers/reducers";
import { StatusBar } from "react-native";
import ReduxThunk from "redux-thunk";
import { FontAwesome5 } from "@expo/vector-icons";

const navigator = createSwitchNavigator({
  Login: LoginScreen,
  mainFlow: createBottomTabNavigator(
    {
      storeFlow: {
        screen: createStackNavigator({
          Main: MainScreen,
          Checkout: CheckoutScreen,
        }),
        navigationOptions: {
          title: "Store",
          tabBarIcon: () => {
            return <FontAwesome5 name="store" size={22} color="#2d3436" />;
          },
        },
      },
      historyFlow: {
        screen: createStackNavigator({
          PurchaseHistory: PurchaseHistoryScreen,
          PurchaseDetails: PurchaseDetailsScreen,
        }),
        navigationOptions: {
          title: "Purchases",
          tabBarIcon: () => {
            return <FontAwesome5 name="history" size={22} color="#2d3436" />;
          },
        },
      },
    },
    {
      tabBarOptions: {
        inactiveTintColor: "#2d3436",
        activeTintColor: "#2d3436",
        activeBackgroundColor: "#bdc3c7",
        style: {
          backgroundColor: "#eeeff4",
        },
      },
    }
  ),
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
