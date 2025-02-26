import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

import Form from '../components/Form'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { FIREBASE_AUTH } from '../FirebaseConfig'; 

const AuthenticationScreen = ({navigation, route}) => {

    const [user, setUser] = useState(null); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    const auth = FIREBASE_AUTH;

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
      
      
      
        try {
          if (isLogin) {
            signInWithEmailAndPassword(auth, email, password);
            navigation.navigate('Home')
            console.log('User signed in successfully!');
  
          } else {
            await createUserWithEmailAndPassword(auth, email, password);
  
              navigation.navigate('Home');
              console.log('User created successfully!');
          }
          
        } catch (error) {
          console.error('Authentication error:', error.message);
        }
    };

  return (
    <View style={styles.formContainer}>
      <Text>AuthenticationScreen</Text>

      <Form
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      >

      <Form.InputText
        label='Email'
        value={email}
        onChange={setEmail}
        isPassword={false}
      />
      <Form.InputText
        label='Password'
        value={password}
        onChange={setPassword}
        isPassword={true}
      />

      <Form.SubmitButton
        label='Sign up'
        onPress={handleAuthentication}
      />
      </Form>
    </View>

    
  )
}

export default AuthenticationScreen

const styles = StyleSheet.create({

})