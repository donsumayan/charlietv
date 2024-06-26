import { SafeAreaContainer } from "../components/SafeAreaContainer";
import { Text, View } from "react-native";

export const ErrorHandler = (props: { error: Error }) => {
  return (
    <SafeAreaContainer>
      <View style={{ flex: 1, backgroundColor: "pink", padding: 20 }}>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Oops! </Text>
          {props.error.message}
        </Text>
      </View>
    </SafeAreaContainer>
  );
};
