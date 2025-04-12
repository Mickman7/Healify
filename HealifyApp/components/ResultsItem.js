import { StyleSheet, Text, View } from "react-native";
import { format } from "date-fns";

const ResultsItem = ({ result }) => {
  //Initialisations
  const date = result.date.toDate();
  const formattedDate = format(date, "EEEE, MMMM d, h:mma");

  //Handlers
  const getStage = (eGFR) => {
    console.log(eGFR);
    const stage =
      eGFR > 90
        ? "1"
        : eGFR >= 60 && eGFR <= 89
        ? "2"
        : eGFR >= 45 && eGFR <= 59
        ? "3a"
        : eGFR >= 30 && eGFR <= 44
        ? "3b"
        : eGFR >= 15 && eGFR <= 29
        ? "4"
        : "5";
    console.log(stage);
    return stage;
  };

  //View
  return (
    <View style={styles.resultBackground}>
      <Text style={styles.formattedTextStyle}>{formattedDate}</Text>
      <Text style={styles.stageIndicatorStyle}>
        Stage {getStage(result.eGFRLevel)}
      </Text>
      <Text style={styles.formattedTextStyle}>Your eGFR:</Text>
      <Text>{result.eGFRLevel}</Text>
      <Text style={styles.formattedTextStyle}>Your Creatinine Levels:</Text>
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
    height: "75%",
    marginTop: 25,
    width: 150,
  },
  formattedTextStyle: {
    marginTop: 10,
    marginLeft: 10,
  },
  stageIndicatorStyle: {
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 5,
  },
});
