import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];

type FlowActionButtonProps = {
  title: string;
  description: string;
  iconName: IconName;
  onPress: () => void;
  variant?: "primary" | "danger" | "light";
};

export default function FlowActionButton({
  title,
  description,
  iconName,
  onPress,
  variant = "primary",
}: FlowActionButtonProps) {
  const isLight = variant === "light";
  const isDanger = variant === "danger";

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.actionButton,
        isLight && styles.lightActionButton,
        isDanger && styles.dangerActionButton,
        pressed && styles.pressed,
      ]}
    >
      <View
        style={[
          styles.actionIcon,
          isLight && styles.lightActionIcon,
          isDanger && styles.dangerActionIcon,
        ]}
      >
        <Ionicons
          name={iconName}
          size={23}
          color={isLight ? "#075296" : "#FFFFFF"}
        />
      </View>
      <View style={styles.actionTextContainer}>
        <Text selectable style={[styles.actionTitle, isLight && styles.lightActionTitle]}>
          {title}
        </Text>
        <Text
          selectable
          style={[
            styles.actionDescription,
            isLight && styles.lightActionDescription,
          ]}
        >
          {description}
        </Text>
      </View>
      <Ionicons
        name="arrow-forward"
        size={22}
        color={isLight ? "#075296" : "#FFFFFF"}
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
  lightActionButton: {
    borderColor: "#CBD3DF",
    backgroundColor: "#FFFFFF",
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
  lightActionIcon: {
    backgroundColor: "#E4EFFD",
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
  lightActionTitle: {
    color: "#10243C",
  },
  actionDescription: {
    color: "#D7E9F8",
    fontSize: 12,
    lineHeight: 17,
  },
  lightActionDescription: {
    color: "#5C6574",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
