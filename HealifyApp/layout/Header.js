import { Text } from "react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icons from "../components/Icons";
import { useNavigation } from "@react-navigation/native";
import AppLogo from "../assets/AppLogo.svg";

const Header = ({ headerText }) => {
  //Initialisations
  const navigation = useNavigation();

  //Handlers
  const onBackPress = () => navigation.goBack();

  //View
  return (
    <View style={styles.headerLayoutStyle}>
      <TouchableOpacity onPress={onBackPress}>
        {<Icons.Back />}
      </TouchableOpacity>
      <Text style={styles.titleStyle}>{headerText}</Text>
      <AppLogo />
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayoutStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 125,
    paddingTop: 60,
    padding: 10,
  },
  titleStyle: {
    fontWeight: 600,
    fontSize: 24,
    marginTop: 20,
    marginLeft: 50,
  },
});

export default Header;
