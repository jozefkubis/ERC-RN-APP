import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type SmallCardProps = {
  title: string;
  subtitle: string;
  iconName: ComponentProps<typeof Ionicons>["name"];
  iconBackgroundColor: string;
  trailingIcon: ComponentProps<typeof Ionicons>["name"];
  trailingIconColor: string;
};

export default function SmallCard({
  title,
  subtitle,
  iconName,
  iconBackgroundColor,
  trailingIcon,
  trailingIconColor,
}: SmallCardProps) {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.card}>
        <View style={[styles.icon, { backgroundColor: iconBackgroundColor }]}>
          <Ionicons name={iconName} size={23} color="#FFFFFF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Ionicons name={trailingIcon} size={21} color={trailingIconColor} />
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
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
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
    color: "#172A43",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21,
  },
  subtitle: {
    color: "#626B79",
    fontSize: 14,
  },
  pressed: {
    opacity: 0.7,
    borderColor: "#595f64",
    transform: [{ scale: 0.99 }],
  },
});
