import { StyleSheet, Text, View } from "react-native";
import { format } from "date-fns";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const ResultsItem = ({ result }) => {
  //Initialisations
  const date = result.date.toDate();
  const formattedDate = format(date, "EEEE, MMMM d, h:mma");

  //Handlers
  const getStage = (eGFR) => {
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
    return stage;
  };

  const getStageColour = (stage) => {
    if (stage == "1") return styles.greenContainerStyle;
    if (stage == "2") return styles.yellowContainerStyle;
    if (stage == "3a" || stage == "3b")
      return styles.darkerYellowContainerStyle;
    if (stage == "4") return styles.organgeContainerStyle;
    if (stage == "5") return styles.redContainerStyle;
  };

  //View
  return (
    <View style={styles.resultBackground}>
      <Text style={styles.formattedTextStyle}>{formattedDate}</Text>
      <Text
        style={[
          styles.stageIndicatorStyle,
          getStageColour(getStage(result.eGFRLevel)),
        ]}
      >
        Stage {getStage(result.eGFRLevel)}
      </Text>
      <Text style={styles.formattedTextStyle}>Your eGFR:</Text>
      <View style={styles.sameLineStyle}>
        <Text style={styles.numericStyle}>{result.eGFRLevel}</Text>
        <Text style={[styles.formattedTextStyle, styles.unitStyle]}>
          {" "}
          mL/min/1.73m²
        </Text>
      </View>
      <Text style={styles.formattedTextStyle}>Your Creatinine Levels:</Text>
      <View style={styles.sameLineStyle}>
        <Text style={styles.numericStyle}>
          {Math.ceil(result.creatineLevel)}
        </Text>
        <Text style={[styles.formattedTextStyle, styles.unitStyle]}>
          {" "}
          µmol/L
        </Text>
      </View>
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
    backgroundColor: "white",
  },
  formattedTextStyle: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 12,
  },
  stageIndicatorStyle: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 5,
    padding: 7,
    borderRadius: 5,
  },
  greenContainerStyle: {
    backgroundColor: "#4C9A29",
  },
  yellowContainerStyle: {
    backgroundColor: "#FCC333",
  },
  darkerYellowContainerStyle: {
    backgroundColor: "#FDBD20",
  },
  organgeContainerStyle: {
    backgroundColor: "#E57C02",
  },
  redContainerStyle: {
    backgroundColor: "#D94214",
  },
  numericStyle: {
    fontSize: 18,
    marginLeft: 12,
  },
  sameLineStyle: {
    flexDirection: "row",
  },
  unitStyle: {
    marginTop: 5,
    marginBottom: 0,
    marginLeft: 0,
  },
});
