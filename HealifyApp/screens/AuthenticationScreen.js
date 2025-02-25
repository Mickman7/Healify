import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import Form from '../components/Form'

const AuthenticationScreen = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View>
      <Text>AuthenticationScreen</Text>

      <Form.InputText
        label='Email'
        value={email}
        onChange={() => setEmail()}
        isPassword={false}
      />
      <Form.InputText
        label='Password'
        value={password}
        onChange={() => setPassword()}
        isPassword={false}
      />
    </View>
  )
}

export default AuthenticationScreen

const styles = StyleSheet.create({})