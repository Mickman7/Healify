import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Screen from "../layout/Screen";
import { FIREBASE_AUTH, FIREBASE_DB } from "../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import ResultsList from "../components/ResultsList";

const PatientHomeScreen = ({navigation}) => {
  //Initialisations
  const userID = FIREBASE_AUTH.currentUser.uid;

  //State
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getPatientResults() {
      try {
        const statement = collection(
          FIREBASE_DB,
          `users/${userID}/eGFRResults`
        );
        const results = await getDocs(statement);
        const resultsList = results.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const chronologicallySortedResults = [...resultsList].sort(
          (a, b) => new Date(b.date.toDate()) - new Date(a.date.toDate())
        );
        setResults(chronologicallySortedResults);
      } catch (error) {
        console.error(error);
        return setResults([]);
      }
    }
    getPatientResults();
  }, [results]);

  if (!results) return;
  //View
  return (
    <Screen>
      <Header headerText={"Home"} />
      <View style={styles.historyContainerStyle}>
        <Text style={styles.titleStyle}>History</Text>
        <ResultsList results={results} style={styles.listStyle} />
      </View>
      <Text style={styles.subheadingStyle}>Chronic Kidney Disease (CKD)</Text>
      <TouchableOpacity style={styles.ckdInfoContainerStyle} onPress={() => navigation.navigate('PatientHome')}>
        <Text style={styles.underlineStyle}>
          What Is Chronic Kidney Disease?
        </Text>
        <Text styles={styles.ckdInfoStyle}>
          Chronic kidney disease (CKD) means your kidneys are damaged and can’t
          filter blood the way they should. The main risk factors for developing
          kidney disease are diabetes, high blood pressure, heart disease, and a
          family history of kidney failure.
        </Text>
      </TouchableOpacity>
    </Screen>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    alignSelf: "flex-start",
    marginLeft: 30,
    fontWeight: 600,
    fontSize: 30,
    marginTop: 30,
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
  historyContainerStyle: {
    height: "42%",
    backgroundColor: "#052B420A",
  },
});

export default PatientHomeScreen;
