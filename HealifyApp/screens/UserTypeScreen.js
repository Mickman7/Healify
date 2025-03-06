import { Pressable, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, {useState, useEffect, useContext } from 'react'

import { UserTypeContext } from '../App'


const UserTypeScreen = ({navigation}) => {

    const { setUserType } = useContext(UserTypeContext);


  

  return (
    <View style={styles.container}>
        <Image source={require('../assets/AppLogo.png')} style={{marginBottom: 50}}/>
        <Text style={styles.title}>What type of user are you?</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                onPress={() => {
                    setUserType('Patient')
                    navigation.navigate('AuthenticationScreen')
                }}
                style={styles.button}
            >
                <Text>Patient</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => {
                    setUserType('Clinician')
                    navigation.navigate('AuthenticationScreen')
                }}
                style={styles.button}
            >
                <Text>Clinician</Text>
            </TouchableOpacity>
        </View>
       
    </View>
  )
}

export default UserTypeScreen

const styles = StyleSheet.create({
    container: {
        marginVertical: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonContainer: {
        margin: 50,
    },
    button: {
        borderWidth: 1,
        borderRadius: 20,
        width: 150,
        height: 75,
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})