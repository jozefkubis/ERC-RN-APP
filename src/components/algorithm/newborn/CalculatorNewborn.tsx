import { type AppLanguage, useSettings } from "@/src/context/settings-context";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import {
  NewbornSheet,
  ResultsCard,
  newbornSheetColors,
  type NewbornResultItem,
  type NewbornSheetColors,
} from "./NewbornSheet";

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
  emptyResult: string;
  disclaimer: string;
  ivVolumeLabel: string;
  ivVolumeFormula: string;
  glucoseLabel: string;
  glucoseFormula: string;
};

type InputFieldProps = {
  label: string;
  placeholder: string;
  unit: string;
  value: string;
  onChangeText: (value: string) => void;
  colors: NewbornSheetColors;
};

const pageText: { sk: CalculatorText; en: CalculatorText } = {
  sk: {
    title: "Kalkulačka dávok",
    description: "Výpočet podľa hmotnosti a výšky dieťaťa",
    closeButton: "Zavrieť kalkulačku",
    weightLabel: "Hmotnosť",
    weightPlaceholder: "kg",
    resultsTitle: "Výsledky",
    shockLabel: "Výboj",
    shockFormula: "4 J/kg",
    adrenalineLabel: "Adrenalín IV/IO",
    adrenalineFormula: "10 µg/kg, max. 1 mg",
    ivVolumeLabel: "Objem IV",
    ivVolumeFormula: "10 mL/kg",
    glucoseLabel: "Glukóza 10%",
    glucoseFormula: "2 mL/kg",
    emptyResult: "0",
    disclaimer: "Pomôcka nenahrádza klinické rozhodnutie.",
  },
  en: {
    title: "Dose calculator",
    description: "Calculation based on the child's weight and height",
    closeButton: "Close calculator",
    weightLabel: "Weight",
    weightPlaceholder: "kg",
    resultsTitle: "Results",
    shockLabel: "Shock",
    shockFormula: "4 J/kg",
    adrenalineLabel: "Adrenaline IV/IO",
    adrenalineFormula: "10 µg/kg, max. 1 mg",
    ivVolumeLabel: "IV volume",
    ivVolumeFormula: "10 mL/kg",
    glucoseLabel: "Glucose 10%",
    glucoseFormula: "2 mL/kg",
    emptyResult: "0",
    disclaimer: "This aid does not replace clinical judgement.",
  },
};

export default function CalculatorNewborn() {
  const { language, themeMode } = useSettings();
  const [weightText, setWeightText] = useState("");

  const text = pageText[language];
  const colors = newbornSheetColors[themeMode];
  const weight = Number(weightText.replace(",", "."));
  const hasValidWeight = Number.isFinite(weight) && weight > 0;

  const shockDose = hasValidWeight
    ? `${formatNumber(weight * 4, language)} J`
    : text.emptyResult;

  const adrenalineMicrograms = hasValidWeight ? Math.min(weight * 10, 1000) : 0;
  const adrenalineMicrogramx3 = hasValidWeight
    ? Math.min(weight * 30, 1000)
    : 0;
  const adrenalineDose = hasValidWeight
    ? `${formatNumber(adrenalineMicrograms, language)} µg (${formatNumber(
        adrenalineMicrograms / 1000,
        language,
      )} mg) - ${formatNumber(adrenalineMicrogramx3, language)} µg (${formatNumber(
        adrenalineMicrogramx3 / 1000,
        language,
      )} mg)`
    : text.emptyResult;

  const ivVolume = hasValidWeight ? weight * 10 : 0;
  const ivVolumeDose = hasValidWeight
    ? `${formatNumber(ivVolume, language)} mL`
    : text.emptyResult;

  const glucose = hasValidWeight ? weight * 2 : 0;
  const glucoseDose = hasValidWeight
    ? `${formatNumber(glucose, language)} mL`
    : text.emptyResult;

  const results: NewbornResultItem[] = [
    {
      label: text.shockLabel,
      formula: text.shockFormula,
      value: shockDose,
    },
    {
      label: text.adrenalineLabel,
      formula: text.adrenalineFormula,
      value: adrenalineDose,
    },
    {
      label: text.ivVolumeLabel,
      formula: text.ivVolumeFormula,
      value: ivVolumeDose,
    },
    {
      label: text.glucoseLabel,
      formula: text.glucoseFormula,
      value: glucoseDose,
    },
  ];

  return (
    <NewbornSheet
      title={text.title}
      description={text.description}
      closeButton={text.closeButton}
      themeMode={themeMode}
    >
      <View style={styles.inputRow}>
        <InputField
          label={text.weightLabel}
          placeholder={text.weightPlaceholder}
          unit="kg"
          value={weightText}
          onChangeText={setWeightText}
          colors={colors}
        />
      </View>

      <ResultsCard title={text.resultsTitle} items={results} colors={colors} />

      <Text
        selectable
        style={[styles.disclaimer, { color: colors.description }]}
      >
        {text.disclaimer}
      </Text>
    </NewbornSheet>
  );
}

function InputField({
  label,
  placeholder,
  unit,
  value,
  onChangeText,
  colors,
}: InputFieldProps) {
  return (
    <View style={styles.inputSection}>
      <Text style={[styles.inputLabel, { color: colors.title }]}>{label}</Text>
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
          accessibilityLabel={label}
          inputMode="decimal"
          keyboardType="decimal-pad"
          maxLength={5}
          onChangeText={(nextValue: string) =>
            onChangeText(nextValue.replace(/[^0-9.,]/g, ""))
          }
          placeholder={placeholder}
          placeholderTextColor={colors.description}
          selectionColor={colors.primary}
          style={[styles.input, { color: colors.title }]}
          value={value}
        />
        <Text style={[styles.unit, { color: colors.description }]}>{unit}</Text>
      </View>
    </View>
  );
}

function formatNumber(value: number, language: AppLanguage) {
  const formattedValue = value.toFixed(10).replace(/\.?0+$/, "");

  if (language === "sk") {
    return formattedValue.replace(".", ",");
  }

  return formattedValue;
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    gap: 10,
  },
  inputSection: {
    flex: 1,
    gap: 7,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: "800",
  },
  inputContainer: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    borderWidth: 1,
    borderRadius: 12,
    borderCurve: "continuous",
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 17,
    fontWeight: "800",
    fontVariant: ["tabular-nums"],
  },
  unit: {
    fontSize: 14,
    fontWeight: "700",
  },
  disclaimer: {
    textAlign: "center",
    fontSize: 9,
    lineHeight: 14,
  },
});
