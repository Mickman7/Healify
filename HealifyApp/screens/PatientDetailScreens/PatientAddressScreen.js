import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Form from '../../components/Form';

const PatientAddressScreen = ({navigation, route}) => {
const [country, setCountry] = useState();
const [street, setStreet] = useState();
const [addressLineTwo, setAddressLineTwo] = useState();
const [city, setCity] = useState();
const [postcode, setPostcode] = useState();

const {fullName, dob, sex, ethnicity} = route.params;

  return (
    <View style={styles.formContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Address</Text>
            <Image source={require('../../assets/AppLogo.png')} style={{width: 75, height: 75}}/>
        </View>



        <Form.InputText
            label='Country/Location'
            value={country}
            onChange={setCountry}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15}}
        />
        <Form.InputText
            label='Street Address'
            value={street}
            onChange={setStreet}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15}}
        />
        <Form.InputText
            label='Address Line 2'
            value={addressLineTwo}
            onChange={setAddressLineTwo}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15}}
        />
        <Form.InputText
            label='City'
            value={city}
            onChange={setCity}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15}}
        />
        <Form.InputText
            label='Postcode'
            value={postcode}
            onChange={setPostcode}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15}}
        />
      
      <TouchableOpacity onPress={() => navigation.navigate('UserHistoryScreen', {fullName, dob, sex, ethnicity, country, street, addressLineTwo, city, postcode})} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PatientAddressScreen

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