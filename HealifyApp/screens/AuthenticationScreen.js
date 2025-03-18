import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { UserTypeContext } from '../App'

import Form from '../components/Form'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail,onAuthStateChanged, signOut } from "firebase/auth";
import { collection,getDoc, addDoc, doc, serverTimestamp, firestore, setDoc } from 'firebase/firestore';

import { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig'; 


const AuthenticationScreen = ({navigation, route}) => {

    const [user, setUser] = useState(null); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    // const { userType } = route.params;


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
          console.error("Email or password is empty.");
          return;
        }
      if (!userType) {
        Alert.alert('Error', 'Please select a user type.');
        return;
      }
      
      
      
        try {
          if (isLogin) {
            const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
            const user = userCredential.user;
            const userDocRef = doc(FIREBASE_DB, 'users', user.uid);
            const userDoc = await getDoc(userDocRef);
            if(userDoc.exists()){
              const userData = userDoc.data();
              const storedUserType = userData.userType;
              if(userType === storedUserType){
                console.log('User signed in successfully!');
                navigation.navigate('BottomTabs')
              }else{
                Alert.alert('Error', 'The selected user type does not match your account.');
              }
            }else{
              Alert.alert('Error', 'User data not found.');
            }
            
          } else {
            const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
            const user = userCredential.user;
            const uid = user.uid; //Making sure the collection uid is the same as the auth uid

            const userDocRef = doc(FIREBASE_DB, 'users', uid);
            await setDoc(userDocRef, {
              userId: user.uid, 
              email: user.email,
              userType: userType,
            });
            console.log('User details submitted successfully!');
  
            if(userType === 'Clinician'){
              navigation.navigate('Home');
            }
            else if(userType === 'Patient'){
              navigation.navigate('PatientHome')
            }
            console.log('User created successfully!');
          }
          
        } catch (error) {
          console.error('Authentication error:', error.message);
        }
    };


    const handleForgotPassword = async() => {
      try{
        await sendPasswordResetEmail(FIREBASE_AUTH, email);
        Alert.alert('Password reset email sent')

      }catch(err) {
        console.error(err);
      }
      
    }

  return (
    <View style={styles.formContainer}>

        <Form
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          style={{alignItems: 'center', marginTop: 40}}
        >

      <Form.InputText
        label='Email'
        value={email}
        onChange={setEmail}
        isPassword={false}
        style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15}}
      />
      <Form.InputText
        label='Password'
        value={password}
        onChange={setPassword}
        isPassword={true}
        style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5}}
      />

      <Form.SubmitButton
        label={isLogin ? 'Login' : 'Create'}
        onPress={handleAuthentication}
        style={{backgroundColor: 'black',  margin: 15, width: 120, height: 50, padding: 5, textAlign: 'center', borderRadius: 15}}
        textStyle={{color: 'white', fontWeight: 'bold'}}
      />
      </Form>
    </View>

    
  )
}

export default AuthenticationScreen

const styles = StyleSheet.create({
  formContainer: {
    padding: 16,
    marginTop: 40,
  }
})