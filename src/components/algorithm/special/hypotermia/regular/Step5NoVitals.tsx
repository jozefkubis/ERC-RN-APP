import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Krok 5",
    title: "Hypotermia IV – zastavenie obehu",
    description:
      "Pokračujte v resuscitácii a aktívnom ohrievaní až do vyhodnotenia obnovenia spontánneho krvného obehu.",
    treatmentTitle: "Ohrievanie a resuscitácia",
    treatmentItems: [
      "Ohrievajte pacienta pomocou ECLS.",
      "Ak centrum s ECLS nie je možné dosiahnuť do 6 hodín, pokračujte v KPR a ohrievaní bez ECLS v najbližšej vhodnej nemocnici.",
      "Zohrejte pacienta na teplotu telesného jadra najmenej 32 °C.",
    ],
    question: "Došlo k obnoveniu spontánneho krvného obehu (ROSC)?",
    noTitle: "Nie – žiadny ROSC",
    noItems: ["Zvážte ukončenie KPR."],
    yesTitle: "Áno – krvný obeh je obnovený",
    yesItems: [
      "Pripravte sa na multiorgánové zlyhávanie a možnú potrebu respiračnej podpory pomocou ECLS.",
      "Pokračujte v poresuscitačnej starostlivosti.",
    ],
  },
  en: {
    badge: "Step 5",
    title: "Hypothermia IV – cardiac arrest",
    description:
      "Continue resuscitation and active rewarming while assessing for return of spontaneous circulation.",
    treatmentTitle: "Rewarming and resuscitation",
    treatmentItems: [
      "Rewarm the patient using ECLS.",
      "If an ECLS centre cannot be reached within 6 hours, continue CPR and non-ECLS rewarming at the nearest suitable hospital.",
      "Rewarm the patient to a core body temperature of at least 32 °C.",
    ],
    question: "Has return of spontaneous circulation (ROSC) occurred?",
    noTitle: "No – no ROSC",
    noItems: ["Consider terminating CPR."],
    yesTitle: "Yes – circulation is restored",
    yesItems: [
      "Prepare for multi-organ failure and a possible need for respiratory support with ECLS.",
      "Continue post-resuscitation care.",
    ],
  },
};

export default function Step5NoVitals() {
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

      <ContentCard
        title={text.treatmentTitle}
        iconName="thermometer-outline"
        tone="danger"
        items={text.treatmentItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <DecisionCard question={text.question} themeMode={themeMode} />

      <ContentCard
        title={text.noTitle}
        iconName="hand-left-outline"
        tone="danger"
        items={text.noItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.yesTitle}
        iconName="heart-circle-outline"
        tone="info"
        items={text.yesItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
