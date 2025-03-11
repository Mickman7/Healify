import { StyleSheet, Text, TouchableOpacity, View, navigate } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { UserTypeContext } from '../App'






const HomeScreen = ({navigation, route}) => {
  
    // const { userType } = route.params;
    const { userType } = useContext(UserTypeContext);


  const handleSubmit = () => {
    
    // if (user.userType === 'clinician') {
    //   navigation.navigate('ClinicianDetails');
    // } else if (user.userType === 'patient') {
    //   navigation.navigate('PatientDetails');
    // } else {
    //   console.log('Unknown user type:', user.userType);
    // }

  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {/* <TouchableOpacity 
        onPress={handleSubmit} 
        style={{borderWidth: 1, padding: 5, width: 100, justifyContent: 'center', alignItems: 'center', marginTop: 100}}
      >
        <Text>Button</Text>
      </TouchableOpacity> */}
      {userType === 'Clinician' ? (
        <Text>This is the Clinician Home Page</Text>
      ) : (
        <Text>This is the Patient Home Page</Text>
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