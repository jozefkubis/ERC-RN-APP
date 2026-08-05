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
      <Stack.Screen
        name="hypertermia/intro"
        options={{ title: "Hypertermia" }}
      />
      <Stack.Screen
        name="hypertermia/regular/step1"
        options={{ title: "Hypertermia" }}
      />
      <Stack.Screen
        name="hypertermia/regular/step2"
        options={{ title: "Hypertermia" }}
      />
      <Stack.Screen
        name="hypertermia/regular/step3"
        options={{ title: "Hypertermia" }}
      />
      <Stack.Screen
        name="hypertermia/regular/step4"
        options={{ title: "Hypertermia" }}
      />
      <Stack.Screen
        name="hypertermia/regular/step5"
        options={{ title: "Hypertermia" }}
      />
      <Stack.Screen
        name="hypertermia/regular/step6"
        options={{ title: "Hyponatriémia" }}
      />
      <Stack.Screen
        name="hypertermia/regular/step7"
        options={{ title: "Hypertermia" }}
      />
      <Stack.Screen
        name="hypertermia/regular/step8"
        options={{ title: "Rehydratácia" }}
      />
      <Stack.Screen
        name="hypertermia/regular/step9"
        options={{ title: "Hypertermia" }}
      />
      <Stack.Screen
        name="hypertermia/maligna/step1"
        options={{ title: "Maligná hypertermia" }}
      />
      <Stack.Screen
        name="hypertermia/toxic/step1"
        options={{ title: "Hypertermia spôsobená toxínmi" }}
      />
      <Stack.Screen name="hypotermia/intro" options={{ title: "Hypotermia" }} />
      <Stack.Screen
        name="hypotermia/regular/step1"
        options={{ title: "Hypotermia" }}
      />
      <Stack.Screen
        name="hypotermia/regular/step2-vitals"
        options={{ title: "Náhodná hypotermia" }}
      />
      <Stack.Screen
        name="hypotermia/regular/step3-vitals"
        options={{ title: "Náhodná hypotermia" }}
      />
      <Stack.Screen
        name="hypotermia/regular/cpr"
        options={{ title: "Náhodná hypotermia" }}
      />
      <Stack.Screen
        name="hypotermia/regular/step2-novitals"
        options={{ title: "Náhodná hypotermia" }}
      />
      <Stack.Screen
        name="hypotermia/regular/step3-novitals"
        options={{ title: "Náhodná hypotermia" }}
      />
      <Stack.Screen
        name="hypotermia/regular/step4-novitals"
        options={{ title: "Náhodná hypotermia" }}
      />
      <Stack.Screen
        name="hypotermia/regular/step5-novitals"
        options={{ title: "Náhodná hypotermia" }}
      />
      <Stack.Screen
        name="hypotermia/hope-score"
        options={{ title: "HOPE skóre" }}
      />
      <Stack.Screen
        name="hypotermia/lavina/step1"
        options={{ title: "Záchrana z lavíny" }}
      />
      <Stack.Screen
        name="hypotermia/lavina/avalife"
        options={{ title: "AvaLife" }}
      />
      <Stack.Screen
        name="embolia/intro"
        options={{ title: "Pľúcna embólia" }}
      />
      <Stack.Screen
        name="embolia/PE/step1"
        options={{ title: "Pľúcna embólia" }}
      />
      <Stack.Screen
        name="embolia/PE/step2"
        options={{ title: "Pľúcna embólia" }}
      />
      <Stack.Screen
        name="embolia/PEresuscitacia/step1"
        options={{ title: "Pľúcna embólia – ZO" }}
      />
      <Stack.Screen
        name="koronarnatromboza/step1"
        options={{ title: "Koronárna trombóza" }}
      />
      <Stack.Screen
        name="koronarnatromboza/step2"
        options={{ title: "Koronárna trombóza" }}
      />
      <Stack.Screen
        name="koronarnatromboza/st-elevation"
        options={{ title: "Koronárna trombóza – STEMI" }}
      />
      <Stack.Screen
        name="koronarnatromboza/no-st-elevation"
        options={{ title: "Koronárna trombóza" }}
      />
      <Stack.Screen
        name="koronarnatromboza/ongoing-cpr"
        options={{ title: "Koronárna trombóza – KPR" }}
      />
      <Stack.Screen name="toxic/step1" options={{ title: "Toxické látky" }} />
      <Stack.Screen name="trauma/step1" options={{ title: "Trauma" }} />
      <Stack.Screen name="trauma/step2" options={{ title: "Trauma" }} />
      <Stack.Screen name="trauma/step3" options={{ title: "Trauma" }} />
      <Stack.Screen
        name="astma-chochp/step1"
        options={{ title: "Astma a CHOCHP" }}
      />
      <Stack.Screen
        name="hemodialyza/step1"
        options={{ title: "Hemodialýza" }}
      />
      <Stack.Screen name="obezita/step1" options={{ title: "Obezita" }} />
      <Stack.Screen
        name="pectus-excavatum/step1"
        options={{ title: "Pectus excavatum" }}
      />
    </Stack>
  );
}
