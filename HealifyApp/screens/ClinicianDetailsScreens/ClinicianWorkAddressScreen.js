import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Form from "../../components/Form";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../FirebaseConfig";

const ClinicianWorkAddressScreen = ({ navigation, route }) => {
  const [country, setCountry] = useState();
  const [street, setStreet] = useState();
  const [addressLineTwo, setAddressLineTwo] = useState();
  const [city, setCity] = useState();
  const [postcode, setPostcode] = useState();

  const userId = FIREBASE_AUTH.currentUser.uid;
  const {
    fullName,
    dob,
    sex,
    bio,
    licenseNum,
    issueAuth,
    expiryDate,
    institution,
    additionalCert,
    specialisation,
    yrsExperience,
    affiliation,
  } = route.params;

  const handlesubmit = async () => {
    try {
      const clinicianData = {
        uid: userId,
        fullName: fullName,
        dob: dob,
        sex: sex,
        bio: bio,
        licenseNum: licenseNum,
        issueAuth: issueAuth,
        expiryDate: expiryDate,
        institution: institution,
        additionalCert: additionalCert,
        specialisation: specialisation,
        yearsExperience: yrsExperience,
        affiliations: affiliation,
        country: country,
        street: street,
        addressLineTwo: addressLineTwo,
        city: city,
        postcode: postcode,
        timestamp: serverTimestamp(),
      };
      await addDoc(collection(FIREBASE_DB, "clinicians"), clinicianData);
      await addDoc(
        collection(FIREBASE_DB, "users", userId, "details"),
        clinicianData
      );

      console.log("User details submitted successfully!");
      navigation.navigate("BottomTabs");
    } catch (err) {
      throw new Error("Error submitting user details: " + err.message);
    }
  };

  return (
    <View style={styles.formContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Work Address</Text>
        <Image
          source={require("../../assets/AppLogo.png")}
          style={{ width: 75, height: 75 }}
        />
      </View>

      <Form.InputText
        label="Country/Location"
        value={country}
        onChange={setCountry}
        isPassword={false}
        style={{
          width: 350,
          height: 50,
          borderColor: "grey",
          marginTop: 5,
          marginBottom: 15,
          borderWidth: 1,
        }}
      />
      <Form.InputText
        label="Street Address"
        value={street}
        onChange={setStreet}
        isPassword={false}
        style={{
          width: 350,
          height: 50,
          borderColor: "grey",
          marginTop: 5,
          marginBottom: 15,
          borderWidth: 1,
        }}
      />
      <Form.InputText
        label="Address Line 2"
        value={addressLineTwo}
        onChange={setAddressLineTwo}
        isPassword={false}
        style={{
          width: 350,
          height: 50,
          borderColor: "grey",
          marginTop: 5,
          marginBottom: 15,
          borderWidth: 1,
        }}
      />
      <Form.InputText
        label="City"
        value={city}
        onChange={setCity}
        isPassword={false}
        style={{
          width: 350,
          height: 50,
          borderColor: "grey",
          marginTop: 5,
          marginBottom: 15,
          borderWidth: 1,
        }}
      />
      <Form.InputText
        label="Postcode"
        value={postcode}
        onChange={setPostcode}
        isPassword={false}
        style={{
          width: 350,
          height: 50,
          borderColor: "grey",
          marginTop: 5,
          marginBottom: 15,
          borderWidth: 1,
        }}
      />

      <TouchableOpacity onPress={handlesubmit} style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClinicianWorkAddressScreen;

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  button: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    marginVertical: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
