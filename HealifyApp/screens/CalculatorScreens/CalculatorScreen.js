import { Text, View } from "react-native";
import Screen from "../../layout/Screen";

const CalculatorScreen = () => {
  return (
    <Screen>
      <View>
        <Text>About eGFR</Text>
        <Text>
          {" "}
          eGFR (Estimated Glomerular Filtration Rate) is a key measure of kidney
          function, indicating how efficiently the kidneys are filtering waste
          from the blood. It is calculated using serum creatinine levels, along
          with factors such as age, sex, and ethnicity. A normal eGFR is
          around 100 ml/min/1.73m², but it naturally declines with age and can
          be significantly reduced in kidney disease.
        </Text>
      </View>
    </Screen>
  );
};

export default CalculatorScreen;
