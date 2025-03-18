import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  navigate,
  Image,
  ScrollView
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { FIREBASE_AUTH, FIREBASE_DB } from "../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { UserTypeContext } from "../App";
import Screen from '../layout/Screen'
import Header from '../layout/Header'
import NavigationBar from '../components/NavigationBar'

const HomeScreen = ({ navigation, route }) => {
  const { userType } = useContext(UserTypeContext);
  // const userType = 'Clinician'

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
      <Text>Home</Text>
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
        <View>
          <Header
            headerText={"Home"}
            rightItem={
              <Image
                source={require("../assets/AppLogo.png")}
                style={styles.logoStyling}
              />
            }
          />
          <ScrollView style={styles.scrollableContainerStyle}>
            <Text style={styles.titleStyling}>
              Chronic Kidney Disease (CKD)
            </Text>
            <Text style={styles.underlineSubtitleStyle}>
              What is Chronic Kidney Disease?
            </Text>
            <Text>
              Chronic kidney disease (CKD) means your kidneys are damaged and
              can’t filter blood the way they should. The main risk factors for
              developing kidney disease are diabetes, high blood pressure, heart
              disease, and a family history of kidney failure.
            </Text>
            <Image
              source={require("../assets/KidneyDiagram.png")}
              style={styles.imageStyling}
            />
            <Text style={styles.paragraph}>
              Your kidneys are located in the middle of your back, just below
              your ribcage.
            </Text>
            <Text style={styles.paragraph}>
              The kidneys’ main job is to filter extra water and wastes out of
              your blood to make urine. To keep your body working properly, the
              kidneys balance the salts and minerals—such as calcium,
              phosphorus, sodium, and potassium—that circulate in the blood.
              Your kidneys also make hormones that help control blood pressure,
              make red blood cells, and keep your bones strong. Kidney disease
              often can get worse over time and may lead to kidney failure. If
              your kidneys fail, you will need dialysis or a kidney transplant
              to maintain your health.
            </Text>
            <Text style={styles.paragraph}>
              The sooner you know you have kidney disease, the sooner you can
              make changes to protect your kidneys.
            </Text>
            <Text style={styles.paragraph}>
              More information is provided in the NIDDK health topic, The
              Kidneys and How They Work. Watch a video about what the kidneys
              do. External link
            </Text>
            <Text style={styles.underlineSubtitleStyle}>
              How common is CKD?
            </Text>
            <Text style={styles.paragraph}>
              CKD is common among adults in the United States. More than 35.5
              million American adults may have CKD.1
            </Text>
            <Text style={styles.underlineSubtitleStyle}>
              Who is more likely to develop CKD?
            </Text>
            <Text style={styles.paragraph}>
              You are at risk for kidney disease if you have:
            </Text>
            <View style={styles.bulletList}>
              <Text style={styles.paragraph}>
                • Diabetes. Diabetes is the leading cause of CKD. High blood
                glucose, also called blood sugar, from diabetes can damage the
                blood vessels in your kidneys. Almost 1 in 3 people with
                diabetes has CKD.
              </Text>
              <Text style={styles.paragraph}>
                • High blood pressure. High blood pressure is the second leading
                cause of CKD. Like high blood glucose, high blood pressure also
                can damage the blood vessels in your kidneys. Almost 1 in 5
                adults with high blood pressure has CKD
              </Text>
              <Text style={styles.paragraph}>
                • Heart disease. Research shows a link between kidney disease
                and heart disease. People with heart disease are at higher risk
                for kidney disease, and people with kidney disease are at higher
                risk for heart disease. Researchers are working to better
                understand the relationship between kidney disease and heart
                disease.
              </Text>
              <Text>
                • Family history of kidney failure. If your mother, father,
                sister, or brother has kidney failure, you are at risk for CKD.
                Kidney disease tends to run in families. If you have kidney
                disease, encourage family members to get tested. Use tips from
                the family health reunion guide and speak with your family
                during special gatherings.
              </Text>
            </View>
            <Text style={styles.paragraph}>
              Your chances of having kidney disease increase with age. The
              longer you have had diabetes, high blood pressure, or heart
              disease, the more likely that you will have kidney disease.
            </Text>
            <Text style={styles.paragraph}>
              African Americans, Hispanics, and American Indians tend to have a
              greater risk for CKD. The greater risk is due mostly to higher
              rates of diabetes and high blood pressure among these groups.
              Scientists are studying other possible reasons for this increased
              risk.
            </Text>
            <Text style={styles.paragraph}>
              Watch a video about kidney disease risk External link. If you are
              at risk for kidney disease, learn ways to prevent kidney disease.
            </Text>
            <Text style={styles.paragraph}>
              Early CKD may not have any symptoms
            </Text>
          </ScrollView>
          {/* <NavigationBar /> */}
          </View>
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

