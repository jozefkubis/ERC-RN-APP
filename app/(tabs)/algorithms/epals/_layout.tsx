import { defaultHeaderOptions } from "@/src/navigation/screenOptions";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, useRouter } from "expo-router";

export default function EpalsLayout() {
  const router = useRouter();

  return (
    <Stack screenOptions={defaultHeaderOptions}>
      <Stack.Screen
        name="index"
        options={{
          title: "Resuscitácia dietaťa",
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
        name="pals/step1"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen
        name="pals/step2"
        options={{ title: "Rozšírená resuscitácia" }}
      />
    </Stack>
  );
}
