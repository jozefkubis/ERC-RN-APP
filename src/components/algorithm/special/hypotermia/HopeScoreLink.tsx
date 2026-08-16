import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const linkText = {
  sk: {
    accessibilityLabel: "Otvoriť HOPE skórovací systém",
    title: "HOPE skórovací systém",
    description: "Odhadnite pravdepodobnosť prežitia po ohrievaní pomocou ECLS.",
  },
  en: {
    accessibilityLabel: "Open the HOPE scoring system",
    title: "HOPE scoring system",
    description: "Estimate the probability of survival after rewarming with ECLS.",
  },
};

const linkColors = {
  light: {
    background: "#FFFFFF",
    border: "#0877D1",
    primary: "#075296",
    description: "#5C6574",
  },
  dark: {
    background: "#101B2B",
    border: "#2F7FBE",
    primary: "#B9DDFF",
    description: "#AAB6C7",
  },
};

export default function HopeScoreLink() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = linkText[language];
  const colors = linkColors[themeMode];

  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={text.accessibilityLabel}
      onPress={() =>
        router.push("/algorithms/special/hypotermia/hope-score")
      }
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
        },
        pressed && styles.pressed,
      ]}
    >
      <View style={[styles.icon, { backgroundColor: colors.border }]}>
        <Ionicons name="calculator-outline" size={24} color="#FFFFFF" />
      </View>
      <View style={styles.textContainer}>
        <Text selectable style={[styles.title, { color: colors.primary }]}>
          {text.title}
        </Text>
        <Text
          selectable
          style={[styles.description, { color: colors.description }]}
        >
          {text.description}
        </Text>
      </View>
      <Ionicons name="open-outline" size={22} color={colors.primary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 2,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  icon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
  },
  textContainer: {
    flex: 1,
    gap: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
    textDecorationLine: "underline",
  },
  description: {
    fontSize: 12,
    lineHeight: 17,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
