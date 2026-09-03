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
  selectByProtocolValue: string;
};

const pageText: { sk: SizesText; en: SizesText } = {
  sk: {
    title: "Veľkosti pomôcok",
    description: "Prehľad veľkostí pre novorodenca",
    closeButton: "Zavrieť veľkosti pomôcok",
    resultsTitle: "Výsledky",
    igelSizeLabel: "Intersurgical i-gel veľkosť 1",
    igelSizeFormula: "Podľa výrobcu: 2-5 kg",
    laryngealMaskSizeLabel: "Veľkosť laryngeálnej masky",
    laryngealMaskSizeFormula: "Lokálny protokol + návod výrobcu",
    endotrachealTubeSizeLabel: "Veľkosť endotracheálnej kanyly",
    endotrachealTubeSizeFormula: "Lokálny protokol + návod výrobcu",
    selectByProtocolValue:
      "Veľkosť zvoľte podľa lokálneho protokolu a návodu výrobcu.",
    disclaimer: "Pomôcka nenahrádza klinické rozhodnutie.",
  },
  en: {
    title: "Equipment sizes",
    description: "Size overview for a newborn",
    closeButton: "Close equipment sizes",
    resultsTitle: "Results",
    igelSizeLabel: "Intersurgical i-gel size 1",
    igelSizeFormula: "Manufacturer range: 2-5 kg",
    laryngealMaskSizeLabel: "Laryngeal mask size",
    laryngealMaskSizeFormula: "Local protocol + manufacturer instructions",
    endotrachealTubeSizeLabel: "Endotracheal tube size",
    endotrachealTubeSizeFormula: "Local protocol + manufacturer instructions",
    selectByProtocolValue:
      "Select the size according to the local protocol and the manufacturer's instructions.",
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
      value: text.selectByProtocolValue,
      valueStyle: "text",
    },
    {
      label: text.endotrachealTubeSizeLabel,
      formula: text.endotrachealTubeSizeFormula,
      value: text.selectByProtocolValue,
      valueStyle: "text",
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
