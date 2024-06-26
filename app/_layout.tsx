import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Top Rated Movies",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="movie"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
