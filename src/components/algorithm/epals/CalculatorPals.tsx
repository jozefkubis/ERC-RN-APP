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
  heightLabel: string;
  heightPlaceholder: string;
  resultsTitle: string;
  shockLabel: string;
  shockFormula: string;
  adrenalineLabel: string;
  adrenalineFormula: string;
  amiodaroneLabel: string;
  amiodaroneFormula: string;
  emptyResult: string;
  disclaimer: string;
  igelSizeLabel: string;
  igelSizeFormula: string;
  laryngealMaskSizeLabel: string;
  laryngealMaskSizeFormula: string;
  laryngealTubeSizeLabel: string;
  laryngealTubeSizeFormula: string;
  endotrachealTubeSizeLabel: string;
  endotrachealTubeSizeFormula: string;
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
    description: "Výpočet podľa hmotnosti a výšky dieťaťa",
    closeButton: "Zavrieť kalkulačku",
    weightLabel: "Hmotnosť",
    weightPlaceholder: "kg",
    heightLabel: "Výška",
    heightPlaceholder: "cm",
    resultsTitle: "Výsledky",
    shockLabel: "Výboj",
    shockFormula: "4 J/kg",
    adrenalineLabel: "Adrenalín IV/IO",
    adrenalineFormula: "10 µg/kg, max. 1 mg",
    amiodaroneLabel: "Amiodarón IV/IO",
    amiodaroneFormula: "5 mg/kg, max. 300 mg",
    igelSizeLabel: "Veľkosť iGel",
    igelSizeFormula: "Podľa hmotnosti dieťaťa",
    laryngealMaskSizeLabel: "Veľkosť laryngeálnej masky",
    laryngealMaskSizeFormula: "Podľa hmotnosti dieťaťa",
    laryngealTubeSizeLabel: "Veľkosť laryngeálnej kanyly",
    laryngealTubeSizeFormula: "Podľa výšky dieťaťa",
    endotrachealTubeSizeLabel: "Veľkosť endotracheálnej kanyly",
    endotrachealTubeSizeFormula: "Cuffed / uncuffed podľa výšky",
    emptyResult: "0",
    disclaimer: "Pomôcka nenahrádza klinické rozhodnutie.",
  },
  en: {
    title: "Dose/size calculator",
    description: "Calculation based on the child's weight and height",
    closeButton: "Close calculator",
    weightLabel: "Weight",
    weightPlaceholder: "kg",
    heightLabel: "Height",
    heightPlaceholder: "cm",
    resultsTitle: "Results",
    shockLabel: "Shock",
    shockFormula: "4 J/kg",
    adrenalineLabel: "Adrenaline IV/IO",
    adrenalineFormula: "10 µg/kg, max. 1 mg",
    amiodaroneLabel: "Amiodarone IV/IO",
    amiodaroneFormula: "5 mg/kg, max. 300 mg",
    igelSizeLabel: "iGel size",
    igelSizeFormula: "Based on the child's weight",
    laryngealMaskSizeLabel: "Laryngeal mask size",
    laryngealMaskSizeFormula: "Based on the child's weight",
    laryngealTubeSizeLabel: "Laryngeal tube size",
    laryngealTubeSizeFormula: "Based on the child's height",
    endotrachealTubeSizeLabel: "Endotracheal tube size",
    endotrachealTubeSizeFormula: "Cuffed / uncuffed by height",
    emptyResult: "0",
    disclaimer: "This aid does not replace clinical judgement.",
  },
};

export default function CalculatorPals() {
  const { language, themeMode } = useSettings();
  const [weightText, setWeightText] = useState("");
  const [heightText, setHeightText] = useState("");

  const text = pageText[language];
  const colors = calculatorSheetColors[themeMode];
  const weight = Number(weightText.replace(",", "."));
  const height = Number(heightText.replace(",", "."));
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

  const igelSize = getIGelSize(weight, text.emptyResult);
  const laryngealMaskSize = getLaryngealMaskSize(weight, text.emptyResult);
  const laryngealTubeSize = getLaryngealTubeSize(height, text.emptyResult);
  const endotrachealTubeSize = getEndotrachealTubeSize(
    height,
    language,
    text.emptyResult,
  );

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
      label: text.amiodaroneLabel,
      formula: text.amiodaroneFormula,
      value: amiodaroneDose,
    },
    {
      label: text.igelSizeLabel,
      formula: text.igelSizeFormula,
      value: igelSize,
    },
    {
      label: text.laryngealMaskSizeLabel,
      formula: text.laryngealMaskSizeFormula,
      value: laryngealMaskSize,
    },
    {
      label: text.laryngealTubeSizeLabel,
      formula: text.laryngealTubeSizeFormula,
      value: laryngealTubeSize,
    },
    {
      label: text.endotrachealTubeSizeLabel,
      formula: text.endotrachealTubeSizeFormula,
      value: endotrachealTubeSize,
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
        <InputField
          label={text.heightLabel}
          placeholder={text.heightPlaceholder}
          unit="cm"
          value={heightText}
          onChangeText={setHeightText}
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

function getLaryngealMaskSize(weight: number, emptyResult: string) {
  if (!Number.isFinite(weight) || weight <= 0) {
    return emptyResult;
  }

  if (weight < 5) {
    return "1";
  }

  if (weight < 10) {
    return "1.5";
  }

  if (weight < 20) {
    return "2";
  }

  if (weight < 30) {
    return "2.5";
  }

  if (weight < 50) {
    return "3";
  }

  if (weight < 70) {
    return "4";
  }

  return "5";
}

function getLaryngealTubeSize(height: number, emptyResult: string) {
  if (!Number.isFinite(height) || height <= 0 || height < 90) {
    return emptyResult;
  }

  if (height < 115) {
    return "2";
  }

  if (height < 122) {
    return "2.5";
  }

  if (height < 155) {
    return "3";
  }

  if (height < 180) {
    return "4";
  }

  return "5";
}

function getEndotrachealTubeSize(
  height: number,
  language: AppLanguage,
  emptyResult: string,
) {
  if (!Number.isFinite(height) || height <= 0 || height < 46) {
    return emptyResult;
  }

  const separator = " / ";

  if (height < 54) {
    return `3.0${separator}3.0-3.5`;
  }

  if (height < 63) {
    return `3.0${separator}3.5`;
  }

  if (height < 75) {
    return `3.5${separator}4.0`;
  }

  if (height < 85) {
    return `3.5${separator}4.0-4.5`;
  }

  if (height < 98) {
    return `4.0${separator}4.5-5.0`;
  }

  if (height < 110) {
    return `4.5${separator}5.0-5.5`;
  }

  if (height < 119) {
    return `5.0${separator}5.5-6.0`;
  }

  if (height < 132) {
    return `5.5${separator}6.0-6.5`;
  }

  if (height <= 143) {
    return `6.0${separator}6.5`;
  }

  return language === "sk" ? "podľa veku" : "by age";
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
