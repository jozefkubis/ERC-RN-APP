import { type AppLanguage, useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type CalculatorText = {
  title: string;
  description: string;
  closeButton: string;
  weightLabel: string;
  weightPlaceholder: string;
  resultsTitle: string;
  shockLabel: string;
  shockFormula: string;
  adrenalineLabel: string;
  adrenalineFormula: string;
  amiodaroneLabel: string;
  amiodaroneFormula: string;
  emptyResult: string;
  disclaimer: string;
};

type CalculatorColors = {
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

type ResultRowProps = {
  label: string;
  formula: string;
  value: string;
  colors: CalculatorColors;
};

const pageText: { sk: CalculatorText; en: CalculatorText } = {
  sk: {
    title: "Kalkulačka dávok",
    description: "Výpočet podľa hmotnosti dieťaťa",
    closeButton: "Zavrieť kalkulačku",
    weightLabel: "Hmotnosť",
    weightPlaceholder: "Zadajte hmotnosť",
    resultsTitle: "Výsledky",
    shockLabel: "Výboj",
    shockFormula: "4 J/kg",
    adrenalineLabel: "Adrenalín IV/IO",
    adrenalineFormula: "10 µg/kg, max. 1 mg",
    amiodaroneLabel: "Amiodarón IV/IO",
    amiodaroneFormula: "5 mg/kg, max. 300 mg",
    emptyResult: "0",
    disclaimer: "Pomôcka nenahrádza klinické rozhodnutie.",
  },
  en: {
    title: "Dose calculator",
    description: "Calculation based on the child's weight",
    closeButton: "Close calculator",
    weightLabel: "Weight",
    weightPlaceholder: "Enter weight",
    resultsTitle: "Results",
    shockLabel: "Shock",
    shockFormula: "4 J/kg",
    adrenalineLabel: "Adrenaline IV/IO",
    adrenalineFormula: "10 µg/kg, max. 1 mg",
    amiodaroneLabel: "Amiodarone IV/IO",
    amiodaroneFormula: "5 mg/kg, max. 300 mg",
    emptyResult: "0",
    disclaimer: "This aid does not replace clinical judgement.",
  },
};

const calculatorColors: {
  light: CalculatorColors;
  dark: CalculatorColors;
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

export default function Calculator() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const [weightText, setWeightText] = useState("");

  const text = pageText[language];
  const colors = calculatorColors[themeMode];
  const weight = Number(weightText.replace(",", "."));
  const hasValidWeight = Number.isFinite(weight) && weight > 0;

  const shockDose = hasValidWeight
    ? `${formatNumber(weight * 4, language)} J`
    : text.emptyResult;

  const adrenalineMicrograms = hasValidWeight ? Math.min(weight * 10, 1000) : 0;
  const adrenalineDose = hasValidWeight
    ? `${formatNumber(adrenalineMicrograms, language)} µg (${formatNumber(
        adrenalineMicrograms / 1000,
        language,
      )} mg)`
    : text.emptyResult;

  const amiodaroneDose = hasValidWeight
    ? `${formatNumber(Math.min(weight * 5, 300), language)} mg`
    : text.emptyResult;

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
            {text.title}
          </Text>
          <Text
            selectable
            style={[styles.description, { color: colors.description }]}
          >
            {text.description}
          </Text>
        </View>

        <Pressable
          accessibilityLabel={text.closeButton}
          accessibilityRole="button"
          hitSlop={10}
          onPress={() => router.back()}
          style={({ pressed }) => [
            styles.closeButton,
            { backgroundColor: colors.cardBackground },
            pressed && styles.pressed,
          ]}
        >
          <Ionicons name="close" size={22} color={colors.title} />
        </Pressable>
      </View>

      <View style={styles.inputSection}>
        <Text style={[styles.inputLabel, { color: colors.title }]}>
          {text.weightLabel}
        </Text>
        <View
          style={[
            styles.inputContainer,
            {
              backgroundColor: colors.inputBackground,
              borderColor: colors.border,
            },
          ]}
        >
          <TextInput
            accessibilityLabel={text.weightLabel}
            inputMode="decimal"
            keyboardType="decimal-pad"
            maxLength={5}
            onChangeText={(value: string) =>
              setWeightText(value.replace(/[^0-9.,]/g, ""))
            }
            placeholder={text.weightPlaceholder}
            placeholderTextColor={colors.description}
            selectionColor={colors.primary}
            style={[styles.input, { color: colors.title }]}
            value={weightText}
          />
          <Text style={[styles.unit, { color: colors.description }]}>kg</Text>
        </View>
      </View>

      <View style={styles.resultsSection}>
        <Text style={[styles.resultsTitle, { color: colors.primary }]}>
          {text.resultsTitle}
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
          <ResultRow
            label={text.shockLabel}
            formula={text.shockFormula}
            value={shockDose}
            colors={colors}
          />
          <View
            style={[styles.separator, { backgroundColor: colors.border }]}
          />
          <ResultRow
            label={text.adrenalineLabel}
            formula={text.adrenalineFormula}
            value={adrenalineDose}
            colors={colors}
          />
          <View
            style={[styles.separator, { backgroundColor: colors.border }]}
          />
          <ResultRow
            label={text.amiodaroneLabel}
            formula={text.amiodaroneFormula}
            value={amiodaroneDose}
            colors={colors}
          />
        </View>
      </View>

      <Text
        selectable
        style={[styles.disclaimer, { color: colors.description }]}
      >
        {text.disclaimer}
      </Text>
    </ScrollView>
  );
}

function ResultRow({ label, formula, value, colors }: ResultRowProps) {
  return (
    <View style={styles.resultRow}>
      <View style={styles.resultText}>
        <Text selectable style={[styles.resultLabel, { color: colors.title }]}>
          {label}
        </Text>
        <Text
          selectable
          style={[styles.resultFormula, { color: colors.description }]}
        >
          {formula}
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
          style={[styles.resultValue, { color: colors.primary }]}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}

function formatNumber(value: number, language: AppLanguage) {
  const roundedValue = Math.round(value * 100) / 100;
  const formattedValue = String(roundedValue);

  if (language === "sk") {
    return formattedValue.replace(".", ",");
  }

  return formattedValue;
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 36,
  },
  handle: {
    width: 38,
    height: 5,
    alignSelf: "center",
    borderRadius: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  headerText: {
    flex: 1,
    gap: 3,
  },
  title: {
    fontSize: 23,
    fontWeight: "900",
    lineHeight: 29,
  },
  description: {
    fontSize: 13,
    lineHeight: 19,
  },
  closeButton: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
  },
  inputSection: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "800",
  },
  inputContainer: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 14,
    borderCurve: "continuous",
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 20,
    fontWeight: "800",
    fontVariant: ["tabular-nums"],
  },
  unit: {
    fontSize: 16,
    fontWeight: "700",
  },
  resultsSection: {
    gap: 8,
  },
  resultsTitle: {
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  resultsCard: {
    borderWidth: 1,
    borderRadius: 16,
    borderCurve: "continuous",
    overflow: "hidden",
  },
  resultRow: {
    minHeight: 76,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
  },
  resultText: {
    flex: 1,
    gap: 3,
  },
  resultLabel: {
    fontSize: 15,
    fontWeight: "900",
    lineHeight: 20,
  },
  resultFormula: {
    fontSize: 12,
    lineHeight: 17,
  },
  resultValueContainer: {
    minWidth: 92,
    maxWidth: 150,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 10,
    borderCurve: "continuous",
  },
  resultValue: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "900",
    fontVariant: ["tabular-nums"],
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 14,
  },
  disclaimer: {
    textAlign: "center",
    fontSize: 11,
    lineHeight: 16,
  },
  pressed: {
    opacity: 0.65,
    transform: [{ scale: 0.94 }],
  },
});
