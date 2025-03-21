import { Image, StyleSheet, Text, View } from "react-native";
import Header from "../../layout/Header";
import Screen from "../../layout/Screen";
import Icons from "../../components/Icons";
import StageIndicator from "../../components/StageIndicator";
import {
  stageFiveRecommendationLines,
  stageFourRecommendationLines,
  stageOneRecommendationLines,
  stageThreeARecommendationLines,
  stageThreeBRecommendationLines,
  stageTwoRecommendationLines,
} from "../../data/healthRecommedation";
import StageOneDiagram from "../../assets/StageOneDiagram.svg";
import StageTwoDiagram from "../../assets/StageTwoDiagram.svg";
import StageThreeADiagram from "../../assets/StageThreeADiagram.svg";
import StageThreeBDiagram from "../../assets/StageThreeBDiagram.svg";
import StageFourDiagram from "../../assets/StageFourDiagram.svg";
import StageFiveDiagram from "../../assets/StageFiveDiagram.svg";

const StageScreen = ({ navigation, route }) => {
  //Initialisations
  const { stage } = route.params;

  //Handlers
  const handleNavigateBack = () => navigation.goBack();

  const getRecommendationLines = () => {
    if (stage == "1") return stageOneRecommendationLines;
    else if (stage == "2") return stageTwoRecommendationLines;
    else if (stage == "3a") return stageThreeARecommendationLines;
    else if (stage == "3b") return stageThreeBRecommendationLines;
    else if (stage == "4") return stageFourRecommendationLines;
    else if (stage == "5") return stageFiveRecommendationLines;
  };
  const getStageImage = () => {
    if (stage == "1") return <StageOneDiagram style={styles.imageStyle} />;
    else if (stage == "2") return <StageTwoDiagram style={styles.imageStyle} />;
    else if (stage == "3a")
      return <StageThreeADiagram style={styles.imageStyle} />;
    else if (stage == "3b")
      return <StageThreeBDiagram style={styles.imageStyle} />;
    else if (stage == "4")
      return <StageFourDiagram style={styles.imageStyle} />;
    else if (stage == "5")
      return <StageFiveDiagram style={styles.imageStyle} />;
  };

  //View
  return (
    <Screen>
      <Header
        headerText={"Calculator"}
        rightItem={
          <Image
            source={require("../../assets/AppLogo.png")}
            style={styles.logoStyling}
          />
        }
        leftItem={<Icons.Back />}
        onLeftItemPress={handleNavigateBack}
      />
      <StageIndicator stage={stage} isDiscriptionVisible={false} />
      <View style={styles.textContainerStyle}>
        {getRecommendationLines().map((line, index) => (
          <Text key={index} style={styles.paragraph}>
            {line}
          </Text>
        ))}
      </View>
      <View>{getStageImage()}</View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logoStyling: {
    width: 75,
    height: 75,
  },
  paragraph: {
    marginBottom: 30,
  },
  textContainerStyle: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
  },
  imageStyle: {
    maxWidth: "90%",
  },
});

export default StageScreen;
