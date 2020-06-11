import React, { Component } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import * as actions from "../actions/SearchActions";

class SearchBar extends Component {
  render() {
    return (
      <View style={styles.background}>
        <EvilIcons name="search" style={styles.icon} />
        <TextInput
          placeholder="Search"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={this.props.search.searchTerm}
          onChangeText={this.props.setTerm}
          onEndEditing={() => {
            this.props.searchItem(this.props.search.searchTerm);
          }}
        />
        {this.props.search.searchTerm !== "" && (
          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={this.props.clear}
          >
            <MaterialIcons name="clear" style={styles.icon} />
          </TouchableOpacity>
        )}
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
    marginHorizontal: 10,
    color: "grey",
  },
});

const mapStateToProps = (state) => {
  return { search: state.search };
};

export default connect(mapStateToProps, actions)(SearchBar);
