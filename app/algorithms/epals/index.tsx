import AlgorithmCard from "@/src/components/ui/algorithm-card";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

const epalsText = {
  sk: {
    title: "Vyberte algoritmus",
    description:
      "Postupujte podľa odporúčaní ERC 2025 pre resuscitáciu detí.",
    palsBadge: "ZZS",
    palsTitle: "PALS",
    palsSubtitle: "Rozšírená resuscitácia dieťaťa",
    palsDescription:
      "Zhodnotenie rytmu, defibrilácia a podávanie liekov pri zastavení obehu.",
    pblsTitle: "PBLS",
    pblsSubtitle: "Základná resuscitácia dieťaťa",
    pblsDescription:
      "Rozpoznanie zastavenia obehu, 5 úvodných vdychov, kvalitná KPR a včasné použitie AED.",
    fbaoTitle: "FBAO",
    fbaoSubtitle: "Obštrukcia dýchacích ciest cudzím telesom",
    fbaoDescription:
      "Postup podľa účinnosti kašľa a vedomia dieťaťa.",
  },
  en: {
    title: "Choose algorithm",
    description: "Follow ERC 2025 guidance for paediatric resuscitation.",
    palsBadge: "EMS",
    palsTitle: "PALS",
    palsSubtitle: "Paediatric advanced life support",
    palsDescription:
      "Rhythm assessment, defibrillation, and drug administration during cardiac arrest.",
    pblsTitle: "PBLS",
    pblsSubtitle: "Paediatric basic life support",
    pblsDescription:
      "Recognition of cardiac arrest, 5 initial rescue breaths, high-quality CPR, and early AED use.",
    fbaoTitle: "FBAO",
    fbaoSubtitle: "Foreign body airway obstruction",
    fbaoDescription:
      "Management based on cough effectiveness and the child's level of consciousness.",
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

export default function EPALS() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = epalsText[language];
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
          badgeText={text.palsBadge}
          title={text.palsTitle}
          subtitle={text.palsSubtitle}
          description={text.palsDescription}
          iconFamily="fontawesome6"
          iconName="children"
          themeMode={themeMode}
          onPress={() => router.push("/algorithms/epals/pals/step1")}
        />

        <AlgorithmCard
          title={text.pblsTitle}
          subtitle={text.pblsSubtitle}
          description={text.pblsDescription}
          iconFamily="ionicons"
          iconName="heart-outline"
          themeMode={themeMode}
          onPress={() => router.push("/algorithms/epals/pbls/step1")}
        />

        <AlgorithmCard
          title={text.fbaoTitle}
          subtitle={text.fbaoSubtitle}
          description={text.fbaoDescription}
          iconFamily="fontawesome6"
          iconName="lungs"
          themeMode={themeMode}
          onPress={() => router.push("/algorithms/epals/fbao/step1")}
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
