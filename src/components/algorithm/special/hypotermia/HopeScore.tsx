import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import StepHeader from "@/src/components/ui/StepHeader";
import * as Linking from "expo-linking";

const HOPE_CALCULATOR_URL = "https://www.hypothermiascore.org/";

export default function HopeScore() {
  return (
    <AlgorithmScreen>
      <StepHeader
        badge="Pomôcka"
        title="HOPE skórovací systém"
        description="Hypothermia Outcome Prediction after Extracorporeal Life Support odhaduje pravdepodobnosť prežitia do prepustenia z nemocnice po ohrievaní pomocou ECLS."
      />

      <ContentCard
        title="Údaje potrebné na výpočet"
        iconName="list-outline"
        tone="info"
        items={[
          "Vek.",
          "Pohlavie.",
          "Mechanizmus hypotermie – s asfyxiou alebo bez asfyxie.",
          "Trvanie KPR.",
          "Koncentrácia draslíka v sére.",
          "Teplota telesného jadra.",
        ]}
      />

      <ContentCard
        title="Interpretácia výsledku"
        iconName="analytics-outline"
        tone="warning"
        items={[
          "Výsledkom je odhadovaná pravdepodobnosť prežitia v percentách.",
          "ERC 2025 používa pri rozhodovaní o prínose ohrievania pomocou ECLS hranicu pravdepodobnosti prežitia 10 %.",
          "Výsledok používajte spolu s klinickým posúdením a miestnymi postupmi.",
        ]}
      />

      <FlowActionButton
        title="Otvoriť oficiálnu kalkulačku"
        description="hypothermiascore.org"
        iconName="open-outline"
        onPress={() => void Linking.openURL(HOPE_CALCULATOR_URL)}
      />
    </AlgorithmScreen>
  );
}
