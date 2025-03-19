import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ label }) => {
  return (
    <TouchableOpacity style={styles.containerStyle}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: "25%",
  },
});

export default Button;
