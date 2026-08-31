import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const cardText = {
  sk: {
    title: "Myslite paralelne",
    description:
      "Počas KPR riešte i.v./i.o. vstup, dýchacie cesty, tímové úlohy a príčinu.",
  },
  en: {
    title: "Think in parallel",
    description:
      "During CPR, manage IV/IO access, airway, team roles, and the cause.",
  },
};

const cardColors = {
  light: {
    background: "#F1F7FC",
    border: "#D4E7F7",
    iconBackground: "#D7EDFD",
    icon: "#075296",
    title: "#075296",
    description: "#28506F",
  },
  dark: {
    background: "#0D1C2B",
    border: "#203A55",
    iconBackground: "#164C80",
    icon: "#B9DDFF",
    title: "#B9DDFF",
    description: "#AAB6C7",
  },
};

export default function ParalelThinkingALS() {
  const { language, themeMode } = useSettings();
  const text = cardText[language];
  const colors = cardColors[themeMode];

  return (
    <View
      style={[
        styles.noteCard,
        {
          borderColor: colors.border,
          backgroundColor: colors.background,
        },
      ]}
    >
      <View style={[styles.noteIcon, { backgroundColor: colors.iconBackground }]}>
        <Ionicons name="git-branch-outline" size={20} color={colors.icon} />
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
    gap: 10,
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
  },
  noteIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 17,
  },
  noteTextContainer: {
    flex: 1,
    gap: 2,
  },
  noteTitle: {
    fontSize: 15,
    fontWeight: "900",
    lineHeight: 20,
  },
  noteDescription: {
    fontSize: 12,
    lineHeight: 17,
  },
});
