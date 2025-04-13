import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import PatientResultsCard from '../components/PatientResultsCard'
import Header from '../layout/Header'
import { Ionicons } from "@expo/vector-icons";
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { FIREBASE_DB, FIREBASE_AUTH } from '../FirebaseConfig';

const PatientResultList = ({navigation}) => {

    const userId = FIREBASE_AUTH.currentUser.uid;

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

        {results.map((result) => {
          const { stage, color } = determineStage(result.eGFRLevel); // Get stage and color

          return (
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
              stage={stage} // Display the stage
              style={[styles.defaultCardStyle, color]} // Apply the color
            />
          );
        })}
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
  if (eGFRLevel >= 90) return { stage: "Stage 1", color: styles.greenContainerStyle };
  if (eGFRLevel >= 60) return { stage: "Stage 2", color: styles.yellowContainerStyle };
  if (eGFRLevel >= 45) return { stage: "Stage 3a", color: styles.darkerYellowContainerStyle };
  if (eGFRLevel >= 30) return { stage: "Stage 3b", color: styles.darkerYellowContainerStyle };
  if (eGFRLevel >= 15) return { stage: "Stage 4", color: styles.organgeContainerStyle };
  return { stage: "Stage 5", color: styles.redContainerStyle };
};

const getStageColour = (stage) => {
  if (stage == "1") return styles.greenContainerStyle;
  if (stage == "2") return styles.yellowContainerStyle;
  if (stage == "3a" || stage == "3b")
    return styles.darkerYellowContainerStyle;
  if (stage == "4") return styles.organgeContainerStyle;
  if (stage == "5") return styles.redContainerStyle;
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
      },
      greenContainerStyle: {
        backgroundColor: "#4C9A29",
      },
      yellowContainerStyle: {
        backgroundColor: "#FCC333",
      },
      darkerYellowContainerStyle: {
        backgroundColor: "#FDBD20",
      },
      organgeContainerStyle: {
        backgroundColor: "#E57C02",
      },
      redContainerStyle: {
        backgroundColor: "#D94214",
      },
})