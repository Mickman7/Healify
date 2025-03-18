import { StyleSheet, TouchableOpacity, View } from "react-native";
import KidneyIcon from "../assets/KidneyIcon.svg";
import CalculatorIcon from "../assets/CalculatorIcon.svg";
import ProfileIcon from "../assets/ProfileIcon.svg";

const NavigationBar = ({
  onKidneyPress,
  onCalculatorPress,
  onProfilePress,
}) => {
  //View
  return (
    <View style={styles.navigationBarStyle}>
      <TouchableOpacity onPress={onKidneyPress}>
        <KidneyIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={onCalculatorPress}>
        <CalculatorIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={onProfilePress}>
        <ProfileIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBarStyle: {
    width: "100%",
    height: "9%",
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
});

export default NavigationBar;
