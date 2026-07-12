import { defaultHeaderOptions } from "@/src/navigation/screenOptions";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

export default function AlgorithmsLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        ...defaultHeaderOptions,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "ERC 2025",
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="black"
              onPress={() => router.back()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="adult-resuscitation"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="epals" options={{ headerShown: false }} />
    </Stack>
  );
}
