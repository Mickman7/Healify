import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Screen from "../../layout/Screen";
import Header from "../../layout/Header";
import InputField from "../../components/InputField";
import ToggleSwitch from "../../components/ToggleSwitch";
import React, { useState } from "react";
import Button from "../../components/Button";
import RadioButtonGroup from "../../components/RadioButtonGroup";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../FirebaseConfig";

const CalculatorScreen = ({ navigation }) => {
  //Initialisations
  const unitsOptions = [
    {
      id: "1",
      label: "µmol/L",
      value: "µmol/L",
    },
    {
      id: "2",
      label: "mg/dL",
      value: "mg/dL",
    },
  ];

  const userID = FIREBASE_AUTH.currentUser.uid;

  //State
  const [creatineLevel, setCreatineLevel] = useState(null);
  const [sex, setSex] = useState(false);
  const [age, setAge] = useState(null);
  const [ethnicity, setEthnicity] = useState(false);
  const [selectedMeasurementUnits, setSelectedMeasurementUnits] = useState("1");

  //Handlers
  const handleClearInputFields = () => {
    setCreatineLevel(null);
    setSex(false);
    setAge(null);
    setEthnicity(false);
    setSelectedMeasurementUnits("1");
  };

  const getCreatValue = () => {
    return selectedMeasurementUnits === "1"
      ? (creatineLevel / 88.4) ** -1.154
      : creatineLevel ** -1.154;
  };
  const getAgeValue = () => {
    return age ** -0.203;
  };
  const getSexMultiplier = () => {
    //true = Female, false = Male
    return sex ? 0.742 : 1;
  };
  const getEthnicityMultiplier = () => {
    //true = Non-black, false = Black
    return ethnicity ? 1 : 1.21;
  };

  const convertToMicromols = (creatinine) => {
    return Math.ceil(88.4 * (1 / creatinine) ** (1 / 1.154));
  };

  const handleCalculation = () => {
    const creatValue = getCreatValue();
    const ageValue = getAgeValue();
    const sexValue = getSexMultiplier();
    const ethnicityValue = getEthnicityMultiplier();
    var result = 186 * creatValue * ageValue * sexValue * ethnicityValue;
    var roundedResult = Math.ceil(result);
    const creatinineInMicromols = convertToMicromols(creatValue);
    addEGFRResult(roundedResult, creatinineInMicromols);
    navigation.navigate("Results Screen", { result: roundedResult });
  };

  const addEGFRResult = async (eGFR, creatine) => {
    try {
      await addDoc(collection(FIREBASE_DB, `users/${userID}/eGFRResults`), {
        eGFRLevel: eGFR,
        date: serverTimestamp(),
        creatineLevel: creatine, //creatine saved as µmol/L
      });
      console.log("User details submitted successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLearnMoreClick = () => navigation.navigate("LearnMoreScreen");

  //View
  return (
    <Screen screenStyle={styles.screenStyle}>
      <Header headerText={"Calculator"} />
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
          <TouchableOpacity onPress={handleLearnMoreClick}>
            <Text style={styles.linkStyle}>Learn more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowStyle}>
          <InputField
            inputFieldLabel={"Creatinine Level (Serum Creatinine)"}
            placeholder={"µmol/L"}
            value={creatineLevel}
            onValueChange={setCreatineLevel}
            isNumeric={true}
          />
          <RadioButtonGroup
            radioButtons={unitsOptions}
            selectedOption={selectedMeasurementUnits}
            onOptionSelect={setSelectedMeasurementUnits}
          />
        </View>
        <ToggleSwitch
          label={"Sex"}
          leftOption={"Male"}
          rightOption={"Female"}
          onToggleSwitch={setSex}
          toggleValue={sex}
        />
        <View style={styles.rowStyle}>
          <InputField
            inputFieldLabel={"Age (Years)"}
            placeholder={"Enter your age"}
            value={age}
            onValueChange={setAge}
            isNumeric={true}
          />
          <Text style={styles.editLink}>Edit</Text>
        </View>
        <ToggleSwitch
          label={"Ethnicity"}
          leftOption={"Black"}
          rightOption={"Non-black"}
          onToggleSwitch={setEthnicity}
          toggleValue={ethnicity}
        />
        <View style={styles.buttonTray}>
          <Button
            label={"Reset"}
            buttonStyle={styles.resetButtonStyle}
            onClick={handleClearInputFields}
          />
          <Button
            label={"Calculate"}
            buttonStyle={styles.calculateButtonStyle}
            labelStyle={styles.calculatorLabelStyle}
            onClick={handleCalculation}
          />
        </View>
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
  buttonTray: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    marginTop: 15,
  },
  resetButtonStyle: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
  },
  calculateButtonStyle: {
    backgroundColor: "#001C45",
  },
  calculatorLabelStyle: {
    color: "#FFFFFF",
  },
  rowStyle: {
    flexDirection: "row",
    maxWidth: "100%",
    alignItems: "center",
  },
  editLink: {
    textDecorationLine: "underline",
    color: "rgba(0, 0, 0, 0.4)",
    fontSize: 14,
    marginTop: 50,
    paddingLeft: 10,
  },
});

export default CalculatorScreen;
