import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Krok 6",
    title: "Liečte hyponatriémiu",
    description:
      "Pri abnormálnom mentálnom stave začnite okamžitú liečbu hypertonickým roztokom.",
    treatmentTitle: "Podajte 3 % NaCl intravenózne",
    treatmentItems: [
      "Podajte 100 ml bolus v 10-minútových intervaloch.",
      "Druhý a tretí bolus podajte iba v prípade potreby.",
      "Ak je mentálny stav normálny, podajte perorálne sodík.",
    ],
  },
  en: {
    badge: "Step 6",
    title: "Treat hyponatraemia",
    description:
      "If mental status is altered, start immediate treatment with hypertonic saline.",
    treatmentTitle: "Give 3% NaCl intravenously",
    treatmentItems: [
      "Give a 100 mL bolus at 10-minute intervals.",
      "Give the second and third bolus only if needed.",
      "If mental status is normal, give sodium orally.",
    ],
  },
};

export default function Step6() {
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
        iconName="medkit-outline"
        tone="danger"
        items={text.treatmentItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
