import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native'
import { SelectList } from "react-native-dropdown-select-list";
import React from 'react'

const Form = ({children, isLogin, setIsLogin}) => {
  return (
    <View>
      <Text style={styles.formHeader}>{ isLogin ? "Welcome back" : "Register with us"}</Text>
        <View style={styles.formContainer}>
            {children}

            <View style={styles.bottomContainer}>
                <Text style={styles.toggleText} onPress={() => {setIsLogin(!isLogin)}}>
                    {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
                </Text>
            </View>
        </View>
    </View>
  )
}

const InputText = ({label, value, onChange, isPassword}) => {
    return(
        <View style={styles.item}>
            <Text style={styles.itemLabel}>{label}</Text>
            <TextInput 
                value={value} 
                onChangeText={onChange}
                style={styles.itemTextInput}
                placeholder={label}
                secureTextEntry={isPassword}
            />
        </View>

    );
}

const InputSelect = ({ label, options, selectedValue, onValueChange }) => {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <SelectList
          data={options.map((option) => ({ key: option, value: option }))}
          setSelected={onValueChange} 
          defaultOption={{ key: selectedValue, value: selectedValue }}
          placeholder="Select an option"
          style={styles.selectStyles}
        />
      </View>
    );
  };


  const SubmitButton = ({label, onPress}) => {
    return(
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
}


Form.InputText = InputText;
Form.InputSelect = InputSelect;
Form.SubmitButton = SubmitButton;
  

export default Form

const styles = StyleSheet.create({
    item: {
        justifyContent: 'center',
    },
    itemLabel: {

    },
    itemTextInput: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        maxWidth: 400
    },
    button: {
        minHeight: 50,
        maxHeight: 30,
        borderRadius: 25,
        backgroundColor: '#13AE85',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        marginTop: 30,
        flex: 1,
        justifyContent: 'center',
        width: 200,
        alignItems: 'center'
    }
})