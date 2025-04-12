import { StyleSheet, Text, View } from "react-native";
import { format } from "date-fns";

const ResultsItem = ({ result }) => {
  //Initialisations
  const date = result.date.toDate();
  const formattedDate = format(date, "EEEE, MMMM d, h:mma");

  //View
  return (
    <View style={styles.resultBackground}>
      <Text>{formattedDate}</Text>
      <Text>Stage </Text>
      <Text>Your eGFR:</Text>
      <Text>{result.eGFRLevel}</Text>
      <Text>Your Creatinine Levels:</Text>
      <Text>{Math.ceil(result.creatineLevel)}</Text>
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
