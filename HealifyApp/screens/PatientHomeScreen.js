import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../layout/Header";
import Screen from "../layout/Screen";

const PatientHomeScreen = () => {
  //Initialisations
  const pastPatientResults = "";

  //View
  return (
    <Screen>
      <Header headerText={"Home"} />
      <Text style={styles.titleStyle}>History</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      ></ScrollView>
      <Text style={styles.subheadingStyle}>Chronic Kidney Disease (CKD)</Text>
      <View style={styles.ckdInfoContainerStyle}>
        <Text style={styles.underlineStyle}>
          What Is Chronic Kidney Disease?
        </Text>
        <Text styles={styles.ckdInfoStyle}>
          Chronic kidney disease (CKD) means your kidneys are damaged and can’t
          filter blood the way they should. The main risk factors for developing
          kidney disease are diabetes, high blood pressure, heart disease, and a
          family history of kidney failure.
        </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    alignSelf: "flex-start",
    marginLeft: 30,
    fontWeight: 600,
    fontSize: 30,
  },
  subheadingStyle: {
    fontWeight: 500,
    fontSize: 24,
    marginTop: 30,
    marginBottom: 25,
  },
  ckdInfoContainerStyle: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 25,
    margin: 15,
    borderColor: "grey",
  },
  underlineStyle: {
    fontWeight: 500,
    textDecorationLine: "underline",
    marginBottom: 15,
    fontSize: 16,
  },
  ckdInfoStyle: {
    fontSize: 14,
  },
});

export default PatientHomeScreen;
