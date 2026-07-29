import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function AvaLifeLink() {
  const router = useRouter();

  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel="Otvoriť vysvetlenie algoritmu AvaLife"
      onPress={() =>
        router.push("/algorithms/special/hypotermia/lavina/avalife")
      }
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.icon}>
        <Ionicons name="git-network-outline" size={24} color="#FFFFFF" />
      </View>
      <View style={styles.textContainer}>
        <Text selectable style={styles.title}>
          Algoritmus AvaLife
        </Text>
        <Text selectable style={styles.description}>
          Otvorte vysvetlenie postupu pri lavínovej nehode s obmedzeným
          počtom záchrancov.
        </Text>
      </View>
      <Ionicons name="open-outline" size={22} color="#075296" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 88,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: "#0877D1",
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  icon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#0877D1",
  },
  textContainer: {
    flex: 1,
    gap: 3,
  },
  title: {
    color: "#075296",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
    textDecorationLine: "underline",
  },
  description: {
    color: "#5C6574",
    fontSize: 12,
    lineHeight: 17,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
