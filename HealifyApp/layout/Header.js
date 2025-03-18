import { Text } from "react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Header = ({ leftItem, headerText, rightItem }) => {
  return (
    <View style={styles.headerLayoutStyle}>
      <TouchableOpacity>{leftItem}</TouchableOpacity>
      <Text style={styles.titleStyle}>{headerText}</Text>
      <TouchableOpacity>{rightItem}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayoutStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "13%",
    paddingTop: 60,
    padding: 10,
  },
  titleStyle: {
    fontWeight: 600,
    fontSize: 24,
  },
});

export default Header;
