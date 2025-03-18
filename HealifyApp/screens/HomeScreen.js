import { StyleSheet, Text, TouchableOpacity, View, navigate } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { UserTypeContext } from '../App'






const HomeScreen = ({navigation, route}) => {
  
    const { userType } = useContext(UserTypeContext);
    // const userType = 'Clinician'


  const handleSubmit = () => {
    
    if (userType === 'Clinician') {
      navigation.navigate('ClinicianDetails');
    } else if (userType === 'Patient') {
      navigation.navigate('PatientDetails');
    } else {
      console.log('Unknown user type:', userType);
    }

  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {userType === 'Clinician' ? (
        <View>
          <Text>This is the Clinician Home Page</Text>
          <TouchableOpacity 
            onPress={handleSubmit} 
            style={{borderWidth: 1, padding: 5, width: 100, justifyContent: 'center', alignItems: 'center', marginTop: 100}}
          >
            <Text>Button</Text>
          </TouchableOpacity>
        </View>
        


      ) : (




        <View>
          <Text>This is the Patient Home Page</Text>
          <TouchableOpacity 
            onPress={handleSubmit} 
            style={{borderWidth: 1, padding: 5, width: 100, justifyContent: 'center', alignItems: 'center', marginTop: 100}}
          >
            <Text>Button</Text>
          </TouchableOpacity>
        </View>
        
      )}
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: 'center',
    marginVertical: '25%'
  }
})