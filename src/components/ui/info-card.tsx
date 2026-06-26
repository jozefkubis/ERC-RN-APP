import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { StyleSheet, Text, View } from "react-native";

type InfoCardProps = {
  title: string;
  description: string;
  iconName?: ComponentProps<typeof Ionicons>["name"];
};

export default function InfoCard({
  title,
  description,
  iconName = "information-circle-outline",
}: InfoCardProps) {
  return (
    <View style={styles.card}>
      <Ionicons name={iconName} size={20} color="#075296" />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
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
    borderColor: "#D2D9E6",
    borderRadius: 8,
    borderCurve: "continuous",
    backgroundColor: "#EFF4FC",
  },
  textContainer: {
    flex: 1,
    gap: 5,
  },
  title: {
    color: "#10243C",
    fontSize: 13,
    fontWeight: "800",
  },
  description: {
    color: "#4F5867",
    fontSize: 12,
    lineHeight: 21,
  },
});
