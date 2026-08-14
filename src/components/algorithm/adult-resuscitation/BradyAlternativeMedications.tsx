import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import AlgorithmScreen from "../../ui/AlgorithmScreen";
import StepHeader from "../../ui/StepHeader";
import InfoCard from "../../ui/info-card";

const pageText = {
  sk: {
    badge: "Doplnok",
    title: "Alternatívne lieky",
    description:
      "Prehľad možností, ktoré možno zvážiť pri nedostatočnej reakcii na atropín.",
    cardTitle: "Alternatívy zahŕňajú",
    alternatives: [
      "Aminofylín",
      "Dopamín",
      "Glukagón, ak je bradykardia spôsobená betablokátorom alebo blokátorom kalciových kanálov",
      "Glykopyrolát, môže byť použitý namiesto atropínu",
    ],
    infoTitle: "Poznámka",
    infoDescription:
      "Výber lieku prispôsobte dostupnosti, klinickej situácii, lokálnemu protokolu a odporúčaniu experta.",
  },
  en: {
    badge: "Supplement",
    title: "Alternative drugs",
    description:
      "Overview of options that may be considered when the response to atropine is inadequate.",
    cardTitle: "Alternatives include",
    alternatives: [
      "Aminophylline",
      "Dopamine",
      "Glucagon, if bradycardia is caused by a beta-blocker or calcium-channel blocker",
      "Glycopyrrolate, may be used instead of atropine",
    ],
    infoTitle: "Note",
    infoDescription:
      "Choose the drug according to availability, the clinical situation, local protocol and expert advice.",
  },
};

const cardColors = {
  light: {
    cardBackground: "#F7EED6",
    cardBorder: "#E4C982",
    iconBackground: "#FFFFFF",
    primary: "#075296",
    text: "#10243C",
  },
  dark: {
    cardBackground: "#2B2416",
    cardBorder: "#8D7535",
    iconBackground: "#3A301B",
    primary: "#B9DDFF",
    text: "#F5F8FC",
  },
};

export default function BradyAlternativeMedications() {
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
          styles.noteCard,
          {
            borderColor: colors.cardBorder,
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        <View style={styles.cardHeader}>
          <View
            style={[styles.cardIcon, { backgroundColor: colors.iconBackground }]}
          >
            <Ionicons name="medkit" size={23} color={colors.primary} />
          </View>
          <Text style={[styles.cardTitle, { color: colors.primary }]}>
            {text.cardTitle}
          </Text>
        </View>

        <View style={styles.list}>
          {text.alternatives.map((item) => (
            <View key={item} style={styles.listItem}>
              <View style={[styles.dot, { backgroundColor: colors.primary }]} />
              <Text style={[styles.listText, { color: colors.text }]}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <InfoCard
        title={text.infoTitle}
        description={text.infoDescription}
        iconName="information-circle-outline"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}

const styles = StyleSheet.create({
  noteCard: {
    width: "100%",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardIcon: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
  },
  cardTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 24,
  },
  list: {
    gap: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  dot: {
    width: 6,
    height: 6,
    marginTop: 7,
    borderRadius: 3,
  },
  listText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 21,
  },
});
