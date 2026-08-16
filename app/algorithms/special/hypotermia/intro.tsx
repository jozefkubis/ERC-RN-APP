import AlgorithmCard from "@/src/components/ui/algorithm-card";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const pageText = {
  sk: {
    title: "Hypotermia",
    description:
      "Vyberte postup pre náhodnú hypotermiu alebo zasypanie lavínou. Rozhodovanie vychádza zo životných funkcií, teploty jadra, rizika zastavenia obehu a okolností zasypania.",
    accidentalTitle: "Náhodná hypotermia",
    accidentalSubtitle: "Predĺžené hodnotenie a riadené ohrievanie",
    accidentalDescription:
      "Životné funkcie kontrolujte až 1 minútu, zmerajte teplotu jadra teplomerom schopným merať nízke teploty a rizikových pacientov smerujte do centra eKPR.",
    avalancheTitle: "Záchrana z lavíny",
    avalancheSubtitle: "Teplota jadra, dĺžka zasypania a dýchacie cesty",
    avalancheDescription:
      "Pri začatí KPR sa riaďte teplotou jadra, dĺžkou zasypania a priechodnosťou dýchacích ciest; pri viacerých zasypaných zvážte postup AvaLife.",
  },
  en: {
    title: "Hypothermia",
    description:
      "Choose the pathway for accidental hypothermia or avalanche burial. Decisions are based on vital signs, core temperature, risk of cardiac arrest, and the circumstances of burial.",
    accidentalTitle: "Accidental hypothermia",
    accidentalSubtitle: "Prolonged assessment and controlled rewarming",
    accidentalDescription:
      "Check vital signs for up to 1 minute, measure core temperature with a low-reading thermometer, and transfer high-risk patients to an ECPR centre.",
    avalancheTitle: "Avalanche rescue",
    avalancheSubtitle: "Core temperature, burial time, and airway",
    avalancheDescription:
      "Base the initiation of CPR on core temperature, burial time, and airway patency; in multiple burials, consider following the AvaLife algorithm.",
  },
};

const screenColors = {
  light: {
    background: "#F7F8FC",
    statusBar: "dark-content" as const,
    title: "#10243C",
    description: "#5C6574",
  },
  dark: {
    background: "#07111F",
    statusBar: "light-content" as const,
    title: "#F5F8FC",
    description: "#AAB6C7",
  },
};

export default function Intro() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];
  const colors = screenColors[themeMode];

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <StatusBar barStyle={colors.statusBar} />
      <ScrollView
        style={{ backgroundColor: colors.background }}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.titleTextContainer}>
          <Text selectable style={[styles.titleText, { color: colors.title }]}>
            {text.title}
          </Text>
          <Text
            selectable
            style={[styles.descriptionText, { color: colors.description }]}
          >
            {text.description}
          </Text>
        </View>

        <AlgorithmCard
          title={text.accidentalTitle}
          subtitle={text.accidentalSubtitle}
          description={text.accidentalDescription}
          iconFamily="material-community"
          iconName="snowflake-thermometer"
          themeMode={themeMode}
          onPress={() =>
            router.push("/algorithms/special/hypotermia/regular/step1")
          }
        />

        <AlgorithmCard
          title={text.avalancheTitle}
          subtitle={text.avalancheSubtitle}
          description={text.avalancheDescription}
          iconFamily="material-community"
          iconName="landslide"
          themeMode={themeMode}
          onPress={() =>
            router.push("/algorithms/special/hypotermia/lavina/step1")
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    gap: 15,
  },
  titleTextContainer: {
    gap: 5,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 14,
  },
});
