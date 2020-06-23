import React from "react";
import { StatusBar } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MainScreen from "./src/components/screens/MainScreen";
import CheckoutScreen from "./src/components/screens/CheckoutScreen";
import PurchaseHistoryScreen from "./src/components/screens/PurchaseHistoryScreen";
import PurchaseDetailsScreen from "./src/components/screens/PurchaseDetailsScreen";
import LoginScreen from "./src/components/screens/LoginScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducers from "./src/reducers/reducers";

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
  // const composeStoreWithMiddleware = applyMiddleware(promise, ReduxThunk);

  const store = createStore(reducers, compose(applyMiddleware(thunk, promise)));

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <App />
    </Provider>
  );
};
