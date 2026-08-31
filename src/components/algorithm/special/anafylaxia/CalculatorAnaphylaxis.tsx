import { type AppLanguage, useSettings } from "@/src/context/settings-context";
import CalculatorSheet, {
  ResultsCard,
  calculatorSheetColors,
  type CalculatorResultItem,
  type CalculatorSheetColors,
} from "@/src/components/ui/CalculatorSheet";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type CalculatorText = {
  title: string;
  description: string;
  closeButton: string;
  weightLabel: string;
  weightPlaceholder: string;
  resultsTitle: string;
  adrenalineLabel: string;
  adrenalineFormula: string;
  adrenalineVolumeLabel: string;
  adrenalineVolumeFormula: string;
  fluidLabel: string;
  fluidFormula: string;
  adultFluidLabel: string;
  adultFluidFormula: string;
  emptyResult: string;
  disclaimer: string;
};

type InputFieldProps = {
  label: string;
  placeholder: string;
  unit: string;
  value: string;
  onChangeText: (value: string) => void;
  colors: CalculatorSheetColors;
};

const pageText: { sk: CalculatorText; en: CalculatorText } = {
  sk: {
    title: "Kalkulačka anafylaxie",
    description: "I.m. adrenalín a tekutinový bolus podľa hmotnosti",
    closeButton: "Zavrieť kalkulačku",
    weightLabel: "Hmotnosť",
    weightPlaceholder: "kg",
    resultsTitle: "Výsledky",
    adrenalineLabel: "Adrenalín i.m.",
    adrenalineFormula: "0,01 mg/kg, max. 0,5 mg",
    adrenalineVolumeLabel: "Objem adrenalínu 1 mg/ml",
    adrenalineVolumeFormula: "Vypočítaná dávka v ml",
    fluidLabel: "Kryštaloid dieťa",
    fluidFormula: "10 ml/kg",
    adultFluidLabel: "Kryštaloid dospelý",
    adultFluidFormula: "500 - 1 000 ml",
    emptyResult: "0",
    disclaimer:
      "Pomôcka používa dávky z algoritmu anafylaxie a nenahrádza klinické rozhodnutie.",
  },
  en: {
    title: "Anaphylaxis calculator",
    description: "IM adrenaline and fluid bolus by weight",
    closeButton: "Close calculator",
    weightLabel: "Weight",
    weightPlaceholder: "kg",
    resultsTitle: "Results",
    adrenalineLabel: "IM adrenaline",
    adrenalineFormula: "0.01 mg/kg, max. 0.5 mg",
    adrenalineVolumeLabel: "Adrenaline 1 mg/ml volume",
    adrenalineVolumeFormula: "Calculated dose in ml",
    fluidLabel: "Child crystalloid",
    fluidFormula: "10 ml/kg",
    adultFluidLabel: "Adult crystalloid",
    adultFluidFormula: "500 - 1,000 ml",
    emptyResult: "0",
    disclaimer:
      "This aid uses doses from the anaphylaxis algorithm and does not replace clinical judgement.",
  },
};

export default function CalculatorAnaphylaxis() {
  const { language, themeMode } = useSettings();
  const [weightText, setWeightText] = useState("");

  const text = pageText[language];
  const colors = calculatorSheetColors[themeMode];
  const weight = Number(weightText.replace(",", "."));
  const hasValidWeight = Number.isFinite(weight) && weight > 0;

  const adrenalineMicrograms = hasValidWeight ? Math.min(weight * 10, 500) : 0;
  const adrenalineDose = hasValidWeight
    ? `${formatNumber(adrenalineMicrograms, language)} mcg (${formatNumber(
        adrenalineMicrograms / 1000,
        language,
      )} mg)`
    : text.emptyResult;
  const adrenalineVolume = hasValidWeight
    ? `${formatNumber(adrenalineMicrograms / 1000, language)} ml`
    : text.emptyResult;
  const fluidDose = hasValidWeight
    ? `${formatNumber(weight * 10, language)} ml`
    : text.emptyResult;

  const results: CalculatorResultItem[] = [
    {
      label: text.adrenalineLabel,
      formula: text.adrenalineFormula,
      value: adrenalineDose,
    },
    {
      label: text.adrenalineVolumeLabel,
      formula: text.adrenalineVolumeFormula,
      value: adrenalineVolume,
    },
    {
      label: text.fluidLabel,
      formula: text.fluidFormula,
      value: fluidDose,
    },
    {
      label: text.adultFluidLabel,
      formula: text.adultFluidFormula,
      value: text.adultFluidFormula,
    },
  ];

  return (
    <CalculatorSheet
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
    </CalculatorSheet>
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
  const roundedValue = Math.round(value * 100) / 100;
  const formattedValue = String(roundedValue);

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
