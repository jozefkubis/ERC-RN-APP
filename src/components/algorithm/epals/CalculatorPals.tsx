import { type AppLanguage, useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Platform,
  Pressable,
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

type InputFieldProps = {
  label: string;
  placeholder: string;
  unit: string;
  value: string;
  onChangeText: (value: string) => void;
  colors: CalculatorColors;
};

type ResultRowProps = {
  label: string;
  formula: string;
  value: string;
  colors: CalculatorColors;
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

export default function CalculatorPals() {
  const router = useRouter();
  const { language, themeMode } = useSettings();
  const [weightText, setWeightText] = useState("");
  const [heightText, setHeightText] = useState("");

  const text = pageText[language];
  const colors = calculatorColors[themeMode];
  const weight = Number(weightText.replace(",", "."));
  const height = Number(heightText.replace(",", "."));
  const hasValidWeight = Number.isFinite(weight) && weight > 0;
  const hasValidHeight = Number.isFinite(height) && height > 0;

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

  const IGelSize =
    hasValidWeight && weight >= 2
      ? weight < 5
        ? "1"
        : weight < 12
          ? "1.5"
          : weight < 25
            ? "2"
            : weight < 35
              ? "2.5"
              : weight < 60
                ? "3"
                : weight < 90
                  ? "4"
                  : "5"
      : text.emptyResult;

  const laryngealMaskSize =
    hasValidWeight && weight > 0
      ? weight < 5
        ? "1"
        : weight < 10
          ? "1.5"
          : weight < 20
            ? "2"
            : weight < 30
              ? "2.5"
              : weight < 50
                ? "3"
                : weight < 70
                  ? "4"
                  : "5"
      : text.emptyResult;

  const laryngealTubeSize = getLaryngealTubeSize(height, text.emptyResult);
  const endotrachealTubeSize = getEndotrachealTubeSize(
    height,
    language,
    text.emptyResult,
  );

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
          <Ionicons name="close" size={19} color={colors.title} />
        </Pressable>
      </View>

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
          <View
            style={[styles.separator, { backgroundColor: colors.border }]}
          />
          <ResultRow
            label={text.igelSizeLabel}
            formula={text.igelSizeFormula}
            value={IGelSize}
            colors={colors}
          />
          <View
            style={[styles.separator, { backgroundColor: colors.border }]}
          />
          <ResultRow
            label={text.laryngealMaskSizeLabel}
            formula={text.laryngealMaskSizeFormula}
            value={laryngealMaskSize}
            colors={colors}
          />
          <View
            style={[styles.separator, { backgroundColor: colors.border }]}
          />
          <ResultRow
            label={text.laryngealTubeSizeLabel}
            formula={text.laryngealTubeSizeFormula}
            value={hasValidHeight ? laryngealTubeSize : text.emptyResult}
            colors={colors}
          />
          <View
            style={[styles.separator, { backgroundColor: colors.border }]}
          />
          <ResultRow
            label={text.endotrachealTubeSizeLabel}
            formula={text.endotrachealTubeSizeFormula}
            value={hasValidHeight ? endotrachealTubeSize : text.emptyResult}
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
          adjustsFontSizeToFit
          numberOfLines={2}
          style={[styles.resultValue, { color: colors.primary }]}
        >
          {value}
        </Text>
      </View>
    </View>
  );
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
  separator: {
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 12,
  },
  disclaimer: {
    textAlign: "center",
    fontSize: 9,
    lineHeight: 14,
  },
  pressed: {
    opacity: 0.65,
    transform: [{ scale: 0.94 }],
  },
});
