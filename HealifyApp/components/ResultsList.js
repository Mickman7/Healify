import { ScrollView } from "react-native";
import ResultsItem from "./ResultsItem";

const ResultsList = ({ results }) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {results.map((result) => {
        return <ResultsItem key={result.id} result={result} />;
      })}
    </ScrollView>
  );
};

export default ResultsList;
