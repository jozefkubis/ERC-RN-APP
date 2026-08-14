import type { AppThemeMode } from "@/src/context/settings-context";
import { StyleSheet, Text, View } from "react-native";

type StepHeaderProps = {
  badge: string;
  title: string;
  description: string;
  urgent?: boolean;
  themeMode?: AppThemeMode;
};

const headerColors = {
  light: {
    title: "#10243C",
    description: "#5C6574",
    badgeBackground: "#E4EFFD",
    badgeText: "#075296",
    urgentBadgeBackground: "#FDE7E8",
    urgentBadgeText: "#C8141B",
  },
  dark: {
    title: "#F5F8FC",
    description: "#AAB6C7",
    badgeBackground: "#17375B",
    badgeText: "#8BC4FA",
    urgentBadgeBackground: "#4A1B22",
    urgentBadgeText: "#FF9AA1",
  },
};

export default function StepHeader({
  badge,
  title,
  description,
  urgent = false,
  themeMode = "light",
}: StepHeaderProps) {
  const colors = headerColors[themeMode];

  return (
    <View style={styles.stepHeader}>
      <View
        style={[
          styles.stepBadge,
          {
            backgroundColor: urgent
              ? colors.urgentBadgeBackground
              : colors.badgeBackground,
          },
        ]}
      >
        <Text
          selectable
          style={[
            styles.stepBadgeText,
            { color: urgent ? colors.urgentBadgeText : colors.badgeText },
          ]}
        >
          {badge}
        </Text>
      </View>
      <Text selectable style={[styles.stepTitle, { color: colors.title }]}>
        {title}
      </Text>
      <Text
        selectable
        style={[styles.stepDescription, { color: colors.description }]}
      >
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  stepHeader: {
    width: "100%",
    gap: 7,
    paddingTop: 6,
    paddingBottom: 4,
  },
  stepBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 999,
  },
  stepBadgeText: {
    fontSize: 20,
    fontWeight: "800",
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 30,
  },
  stepDescription: {
    fontSize: 14,
    lineHeight: 21,
  },
});
