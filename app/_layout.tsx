import { getAlgorithmScreenTitle } from "@/src/navigation/algorithmScreenTitle";
import { defaultHeaderOptions } from "@/src/navigation/screenOptions";
import History from "@/src/components/utils/History";
import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  return (
    <>
      <History />
      <Stack
        screenOptions={({ route }) => ({
          ...defaultHeaderOptions,
          animation: "slide_from_right",
          title: getAlgorithmScreenTitle(route.name),
        })}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
