import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import Form from '../../components/Form'

const ClinicianCredentialsScreen = ({navigation, route}) => {
  const [licenseNum, setLicenseNum] = useState();
  const [issueAuth, setIssueAuth] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [institution, setInstitution] = useState();
  const [additionalCert, setAdditionalCert] = useState();

  const {fullName, dob, sex, bio} = route.params;

  return (
    <View style={styles.formContainer}>
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.title}>Professional Credentials</Text>
          <Image source={require('../../assets/AppLogo.png')} style={{width: 75, height: 75}}/>
      </View>



      <Form.InputText
          label='Medical License No.'
          value={licenseNum}
          onChange={setLicenseNum}
          isPassword={false}
          style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15, borderWidth: 1}}
      />
      <Form.InputText
          label='Issuing Authority'
          value={issueAuth}
          onChange={setIssueAuth}
          isPassword={false}
          style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15, borderWidth: 1}}
      />
      <Form.InputText
          label='License Expiry Date'
          value={expiryDate}
          onChange={setExpiryDate}
          isPassword={false}
          style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15, borderWidth: 1}}
      />
      <Form.InputText
          label='Medical Degree/Institution'
          value={institution}
          onChange={setInstitution}
          isPassword={false}
          style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15, borderWidth: 1}}
      />
      <Form.InputText
          label='Additional Certifications'
          value={additionalCert}
          onChange={setAdditionalCert}
          isPassword={false}
          style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15, borderWidth: 1}}
      />
    
    <TouchableOpacity onPress={() => navigation.navigate('Clinician Work', {fullName, dob, sex, bio, licenseNum, issueAuth, expiryDate, institution, additionalCert})} style={styles.button}>
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
  </View>
  )
}

export default ClinicianCredentialsScreen

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