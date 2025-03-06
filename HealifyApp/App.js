import React, {useState, useEffect,  createContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import AuthenticationScreen from './screens/AuthenticationScreen';
import HomeScreen from './screens/HomeScreen';
import UserTypeScreen from './screens/UserTypeScreen';

const Stack = createNativeStackNavigator();

export const UserTypeContext = createContext();





export default function App() {
    const [userType, setUserType] = useState(null);

  return (
    <UserTypeContext.Provider value={{userType, setUserType}}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="UserTypeScreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name="UserTypeScreen" component={UserTypeScreen} />
          <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserTypeContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
