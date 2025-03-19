import { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ToggleSwitch = ({ label, leftOption, rightOption, onToggleSwitch }) => {
  //State
  const toggleSelectAnimation = useRef(new Animated.Value(0)).current;
  const [currentOption, setCurrentOption] = useState(false);

  //Handlers
  const onTogglePress = () => {
    const selectedOption = !currentOption;
    setCurrentOption(selectedOption);
    Animated.timing(toggleSelectAnimation, {
      toValue: selectedOption ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    if (onToggleSwitch) {
      onToggleSwitch(selectedOption);
    }
  };

  const translateX = toggleSelectAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, styles.toggleBar.width - 70],
  });

  //View
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TouchableOpacity onPress={onTogglePress}>
        <View style={styles.toggleBar}>
          <Animated.View
            style={[styles.highlight, { transform: [{ translateX }] }]}
          />
          <View style={styles.textContainerStyle}>
            <Text style={{ color: !currentOption ? "#FFFFFF" : "#000000" }}>
              {leftOption}
            </Text>
            <Text style={{ color: currentOption ? "#FFFFFF" : "#000000" }}>
              {rightOption}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleBar: {
    backgroundColor: "#ccc",
    flexDirection: "row",
    position: "relative",
    overflow: "hidden",
    width: 250,
    height: 50,
    borderRadius: 10,
  },
  highlight: {
    position: "absolute",
    width: 70,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4CAF50",
    top: 0,
    left: 0,
  },
  textContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  labelStyle: {
    paddingBottom: 10,
    color: "#999A9A",
  },
  containerStyle: {
    paddingLeft: 10,
    marginBottom: 10,
  },
});

export default ToggleSwitch;
