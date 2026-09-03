import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { type ReactNode } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { type AppThemeMode } from "@/src/context/settings-context";

export type CalculatorSheetColors = {
  background: string;
  cardBackground: string;
  border: string;
  title: string;
  description: string;
  primary: string;
  inputBackground: string;
  resultBackground: string;
  handle: string;
};

export type CalculatorResultItem = {
  label: string;
  formula: string;
  value: string;
  valueStyle?: "number" | "text";
};

type CalculatorSheetProps = {
  title: string;
  description: string;
  closeButton: string;
  themeMode: AppThemeMode;
  children: ReactNode;
};

type ResultsCardProps = {
  title: string;
  items: CalculatorResultItem[];
  colors: CalculatorSheetColors;
};

type ResultRowProps = {
  item: CalculatorResultItem;
  colors: CalculatorSheetColors;
};

export const calculatorSheetColors: {
  light: CalculatorSheetColors;
  dark: CalculatorSheetColors;
} = {
  light: {
    background: "#e6e7ee",
    cardBackground: "#FFFFFF",
    border: "#CBD3DF",
    title: "#10243C",
    description: "#5C6574",
    primary: "#075296",
    inputBackground: "#FFFFFF",
    resultBackground: "#EAF4FD",
    handle: "#AEB7C4",
  },
  dark: {
    background: "#1c5499",
    cardBackground: "#101B2B",
    border: "#31435A",
    title: "#F5F8FC",
    description: "#AAB6C7",
    primary: "#77B7F2",
    inputBackground: "#101B2B",
    resultBackground: "#102A42",
    handle: "#65758A",
  },
};

export default function CalculatorSheet({
  title,
  description,
  closeButton,
  themeMode,
  children,
}: CalculatorSheetProps) {
  const router = useRouter();
  const colors = calculatorSheetColors[themeMode];

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
    >
      {Platform.OS === "android" ? (
        <View style={[styles.handle, { backgroundColor: colors.handle }]} />
      ) : null}

      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text selectable style={[styles.title, { color: colors.title }]}>
            {title}
          </Text>
          <Text
            selectable
            style={[styles.description, { color: colors.description }]}
          >
            {description}
          </Text>
        </View>

        <Pressable
          accessibilityLabel={closeButton}
          accessibilityRole="button"
          hitSlop={10}
          onPress={() => router.back()}
          style={({ pressed }) => [
            styles.closeButton,
            { backgroundColor: colors.cardBackground },
            pressed && styles.pressed,
          ]}
        >
          <Ionicons name="close" size={19} color={colors.title} />
        </Pressable>
      </View>

      {children}
    </ScrollView>
  );
}

export function ResultsCard({ title, items, colors }: ResultsCardProps) {
  return (
    <View style={styles.resultsSection}>
      <Text style={[styles.resultsTitle, { color: colors.primary }]}>
        {title}
      </Text>
      <View
        style={[
          styles.resultsCard,
          {
            backgroundColor: colors.cardBackground,
            borderColor: colors.border,
          },
        ]}
      >
        {items.map((item, index) => (
          <View key={item.label}>
            {index > 0 ? (
              <View
                style={[styles.separator, { backgroundColor: colors.border }]}
              />
            ) : null}
            <ResultRow item={item} colors={colors} />
          </View>
        ))}
      </View>
    </View>
  );
}

function ResultRow({ item, colors }: ResultRowProps) {
  return (
    <View style={styles.resultRow}>
      <View style={styles.resultText}>
        <Text selectable style={[styles.resultLabel, { color: colors.title }]}>
          {item.label}
        </Text>
        <Text
          selectable
          style={[styles.resultFormula, { color: colors.description }]}
        >
          {item.formula}
        </Text>
      </View>
      <View
        style={[
          styles.resultValueContainer,
          { backgroundColor: colors.resultBackground },
        ]}
      >
        <Text
          selectable
          adjustsFontSizeToFit={item.valueStyle !== "text"}
          numberOfLines={item.valueStyle === "text" ? 4 : 2}
          style={[
            styles.resultValue,
            item.valueStyle === "text" && styles.resultTextValue,
            { color: colors.primary },
          ]}
        >
          {item.value}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 17,
    paddingHorizontal: 17,
    paddingTop: 12,
    paddingBottom: 31,
  },
  handle: {
    width: 32,
    height: 4,
    alignSelf: "center",
    borderRadius: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  headerText: {
    flex: 1,
    gap: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 25,
  },
  description: {
    fontSize: 11,
    lineHeight: 16,
  },
  closeButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  resultsSection: {
    gap: 7,
  },
  resultsTitle: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 0.7,
    textTransform: "uppercase",
  },
  resultsCard: {
    borderWidth: 1,
    borderRadius: 14,
    borderCurve: "continuous",
    overflow: "hidden",
  },
  resultRow: {
    minHeight: 65,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
  },
  resultText: {
    flex: 1,
    gap: 3,
  },
  resultLabel: {
    fontSize: 13,
    fontWeight: "900",
    lineHeight: 17,
  },
  resultFormula: {
    fontSize: 10,
    lineHeight: 14,
  },
  resultValueContainer: {
    minWidth: 78,
    maxWidth: 132,
    paddingHorizontal: 9,
    paddingVertical: 8,
    borderRadius: 9,
    borderCurve: "continuous",
  },
  resultValue: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "900",
    fontVariant: ["tabular-nums"],
  },
  resultTextValue: {
    textAlign: "left",
    fontSize: 10,
    fontWeight: "700",
    lineHeight: 14,
    fontVariant: [],
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 12,
  },
  pressed: {
    opacity: 0.65,
    transform: [{ scale: 0.94 }],
  },
});
