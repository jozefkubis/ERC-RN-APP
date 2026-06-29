import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "ERC 2025",
          headerStyle: { backgroundColor: "#F7F8FC" },
          headerTintColor: "#10243C",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="algorithms"
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack>
  );
}
