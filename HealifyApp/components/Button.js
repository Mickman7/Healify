import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ label, labelStyle, buttonStyle, onClick }) => {
  return (
    <TouchableOpacity
      style={[buttonStyle, styles.containerStyle]}
      onPress={onClick}
    >
      <Text style={[labelStyle, styles.textStyle]}>{label}</Text>
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
    //Android shadow
    elevation: 4,
    //iOS shadow
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.8,
  },
  textStyle: {
    fontWeight: 500,
    fontSize: 12,
  },
});

export default Button;
