import React, { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ToggleSwitch = ({
  label,
  leftOption,
  rightOption,
  onToggleSwitch,
  toggleValue,
}) => {
  //State
  const toggleSelectAnimation = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(toggleSelectAnimation, {
      toValue: toggleValue ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [toggleValue]);

  //Handlers
  const translateX = toggleSelectAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, styles.toggleBar.width / 2],
  });

  const onPress = () => {
    onToggleSwitch(!toggleValue);
  };

  //View
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.toggleBar}>
          <Animated.View
            style={[styles.highlight, { transform: [{ translateX }] }]}
          />
          <View style={styles.textContainerStyle}>
            <Text
              style={{
                color: !toggleValue ? "#FFFFFF" : "#000000",
                marginLeft: 55,
                fontSize: 16,
              }}
            >
              {leftOption}
            </Text>
            <Text
              style={{
                color: toggleValue ? "#FFFFFF" : "#000000",
                marginRight: 55,
                fontSize: 16,
              }}
            >
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
    backgroundColor: "#EEC0C3",
    flexDirection: "row",
    position: "relative",
    overflow: "hidden",
    width: 350,
    height: 50,
    borderRadius: 10,
  },
  highlight: {
    position: "absolute",
    width: 175,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#C62C38",
    top: 0,
    left: 0,
  },
  textContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
