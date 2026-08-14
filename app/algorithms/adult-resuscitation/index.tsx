import AlgorithmCard from "@/src/components/ui/algorithm-card";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const adultText = {
  sk: {
    title: "Vyberte algoritmus",
    description:
      "Postupujte podľa štandardných ERC pokynov pre dospelých.",
    alsBadge: "ZZS",
    alsTitle: "ALS",
    alsSubtitle: "Rozšírená resuscitácia",
    alsDescription:
      "Defibrilácia, manažment dýchacích ciest a podávanie liekov pri zastavení obehu.",
    blsTitle: "BLS",
    blsSubtitle: "Základná resuscitácia",
    blsDescription:
      "Prvotné rozpoznanie, kvalitné stláčanie hrudníka a včasná defibrilácia pomocou AED.",
    pulseBadge: "S PULZOM",
    tachyTitle: "Tachykardia",
    tachyDescription: "Vyhodnotenie a liečba tachyarytmií.",
    bradyTitle: "Bradykardia",
    bradyDescription: "Manažment symptomatickej bradykardie.",
  },
  en: {
    title: "Choose algorithm",
    description: "Follow standard ERC guidance for adult resuscitation.",
    alsBadge: "EMS",
    alsTitle: "ALS",
    alsSubtitle: "Advanced life support",
    alsDescription:
      "Defibrillation, airway management, and drug administration during cardiac arrest.",
    blsTitle: "BLS",
    blsSubtitle: "Basic life support",
    blsDescription:
      "Initial recognition, high-quality chest compressions, and early defibrillation with an AED.",
    pulseBadge: "WITH PULSE",
    tachyTitle: "Tachycardia",
    tachyDescription: "Assessment and treatment of tachyarrhythmias.",
    bradyTitle: "Bradycardia",
    bradyDescription: "Management of symptomatic bradycardia.",
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

export default function ResuscitationAdult() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = adultText[language];
  const colors = screenColors[themeMode];

  return (
    <>
      <StatusBar barStyle={colors.statusBar} />
      <ScrollView
        style={{ backgroundColor: colors.background }}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
      >
        <View style={styles.titleTextContainer}>
          <Text style={[styles.titleText, { color: colors.title }]}>
            {text.title}
          </Text>
          <Text
            style={[styles.descriptionText, { color: colors.description }]}
          >
            {text.description}
          </Text>
        </View>

        <AlgorithmCard
          badgeText={text.alsBadge}
          title={text.alsTitle}
          subtitle={text.alsSubtitle}
          description={text.alsDescription}
          iconFamily="fontisto"
          iconName="pulse"
          themeMode={themeMode}
          onPress={() =>
            router.push("/algorithms/adult-resuscitation/als/step1")
          }
        />

        <AlgorithmCard
          title={text.blsTitle}
          subtitle={text.blsSubtitle}
          description={text.blsDescription}
          iconName="heart-outline"
          themeMode={themeMode}
          onPress={() =>
            router.push("/algorithms/adult-resuscitation/bls/step1")
          }
        />

        <AlgorithmCard
          badgeText={text.pulseBadge}
          badgeVariant="warning"
          title={text.tachyTitle}
          description={text.tachyDescription}
          iconFamily="ionicons"
          iconName="speedometer-outline"
          themeMode={themeMode}
          onPress={() =>
            router.push("/algorithms/adult-resuscitation/tachycardia/step1")
          }
        />

        <AlgorithmCard
          title={text.bradyTitle}
          description={text.bradyDescription}
          iconFamily="material-community"
          iconName="speedometer-slow"
          themeMode={themeMode}
          onPress={() =>
            router.push("/algorithms/adult-resuscitation/bradycardia/step1")
          }
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
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
