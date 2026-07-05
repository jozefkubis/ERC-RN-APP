import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type NoButtonProps = {
  onPress?: () => void;
};

export default function NoButton({ onPress }: NoButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.answerCard,
        styles.answerCardLight,
        pressed && styles.pressed,
      ]}
      onPress={onPress && onPress}
    >
      <View style={styles.answerIconLight}>
        <Ionicons name="close" size={24} color="#075296" />
      </View>
      <View style={styles.answerTextContainer}>
        <Text style={styles.answerTitleLight}>Nie</Text>
      </View>
      <Ionicons name="arrow-forward" size={22} color="#7A8492" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  answerCard: {
    width: "100%",
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderCurve: "continuous",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  answerCardLight: {
    borderColor: "#CBD3DF",
    backgroundColor: "#FFFFFF",
  },
  answerIconLight: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#E4EFFD",
  },
  answerTextContainer: {
    flex: 1,
    gap: 3,
  },
  answerTitleLight: {
    color: "#10243C",
    fontSize: 18,
    fontWeight: "800",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
