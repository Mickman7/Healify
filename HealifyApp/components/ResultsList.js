import { ScrollView, StyleSheet } from "react-native";
import ResultsItem from "./ResultsItem";
import { useState } from "react";

const ResultsList = ({ results, scrollDirection, containerStyle }) => {
  //View
  return (
    <ScrollView
      horizontal={scrollDirection}
      showsHorizontalScrollIndicator={false}
      style={styles.containerStyle}
    >
      { results ? results.map((result) => {
        return <ResultsItem key={result.id} result={result} containerStyle={containerStyle}/>;
      }) : "No current readings"}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {

  },
});

export default ResultsList;
