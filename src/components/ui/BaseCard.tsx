import type { AppThemeMode } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

type BaseCardProps = {
  topText: string;
  title: string;
  description: string;
  iconName: ComponentProps<typeof Ionicons>["name"];
  iconSize?: number;
  iconColor?: string;
  variant?: "primary" | "light";
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  themeMode?: AppThemeMode;
};

const baseCardColors = {
  light: {
    primaryBackground: "#075296",
    primaryIcon: "#4D86BC",
    primaryBadgeBackground: "#0877D1",
    primaryBadgeText: "#B9DDFF",
    primaryTitle: "#FFFFFF",
    primaryDescription: "#D7E9F8",
    primaryArrow: "#FFFFFF",
    lightBackground: "#FFFFFF",
    lightBorder: "#CBD3DF",
    lightBadgeBackground: "#E4EFFD",
    lightBadgeText: "#637083",
    lightTitle: "#10243C",
    lightDescription: "#5C6574",
    lightArrow: "#075296",
  },
  dark: {
    primaryBackground: "#0B3159",
    primaryIcon: "#77B7F2",
    primaryBadgeBackground: "#164C80",
    primaryBadgeText: "#D7ECFF",
    primaryTitle: "#FFFFFF",
    primaryDescription: "#D7E9F8",
    primaryArrow: "#FFFFFF",
    lightBackground: "#101B2B",
    lightBorder: "#31435A",
    lightBadgeBackground: "#20334C",
    lightBadgeText: "#AAB6C7",
    lightTitle: "#F5F8FC",
    lightDescription: "#AAB6C7",
    lightArrow: "#77B7F2",
  },
};

export default function BaseCard({
  topText,
  title,
  description,
  iconName,
  iconSize = 48,
  iconColor,
  variant = "primary",
  style,
  onPress,
  themeMode = "light",
}: BaseCardProps) {
  const isLight = variant === "light";
  const colors = baseCardColors[themeMode];

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View
        style={[
          styles.card,
          isLight
            ? {
                borderWidth: 1,
                borderColor: colors.lightBorder,
                backgroundColor: colors.lightBackground,
              }
            : { backgroundColor: colors.primaryBackground },
          style,
        ]}
      >
        <View style={styles.cardTopRow}>
          <View
            style={[
              styles.badge,
              {
                backgroundColor: isLight
                  ? colors.lightBadgeBackground
                  : colors.primaryBadgeBackground,
              },
            ]}
          >
            <Text
              style={[
                styles.badgeText,
                {
                  color: isLight
                    ? colors.lightBadgeText
                    : colors.primaryBadgeText,
                },
              ]}
            >
              {topText}
            </Text>
          </View>

          <View style={styles.cardIconContainer}>
            <Ionicons
              name={iconName}
              size={iconSize}
              color={
                iconColor ?? (isLight ? colors.lightArrow : colors.primaryIcon)
              }
            />
          </View>
        </View>

        <Text
          style={[
            styles.cardTitle,
            isLight && styles.lightCardTitle,
            { color: isLight ? colors.lightTitle : colors.primaryTitle },
          ]}
        >
          {title}
        </Text>

        <View style={styles.cardRow}>
          <Text
            style={[
              styles.cardDescription,
              {
                color: isLight
                  ? colors.lightDescription
                  : colors.primaryDescription,
              },
            ]}
          >
            {description}
          </Text>
          <Ionicons
            name="arrow-forward"
            size={25}
            color={isLight ? colors.lightArrow : colors.primaryArrow}
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 190,
    justifyContent: "space-between",
    gap: 10,
    padding: 22,
    borderRadius: 12,
    borderCurve: "continuous",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  cardTopRow: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  cardRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  cardIconContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: "700",
  },
  cardTitle: {
    flexShrink: 1,
    fontSize: 23,
    fontWeight: "800",
    lineHeight: 29,
  },
  lightCardTitle: {
    fontSize: 21,
    lineHeight: 27,
  },
  cardDescription: {
    flex: 1,
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 18,
  },
  pressed: {
    opacity: 0.7,
    borderColor: "#595f64",
    transform: [{ scale: 0.99 }],
  },
});
