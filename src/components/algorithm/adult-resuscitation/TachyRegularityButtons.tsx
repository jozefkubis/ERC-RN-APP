import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type TachyRegularityButtonsProps = {
  onIrregularPress?: () => void;
  onRegularPress?: () => void;
};

export default function TachyRegularityButtons({
  onIrregularPress,
  onRegularPress,
}: TachyRegularityButtonsProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onIrregularPress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="git-branch" size={24} color="#075296" />
        </View>
        <Text style={styles.buttonText}>Nepravidelný</Text>
        <Ionicons name="arrow-forward" size={26} color="#075296" />
      </Pressable>

      <Pressable
        onPress={onRegularPress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="reorder-three" size={26} color="#075296" />
        </View>
        <Text style={styles.buttonText}>Pravidelný</Text>
        <Ionicons name="arrow-forward" size={26} color="#075296" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 12,
  },
  button: {
    width: "100%",
    minHeight: 96,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: "#075296",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  iconContainer: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    backgroundColor: "#E4EFFD",
  },
  buttonText: {
    flex: 1,
    color: "#10243C",
    fontSize: 22,
    fontWeight: "800",
    lineHeight: 28,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
