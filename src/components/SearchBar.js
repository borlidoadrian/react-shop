import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { connect } from "react-redux";

class SearchBar extends Component {
  //term, onTermChange, onTermSubmit
  render() {
    return (
      <View style={styles.background}>
        <EvilIcons name="search" style={styles.icon} />
        <TextInput
          placeholder="Search"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={this.props.term}
          onChangeText={this.props.onTermChange}
          onEndEditing={this.props.onTermSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#eeeff4",
    height: 40,
    borderRadius: 25,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
  icon: {
    fontSize: 20,
    alignSelf: "center",
    marginHorizontal: 15,
    color: "grey",
  },
});

export default connect()(SearchBar);
