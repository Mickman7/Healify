import { StyleSheet, Text, TouchableOpacity, View, navigate } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('UserDetails')} style={{borderWidth: 1, padding: 5, width: 100, justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: 'center',
    marginVertical: '25%'
  }
})