import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../layout/Header";
import Screen from "../../layout/Screen";
import StageDiagram from "../../assets/StageDiagram.svg";

const LearnMoreScreen = () => {
  return (
    <Screen>
      <Header headerText={"Calculator"} />
      <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>About eGFR</Text>
        <ScrollView style={styles.scrollViewStyle}>
          <Text style={styles.paragraphStyle}>
            eGFR (Estimated Glomerular Filtration Rate) is a key measure of
            kidney function, indicating how efficiently the kidneys are
            filtering waste from the blood. It is calculated using serum
            creatinine levels, along with factors such as age, sex, and
            ethnicity. A normal eGFR is around 100 ml/min/1.73m², but it
            naturally declines with age and can be significantly reduced in
            kidney disease.
          </Text>
          <Text style={styles.paragraphStyle}>
            The table categorises Chronic Kidney Disease (CKD) into five
            stages based on eGFR values.
          </Text>
          <StageDiagram style={styles.diagramStyle} />
          <Text style={styles.paragraphStyle}>
            While CKD does not always lead to kidney failure, it increases the
            risk of cardiovascular diseases, such as heart disease and stroke.
            Early detection and management—through blood pressure control,
            lifestyle changes, and avoiding medications that harm the
            kidneys—can help slow disease progression and improve long-term
            health outcomes.
          </Text>
        </ScrollView>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 700,
    fontSize: 26,
    marginTop: 25,
  },
  containerStyle: {
    width: "92%",
  },
  diagramStyle: {
    maxWidth: "100%",
  },
  paragraphStyle: {
    marginTop: 20,
  },
  scrollViewStyle: {
    marginBottom: 200,
  },
});

export default LearnMoreScreen;
