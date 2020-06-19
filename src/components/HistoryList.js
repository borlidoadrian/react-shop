import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import Separator from "./Separator";
import HistoryItem from "./HistoryItem";
import * as actions from "../actions/DataActions";

const HistoryList = ({ purchases, getPurchases, isLoading, refresh }) => {
  const renderItem = (article) => {
    return <HistoryItem article={article} />;
  };

  useEffect(() => {
    getPurchases();
  }, [refresh]);

  return isLoading ? (
    <ActivityIndicator size="large" />
  ) : (
    <FlatList
      ItemSeparatorComponent={() => <Separator />}
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      data={purchases}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.date}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {},
});

const mapStateToProps = (state) => {
  return {
    purchases: state.data.purchases,
    isLoading: state.data.loadingPurchases,
    refresh: state.cart.refresh,
  };
};

export default connect(mapStateToProps, actions)(HistoryList);