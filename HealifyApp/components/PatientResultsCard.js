import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PatientResultsCard = ({patientId, age, sex, ethnicity, creatinineLvl, egfr, stage, style}) => {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <View style={styles.cell}>
                <Text>PatientID:</Text>
                <Text style={styles.results}>{patientId}</Text>
            </View>
            <View style={styles.cell}>
                <Text>Age:</Text>
                <Text style={styles.results}>{age}</Text>
            </View>
            <View style={styles.cell}>
                <Text>Sex:</Text>
                <Text style={styles.results}>{sex}</Text>
            </View>
            <View style={styles.cell}>
                <Text>Ethnicity:</Text>
                <Text style={styles.results}>{ethnicity}</Text>
            </View>
        </View>


        <View style={styles.bottom}>
            <View style={styles.cell}>
                <Text>Creatinine:</Text>
                <Text style={styles.results}>{creatinineLvl}</Text>
            </View>
            <View style={styles.cell}>
                <Text>eGFR:</Text>
                <Text style={styles.results}>{egfr}</Text>
            </View>
            <View style={[styles.stageCell, style]}>
                <Text style={styles.results}>{stage}</Text>
            </View>
        </View>

    </View>
  )
}

export default PatientResultsCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
        justifyContent: 'space-evenly',
        width: 375,
        height: 'auto',
        gap: 20,
        shadowColor: 'grey',
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0, 
            height: 5,
        },
        shadowRadius: 3,
        elevation: 4,
        marginVertical: 5
        
        
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        width: 350,
        alignSelf: 'center'
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        width: 350,
        alignSelf: 'center'

    },
    cell: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    stageCell: {
        backgroundColor: '#FCC333',
        paddingHorizontal: 5,
        paddingVertical: 8,
        borderRadius: 10
    },
    results: {
        fontWeight: 'bold'
    }
})