import { useSettings } from "@/src/context/settings-context";
import { getHeaderOptions, navigationColors } from "@/src/navigation/screenOptions";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

export default function AlgorithmsLayout() {
  const router = useRouter();
  const { themeMode } = useSettings();
  const colors = navigationColors[themeMode];

  return (
    <Stack
      screenOptions={{
        ...getHeaderOptions(themeMode),
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
              color={colors.primaryText}
              onPress={() => router.back()}
            />
          ),
        }}
      />
    </Stack>
  );
}
