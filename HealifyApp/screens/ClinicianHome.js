import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import UploadCSV from '../components/UploadCSV'
import { Ionicons } from "@expo/vector-icons";
import Header from '../layout/Header';
import Button from '../components/Button';


const ClinicianHome = ({navigation}) => {

    const [totalPatients, setTotalPatients] = useState('36');
    const [value, setValue] = useState(null);
  return (
    <View style={{alignItems: 'center'}}>
      <Header
            headerText={"Files"}
            rightItem={
              <Image
                source={require("../assets/AppLogo.png")}
                style={styles.logoStyling}
              />
            }
        />

      <View style={{justifyContent: 'center', marginVertical: 50}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 15}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Upload CSV File</Text>
            <Ionicons name='information-circle-outline' size={30} color='#001C45'/>
        </View>
        <UploadCSV/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 50, marginBottom: 10}}>
        <Button
            label='Clear'
            buttonStyle={styles.clearBtn}
            labelStyle={styles.clearBtnLabel}
            onClick={() => console.log('Button Pressed')}

        />
        <Button
            label='Calculate'
            buttonStyle={styles.calculateBtn}
            labelStyle={styles.calculateBtnLabel}
            onClick={() => console.log('Button Pressed')}

        />
      </View>

      <View style={{width: '100%', padding: 35}}>
        <Text style={{marginBottom: 10}}>Uploaded File Summary</Text>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Total Patients Processed:</Text>

        <View style={styles.patientTotalField}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>{totalPatients}</Text>
        </View>
      </View>

      <View style={{width: '100%', paddingHorizontal: 35, flexDirection: 'row'}}>
        <TouchableOpacity style={styles.fileBtn} onPress={() => navigation.navigate('FileScreen')}>
            <Ionicons name='folder-open' size={30} color='white'/>
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

export default ClinicianHome

const styles = StyleSheet.create({
    logoStyling: {
        width: 75,
        height: 75,
      },
      clearBtn: {
        backgroundColor: "#FFFFFF",
        borderColor: "#FFFFFF",
        height: 50,
        shadowOffset: {
            width: 0,
            height: 4,
          },
      },
      clearBtnLabel: {
        fontWeight: 'bold'
      },
      calculateBtn: {
        backgroundColor: "#001C45",
        height: 50,


      },
      calculateBtnLabel: {
        color: "#FFFFFF",

      },
      patientTotalField: {
        borderWidth: 1,
        width: 100,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: 20
      },
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