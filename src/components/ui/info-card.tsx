import type { AppThemeMode } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { StyleSheet, Text, View } from "react-native";

type InfoCardProps = {
  title: string;
  description: string;
  iconName?: ComponentProps<typeof Ionicons>["name"];
  themeMode?: AppThemeMode;
};

const infoCardColors = {
  light: {
    background: "#EFF4FC",
    border: "#D2D9E6",
    icon: "#075296",
    title: "#10243C",
    description: "#4F5867",
  },
  dark: {
    background: "#101B2B",
    border: "#31435A",
    icon: "#77B7F2",
    title: "#F5F8FC",
    description: "#AAB6C7",
  },
};

export default function InfoCard({
  title,
  description,
  iconName = "information-circle-outline",
  themeMode = "light",
}: InfoCardProps) {
  const colors = infoCardColors[themeMode];

  return (
    <View
      style={[
        styles.card,
        {
          borderColor: colors.border,
          backgroundColor: colors.background,
        },
      ]}
    >
      <Ionicons name={iconName} size={20} color={colors.icon} />

      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: colors.title }]}>{title}</Text>
        <Text style={[styles.description, { color: colors.description }]}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderCurve: "continuous",
  },
  textContainer: {
    flex: 1,
    gap: 5,
  },
  title: {
    fontSize: 13,
    fontWeight: "800",
  },
  description: {
    fontSize: 12,
    lineHeight: 21,
  },
});
