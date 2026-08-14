import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const buttonText = {
  sk: {
    title: "Reverzibilné príčiny",
    description: "Otvoriť 4H/4T checklist počas pokračujúcej resuscitácie.",
  },
  en: {
    title: "Reversible causes",
    description: "Open the 4H/4T checklist during ongoing resuscitation.",
  },
};

const buttonColors = {
  light: {
    background: "#FFFFFF",
    border: "#CBD3DF",
    iconBackground: "#E4EFFD",
    icon: "#075296",
    title: "#10243C",
    description: "#5C6574",
    arrow: "#7A8492",
  },
  dark: {
    background: "#101B2B",
    border: "#31435A",
    iconBackground: "#164C80",
    icon: "#B9DDFF",
    title: "#F5F8FC",
    description: "#AAB6C7",
    arrow: "#AAB6C7",
  },
};

export default function H4T4Button() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const text = buttonText[language];
  const colors = buttonColors[themeMode];

  return (
    <Pressable
      style={({ pressed }) => [
        styles.causeCard,
        {
          borderColor: colors.border,
          backgroundColor: colors.background,
        },
        pressed && styles.pressed,
      ]}
      onPress={() => router.push("/algorithms/adult-resuscitation/als/4h4t")}
    >
      <View
        style={[
          styles.causeIcon,
          { backgroundColor: colors.iconBackground },
        ]}
      >
        <Ionicons name="search-outline" size={22} color={colors.icon} />
      </View>
      <View style={styles.causeTextContainer}>
        <Text style={[styles.causeTitle, { color: colors.title }]}>
          {text.title}
        </Text>
        <Text style={[styles.causeDescription, { color: colors.description }]}>
          {text.description}
        </Text>
      </View>
      <Ionicons name="arrow-forward" size={22} color={colors.arrow} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
  causeCard: {
    width: "100%",
    minHeight: 82,
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
  causeIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  causeTextContainer: {
    flex: 1,
    gap: 4,
  },
  causeTitle: {
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  causeDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
});
