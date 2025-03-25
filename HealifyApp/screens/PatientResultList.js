import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import PatientResultsCard from '../components/PatientResultsCard'
import Header from '../layout/Header'
import { Ionicons } from "@expo/vector-icons";


const PatientResultList = ({navigation}) => {
    const [value, setValue] = useState();

  return (
    <View style={{alignItems: 'center', paddingTop: 50}}>
      <Header
        headerText={"Result"}
        rightItem={
          <Image
            source={require("../assets/AppLogo.png")}
            style={styles.logoStyling}
          />
        }
      />
        <ScrollView style={{height: '75%'}}>
            <PatientResultsCard 
                patientId={'3768910'}
                age={'67'}
                sex={'M'}
                ethnicity={'Black'}
                creatinineLvl={'55 µmol/L'}
                egfr={'48 ml/min/1.73m²'}
                stage={'Stage 3a'}
            />
            <PatientResultsCard 
                patientId={'4568620'}
                age={'48'}
                sex={'F'}
                ethnicity={'Non-Black'}
                creatinineLvl={'5113 µmol/L'}
                egfr={'90 ml/min/1.73m²'}
                stage={'Stage 1'}
                style={{backgroundColor: '#4C9A29'}}
            />
        </ScrollView>


        <View style={{width: '100%', paddingHorizontal: 35, flexDirection: 'row', alignSelf: 'flex-end'}}>
            <TouchableOpacity style={styles.fileBtn} onPress={() => navigation.navigate('Home')}>
                <Ionicons name='download-outline' size={30} color='white' style={{}}/>
            </TouchableOpacity>
            <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder='Search your Files'
                style={styles.fileSearchBar}
            />
        </View>
    </View>


  )
}

export default PatientResultList

const styles = StyleSheet.create({
    fileBtn: {
        backgroundColor: '#001C45',
        width: 60,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
      },
      fileSearchBar: {
        width: 300,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        paddingHorizontal: 10
      }
})