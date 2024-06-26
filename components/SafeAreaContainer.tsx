import { SafeAreaView, StatusBar } from "react-native";
import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";

export const SafeAreaContainer = (props: { children: ReactNode }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: Colors.CoffeeCraving.Taupe,
      }}
    >
      {props.children}
    </SafeAreaView>
  );
};
