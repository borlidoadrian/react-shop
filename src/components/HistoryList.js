import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, FlatList, ActivityIndicator, Text } from "react-native";
import Separator from "./Separator";
import HistoryItem from "./HistoryItem";
import * as actions from "../reducers/dataReducer";

const HistoryList = ({
  purchases,
  getPurchases,
  isLoading,
  refresh,
  navigation,
}) => {
  const renderItem = (purchase) => {
    return <HistoryItem purchase={purchase} navigation={navigation} />;
  };

  useEffect(() => {
    getPurchases();
  }, [refresh]);

  return isLoading ? (
    <ActivityIndicator size="large" />
  ) : purchases.length ? (
    <FlatList
      ItemSeparatorComponent={() => <Separator />}
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      data={purchases}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.date}
      contentContainerStyle={styles.contentContainer}
    />
  ) : (
    <Text style={styles.text}>No purchases were made</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginHorizontal: 15,
  },
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
