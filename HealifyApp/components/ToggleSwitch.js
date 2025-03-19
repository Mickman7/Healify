import { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ToggleSwitch = ({ leftText, rightText, onToggleSwitch }) => {
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
    <TouchableOpacity onPress={onTogglePress}>
      <View style={styles.toggleBar}>
        <Animated.View
          style={[styles.highlight, { transform: [{ translateX }] }]}
        />
        <View style={styles.textContainerStyle}>
          <Text style={{ color: !currentOption ? "white" : "black" }}>
            {leftText}
          </Text>
          <Text style={{ color: currentOption ? "white" : "black" }}>
            {rightText}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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
});

export default ToggleSwitch;
