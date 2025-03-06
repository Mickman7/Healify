import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { UserTypeContext } from '../App'

import Form from '../components/Form'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, query, orderBy, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';

import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig'; 


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
            signInWithEmailAndPassword(auth, email, password);
            navigation.navigate('Home')
            console.log('User signed in successfully!');
  
          } else {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await addDoc(collection(FIREBASE_DB, 'users'), {
              uid: user.uid, 
              email: user.email,
              userType: userType,
            });
            console.log('User details submitted successfully!');
  
            navigation.navigate('Home');
            console.log('User created successfully!');
          }
          
        } catch (error) {
          console.error('Authentication error:', error.message);
        }
    };

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