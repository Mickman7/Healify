import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import React from "react";

const Form = ({ children, isLogin, setIsLogin, style }) => {
  return (
    <View style={[styles.formContainer, style]}>
      <Text style={styles.formTitle}>{isLogin ? "Login" : "Register"}</Text>
      <Image source={require("../assets/AppLogo.png")} style={styles.appLogo} />
      {children}

      <View style={styles.bottomContainer}>
        <Text
          style={styles.toggleText}
          onPress={() => {
            setIsLogin(!isLogin);
          }}
        >
          {isLogin
            ? (<Text style={{color: 'white', fontWeight: 'bold'}}>Don't have an account? Register</Text>)
            : (<Text style={{color: 'white', fontWeight: 'bold'}}>Already have an account? Login</Text>)}
        </Text>
      </View>
    </View>
  );
};

const InputText = ({ label, value, onChange, isPassword, style }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={[styles.itemTextInput, style]}
        placeholder={label}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

const InputSelect = ({ label, options, onValueChange, style }) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <SelectList
        data={options.map((option) => ({ key: option, value: option }))}
        setSelected={onValueChange}
        placeholder="Select an option"
        style={[styles.selectStyles]}
      />
    </View>
  );
};

const SubmitButton = ({ label, onPress, style, textStyle }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </Pressable>
  );
};

Form.InputText = InputText;
Form.InputSelect = InputSelect;
Form.SubmitButton = SubmitButton;

export default Form;

const styles = StyleSheet.create({
  appLogo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  formTitle: {
    fontWeight: "bold",
    fontSize: 30,
    color: 'white'
  },
  item: {
    justifyContent: "center",
  },
  itemLabel: {
    color: 'white',
    fontWeight: 'bold'
  },
  itemTextInput: {
    borderRadius: 10,
    padding: 10,
    maxWidth: 400,
  },
  button: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
