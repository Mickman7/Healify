import React, {useState, useEffect,  createContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';



// Screens
import AuthenticationScreen from './screens/AuthenticationScreen';
import HomeScreen from './screens/HomeScreen';
import PatientHome from './screens/PatientHome';
import UserTypeScreen from './screens/UserTypeScreen';
import PatientInfoScreen from './screens/PatientDetailScreens/PatientInfoScreen';
import PatientAddressScreen from './screens/PatientDetailScreens/PatientAddressScreen';
import PatientHistoryScreen from './screens/PatientDetailScreens/PatientHistoryScreen';
import ClinicialInfoScreen from './screens/ClinicianDetailsScreens/ClinicianInfoScreen';
import ClinicianCredentialsScreen from './screens/ClinicianDetailsScreens/ClinicianCredentialsScreen';
import ClinicianWorkScreen from './screens/ClinicianDetailsScreens/ClinicianWorkScreen';
import ClinicianWorkAddressScreen from './screens/ClinicianDetailsScreens/ClinicianWorkAddressScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const UserTypeContext = createContext();

function PatientDetailStack() {
  return(
    <Stack.Navigator initialRouteName='Patient Personal Info'>
      <Stack.Screen name='Patient Personal Info' component={PatientInfoScreen}/>
      <Stack.Screen name='PatientAddressScreen' component={PatientAddressScreen}/>
      <Stack.Screen name='PatientHistoryScreen' component={PatientHistoryScreen}/>
>>>>>>> main
    </Stack.Navigator>
  );
}


export default function App() {
  const [userType, setUserType] = useState(null);

  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName="UserTypeScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="UserTypeScreen" component={UserTypeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserTypeContext.Provider>
  );
}
