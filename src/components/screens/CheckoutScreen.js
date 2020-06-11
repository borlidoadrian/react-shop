import React, { Component } from "react";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CheckoutFooter from "../CheckoutFooter";
import Card from "../Card";

class CheckoutScreen extends Component {
  renderItem(item) {
    return <Card article={item} />;
  }

  removeDuplicates() {
    let set = new Set(this.props.cart);
    return [...set];
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <Text style={styles.header}>Shopping Cart</Text>
        <FlatList
          style={styles.list}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.removeDuplicates()}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.contentContainer}
        />
        <CheckoutFooter onPress={this.props.navigation.pop} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "space-between",
  },
  header: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 15,
    marginBottom: 25,
  },
  list: {},
});

CheckoutScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.pop()}>
        <AntDesign name="arrowleft" size={30} style={{ marginLeft: 15 }} />
      </TouchableOpacity>
    ),
    headerBackTitleVisible: false,
    title: null,
    headerStyle: {
      shadowColor: "transparent",
      borderBottomWidth: 0,
    },
  };
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.articles,
    totalPrice: state.cart.totalPrice,
  };
};

export default connect(mapStateToProps)(CheckoutScreen);
