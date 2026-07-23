import { defaultHeaderOptions } from "@/src/navigation/screenOptions";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, useRouter } from "expo-router";

export default function NewbornResuscitationLayout() {
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
          title: "Resuscitácia novorodencov",
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
        name="step1"
        options={{ title: "Resuscitácia novorodencov" }}
      />
      <Stack.Screen
        name="step2"
        options={{ title: "Resuscitácia novorodencov" }}
      />
      <Stack.Screen
        name="step3"
        options={{ title: "Resuscitácia novorodencov" }}
      />
      <Stack.Screen
        name="step4-with-movement"
        options={{ title: "Resuscitácia novorodencov" }}
      />
      <Stack.Screen
        name="step4-no-movement"
        options={{ title: "Resuscitácia novorodencov" }}
      />
      <Stack.Screen
        name="step5"
        options={{ title: "Resuscitácia novorodencov" }}
      />
    </Stack>
  );
}
