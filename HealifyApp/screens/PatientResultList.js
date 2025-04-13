import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import PatientResultsCard from '../components/PatientResultsCard'
import Header from '../layout/Header'
import { Ionicons } from "@expo/vector-icons";
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { FIREBASE_DB, FIREBASE_AUTH } from '../FirebaseConfig';
import ResultsList from '../components/ResultsList';

const PatientResultList = ({navigation}) => {

    const userId = FIREBASE_AUTH.currentUser.uid;
    // const userId = 'bG9raUVNhuY72kF5fvkbyVKptRI2'

    const [results, setResults] = useState([]);
    const [user, setUser] = useState([]);
    const [value, setValue] = useState();

    useEffect(() => {
      const fetchResults = async() => {
        try{
          const docRef = collection(FIREBASE_DB, 'users', userId, 'eGFRResults');
          const results =  await getDocs(docRef);
          const resultsList = results.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setResults(resultsList);
          console.log("Fetched Results:", resultsList);
        }catch(err){
          console.error("Error fetching results:", err)
        }
      }

      fetchResults()
    }, [])

    useEffect(() => {
      try{
        const fetchUser = async() => {
          try{
            const docRef = collection(FIREBASE_DB, 'users', userId, 'details');
            const results =  await getDocs(docRef);
            const userList = results.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setUser(userList);
            console.log("Users:", userList)
            console.log("Fetched user:", user[0]?.uid); 
          }catch(err){
            console.error("Error fetching results:", err)
          }
        }

        fetchUser()

      }catch(err){
        console.error("Error fetching users:", err)
      }
    }, [])

  return (
    <View style={{ alignItems: 'center', paddingTop: 50 }}>
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

        {results.map((result) => (
          <PatientResultsCard
            key={result.id}
            patientId={"N/A"}
            age={
              user[0]?.dob
                ? (() => {
                    const [day, month, year] = user[0].dob.split('/').map(Number);
                    const dob = new Date(year, month - 1, day);
                    const today = new Date();
                    return today.getFullYear() - dob.getFullYear() - 
                      (today < new Date(today.getFullYear(), dob.getMonth(), dob.getDate()) ? 1 : 0);
                  })()
                : "N/A"
            } 
            sex={user[0]?.sex || "N/A"}
            ethnicity={user[0]?.ethnicity || "N/A"}
            creatinineLvl={`${result.creatineLevel} µmol/L`}
            egfr={`${result.eGFRLevel} ml/min/1.73m²`}
            stage={determineStage(result.eGFRLevel)}
          />
        ))}
      </ScrollView>

      <View style={{ width: '100%', paddingHorizontal: 35, flexDirection: 'row', bottom: 0}}>
        <TouchableOpacity style={styles.fileBtn} onPress={() => navigation.navigate('Home')}>
          <Ionicons name='download-outline' size={30} color='white' style={{}} />
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

// Helper function to determine the stage based on eGFR level
const determineStage = (eGFRLevel) => {
  if (eGFRLevel >= 90) return "Stage 1";
  if (eGFRLevel >= 60) return "Stage 2";
  if (eGFRLevel >= 45) return "Stage 3a";
  if (eGFRLevel >= 30) return "Stage 3b";
  if (eGFRLevel >= 15) return "Stage 4";
  return "Stage 5";
};

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
      },
      listStyle: {
        width: 375,
        height: 200
      }
})