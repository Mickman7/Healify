import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { collection, addDoc, serverTimestamp, doc, updateDoc} from 'firebase/firestore';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../FirebaseConfig';

import Form from '../../components/Form';

const PatientHostoryScreen = ({navigation, route}) => {
    const [prevDoc, setPrevDoc] = useState();
    const [preDocEmail, setPreDocEmail] = useState();
    const [currentDocName, setCurrentDocName] = useState();
    const [currentDocEmail, setCurrentDocEmail] = useState();

    const userId = FIREBASE_AUTH.currentUser.uid;
    const {fullName, dob, sex, ethnicity, country, street, addressLineTwo, city, postcode} = route.params;


    const handleSubmit = async () => {
        try {
            const patientData = {
                uid: userId, 
                fullName: fullName,
                dob: dob,
                sex: sex,
                ethnicity: ethnicity,
                country: country,
                street: street,
                addressLineTwo: addressLineTwo,
                city: city,
                postcode: postcode,
                prevDoc: prevDoc,
                preDocEmail: preDocEmail,
                currentDocName: currentDocName,
                currentDocEmail: currentDocEmail,
                timestamp: serverTimestamp()
            };
    
            await addDoc(collection(FIREBASE_DB, 'patients'), patientData);
            
            await addDoc(
                collection(FIREBASE_DB, 'users', userId, 'details'), 
                patientData
            );
    
            console.log('User details submitted successfully!');
            navigation.navigate('Home');
            
        } catch (err) {
            throw new Error("Error submitting user details: " + err.message);
        }
    };

  return (
    <View style={styles.formContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>History</Text>
            <Image source={require('../../assets/AppLogo.png')} style={{width: 75, height: 75}}/>
        </View>

        <Form.InputText
            label='Name of Previous Doctor'
            value={prevDoc}
            onChange={setPrevDoc}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15, borderWidth: 1}}
        />

        <Form.InputText
            label='Previous Doctor Email'
            value={preDocEmail}
            onChange={setPreDocEmail}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15, borderWidth: 1}}
        />

        <Form.InputText
            label='Name of Current Doctor'
            value={currentDocName}
            onChange={setCurrentDocName}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15, borderWidth: 1}}
        />

        <Form.InputText
            label='Current Doctor Email'
            value={currentDocEmail}
            onChange={setCurrentDocEmail}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15, borderWidth: 1}}
        />
      
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PatientHostoryScreen

const styles = StyleSheet.create({
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    
      },
      title: {
          fontSize: 30,
          fontWeight: 'bold',
          marginHorizontal: 10,
      },
      button : {
          padding: 5,
          borderWidth: 1,
          borderRadius: 15,
          width: 100, 
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          marginVertical: 50
      }, 
      buttonText: {
          color: 'white',
          fontWeight: 'bold'
      }
})