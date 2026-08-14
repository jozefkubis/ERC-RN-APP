import type { AppThemeMode } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { StyleSheet, Text, View } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];

type HeroCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  iconName: IconName;
  danger?: boolean;
  themeMode?: AppThemeMode;
};

const heroColors = {
  light: {
    normalBackground: "#075296",
    dangerBackground: "#C8141B",
    eyebrow: "#B9DDFF",
    description: "#EAF4FC",
  },
  dark: {
    normalBackground: "#0B3159",
    dangerBackground: "#7F151B",
    eyebrow: "#B9DDFF",
    description: "#EAF4FC",
  },
};

export default function HeroCard({
  eyebrow,
  title,
  description,
  iconName,
  danger = false,
  themeMode = "light",
}: HeroCardProps) {
  const colors = heroColors[themeMode];

  return (
    <View
      style={[
        styles.heroCard,
        {
          backgroundColor: danger
            ? colors.dangerBackground
            : colors.normalBackground,
        },
      ]}
    >
      <View style={[styles.heroIcon, danger && styles.dangerHeroIcon]}>
        <Ionicons name={iconName} size={29} color="#FFFFFF" />
      </View>
      <View style={styles.heroTextContainer}>
        <Text selectable style={[styles.heroEyebrow, { color: colors.eyebrow }]}>
          {eyebrow}
        </Text>
        <Text selectable style={styles.heroTitle}>
          {title}
        </Text>
        <Text
          selectable
          style={[styles.heroDescription, { color: colors.description }]}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderRadius: 12,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  heroIcon: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 27,
    backgroundColor: "#ED1C24",
  },
  dangerHeroIcon: {
    backgroundColor: "#8D0E13",
  },
  heroTextContainer: {
    flex: 1,
    gap: 4,
  },
  heroEyebrow: {
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 17,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "900",
    lineHeight: 29,
  },
  heroDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
});
