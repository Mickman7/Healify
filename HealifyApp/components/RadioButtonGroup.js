import { StyleSheet, View } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

const RadioButtonGroup = ({ radioButtons, selectedOption, onOptionSelect }) => {
  //View
  return (
    <View style={styles.containerStyle}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onOptionSelect}
        selectedId={selectedOption}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
  },
});
export default RadioButtonGroup;
