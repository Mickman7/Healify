import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ResultsItem = ({ result }) => {
  return (
    <View style={styles.resultBackground}>
      <Text>ResultsItem</Text>
    </View>
  );
};

export default ResultsItem;

const styles = StyleSheet.create({
  resultBackground: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 8,
    marginRight: 8,
    height: "60%",
    marginTop: 25,
    width: 120,
  },
});
