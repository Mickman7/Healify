import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Form from '../../components/Form'

const ClinicianWorkScreen = ({navigation, route}) => {
    const [specialisation, setSpecialisation] = useState();
    const [yrsExperience, setYrsExperience] = useState();
    const [affiliation, setAffiliation] = useState();

    const {fullName, dob, sex, bio, licenseNum, issueAuth, expiryDate, institution, additionalCert} = route.params;

  return (
    <View style={styles.formContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Work</Text>
            <Image source={require('../../assets/AppLogo.png')} style={{width: 75, height: 75}}/>
        </View>

        <Form.InputText
            label='Specialisation'
            value={specialisation}
            onChange={setSpecialisation}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15}}
        />

        <Form.InputText
            label='Years of Experience'
            value={yrsExperience}
            onChange={setYrsExperience}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15}}
        />

        <Form.InputText
            label='Clinic/Hospital Affiliation'
            value={affiliation}
            onChange={setAffiliation}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15}}
        />

      


        <TouchableOpacity onPress={() => navigation.navigate('Clinician Work Address', {fullName, dob, sex, bio, licenseNum, issueAuth, expiryDate, institution, additionalCert, specialisation, yrsExperience, affiliation})} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ClinicianWorkScreen

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