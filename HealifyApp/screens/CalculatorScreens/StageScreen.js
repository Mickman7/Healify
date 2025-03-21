import { Image, StyleSheet } from "react-native";
import Header from "../../layout/Header";
import Screen from "../../layout/Screen";
import Icons from "../../components/Icons";
import StageIndicator from "../../components/StageIndicator";

const StageScreen = ({ navigation, route }) => {
  //Initialisations
  const { stage } = route.params;

  //Handlers
  const handleNavigateBack = () => navigation.goBack();

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
    </Screen>
  );
};

const styles = StyleSheet.create({
  logoStyling: {
    width: 75,
    height: 75,
  },
});

export default StageScreen;
