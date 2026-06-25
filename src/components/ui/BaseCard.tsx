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
}: BaseCardProps) {
  const isLight = variant === "light";

  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <View style={[styles.card, isLight && styles.lightCard, style]}>
        <View style={styles.cardTopRow}>
          <View style={[styles.badge, isLight && styles.lightBadge]}>
            <Text style={[styles.badgeText, isLight && styles.lightBadgeText]}>
              {topText}
            </Text>
          </View>

          <View style={styles.cardIconContainer}>
            <Ionicons
              name={iconName}
              size={iconSize}
              color={iconColor ?? (isLight ? "#E3EBF4" : "#4D86BC")}
            />
          </View>
        </View>

        <Text style={[styles.cardTitle, isLight && styles.lightCardTitle]}>
          {title}
        </Text>

        <View style={styles.cardRow}>
          <Text
            style={[
              styles.cardDescription,
              isLight && styles.lightCardDescription,
            ]}
          >
            {description}
          </Text>
          <Ionicons
            name="arrow-forward"
            size={25}
            color={isLight ? "#075296" : "#FFFFFF"}
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
    backgroundColor: "#075296",
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
    backgroundColor: "#0877D1",
  },
  badgeText: {
    color: "#B9DDFF",
    fontSize: 13,
    fontWeight: "700",
  },
  cardTitle: {
    flexShrink: 1,
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "800",
    lineHeight: 29,
  },
  cardDescription: {
    flex: 1,
    color: "#D7E9F8",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 18,
  },
  lightCard: {
    borderWidth: 1,
    borderColor: "#CBD3DF",
    backgroundColor: "#FFFFFF",
  },
  lightBadge: {
    backgroundColor: "#E4EFFD",
  },
  lightBadgeText: {
    color: "#637083",
  },
  lightCardTitle: {
    color: "#10243C",
    fontSize: 21,
    lineHeight: 27,
  },
  lightCardDescription: {
    color: "#5C6574",
  },
  pressed: {
    opacity: 0.7,
    borderColor: "#595f64",
    transform: [{ scale: 0.99 }],
  },
});
