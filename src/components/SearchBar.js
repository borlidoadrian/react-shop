import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import * as actions from "../actions/SearchActions";

const SearchBar = ({ data, search, searchItem, clear, setTerm }) => {
  return (
    <View style={styles.background}>
      <EvilIcons name="search" style={styles.icon} />
      <TextInput
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={search.searchTerm}
        onChangeText={setTerm}
        onEndEditing={() => {
          search.searchTerm !== "" &&
            searchItem(search.searchTerm, data.categories);
        }}
      />
      {search.searchTerm !== "" && (
        <TouchableOpacity style={{ alignSelf: "center" }} onPress={clear}>
          <MaterialIcons name="clear" style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

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
  return { data: state.data, search: state.search };
};

export default connect(mapStateToProps, actions)(SearchBar);
