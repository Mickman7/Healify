import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Form from '../../components/Form'

const PatientInfoScreen = ({navigation}) => {

    const [fullName, setFullName] = useState();
    const [dob, setDob] = useState();
    const [sex, setSex] = useState(['Male', 'Female', 'Other']);
    const [ethnicity, setEthnicity] = useState(['White British', 'White Irish', 'Black or Black British', 'Asian or Asian British', 'Other (Please Specify)']);
    const [nhsNum, setNhsNum] = useState();

    const [selectedValueSex, setSelectedValueSex] = useState('');
    const [selectedValueEthnicity, setSelectedValueEthnicity] = useState('');


  return (
    <View style={styles.formContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Personal Information</Text>
            <Image source={require('../../assets/AppLogo.png')} style={{width: 75, height: 75}}/>
        </View>

        <Form.InputText
            label='Full Name'
            value={fullName}
            onChange={setFullName}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15, borderWidth: 1}}
        />

        <Form.InputText
            label='Date of Birth'
            value={dob}
            onChange={setDob}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15, borderWidth: 1}}
        />

        <Form.InputSelect
            label='Sex'
            options={sex}
            onValueChange={(value) => setSelectedValueSex(value)}
            style={{width: 350, margin: 15}}
            textStyle={{fontWeight: 'bold'}}
        />

        <Form.InputSelect
            label='Ethnicity'
            options={ethnicity}
            onValueChange={(value) => setSelectedValueEthnicity()}
            style={{width: 350,}}
            textStyle={{fontWeight: 'bold'}}
        />

        <Form.InputText
            label='NHS Number'
            value={nhsNum}
            onChange={setNhsNum}
            isPassword={false}
            style={{width: 350, height: 50, borderColor: 'grey', marginTop: 5, marginBottom: 15, borderWidth: 1}}
        />


        <TouchableOpacity onPress={() => navigation.navigate('PatientAddressScreen', {fullName, dob, sex, ethnicity})} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    </View>
  )
}

export default PatientInfoScreen

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