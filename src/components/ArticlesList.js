import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, StyleSheet, SectionList } from "react-native";
import Separator from "./Separator";
import ListItem from "./ListItem";

class ArticlesList extends Component {
  renderItem(article) {
    return <ListItem article={article} />;
  }

  sections() {
    let sections = [];
    this.props.categories.forEach((category) => {
      sections.push({
        title: category.name,
        data: category.articles,
        keyExtractor: (article) => article.id,
        renderItem: this.renderItem,
      });
    });
    return sections;
  }

  render() {
    return (
      <SectionList
        sections={this.sections()}
        keyExtractor={(item, index) => item.id + index}
        ItemSeparatorComponent={() => <Separator />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      />
    );
  }
}

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
  return { categories: state.data.categories };
};

export default connect(mapStateToProps)(ArticlesList);
