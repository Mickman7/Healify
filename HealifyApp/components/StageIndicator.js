import { Pressable, StyleSheet, Text, View } from "react-native";

const StageIndicator = ({ stage }) => {
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

  //View
  return (
    <View style={styles.mainContainerStyle}>
      <Text>{stageDescription}</Text>
      <Pressable style={styles.pressableContainerStyle}>
        <Text style={styles.stageTextStyle}>Stage {stage}</Text>
        <Text style={styles.stageAnalysisStyle}>{stageAnalysis}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressableContainerStyle: {
    borderRadius: 10,
    backgroundColor: "#4C9A29",
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
});
export default StageIndicator;
