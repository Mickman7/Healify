import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import Header from '../layout/Header';

const UploadCsvGuideScreen = () => {
  return (
    <View>
        <Header
            headerText={"Files"}
            rightItem={
              <Image
                source={require("../assets/AppLogo.png")}
                style={styles.logoStyling}
              />
              
            }
        />

        <View style={{padding: 15}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 15}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Upload CSV File</Text>
                <Ionicons name='information-circle-outline' size={30} color='#001C45'/>
            </View>
            <View>
                <Text style={styles.textHeaders}>Instructions:</Text>
                <Text>
                    To process eGFR calculations for multiple patients, upload a CSV (Comma-Separated Values) file with patient details in the following format:
                </Text>
                <Text>Required Data Format (Column Headers & Example Row):</Text>
                <Image source={require('../assets/table image.png')} style={styles.tableImg}/>

                <Text style={[styles.textHeaders]}>Field Requirements & Valid Values:</Text>
                <View style={{paddingHorizontal: 15, marginBottom: 40}}>
                    <Text>1. PatientID – A unique numerical identifier for each patient (NHS Number).</Text>
                    <Text>2. Sex – Enter Male or Female only.</Text>
                    <Text>3. Year of Birth – Enter the four-digit birth year (e.g. 1965)</Text>
                    <Text>4. Ethnicity – Choose Black or Non-Black as this affects eGFR calculations.</Text>
                    <Text>5. Creatinine Level (µmol/L) – Enter a numerical value (e.g. 90).</Text>
                </View>
                <Text style={styles.textHeaders}>Important Notes:</Text>
                <View style={{paddingHorizontal: 15}}>
                    <Text>• Ensure correct spelling and format – Invalid values may cause errors.</Text>
                    <Text>• Only .CSV format is supported – Excel files (.xlsx) must be converted first.</Text>
                    <Text>• Do not include extra columns – Additional data will be ignored.</Text>
                    <Text>• Check for missing or incorrect data – Incomplete rows may not be processed.</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default UploadCsvGuideScreen

const styles = StyleSheet.create({
    tableImg: {
        width: '100%',
        marginVertical: 40,
    },
    logoStyling: {

    },
    textHeaders: {
        fontWeight: 'bold',
        fontSize: 17
    }
})