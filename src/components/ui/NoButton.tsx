import type { AppThemeMode } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type NoButtonProps = {
  title?: string;
  description?: string;
  onPress?: () => void;
  themeMode?: AppThemeMode;
};

const buttonColors = {
  light: {
    border: "#CBD3DF",
    background: "#FFFFFF",
    iconBackground: "#E4EFFD",
    icon: "#075296",
    text: "#10243C",
    description: "#5C6574",
    arrow: "#7A8492",
  },
  dark: {
    border: "#31435A",
    background: "#101B2B",
    iconBackground: "#20334C",
    icon: "#77B7F2",
    text: "#F5F8FC",
    description: "#AAB6C7",
    arrow: "#AAB6C7",
  },
};

export default function NoButton({
  title = "Nie",
  onPress,
  description,
  themeMode = "light",
}: NoButtonProps) {
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
          styles.answerIconLight,
          { backgroundColor: colors.iconBackground },
        ]}
      >
        <Ionicons name="close" size={24} color={colors.icon} />
      </View>
      <View style={styles.answerTextContainer}>
        <Text style={[styles.answerTitleLight, { color: colors.text }]}>
          {title}
        </Text>
        {description ? (
          <Text
            style={[
              styles.answerDescriptionLight,
              { color: colors.description },
            ]}
          >
            {description}
          </Text>
        ) : null}
      </View>
      <Ionicons name="arrow-forward" size={22} color={colors.arrow} />
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
  answerIconLight: {
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
  answerTitleLight: {
    fontSize: 18,
    fontWeight: "800",
  },
  answerDescriptionLight: {
    fontSize: 12,
    lineHeight: 17,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
