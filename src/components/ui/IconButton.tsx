import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

type IconButtonProps = {
  onPress: () => void;
  size?: number;
  color?: string;
  name: React.ComponentProps<typeof Ionicons>["name"];
};

export default function IconButton({
  onPress,
  name,
  size,
  color,
}: IconButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.onPress}
      >
        <Ionicons name={name} size={size} color={color} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 50,
    padding: 9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eae6e6c0",
  },
  onPress: {
    opacity: 0.5,
  },
});
