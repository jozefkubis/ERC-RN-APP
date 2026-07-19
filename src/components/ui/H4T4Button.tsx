import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
export default function H4T4Button() {
  const router = useRouter();

  return (
    <Pressable
      style={({ pressed }) => [styles.causeCard, pressed && styles.pressed]}
      onPress={() => router.push("/algorithms/adult-resuscitation/als/4h4t")}
    >
      <View style={styles.causeIcon}>
        <Ionicons name="search-outline" size={22} color="#075296" />
      </View>
      <View style={styles.causeTextContainer}>
        <Text style={styles.causeTitle}>Reverzibilné príčiny</Text>
        <Text style={styles.causeDescription}>
          Otvoriť 4H/4T checklist počas pokračujúcej resuscitácie.
        </Text>
      </View>
      <Ionicons name="arrow-forward" size={22} color="#7A8492" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
  causeCard: {
    width: "100%",
    minHeight: 82,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#CBD3DF",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  causeIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#E4EFFD",
  },
  causeTextContainer: {
    flex: 1,
    gap: 4,
  },
  causeTitle: {
    color: "#10243C",
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 21,
  },
  causeDescription: {
    color: "#5C6574",
    fontSize: 13,
    lineHeight: 19,
  },
});
