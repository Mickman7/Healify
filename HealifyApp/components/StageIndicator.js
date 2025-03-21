import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const StageIndicator = ({ stage, onPress, isDescriptionVisible }) => {
  //Initialisations
  const stageDescription =
    stage == "1"
      ? "Your kidney function is mildly/moderately reduced. Consider monitoring it regularly."
      : stage == "2"
      ? "Your kidney function is mildly reduced. Monitor kidney health regularly and manage risk factors like blood pressure and diabetes."
      : stage == "3a"
      ? "Your kidney function is moderately reduced. Regular monitoring is advised to prevent further decline. Lifestyle and medication adjustments may be necessary."
      : stage == "3b"
      ? "Your kidney function is significantly reduced. Close monitoring is required. Consult your healthcare provider for further evaluation and management."
      : stage == "4"
      ? "Your kidney function is severely reduced. Specialist referral is recommended to prepare for possible treatment options, including dialysis or transplant."
      : "Your kidney function is critically low. Urgent medical intervention is required. Discuss treatment options such as dialysis or kidney transplant with your healthcare provider.";

  const stageAnalysis =
    stage == "1"
      ? "Normal kidney function, but urine findings or structural abnormalities or genetic trait point to kidney disease "
      : stage == "2"
      ? "Mildly reduced kidney function, and other findings (as for stage 1) point to kidney disease"
      : stage == "3a"
      ? "Moderately reduced kidney function"
      : stage == "3b"
      ? "Moderately reduced kidney function"
      : stage == "4"
      ? "Severely reduced kidney function"
      : "Very severe, or end stage kidney failure";

  //Handlers
  const getStageColour = () => {
    if (stage == "1") return styles.greenContainerStyle;
    if (stage == "2") return styles.yellowContainerStyle;
    if (stage == "3a" || stage == "3b")
      return styles.darkerYellowContainerStyle;
    if (stage == "4") return styles.organgeContainerStyle;
    if (stage == "5") return styles.redContainerStyle;
  };

  //View
  return (
    <View style={styles.mainContainerStyle}>
      {isDescriptionVisible !== true ? undefined : (
        <Text>{stageDescription}</Text>
      )}
      <TouchableOpacity
        onPress={onPress}
        style={[styles.pressableContainerStyle, getStageColour()]}
      >
        <Text style={styles.stageTextStyle}>Stage {stage}</Text>
        <Text style={styles.stageAnalysisStyle}>{stageAnalysis}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pressableContainerStyle: {
    borderRadius: 10,
    minWidth: "100%",
    maxWidth: "100%",
    padding: 15,
    flexDirection: "row",
    marginTop: 20,
  },
  mainContainerStyle: {
    alignItems: "center",
    marginLeft: 25,
    marginRight: 25,
  },
  stageAnalysisStyle: {
    flexShrink: 1,
    textAlign: "center",
    fontWeight: 500,
    paddingRight: 10,
  },
  stageTextStyle: {
    fontWeight: 500,
    paddingRight: 10,
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
});
export default StageIndicator;
