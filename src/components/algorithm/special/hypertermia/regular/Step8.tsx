import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Krok 8",
    title: "Liečte závažnú dehydratáciu",
    description: "Spôsob rehydratácie zvoľte podľa mentálneho stavu pacienta.",
    treatmentTitle: "Začnite rehydratáciu",
    treatmentItems: [
      "Pri abnormálnom mentálnom stave podajte intravenózne fyziologický roztok alebo Ringerov laktát.",
      "Ak je mentálny stav normálny, zabezpečte orálnu rehydratáciu a podajte sodík.",
    ],
  },
  en: {
    badge: "Step 8",
    title: "Treat severe dehydration",
    description:
      "Choose the method of rehydration according to the patient's mental status.",
    treatmentTitle: "Start rehydration",
    treatmentItems: [
      "If mental status is altered, give normal saline or Ringer's lactate intravenously.",
      "If mental status is normal, provide oral rehydration and give sodium.",
    ],
  },
};

export default function Step8() {
  const { language, themeMode } = useSettings();
  const text = pageText[language];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        urgent
        themeMode={themeMode}
      />

      <FlowConnector />

      <ContentCard
        title={text.treatmentTitle}
        iconName="water-outline"
        tone="info"
        items={text.treatmentItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
