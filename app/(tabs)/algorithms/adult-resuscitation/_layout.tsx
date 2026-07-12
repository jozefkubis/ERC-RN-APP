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
          title: "Resuscitácia dospelých",
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
        name="als/index"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen
        name="als/step1"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen
        name="als/step2"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen
        name="als/step3"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen
        name="als/step4defib"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen
        name="als/step4nondefib"
        options={{ title: "Rozšírená resuscitácia" }}
      />
      <Stack.Screen name="als/4h4t" options={{ title: "4H / 4T" }} />
      <Stack.Screen name="als/rosc" options={{ title: "ROSC" }} />
      <Stack.Screen
        name="bls/step1"
        options={{ title: "Základná resuscitácia" }}
      />
      <Stack.Screen
        name="bls/step2"
        options={{ title: "Základná resuscitácia" }}
      />
      <Stack.Screen
        name="bls/step3"
        options={{ title: "Základná resuscitácia" }}
      />
      <Stack.Screen
        name="bls/step4"
        options={{ title: "Základná resuscitácia" }}
      />
      <Stack.Screen
        name="bls/step5"
        options={{ title: "Základná resuscitácia" }}
      />
      <Stack.Screen
        name="tachycardia/step1"
        options={{ title: "Tachykardia" }}
      />
      <Stack.Screen
        name="tachycardia/step2unstable"
        options={{ title: "Tachykardia" }}
      />
      <Stack.Screen
        name="tachycardia/step2stable"
        options={{ title: "Tachykardia" }}
      />
      <Stack.Screen
        name="tachycardia/step3wide"
        options={{ title: "Tachykardia" }}
      />
      <Stack.Screen
        name="tachycardia/step3narrow"
        options={{ title: "Tachykardia" }}
      />
      <Stack.Screen
        name="tachycardia/step4wideregular"
        options={{ title: "Tachykardia" }}
      />
      <Stack.Screen
        name="tachycardia/step4wideirregular"
        options={{ title: "Tachykardia" }}
      />
      <Stack.Screen
        name="tachycardia/step4narrowregular"
        options={{ title: "Tachykardia" }}
      />
      <Stack.Screen
        name="tachycardia/step4narrowirregular"
        options={{ title: "Tachykardia" }}
      />
      <Stack.Screen
        name="tachycardia/synccardioversion"
        options={{ title: "Tachykardia" }}
      />
      <Stack.Screen
        name="bradycardia/step1"
        options={{ title: "Bradykardia" }}
      />
      <Stack.Screen
        name="bradycardia/step2unstable"
        options={{ title: "Bradykardia" }}
      />
      <Stack.Screen
        name="bradycardia/step2stable"
        options={{ title: "Bradykardia" }}
      />
      <Stack.Screen
        name="bradycardia/step3unstable"
        options={{ title: "Bradykardia" }}
      />
      <Stack.Screen
        name="bradycardia/alternative-medications"
        options={{ title: "Alternatívne lieky" }}
      />
      <Stack.Screen
        name="bradycardia/altmeds"
        options={{ title: "Alternatívne lieky" }}
      />
      <Stack.Screen
        name="bradycardia/cardiostimulationscreen"
        options={{ title: "Kardiostimulácia" }}
      />
    </Stack>
  );
}
