import { useSettings } from "@/src/context/settings-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
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

type ResultRowProps = {
  label: string;
  formula: string;
  value: string;
  colors: CalculatorColors;
};

const pageText: { sk: CalculatorText; en: CalculatorText } = {
  sk: {
    title: "Kalkulačka dávok",
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
    title: "Dose calculator",
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

export default function SizesNewborn() {
  const router = useRouter();
  const { language, themeMode } = useSettings();

  const text = pageText[language];
  const colors = calculatorColors[themeMode];

  const IGelSize = "1";

  const laryngealMaskSize = "1";

  const endotrachealTubeSize = "3.5-4.0";

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
            label={text.endotrachealTubeSizeLabel}
            formula={text.endotrachealTubeSizeFormula}
            value={endotrachealTubeSize}
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
