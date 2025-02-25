import { StyleSheet, Text, View, TextInput, } from 'react-native'
import { SelectList } from "react-native-dropdown-select-list";
import React from 'react'

const Form = () => {
  return (
    <View>
      <Text>Form</Text>
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


Form.InputText = InputText;
Form.InputSelect = InputSelect;
  

export default Form

const styles = StyleSheet.create({})