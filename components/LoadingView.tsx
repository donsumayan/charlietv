import { Dimensions, Text, View } from "react-native";

export const LoadingView = () => {
  return (
    <View
      style={{
        height: Dimensions.get("window").height,
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Text>Loading... 🤖</Text>
    </View>
  );
};
