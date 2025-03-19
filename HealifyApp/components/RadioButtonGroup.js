import { useState } from "react";
import { StyleSheet, View } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

const RadioButtonGroup = ({ radioButtons }) => {
  //State
  const [selectedOption, setSelectedOption] = useState(null);

  //View
  return (
    <View style={styles.containerStyle}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedOption}
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
