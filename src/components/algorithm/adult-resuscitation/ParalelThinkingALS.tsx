import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const cardText = {
  sk: {
    title: "Myslite paralelne",
    description:
      "Počas KPR zabezpečte i.v./i.o. vstup, manažment dýchacích ciest, rozdelenie úloh v tíme a liečbu príčiny.",
  },
  en: {
    title: "Think in parallel",
    description:
      "During CPR, secure IV/IO access, manage the airway, assign team roles, and treat the cause.",
  },
};

const cardColors = {
  light: {
    background: "#D7EDFD",
    icon: "#0877D1",
    title: "#0877D1",
    description: "#28506F",
  },
  dark: {
    background: "#102A3F",
    icon: "#164C80",
    title: "#B9DDFF",
    description: "#AAB6C7",
  },
};

export default function ParalelThinkingALS() {
  const { language, themeMode } = useSettings();
  const text = cardText[language];
  const colors = cardColors[themeMode];

  return (
    <View style={[styles.noteCard, { backgroundColor: colors.background }]}>
      <View style={[styles.noteIcon, { backgroundColor: colors.icon }]}>
        <Ionicons name="git-branch-outline" size={24} color="#FFFFFF" />
      </View>
      <View style={styles.noteTextContainer}>
        <Text style={[styles.noteTitle, { color: colors.title }]}>
          {text.title}
        </Text>
        <Text style={[styles.noteDescription, { color: colors.description }]}>
          {text.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  noteCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    padding: 16,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  noteIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  noteTextContainer: {
    flex: 1,
    gap: 4,
  },
  noteTitle: {
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  noteDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
});
