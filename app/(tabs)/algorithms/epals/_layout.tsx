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
      <Stack.Screen
        name="pals/step3defib"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen
        name="pals/step3nondefib"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen
        name="pbls/step1"
        options={{ title: "Základná resuscitácia" }}
      />
      <Stack.Screen
        name="pbls/step2"
        options={{ title: "Základná resuscitácia" }}
      />
      <Stack.Screen
        name="pbls/step3"
        options={{ title: "Základná resuscitácia" }}
      />
      <Stack.Screen
        name="pbls/step4"
        options={{ title: "Základná resuscitácia" }}
      />
      <Stack.Screen
        name="pbls/step5"
        options={{ title: "Základná resuscitácia" }}
      />
      <Stack.Screen
        name="pals/roscpals"
        options={{ title: "Poresuscitačná starostlivosť" }}
      />
      <Stack.Screen
        name="pals/termination"
        options={{ title: "Ukončenie resuscitácie" }}
      />
      <Stack.Screen name="fbao/step1" options={{ title: "FBAO" }} />
    </Stack>
  );
}
