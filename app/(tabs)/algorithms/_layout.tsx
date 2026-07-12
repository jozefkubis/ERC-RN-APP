import { defaultHeaderOptions } from "@/src/navigation/screenOptions";
import { Stack } from "expo-router";

export default function AlgorithmsLayout() {
  return (
    <Stack
      screenOptions={{
        ...defaultHeaderOptions,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Algoritmy" }} />
      <Stack.Screen
        name="adult-resuscitation"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="epals" options={{ headerShown: false }} />
    </Stack>
  );
}
