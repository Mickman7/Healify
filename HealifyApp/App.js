import React, { useState, createContext } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import NavigationBar from "./components/NavigationBar";

// Screens
import AuthenticationScreen from "./screens/AuthenticationScreen";
import HomeScreen from "./screens/HomeScreen";
import PatientHome from "./screens/PatientHome";
import UserTypeScreen from "./screens/UserTypeScreen";
import PatientInfoScreen from "./screens/PatientDetailScreens/PatientInfoScreen";
import PatientAddressScreen from "./screens/PatientDetailScreens/PatientAddressScreen";
import PatientHistoryScreen from "./screens/PatientDetailScreens/PatientHistoryScreen";
import ClinicialInfoScreen from "./screens/ClinicianDetailsScreens/ClinicianInfoScreen";
import ClinicianCredentialsScreen from "./screens/ClinicianDetailsScreens/ClinicianCredentialsScreen";
import ClinicianWorkScreen from "./screens/ClinicianDetailsScreens/ClinicianWorkScreen";
import ClinicianWorkAddressScreen from "./screens/ClinicianDetailsScreens/ClinicianWorkAddressScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CalculatorScreen from "./screens/CalculatorScreens/CalculatorScreen";
import EGFRResultsScreen from "./screens/CalculatorScreens/EGFRResultsScreen";
import StageScreen from "./screens/CalculatorScreens/StageScreen";
import FilesScreen from "./screens/FilesScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const UserTypeContext = createContext();

function PatientDetailStack() {
  return (
    <Stack.Navigator initialRouteName="Patient Personal Info">
      <Stack.Screen
        name="Patient Personal Info"
        component={PatientInfoScreen}
      />
      <Stack.Screen
        name="PatientAddressScreen"
        component={PatientAddressScreen}
      />
      <Stack.Screen
        name="PatientHistoryScreen"
        component={PatientHistoryScreen}
      />
    </Stack.Navigator>
  );
}

function ClinicianDetailStack() {
  return (
    <Stack.Navigator initialRouteName="Clinician Personal Info">
      <Stack.Screen
        name="Clinician Personal Info"
        component={ClinicialInfoScreen}
      />
      <Stack.Screen
        name="Clinician Credentials"
        component={ClinicianCredentialsScreen}
      />
      <Stack.Screen name="Clinician Work" component={ClinicianWorkScreen} />
      <Stack.Screen
        name="Clinician Work Address"
        component={ClinicianWorkAddressScreen}
      />
    </Stack.Navigator>
  );
}

function CalculatorStack() {
  return (
    <Stack.Navigator initialRouteName="Calculator Screen">
      <Stack.Screen name="Calculator Screen" component={CalculatorScreen} />
      <Stack.Screen name="Results Screen" component={EGFRResultsScreen} />
      <Stack.Screen name="Stage Screen" component={StageScreen} />
    </Stack.Navigator>
  );
}

function MyTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <NavigationBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calculator" component={CalculatorStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
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
          <Stack.Screen
            name="AuthenticationScreen"
            component={AuthenticationScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="BottomTabs"
            component={MyTabs}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FileScreen" component={FilesScreen} />
          <Stack.Screen name="PatientDetails" component={PatientDetailStack} />
          <Stack.Screen
            name="ClinicianDetails"
            component={ClinicianDetailStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserTypeContext.Provider>
  );
}
