import type { AppThemeMode } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type SmallCardProps = {
  title: string;
  subtitle: string;
  iconName: ComponentProps<typeof Ionicons>["name"];
  iconBackgroundColor: string;
  trailingIcon: ComponentProps<typeof Ionicons>["name"];
  trailingIconColor?: string;
  onPress?: () => void;
  themeMode?: AppThemeMode;
};

const smallCardColors = {
  light: {
    background: "#FFFFFF",
    border: "#CBD3DF",
    title: "#172A43",
    subtitle: "#626B79",
    trailingIcon: "#7A8492",
  },
  dark: {
    background: "#101B2B",
    border: "#31435A",
    title: "#F5F8FC",
    subtitle: "#AAB6C7",
    trailingIcon: "#AAB6C7",
  },
};

export default function SmallCard({
  title,
  subtitle,
  iconName,
  iconBackgroundColor,
  trailingIcon,
  trailingIconColor,
  onPress,
  themeMode = "light",
}: SmallCardProps) {
  const colors = smallCardColors[themeMode];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View
        style={[
          styles.card,
          {
            borderColor: colors.border,
            backgroundColor: colors.background,
          },
        ]}
      >
        <View style={[styles.icon, { backgroundColor: iconBackgroundColor }]}>
          <Ionicons name={iconName} size={23} color="#FFFFFF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: colors.title }]}>{title}</Text>
          <Text style={[styles.subtitle, { color: colors.subtitle }]}>
            {subtitle}
          </Text>
        </View>
        <Ionicons
          name={trailingIcon}
          size={21}
          color={trailingIconColor ?? colors.trailingIcon}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  icon: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
  },
  textContainer: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21,
  },
  subtitle: {
    fontSize: 14,
  },
  pressed: {
    opacity: 0.7,
    borderColor: "#595f64",
    transform: [{ scale: 0.99 }],
  },
});
