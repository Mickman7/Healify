import React, { useState, createContext } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import AuthenticationScreen from "./screens/AuthenticationScreen";
import HomeScreen from "./screens/HomeScreen";
import UserTypeScreen from "./screens/UserTypeScreen";
import PersonalInfoScreen from "./screens/UserDetailScreens/PersonalInfoScreen";
import UserAddressScreen from "./screens/UserDetailScreens/UserAddressScreen";
import UserHistoryScreen from "./screens/UserDetailScreens/UserHistoryScreen";

const Stack = createNativeStackNavigator();

export const UserTypeContext = createContext();

function UserDetailStack() {
  return (
    <Stack.Navigator initialRouteName="Personal-Info">
      <Stack.Screen name="Personal-Info" component={PersonalInfoScreen} />
      <Stack.Screen name="UserAddressScreen" component={UserAddressScreen} />
      <Stack.Screen name="UserHistoryScreen" component={UserHistoryScreen} />
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
          <Stack.Screen
            name="AuthenticationScreen"
            component={AuthenticationScreen}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UserDetails" component={UserDetailStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserTypeContext.Provider>
  );
}
