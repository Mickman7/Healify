import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import UploadCSV from '../components/UploadCSV'
import { Ionicons } from "@expo/vector-icons";
import Header from '../layout/Header';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';


const ClinicianHome = () => {
    const navigation = useNavigation();

    const [totalPatients, setTotalPatients] = useState('0');
    const [value, setValue] = useState(null);
    const [uploadData, setUploadData] = useState([]);

    const clearData = () => {
        setUploadData([]);
        setTotalPatients('0');
    };

    const handleFileCalculation = () => {
        if (uploadData.length === 0) {
            Alert.alert("No Data", "Please upload a file before calculating.");
            return;
        }

        const results = uploadData.map((row, index) => {
            const creatinineLevel = parseFloat(row["Creatinine"]);
            const age = parseInt(row["Age"], 10);
            const sex = row["Gender"]?.toLowerCase() === "female";
            const ethnicity = row["Ethnicity"]?.toLowerCase() === "non-black";
            const units = row["Units"]?.toLowerCase() || "mg/dl";

            if (!creatinineLevel || !age || sex === undefined || ethnicity === undefined) {
                return { error: "Missing or invalid fields in row", row };
            }

            const creatValue =
                units === "µmol/l" || creatinineLevel > 20
                    ? (creatinineLevel / 88.4) ** -1.154
                    : creatinineLevel ** -1.154;
            const ageValue = age ** -0.203;
            const sexValue = sex ? 0.742 : 1;
            const ethnicityValue = ethnicity ? 1 : 1.21;

            const eGFRResult = Math.ceil(
                186 * creatValue * ageValue * sexValue * ethnicityValue
            );

            return { eGFRResult, ...row };
        });

        const validResults = results.filter((res) => !res.error);
        setTotalPatients(validResults.length.toString());

        if (validResults.length > 0) {
            navigation.navigate("PatientResultList", { results: validResults });
        } else {
            Alert.alert("Calculation Failed", "No valid rows found in the uploaded data.");
        }
    };

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
            <TouchableOpacity onPress={() => navigation.navigate('UploadCsvGuide')}>
                <Ionicons name='information-circle-outline' size={30} color='#001C45'/>
            </TouchableOpacity>
        </View>
        <UploadCSV data={uploadData} setData={setUploadData} setTotalPatients={setTotalPatients} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 50, marginBottom: 10}}>
        <Button
            label='Clear'
            buttonStyle={styles.clearBtn}
            labelStyle={styles.clearBtnLabel}
            onClick={clearData} 
        />
        <Button
            label='Calculate'
            buttonStyle={styles.calculateBtn}
            labelStyle={styles.calculateBtnLabel}
            onClick={handleFileCalculation}
        />
      </View>

      <View style={{width: '100%', padding: 35}}>
        <Text style={{marginBottom: 10}}>Uploaded File Summary</Text>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Total Patients Processed:</Text>

        <View style={styles.patientTotalField}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>{totalPatients}</Text>
        </View>
      </View>

      <View style={{width: '100%', paddingHorizontal: 35, flexDirection: 'row', marginTop: 50}}>
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