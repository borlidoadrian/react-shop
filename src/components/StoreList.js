import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Text, StyleSheet, SectionList } from "react-native";
import Separator from "./Separator";
import StoreItem from "./StoreItem";
import * as actions from "../actions/DataActions";

const StoreList = ({ products, searchResults, getProducts }) => {
  const renderItem = (article) => {
    return <StoreItem article={article} />;
  };

  const sections = () => {
    let sections = [];

    if (searchResults.length) {
      sections.push({
        title: "Results",
        data: searchResults,
        keyExtractor: (article) => article.id,
        renderItem: renderItem,
      });
    } else {
      products.categories.forEach((category) => {
        sections.push({
          title: category.name,
          data: category.products,
          keyExtractor: (product) => product.id,
          renderItem: renderItem,
        });
      });
    }

    return sections;
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SectionList
      sections={sections()}
      keyExtractor={(item, index) => item.id + index}
      ItemSeparatorComponent={() => <Separator />}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    paddingVertical: 10,
    paddingLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "white",
  },
});

const mapStateToProps = (state) => {
  return {
    products: state.data.products,
    searchResults: state.search.results,
  };
};

export default connect(mapStateToProps, actions)(StoreList);
