import History from "@/src/components/utils/History";
import { SettingsProvider, useSettings } from "@/src/context/settings-context";
import { getAlgorithmScreenTitle } from "@/src/navigation/algorithmScreenTitle";
import { getHeaderOptions } from "@/src/navigation/screenOptions";
import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  return (
    <SettingsProvider>
      <History />
      <RootStack />
    </SettingsProvider>
  );
}

function RootStack() {
  const { language, themeMode } = useSettings();

  return (
    <Stack
      screenOptions={({ route }) => ({
        ...getHeaderOptions(themeMode),
        animation: "slide_from_right",
        title: getAlgorithmScreenTitle(route.name, language),
      })}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
