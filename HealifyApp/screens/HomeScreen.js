import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { UserTypeContext } from "../App";
import Header from "../layout/Header";
import PatientHome from "./PatientHome";

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
        <View>
          <Text>This is the Clinician Home Page</Text>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              borderWidth: 1,
              padding: 5,
              width: 100,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
            }}
          >
            <Text>Button</Text>
          </TouchableOpacity>
        </View>
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
