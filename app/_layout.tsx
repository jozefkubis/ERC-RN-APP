import History from "@/src/components/utils/History";
import { SettingsProvider, useSettings } from "@/src/context/settings-context";
import { getAlgorithmScreenTitle } from "@/src/navigation/algorithmScreenTitle";
import { getHeaderOptions } from "@/src/navigation/screenOptions";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
}

function AppContent() {
  const { isSettingsReady } = useSettings();

  useEffect(() => {
    if (isSettingsReady) {
      SplashScreen.hide();
    }
  }, [isSettingsReady]);

  if (!isSettingsReady) {
    return null;
  }

  return (
    <>
      <History />
      <RootStack />
    </>
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
      <Stack.Screen
        name="algorithms/epals/pals/calculator"
        options={{
          presentation: "formSheet",
          sheetAllowedDetents: [0.58, 0.9],
          sheetGrabberVisible: true,
          sheetCornerRadius: 28,
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </Stack>
  );
}
