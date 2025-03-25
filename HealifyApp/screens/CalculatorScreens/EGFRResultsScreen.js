import { Image, StyleSheet, Text, View } from "react-native";
import Screen from "../../layout/Screen";
import Header from "../../layout/Header";
import Icons from "../../components/Icons";
import StageIndicator from "../../components/StageIndicator";

const EGRFRResultsScreen = ({ navigation, route }) => {
  //Initialisations
  const { result } = route.params;
  const stage =
    result > 90
      ? "1"
      : result >= 60 && result <= 89
      ? "2"
      : result >= 45 && result <= 59
      ? "3a"
      : result >= 30 && result <= 44
      ? "3b"
      : result >= 15 && result <= 29
      ? "4"
      : "5";

  //Handlers
  const handleNavigateBack = () => navigation.goBack();
  const handleStageIndicatorPress = () => {
    console.log(stage);
    navigation.navigate("Stage Screen", { stage: stage });
  };

  //View
  return (
    <Screen>
      <Header
        headerText={"Results"}
        rightItem={
          <Image
            source={require("../../assets/AppLogo.png")}
            style={styles.logoStyling}
          />
        }
        leftItem={<Icons.Back />}
        onLeftItemPress={handleNavigateBack}
      />
      <View style={styles.container}>
        <Text style={styles.boldText}>Your eGFR:</Text>
        <View style={styles.resultContainerStyle}>
          <Text style={styles.resultStyle}>{result}</Text>
        </View>
      </View>
      <Text style={styles.unitStyle}> mL/min/1.73m²</Text>
      <StageIndicator
        stage={stage}
        onPress={handleStageIndicatorPress}
        isDescriptionVisible={true}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  logoStyling: {
    width: 75,
    height: 75,
  },
  boldText: {
    fontWeight: 600,
    fontSize: 28,
    marginTop: 100,
  },
  container: {
    paddingLeft: 25,
    paddingRight: 25,
    width: "100%",
  },
  resultStyle: {
    fontSize: 100,
    fontWeight: 600,
    alignSelf: "center",
    padding: 20,
    alignContent: "center",
    flexDirection: "row",
  },
  resultContainerStyle: {
    alignContent: "center",
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 30,
  },
  unitStyle: {
    fontSize: 30,
    fontStyle: "italic",
    marginTop: 35,
    marginBottom: 50,
  },
  descriptionText: {
    padding: 25,
    fontSize: 14,
    marginTop: 40,
  },
});

export default EGRFRResultsScreen;
