import { defaultHeaderOptions } from "@/src/navigation/screenOptions";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, useRouter } from "expo-router";

export default function AdultResuscitationLayout() {
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
          title: "Špeciálne okolnosti",
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
        name="special/index"
        options={{ title: "Špeciálne okolnosti" }}
      />
      <Stack.Screen
        name="anafylaxia/step1"
        options={{ title: "Anafylaxia" }}
      />
    </Stack>
  );
}
