import AlgorithmCard from "@/src/components/ui/algorithm-card";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const pageText = {
  sk: {
    title: "Hypertermia",
    description:
      "Vyberte postup podľa príčiny zvýšenej teploty jadra: úpal, malígna hypertermia alebo toxínmi navodený hypermetabolický stav.",
    severeTitle: "Ťažká hypertermia",
    severeSubtitle: "Úpal a zlyhanie termoregulácie",
    severeDescription:
      "Presuňte pacienta do chladu, merajte teplotu jadra a začnite okamžité aktívne chladenie.",
    malignantTitle: "Malígna hypertermia",
    malignantSubtitle: "Po anestetikách alebo sukcinylcholíne",
    malignantDescription:
      "Zastavte spúšťač, podajte 100 % kyslík, začnite chladenie a čo najskôr podajte dantrolén.",
    toxinTitle: "Hypertermia spôsobená toxínmi",
    toxinSubtitle: "Sympatomimetiká, MDMA a iné toxíny",
    toxinDescription:
      "Myslite na intoxikáciu, chráňte tím, tlmte agitáciu alebo kŕče a pokračujte v aktívnom chladení.",
  },
  en: {
    title: "Hyperthermia",
    description:
      "Choose the treatment pathway according to the cause of raised core temperature: heat stroke, malignant hyperthermia, or a toxin-induced hypermetabolic state.",
    severeTitle: "Severe hyperthermia",
    severeSubtitle: "Heat stroke and failed thermoregulation",
    severeDescription:
      "Move the patient to a cool environment, measure core temperature, and start immediate active cooling.",
    malignantTitle: "Malignant hyperthermia",
    malignantSubtitle: "Following anaesthetics or succinylcholine",
    malignantDescription:
      "Stop the trigger, give 100% oxygen, start active cooling, and give dantrolene as soon as possible.",
    toxinTitle: "Toxin-induced hyperthermia",
    toxinSubtitle: "Sympathomimetics, MDMA, and other toxins",
    toxinDescription:
      "Consider intoxication, protect the team, treat agitation or seizures, and continue active cooling.",
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
          title={text.severeTitle}
          subtitle={text.severeSubtitle}
          description={text.severeDescription}
          iconFamily="ionicons"
          iconName="thermometer-outline"
          themeMode={themeMode}
          onPress={() =>
            router.push("/algorithms/special/hypertermia/regular/step1")
          }
        />

        <AlgorithmCard
          title={text.malignantTitle}
          subtitle={text.malignantSubtitle}
          description={text.malignantDescription}
          iconFamily="material-community"
          iconName="needle"
          themeMode={themeMode}
          onPress={() =>
            router.push("/algorithms/special/hypertermia/maligna/step1")
          }
        />

        <AlgorithmCard
          title={text.toxinTitle}
          subtitle={text.toxinSubtitle}
          description={text.toxinDescription}
          iconFamily="material-community"
          iconName="bottle-tonic-skull-outline"
          themeMode={themeMode}
          onPress={() =>
            router.push("/algorithms/special/hypertermia/toxic/step1")
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
