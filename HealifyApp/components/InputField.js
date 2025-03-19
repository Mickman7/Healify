import { StyleSheet, Text, TextInput, View } from "react-native";

const InputField = ({
  inputFieldLabel,
  placeholder,
  value,
  onValueChange,
  customStyle,
}) => {
  return (
    <View style={[customStyle, styles.containerStyle]}>
      <Text style={styles.labelStyle}>{inputFieldLabel}</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 5,
    borderRadius: 10,
    paddingLeft: 15,
    minHeight: 50,
    backgroundColor: "rgba(255, 206, 83, 0.3)",
    fontSize: 16,
    width: "50%",
  },
  containerStyle: {
    padding: 10,
    marginBottom: 10,
  },
  labelStyle: {
    paddingBottom: 10,
    color: "#999A9A",
  },
});

export default InputField;
