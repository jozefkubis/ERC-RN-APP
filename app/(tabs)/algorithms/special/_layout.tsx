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
      <Stack.Screen name="anafylaxia/step1" options={{ title: "Anafylaxia" }} />
      <Stack.Screen name="anafylaxia/step2" options={{ title: "Anafylaxia" }} />
      <Stack.Screen name="anafylaxia/step3" options={{ title: "Anafylaxia" }} />
      <Stack.Screen
        name="anafylaxia/refractory"
        options={{ title: "Refraktérna anafylaxia" }}
      />
      <Stack.Screen
        name="anafylaxia/cardiac-arrest"
        options={{ title: "Anafylaxia – ZO" }}
      />
      <Stack.Screen
        name="anafylaxia/aftercare"
        options={{ title: "Anafylaxia" }}
      />
      <Stack.Screen
        name="kalium/intro"
        options={{ title: "Poruchy draslíka" }}
      />
      <Stack.Screen
        name="kalium/hyper/step1"
        options={{ title: "Hyperkaliémia" }}
      />
      <Stack.Screen
        name="kalium/hyper/step2"
        options={{ title: "Hyperkaliémia" }}
      />
      <Stack.Screen
        name="kalium/hyper/cardiac-arrest"
        options={{ title: "Hyperkaliémia – ZO" }}
      />
      <Stack.Screen
        name="kalium/hypo/step1"
        options={{ title: "Hypokaliémia" }}
      />
    </Stack>
  );
}
