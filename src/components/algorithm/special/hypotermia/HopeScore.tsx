import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";
import * as Linking from "expo-linking";

const HOPE_CALCULATOR_URL = "https://www.hypothermiascore.org/";

const pageText = {
  sk: {
    badge: "Pomôcka",
    title: "HOPE skórovací systém",
    description:
      "Hypothermia Outcome Prediction after Extracorporeal Life Support odhaduje pravdepodobnosť prežitia do prepustenia z nemocnice po ohrievaní pomocou ECLS.",
    requiredDataTitle: "Údaje potrebné na výpočet",
    requiredDataItems: [
      "Vek.",
      "Pohlavie.",
      "Mechanizmus hypotermie – s asfyxiou alebo bez asfyxie.",
      "Trvanie KPR.",
      "Koncentrácia draslíka v sére.",
      "Teplota telesného jadra.",
    ],
    interpretationTitle: "Interpretácia výsledku",
    interpretationItems: [
      "Výsledkom je odhadovaná pravdepodobnosť prežitia v percentách.",
      "ERC 2025 používa pri rozhodovaní o prínose ohrievania pomocou ECLS hranicu pravdepodobnosti prežitia 10 %.",
      "Výsledok používajte spolu s klinickým posúdením a miestnymi postupmi.",
    ],
    calculatorTitle: "Otvoriť oficiálnu kalkulačku",
    calculatorDescription: "hypothermiascore.org",
  },
  en: {
    badge: "Clinical tool",
    title: "HOPE score",
    description:
      "Hypothermia Outcome Prediction after Extracorporeal Life Support estimates the probability of survival to hospital discharge after rewarming with ECLS.",
    requiredDataTitle: "Data required for calculation",
    requiredDataItems: [
      "Age.",
      "Sex.",
      "Mechanism of hypothermia – with or without asphyxia.",
      "Duration of CPR.",
      "Serum potassium concentration.",
      "Core body temperature.",
    ],
    interpretationTitle: "Interpreting the result",
    interpretationItems: [
      "The result is an estimated probability of survival expressed as a percentage.",
      "ERC 2025 uses a 10% probability-of-survival threshold when assessing the benefit of rewarming with ECLS.",
      "Use the result together with clinical judgement and local protocols.",
    ],
    calculatorTitle: "Open the official calculator",
    calculatorDescription: "hypothermiascore.org",
  },
};

export default function HopeScore() {
  const { language, themeMode } = useSettings();
  const text = pageText[language];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.requiredDataTitle}
        iconName="list-outline"
        tone="info"
        items={text.requiredDataItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.interpretationTitle}
        iconName="analytics-outline"
        tone="warning"
        items={text.interpretationItems}
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.calculatorTitle}
        description={text.calculatorDescription}
        iconName="open-outline"
        themeMode={themeMode}
        onPress={() => void Linking.openURL(HOPE_CALCULATOR_URL)}
      />
    </AlgorithmScreen>
  );
}
