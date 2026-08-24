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
    width: 38,
    height: 38,
    borderRadius: 19,
    // padding: 9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(105, 162, 219, 0.18)",
  },
  onPress: {
    opacity: 0.5,
  },
});
