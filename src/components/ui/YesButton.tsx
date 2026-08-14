import type { AppThemeMode } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type YesButtonProps = {
  title?: string;
  onPress?: () => void;
  themeMode?: AppThemeMode;
};

const buttonColors = {
  light: {
    border: "#075296",
    background: "#075296",
    iconBackground: "#ED1C24",
    text: "#FFFFFF",
  },
  dark: {
    border: "#164C80",
    background: "#0B3159",
    iconBackground: "#B7151B",
    text: "#FFFFFF",
  },
};

export default function YesButton({
  title = "Áno",
  onPress,
  themeMode = "light",
}: YesButtonProps) {
  const colors = buttonColors[themeMode];

  return (
    <Pressable
      style={({ pressed }) => [
        styles.answerCard,
        {
          borderColor: colors.border,
          backgroundColor: colors.background,
        },
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View
        style={[
          styles.answerIconPrimary,
          { backgroundColor: colors.iconBackground },
        ]}
      >
        <Ionicons name="checkmark" size={24} color="#FFFFFF" />
      </View>
      <View style={styles.answerTextContainer}>
        <Text style={[styles.answerTitlePrimary, { color: colors.text }]}>
          {title}
        </Text>
      </View>
      <Ionicons name="arrow-forward" size={22} color={colors.text} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  answerCard: {
    width: "100%",
    minHeight: 88,
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
  answerIconPrimary: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  answerTextContainer: {
    flex: 1,
    gap: 3,
  },
  answerTitlePrimary: {
    fontSize: 18,
    fontWeight: "800",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
