import { useSettings } from "@/src/context/settings-context";
import { StyleSheet, Text } from "react-native";
import {
  NewbornSheet,
  ResultsCard,
  newbornSheetColors,
  type NewbornResultItem,
} from "./NewbornSheet";

type SizesText = {
  title: string;
  description: string;
  closeButton: string;
  resultsTitle: string;
  disclaimer: string;
  igelSizeLabel: string;
  igelSizeFormula: string;
  laryngealMaskSizeLabel: string;
  laryngealMaskSizeFormula: string;
  endotrachealTubeSizeLabel: string;
  endotrachealTubeSizeFormula: string;
};

const pageText: { sk: SizesText; en: SizesText } = {
  sk: {
    title: "Veľkosti pomôcok",
    description: "Prehľad veľkostí pre novorodenca",
    closeButton: "Zavrieť veľkosti pomôcok",
    resultsTitle: "Výsledky",
    igelSizeLabel: "Veľkosť iGel",
    igelSizeFormula: "Podľa hmotnosti dieťaťa",
    laryngealMaskSizeLabel: "Veľkosť laryngeálnej masky",
    laryngealMaskSizeFormula: "Podľa hmotnosti dieťaťa",
    endotrachealTubeSizeLabel: "Veľkosť endotracheálnej kanyly",
    endotrachealTubeSizeFormula: "Cuffed / uncuffed podľa výšky",
    disclaimer: "Pomôcka nenahrádza klinické rozhodnutie.",
  },
  en: {
    title: "Equipment sizes",
    description: "Size overview for a newborn",
    closeButton: "Close equipment sizes",
    resultsTitle: "Results",
    igelSizeLabel: "iGel size",
    igelSizeFormula: "Based on the child's weight",
    laryngealMaskSizeLabel: "Laryngeal mask size",
    laryngealMaskSizeFormula: "Based on the child's weight",
    endotrachealTubeSizeLabel: "Endotracheal tube size",
    endotrachealTubeSizeFormula: "Cuffed / uncuffed by height",
    disclaimer: "This aid does not replace clinical judgement.",
  },
};

export default function SizesNewborn() {
  const { language, themeMode } = useSettings();

  const text = pageText[language];
  const colors = newbornSheetColors[themeMode];

  const results: NewbornResultItem[] = [
    {
      label: text.igelSizeLabel,
      formula: text.igelSizeFormula,
      value: "1",
    },
    {
      label: text.laryngealMaskSizeLabel,
      formula: text.laryngealMaskSizeFormula,
      value: "1",
    },
    {
      label: text.endotrachealTubeSizeLabel,
      formula: text.endotrachealTubeSizeFormula,
      value: "3.5-4.0",
    },
  ];

  return (
    <NewbornSheet
      title={text.title}
      description={text.description}
      closeButton={text.closeButton}
      themeMode={themeMode}
    >
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

const styles = StyleSheet.create({
  disclaimer: {
    textAlign: "center",
    fontSize: 9,
    lineHeight: 14,
  },
});
