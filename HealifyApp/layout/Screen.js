import { StyleSheet, View } from "react-native";

const Screen = ({ children, screenStyle }) => {
  return (
    <View style={[screenStyle, styles.screenLayoutStyle]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  screenLayoutStyle: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default Screen;
