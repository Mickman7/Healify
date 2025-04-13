import { ScrollView, StyleSheet } from "react-native";
import ResultsItem from "./ResultsItem";

const ResultsList = ({ results }) => {
  //View
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.containerStyle}
    >
      { results ? results.map((result) => {
        return <ResultsItem key={result.id} result={result} />;
      }) : "No current readings"}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 20,
  },
});

export default ResultsList;
