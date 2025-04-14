import {
  StyleSheet,
  Text,
  View,
  Alert,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { UserTypeContext } from "../App";

import Form from "../components/Form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { getDoc, doc, setDoc } from "firebase/firestore";

import { FIREBASE_AUTH, FIREBASE_DB } from "../FirebaseConfig";

const AuthenticationScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const auth = FIREBASE_AUTH;
  const { userType } = useContext(UserTypeContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const handleAuthentication = async () => {
    if (!email || !password) {
      Alert.alert("Email or password is empty.");
      return;
    }
    if (!userType) {
      Alert.alert("Error", "Please select a user type.");
      return;
    }

    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(
          FIREBASE_AUTH,
          email,
          password
        );
        const user = userCredential.user;
        const userDocRef = doc(FIREBASE_DB, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const storedUserType = userData.userType;
          if (userType === storedUserType) {
            console.log("User signed in successfully!");
            navigation.navigate("BottomTabs");
          } else {
            Alert.alert(
              "Error",
              "The selected user type does not match your account."
            );
          }
        } else {
          Alert.alert("Error", "User data not found.");
        }
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          FIREBASE_AUTH,
          email,
          password
        );
        const user = userCredential.user;
        const uid = user.uid; //Making sure the collection uid is the same as the auth uid

        const userDocRef = doc(FIREBASE_DB, "users", uid);
        await setDoc(userDocRef, {
          userId: user.uid,
          email: user.email,
          userType: userType,
        });
        console.log("User details submitted successfully!");
        navigation.navigate("BottomTabs");

        console.log("User created successfully!");
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(FIREBASE_AUTH, email);
      Alert.alert("Password reset email sent");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/LoginBackgroundImg.png")}
      style={styles.backgoundImg}
    >
      <View style={styles.formContainer}>
        <Form
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          style={{ alignItems: "center", marginTop: 40 }}
        >
          <Form.InputText
            label="Email Address"
            value={email}
            onChange={setEmail}
            isPassword={false}
            style={{
              width: 350,
              height: 50,
              borderColor: "grey",
              marginTop: 5,
              marginBottom: 15,
              backgroundColor: "white",
            }}
            textStyle={{ color: "white" }}
          />
          <Form.InputText
            label="Password"
            value={password}
            onChange={setPassword}
            isPassword={true}
            style={{
              width: 350,
              height: 50,
              borderColor: "grey",
              marginTop: 5,
              backgroundColor: "white",
            }}
            textStyle={{ color: "white" }}
          />

          {isLogin && (
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: 200,
                  marginVertical: 10,
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
          )}

          <Form.SubmitButton
            label={isLogin ? "Login" : "Create"}
            onPress={handleAuthentication}
            style={{
              backgroundColor: "white",
              margin: 15,
              width: 120,
              height: 50,
              padding: 5,
              textAlign: "center",
              borderRadius: 15,
            }}
            textStyle={{ color: "black", fontWeight: "bold" }}
          />
        </Form>
      </View>
    </ImageBackground>
  );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
  formContainer: {
    padding: 16,
    marginTop: 40,
  },
  backgoundImg: {
    height: "100%",
  },
});
