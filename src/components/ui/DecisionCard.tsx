import type { AppThemeMode } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type DecisionCardProps = {
  question: string;
  description?: string;
  themeMode?: AppThemeMode;
};

const cardColors = {
  light: {
    background: "#FFFFFF",
    border: "#0877D1",
    title: "#075296",
    description: "#5C6574",
  },
  dark: {
    background: "#101B2B",
    border: "#2F7FBE",
    title: "#B9DDFF",
    description: "#AAB6C7",
  },
};

export default function DecisionCard({
  question,
  description,
  themeMode = "light",
}: DecisionCardProps) {
  const colors = cardColors[themeMode];

  return (
    <View
      style={[
        styles.decisionCard,
        {
          borderColor: colors.border,
          backgroundColor: colors.background,
        },
      ]}
    >
      <View style={styles.decisionIcon}>
        <Ionicons name="help" size={25} color="#FFFFFF" />
      </View>
      <View style={styles.decisionTextContainer}>
        <Text selectable style={[styles.decisionText, { color: colors.title }]}>
          {question}
        </Text>
        {description ? (
          <Text
            selectable
            style={[styles.decisionDescription, { color: colors.description }]}
          >
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
    borderRadius: 12,
    borderCurve: "continuous",
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
    fontSize: 19,
    fontWeight: "900",
    lineHeight: 25,
  },
  decisionDescription: {
    fontSize: 12,
    lineHeight: 17,
  },
});
