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
  shockLabel: string;
  shockFormula: string;
  adrenalineLabel: string;
  adrenalineFormula: string;
  amiodaroneThirdShockLabel: string;
  amiodaroneThirdShockFormula: string;
  amiodaroneFifthShockLabel: string;
  amiodaroneFifthShockFormula: string;
  emptyResult: string;
  disclaimer: string;
  igelSizeLabel: string;
  igelSizeFormula: string;
  laryngealMaskSizeLabel: string;
  laryngealMaskSizeFormula: string;
  laryngealTubeSizeLabel: string;
  laryngealTubeSizeFormula: string;
  laryngealTubeSizeValue: string;
  endotrachealTubeSizeLabel: string;
  endotrachealTubeSizeFormula: string;
  selectByProtocolValue: string;
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
    title: "Kalkulačka dávok/veľkostí",
    description: "Dávky podľa hmotnosti a veľkosti pomôcok",
    closeButton: "Zavrieť kalkulačku",
    weightLabel: "Hmotnosť",
    weightPlaceholder: "kg",
    resultsTitle: "Výsledky",
    shockLabel: "Výboj",
    shockFormula: "4 J/kg",
    adrenalineLabel: "Adrenalín IV/IO",
    adrenalineFormula: "10 µg/kg, max. 1 mg",
    amiodaroneThirdShockLabel: "Amiodarón IV/IO - po 3. výboji",
    amiodaroneThirdShockFormula: "5 mg/kg, max. 300 mg",
    amiodaroneFifthShockLabel: "Amiodarón IV/IO - po 5. výboji",
    amiodaroneFifthShockFormula: "5 mg/kg, max. 150 mg",
    igelSizeLabel: "Veľkosť Intersurgical i-gel",
    igelSizeFormula: "Podľa hmotnosti dieťaťa, tabuľka výrobcu",
    laryngealMaskSizeLabel: "Veľkosť laryngeálnej masky",
    laryngealMaskSizeFormula: "Lokálny protokol + návod výrobcu",
    laryngealTubeSizeLabel: "VBM LTS-D",
    laryngealTubeSizeFormula: "Údaje z obalu výrobcu",
    laryngealTubeSizeValue:
      "Veľkosť 1: 5-12 kg; veľkosť 2: 12-25 kg. Veľkosť zvoľte podľa lokálneho protokolu a návodu výrobcu.",
    endotrachealTubeSizeLabel: "Veľkosť endotracheálnej kanyly",
    endotrachealTubeSizeFormula: "Lokálny protokol + návod výrobcu",
    selectByProtocolValue:
      "Veľkosť zvoľte podľa lokálneho protokolu a návodu výrobcu.",
    emptyResult: "0",
    disclaimer: "Pomôcka nenahrádza klinické rozhodnutie.",
  },
  en: {
    title: "Dose/size calculator",
    description: "Weight-based doses and equipment sizes",
    closeButton: "Close calculator",
    weightLabel: "Weight",
    weightPlaceholder: "kg",
    resultsTitle: "Results",
    shockLabel: "Shock",
    shockFormula: "4 J/kg",
    adrenalineLabel: "Adrenaline IV/IO",
    adrenalineFormula: "10 µg/kg, max. 1 mg",
    amiodaroneThirdShockLabel: "Amiodarone IV/IO - after 3rd shock",
    amiodaroneThirdShockFormula: "5 mg/kg, max. 300 mg",
    amiodaroneFifthShockLabel: "Amiodarone IV/IO - after 5th shock",
    amiodaroneFifthShockFormula: "5 mg/kg, max. 150 mg",
    igelSizeLabel: "Intersurgical i-gel size",
    igelSizeFormula: "Based on the child's weight, manufacturer table",
    laryngealMaskSizeLabel: "Laryngeal mask size",
    laryngealMaskSizeFormula: "Local protocol + manufacturer instructions",
    laryngealTubeSizeLabel: "VBM LTS-D",
    laryngealTubeSizeFormula: "Data from the manufacturer's package",
    laryngealTubeSizeValue:
      "Size 1: 5-12 kg; size 2: 12-25 kg. Select the size according to the local protocol and the manufacturer's instructions.",
    endotrachealTubeSizeLabel: "Endotracheal tube size",
    endotrachealTubeSizeFormula: "Local protocol + manufacturer instructions",
    selectByProtocolValue:
      "Select the size according to the local protocol and the manufacturer's instructions.",
    emptyResult: "0",
    disclaimer: "This aid does not replace clinical judgement.",
  },
};

export default function CalculatorPals() {
  const { language, themeMode } = useSettings();
  const [weightText, setWeightText] = useState("");

  const text = pageText[language];
  const colors = calculatorSheetColors[themeMode];
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

  const amiodaroneThirdShockDose = hasValidWeight
    ? `${formatNumber(Math.min(weight * 5, 300), language)} mg`
    : text.emptyResult;
  const amiodaroneFifthShockDose = hasValidWeight
    ? `${formatNumber(Math.min(weight * 5, 150), language)} mg`
    : text.emptyResult;

  const igelSize = getIGelSize(weight, text.emptyResult);

  const results: CalculatorResultItem[] = [
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
      label: text.amiodaroneThirdShockLabel,
      formula: text.amiodaroneThirdShockFormula,
      value: amiodaroneThirdShockDose,
    },
    {
      label: text.amiodaroneFifthShockLabel,
      formula: text.amiodaroneFifthShockFormula,
      value: amiodaroneFifthShockDose,
    },
    {
      label: text.igelSizeLabel,
      formula: text.igelSizeFormula,
      value: igelSize,
    },
    // {
    //   label: text.laryngealMaskSizeLabel,
    //   formula: text.laryngealMaskSizeFormula,
    //   value: text.selectByProtocolValue,
    //   valueStyle: "text",
    // },
    // {
    //   label: text.laryngealTubeSizeLabel,
    //   formula: text.laryngealTubeSizeFormula,
    //   value: text.laryngealTubeSizeValue,
    //   valueStyle: "text",
    // },
    // {
    //   label: text.endotrachealTubeSizeLabel,
    //   formula: text.endotrachealTubeSizeFormula,
    //   value: text.selectByProtocolValue,
    //   valueStyle: "text",
    // },
  ];

  return (
    <CalculatorSheet
      title={text.title}
      description={text.description}
      closeButton={text.closeButton}
      themeMode={themeMode}
    >
      <View>
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

function getIGelSize(weight: number, emptyResult: string) {
  if (!Number.isFinite(weight) || weight < 2) {
    return emptyResult;
  }

  if (weight < 5) {
    return "1";
  }

  if (weight < 12) {
    return "1.5";
  }

  if (weight < 25) {
    return "2";
  }

  if (weight < 35) {
    return "2.5";
  }

  if (weight < 60) {
    return "3";
  }

  if (weight < 90) {
    return "4";
  }

  return "5";
}

function formatNumber(value: number, language: AppLanguage) {
  const formattedValue = value.toFixed(10).replace(/\.?0+$/, "");

  if (language === "sk") {
    return formattedValue.replace(".", ",");
  }

  return formattedValue;
}

const styles = StyleSheet.create({
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
