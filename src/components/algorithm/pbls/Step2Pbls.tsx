import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Krok 2",
    title: "Dýchacie cesty a dýchanie",
    description:
      "Skontrolujte dýchanie rýchlo, bez zbytočného odkladu začiatku KPR.",
    infoTitle: "Zhodnotenie do 10 sekúnd",
    breathingSteps: [
      "Spriechodnite dýchacie cesty záklonom hlavy a zdvihnutím brady.",
      "Pozrite, počujte a cíťte dýchanie.",
      "Hľadajte známky života najviac 10 sekúnd.",
      "Ak máte pochybnosti, konajte ako pri abnormálnom dýchaní.",
    ],
    nextTitle: "Nedýcha normálne",
    nextDescription: "Dajte 5 úvodných záchranných vdychov.",
    breathingTitle: "Ak dieťa dýcha",
    breathingDescription:
      "Udržujte priechodné dýchacie cesty, sledujte dýchanie nepretržite alebo aspoň každú minútu a privolajte pomoc.",
  },
  en: {
    badge: "Step 2",
    title: "Airway and breathing",
    description:
      "Check breathing quickly without unnecessarily delaying the start of CPR.",
    infoTitle: "Assess within 10 seconds",
    breathingSteps: [
      "Open the airway using head tilt and chin lift.",
      "Look, listen, and feel for breathing.",
      "Look for signs of life for no more than 10 seconds.",
      "If in doubt, act as if breathing is abnormal.",
    ],
    nextTitle: "Not breathing normally",
    nextDescription: "Give 5 initial rescue breaths.",
    breathingTitle: "If the child is breathing",
    breathingDescription:
      "Keep the airway open, monitor breathing continuously or at least every minute, and call for help.",
  },
};

const cardColors = {
  light: {
    cardBackground: "#FFFFFF",
    cardBorder: "#CBD3DF",
    iconBackground: "#075296",
    title: "#10243C",
    text: "#10243C",
    bullet: "#075296",
    nextBackground: "#FFFFFF",
    nextBorder: "#075296",
    nextIcon: "#ED1C24",
    nextTitle: "#075296",
    nextDescription: "#5C6574",
    arrow: "#075296",
  },
  dark: {
    cardBackground: "#101B2B",
    cardBorder: "#31435A",
    iconBackground: "#164C80",
    title: "#F5F8FC",
    text: "#D7E2F0",
    bullet: "#77B7F2",
    nextBackground: "#101B2B",
    nextBorder: "#2F7FBE",
    nextIcon: "#B7151B",
    nextTitle: "#B9DDFF",
    nextDescription: "#AAB6C7",
    arrow: "#77B7F2",
  },
};

export default function Step2Pbls() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = pageText[language];
  const colors = cardColors[themeMode];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        themeMode={themeMode}
      />

      <View
        style={[
          styles.infoCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        <View style={styles.infoHeader}>
          <View
            style={[styles.infoIcon, { backgroundColor: colors.iconBackground }]}
          >
            <Ionicons name="body" size={24} color="#FFFFFF" />
          </View>
          <Text style={[styles.infoTitle, { color: colors.title }]}>
            {text.infoTitle}
          </Text>
        </View>

        <View style={styles.infoList}>
          {text.breathingSteps.map((step) => (
            <View key={step} style={styles.infoRow}>
              <View style={[styles.bullet, { backgroundColor: colors.bullet }]} />
              <Text style={[styles.infoText, { color: colors.text }]}>
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={() => router.push("/algorithms/epals/pbls/step3")}
        style={({ pressed }) => [
          styles.nextCard,
          {
            borderColor: colors.nextBorder,
            backgroundColor: colors.nextBackground,
          },
          pressed && styles.pressed,
        ]}
      >
        <View style={[styles.nextIcon, { backgroundColor: colors.nextIcon }]}>
          <Ionicons name="fitness" size={24} color="#FFFFFF" />
        </View>
        <View style={styles.nextTextContainer}>
          <Text style={[styles.nextTitle, { color: colors.nextTitle }]}>
            {text.nextTitle}
          </Text>
          <Text
            style={[styles.nextDescription, { color: colors.nextDescription }]}
          >
            {text.nextDescription}
          </Text>
        </View>
        <Ionicons name="arrow-forward" size={22} color={colors.arrow} />
      </Pressable>

      <InfoCard
        title={text.breathingTitle}
        description={text.breathingDescription}
        iconName="information-circle-outline"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  infoCard: {
    width: "100%",
    gap: 13,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  infoIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  infoTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  infoList: {
    gap: 9,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 7,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  nextCard: {
    width: "100%",
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  nextIcon: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },
  nextTextContainer: {
    flex: 1,
    gap: 4,
  },
  nextTitle: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
  },
  nextDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
