import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ReactNode } from "react";

//  not really needed just putting this for dev sanity and to help debug
export const EnvProvider = (props: { children: ReactNode }) => {
  if (!__DEV__) return <>{props.children}</>;

  if (
    !process.env.EXPO_PUBLIC_TMDB_API_BASE_URL ||
    !process.env.EXPO_PUBLIC_TMDB_API_ACCESS_TOKEN
  )
    return (
      <ThemedView
        style={{
          padding: 10,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThemedText style={{ width: 180, textAlign: "center" }}>
          Oops! Make sure the env variables are set in the `.env` file
        </ThemedText>
      </ThemedView>
    );

  return <>{props.children}</>;
};
