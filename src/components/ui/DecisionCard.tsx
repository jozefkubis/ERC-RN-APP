import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type DecisionCardProps = {
  question: string;
  description?: string;
};

export default function DecisionCard({
  question,
  description,
}: DecisionCardProps) {
  return (
    <View style={styles.decisionCard}>
      <View style={styles.decisionIcon}>
        <Ionicons name="help" size={25} color="#FFFFFF" />
      </View>
      <View style={styles.decisionTextContainer}>
        <Text selectable style={styles.decisionText}>
          {question}
        </Text>
        {description ? (
          <Text selectable style={styles.decisionDescription}>
            {description}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  decisionCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 18,
    borderWidth: 2,
    borderColor: "#0877D1",
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 4px rgba(15, 35, 60, 0.08)",
  },
  decisionIcon: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#0877D1",
  },
  decisionTextContainer: {
    flex: 1,
    gap: 4,
  },
  decisionText: {
    color: "#075296",
    fontSize: 19,
    fontWeight: "900",
    lineHeight: 25,
  },
  decisionDescription: {
    color: "#5C6574",
    fontSize: 12,
    lineHeight: 17,
  },
});
