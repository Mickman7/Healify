import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator,DrawerContentScrollView, DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Screens
import AuthenticationScreen from './screens/AuthenticationScreen';
import HomeScreen from './screens/HomeScreen'


const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <View>
      <NavigationContainer>
        <StatusBar style='auto'/>
        <Stack.Navigator initialRouteName='AuthenticationScreen'>
          <Stack.Screen name='AuthenticationScreen' component={AuthenticationScreen}/>
          <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
