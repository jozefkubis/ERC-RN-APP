import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Krok 9",
    title: "Posúďte ďalšie príznaky",
    description:
      "Ak klinický obraz poukazuje na inú príčinu, pokračujte podľa príslušného algoritmu.",
    question: "Ďalšie príznaky?",
    yesTitle: "Áno – Zvoľte vhodný algoritmus",
    yesItems: ["Napríklad algoritmus pre hypoglykémiu."],
    noTitle: "Nie – Prepustite pacienta",
    noItems: ["Ak nie sú prítomné ďalšie príznaky, ukončite algoritmus."],
  },
  en: {
    badge: "Step 9",
    title: "Assess other symptoms",
    description:
      "If the clinical presentation suggests another cause, follow the appropriate algorithm.",
    question: "Other symptoms?",
    yesTitle: "Yes – Choose the appropriate algorithm",
    yesItems: ["For example, the hypoglycaemia algorithm."],
    noTitle: "No – Discharge the patient",
    noItems: ["If no other symptoms are present, end the algorithm."],
  },
};

export default function Step9() {
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

      <DecisionCard question={text.question} themeMode={themeMode} />

      <FlowConnector />

      <ContentCard
        title={text.yesTitle}
        iconName="git-branch-outline"
        tone="info"
        items={text.yesItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.noTitle}
        iconName="checkmark-circle-outline"
        items={text.noItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
