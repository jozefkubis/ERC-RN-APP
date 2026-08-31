import IconButton from "@/src/components/ui/IconButton";
import History from "@/src/components/utils/History";
import { SettingsProvider, useSettings } from "@/src/context/settings-context";
import { getAlgorithmScreenTitle } from "@/src/navigation/algorithmScreenTitle";
import { getHeaderOptions } from "@/src/navigation/screenOptions";
import { Stack, useRouter } from "expo-router";
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
  const router = useRouter();
  const { language, themeMode } = useSettings();

  return (
    <Stack
      screenOptions={({ route }) => ({
        ...getHeaderOptions(themeMode),
        animation: "slide_from_right",
        title: getAlgorithmScreenTitle(route.name, language),
        headerRight: ({ tintColor }) => (
          <IconButton
            name="git-network-sharp"
            size={20}
            color={tintColor}
            onPress={() => {
              router.navigate("/algorithms");
            }}
          />
        ),
      })}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="algorithms/epals/pals/calculatorPals"
        options={{
          presentation: "formSheet",
          sheetAllowedDetents: [0.9],
          sheetGrabberVisible: true,
          sheetCornerRadius: 28,
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <Stack.Screen
        name="algorithms/newborn/calculatorNewborn"
        options={{
          presentation: "formSheet",
          sheetAllowedDetents: [0.9],
          sheetGrabberVisible: true,
          sheetCornerRadius: 28,
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <Stack.Screen
        name="algorithms/newborn/sizesNewborn"
        options={{
          presentation: "formSheet",
          sheetAllowedDetents: [0.9],
          sheetGrabberVisible: true,
          sheetCornerRadius: 28,
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <Stack.Screen
        name="algorithms/special/anafylaxia/calculatorAnaphylaxis"
        options={{
          presentation: "formSheet",
          sheetAllowedDetents: [0.9],
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
