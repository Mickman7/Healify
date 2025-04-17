import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from "@expo/vector-icons";
import Header from '../layout/Header';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { UserTypeContext } from "../App";

 


const ProfileScreen = ({navigation}) => {
    const { userType } = useContext(UserTypeContext);


    const handleSignOut = () => {
        FIREBASE_AUTH.signOut()
          .then(() => {
            navigation.navigate('UserTypeScreen')
            Alert.alert('Signed out successfully');
          })
          .catch((error) => {
            Alert.alert('Error signing out', error.message);
          });
      };

      const onPressDetails = () => {
        if(userType === 'Clinician'){
            navigation.navigate('ClinicianDetails')
        }else if(userType === 'Patient'){
            navigation.navigate('PatientDetails')
        }
      }


  return (
    <View>
       <Header
            headerText={"Profile"}
            rightItem={
              <Image
                source={require("../assets/AppLogo.png")}
                style={styles.logoStyling}
              />
            }
            style={{}}
        />
        <View style={{justifyContent: 'space-evenly',}}>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, padding: 15, justifyContent: 'space-between', borderBottomWidth: 1}} onPress={onPressDetails}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Ionicons name='document-text-outline' size={30} color='black' style={{marginRight: 10}}/>
                    <Text style={styles.profileItemText}>Details</Text>
                </View>
                <Ionicons name='chevron-forward' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, padding: 15, justifyContent: 'space-between', borderBottomWidth: 1}} onPress={() => Alert.alert('You opened settings')}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Ionicons name='settings-outline' size={30} color='black' style={{marginRight: 10}}/>
                    <Text style={styles.profileItemText}>Settings</Text>
                </View>
                <Ionicons name='chevron-forward' size={30} />
            </TouchableOpacity>
            
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, padding: 15, justifyContent: 'space-between', borderBottomWidth: 1}} onPress={() => Alert.alert('You opened notifications')}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Ionicons name='notifications-outline' size={30} color='black' style={{marginRight: 10}}/>
                    <Text style={styles.profileItemText}>Notifications</Text>
                </View>
                <Ionicons name='chevron-forward' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, padding: 15, justifyContent: 'space-between', borderBottomWidth: 1}} onPress={() => Alert.alert('You opened Appearance')}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Ionicons name='color-palette-outline' size={30} color='black' style={{marginRight: 10}}/>
                    <Text style={styles.profileItemText}>Appearance</Text>
                </View>
                <Ionicons name='chevron-forward' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, padding: 15, justifyContent: 'space-between', borderBottomWidth: 1}} onPress={() => Alert.alert('You opened privacy & security')}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Ionicons name='lock-closed-outline' size={30} color='black' style={{marginRight: 10}}/>
                    <Text style={styles.profileItemText}>Privacy & Security</Text>
                </View>
                <Ionicons name='chevron-forward' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, padding: 15, justifyContent: 'space-between', borderBottomWidth: 1}} onPress={() => Alert.alert('You opened help & support')}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Ionicons name='help-circle-outline' size={30} color='black' style={{marginRight: 10}}/>
                    <Text style={styles.profileItemText}>Help & Support</Text>
                </View>
                <Ionicons name='chevron-forward' size={30} />
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, padding: 15, justifyContent: 'space-between', borderBottomWidth: 1}} onPress={handleSignOut}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <Ionicons name='log-out-outline' size={30} color='black' style={{marginRight: 10}}/>
                    <Text style={styles.profileItemText}>Log Out</Text>
                </View>
                <Ionicons name='chevron-forward' size={30} />
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    profileItemText: {
        fontSize: 20
    },
    logoStyling: {
        width: 75,
        height: 75,
      },
})