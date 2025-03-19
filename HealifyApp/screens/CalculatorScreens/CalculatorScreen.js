import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../../layout/Screen";
import Header from "../../layout/Header";
import InputField from "../../components/InputField";
import ToggleSwitch from "../../components/ToggleSwitch";
import React, { useState } from "react";

const CalculatorScreen = () => {
  //State
  const [sexToggleValue, setSexToggleValue] = useState(false);

  //
  const onSexTogglePress = (value) => setSexToggleValue(value);

  //View
  return (
    <Screen screenStyle={styles.screenStyle}>
      <Header
        headerText={"Calculator"}
        rightItem={
          <Image
            source={require("../../assets/AppLogo.png")}
            style={styles.logoStyling}
          />
        }
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.infoParagraph}>
          <Text style={styles.subtitle}>About eGFR</Text>
          <Text>
            eGFR (Estimated Glomerular Filtration Rate) is a key measure of
            kidney function, indicating how efficiently the kidneys are
            filtering waste from the blood. It is calculated using serum
            creatinine levels, along with factors such as age, sex, and
            ethnicity. A normal eGFR is around 100 ml/min/1.73m², but it
            naturally declines with age and can be significantly reduced in
            kidney disease.
          </Text>
          <Text style={styles.linkStyle}>Learn more</Text>
        </View>
        <InputField
          inputFieldLabel={"Creatinine Level (Serum Creatinine)"}
          placeholder={"µmol/L"}
        />
        <ToggleSwitch
          label={"Sex"}
          leftOption={"Male"}
          rightOption={"Female"}
        />
        <InputField
          inputFieldLabel={"Age (Years)"}
          placeholder={"Enter your age"}
        />
        <ToggleSwitch
          label={"Ethnicity"}
          leftOption={"Black"}
          rightOption={"Non-black"}
        />
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: 500,
    fontSize: 15,
    paddingBottom: 25,
  },
  logoStyling: {
    width: 75,
    height: 75,
  },
  container: {
    margin: 10,
  },
  linkStyle: {
    textDecorationLine: "underline",
    color: "rgba(0, 0, 0, 0.4)",
    fontSize: 11,
    alignSelf: "flex-end",
  },
  infoParagraph: {
    marginBottom: 10,
  },
});

export default CalculatorScreen;
