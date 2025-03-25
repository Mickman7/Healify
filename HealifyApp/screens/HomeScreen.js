import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { UserTypeContext } from "../App";
import ClinicianHome from "./ClinicianHome";
import PatientHomeScreen from "./PatientHomeScreen";

const HomeScreen = ({ navigation }) => {
  const { userType } = useContext(UserTypeContext);

  return (
    <View style={styles.container}>
      {userType === "Clinician" ? <ClinicianHome /> : <PatientHomeScreen />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logoStyling: {
    width: 75,
    height: 75,
  },
  titleStyling: {
    fontWeight: 600,
    fontSize: 20,
    marginTop: 15,
    marginBottom: 25,
  },
  underlineSubtitleStyle: {
    textDecorationLine: "underline",
    fontWeight: 600,
    fontSize: 15,
    marginBottom: 15,
  },
  scrollableContainerStyle: {
    width: "100%",
    padding: "3%",
  },
  imageStyling: {
    resizeMode: "contain",
    width: "100%",
  },
  paragraph: {
    marginBottom: 20,
  },
  bulletList: {
    padding: 10,
  },
  container: {
    height: "100%",
  },
});
