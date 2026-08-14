import type { AppThemeMode } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];

type FlowActionButtonProps = {
  title: string;
  description: string;
  iconName: IconName;
  onPress?: () => void;
  variant?: "primary" | "danger" | "light";
  themeMode?: AppThemeMode;
};

const actionColors = {
  light: {
    lightBorder: "#CBD3DF",
    lightBackground: "#FFFFFF",
    lightIconBackground: "#E4EFFD",
    lightTitle: "#10243C",
    lightDescription: "#5C6574",
    lightPrimary: "#075296",
  },
  dark: {
    lightBorder: "#31435A",
    lightBackground: "#101B2B",
    lightIconBackground: "#20334C",
    lightTitle: "#F5F8FC",
    lightDescription: "#AAB6C7",
    lightPrimary: "#77B7F2",
  },
};

export default function FlowActionButton({
  title,
  description,
  iconName,
  onPress,
  variant = "primary",
  themeMode = "light",
}: FlowActionButtonProps) {
  const isLight = variant === "light";
  const isDanger = variant === "danger";
  const colors = actionColors[themeMode];

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.actionButton,
        isLight && {
          borderColor: colors.lightBorder,
          backgroundColor: colors.lightBackground,
        },
        isDanger && styles.dangerActionButton,
        pressed && styles.pressed,
      ]}
    >
      <View
        style={[
          styles.actionIcon,
          isLight && { backgroundColor: colors.lightIconBackground },
          isDanger && styles.dangerActionIcon,
        ]}
      >
        <Ionicons
          name={iconName}
          size={23}
          color={isLight ? colors.lightPrimary : "#FFFFFF"}
        />
      </View>
      <View style={styles.actionTextContainer}>
        <Text
          selectable
          style={[
            styles.actionTitle,
            isLight && { color: colors.lightTitle },
          ]}
        >
          {title}
        </Text>
        <Text
          selectable
          style={[
            styles.actionDescription,
            isLight && { color: colors.lightDescription },
          ]}
        >
          {description}
        </Text>
      </View>
      <Ionicons
        name="arrow-forward"
        size={22}
        color={isLight ? colors.lightPrimary : "#FFFFFF"}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    width: "100%",
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#075296",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  dangerActionButton: {
    borderColor: "#C8141B",
    backgroundColor: "#C8141B",
  },
  actionIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#0877D1",
  },
  dangerActionIcon: {
    backgroundColor: "#8D0E13",
  },
  actionTextContainer: {
    flex: 1,
    gap: 3,
  },
  actionTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
  },
  actionDescription: {
    color: "#D7E9F8",
    fontSize: 12,
    lineHeight: 17,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
