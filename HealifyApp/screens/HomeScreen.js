import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { UserTypeContext } from "../App";
import PatientHome from "./PatientHome";
import ClinicianHome from "./ClinicianHome";

const HomeScreen = ({ navigation }) => {
  const { userType } = useContext(UserTypeContext);

  const handleSubmit = () => {
    if (userType === "Clinician") {
      navigation.navigate("ClinicianDetails");
    } else if (userType === "Patient") {
      navigation.navigate("PatientDetails");
    } else {
      console.log("Unknown user type:", userType);
    }
  };

  return (
    <View style={styles.container}>
      {userType === "Clinician" ? (
        <ClinicianHome/>
      ) : (
        <PatientHome />
      )}
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
});
