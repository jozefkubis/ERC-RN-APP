import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "ERC 2025" }} />

      <Stack.Screen
        name="algorithms/adult-resuscitation"
        options={{ headerShown: false }}
      />

      <Stack.Screen name="algorithms/epals" options={{ headerShown: false }} />
    </Stack>
  );
}
