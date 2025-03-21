import { StyleSheet, TouchableOpacity, View } from "react-native";
import KidneyIcon from "../assets/KidneyIcon.svg";
import CalculatorIcon from "../assets/CalculatorIcon.svg";
import ProfileIcon from "../assets/ProfileIcon.svg";
import { useState } from "react";

const NavigationBar = ({ navigation, state }) => {
  const [isActive, setIsActive] = useState(state.index);

  const icons = {
    Home: KidneyIcon,
    Calculator: CalculatorIcon,
    Profile: ProfileIcon,
  };

  const handleTabPress = (routeName, index) => {
    setIsActive(index);
    navigation.navigate(routeName);
  };
  //View
  return (
    <View style={styles.navigationBarStyle}>
      {state.routes.map((route, index) => {
        const IconComponent = icons[route.name];
        return (
          <TouchableOpacity
            key={route.key}
            style={[styles.tabItem, isActive === index && styles.activeTab]}
            onPress={() => handleTabPress(route.name, index)}
          >
            {IconComponent && (
              <IconComponent
                color={isActive === index ? "yellow" : "white"}
                size={5}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBarStyle: {
    width: "100%",
    height: "8%",
    backgroundColor: "#001C45",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  tabItem: {
    align: "center",
    paddingBottom: 10,
  },
});

export default NavigationBar;
