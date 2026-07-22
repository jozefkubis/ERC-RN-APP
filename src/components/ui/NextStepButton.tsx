import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Pressable, StyleSheet, Text, View } from "react-native";

type NextStepButtonProps = {
  onPress?: () => void;
};

export default function NextStepButton({ onPress }: NextStepButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.answerCard,
        styles.answerCardPrimary,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.answerIconPrimary}>
        <MaterialCommunityIcons name="page-next-outline" size={24} color="#FFFFFF" />
      </View>
      <View style={styles.answerTextContainer}>
        <Text style={styles.answerTitlePrimary}>Ďalší krok</Text>
      </View>
      <Ionicons name="arrow-forward" size={22} color="#FFFFFF" />
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
  answerCardPrimary: {
    borderColor: "#075296",
    backgroundColor: "#075296",
  },
  answerIconPrimary: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#ED1C24",
  },
  answerTextContainer: {
    flex: 1,
    gap: 3,
  },
  answerTitlePrimary: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
});
