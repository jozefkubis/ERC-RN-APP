import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "A",
    title: "Spriechodnenie a zabezpečenie dýchacích ciest",
    description: "Airway",
    diagnosisTitle: "Diagnostika",
    diagnosis: [
      "Zvukové fenomény",
      "Poloha hlavy",
      "Cudzie telesá",
      "Opuch",
      "Trauma",
      "Paradoxné dýchanie",
    ],
    interventionTitle: "Intervencia",
    intervention: [
      "Manévre",
      "Vyduchovod",
      "Odsatie",
      "Otočenie na bok",
      "Zaistenie (SGA, OTI)",
      "Oxygenoterapia 15 l/min",
    ],
    goalTitle: "Cieľ",
    goal: ["Priechodné dýchacie cesty"],
  },
  en: {
    badge: "A",
    title: "Airway management",
    description: "Airway",
    diagnosisTitle: "Assessment",
    diagnosis: [
      "Audible phenomena",
      "Head position",
      "Foreign bodies",
      "Swelling",
      "Trauma",
      "Paradoxical breathing",
    ],
    interventionTitle: "Intervention",
    intervention: [
      "Maneuvers",
      "Airway adjunct",
      "Suction",
      "Turning to the side",
      "Securing (SGA, OTI)",
      "Oxygen therapy 15 l/min",
    ],
    goalTitle: "Goal",
    goal: ["Patent airway"],
  },
};

export default function AAirway() {
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
        title={text.diagnosisTitle}
        iconName="search-outline"
        items={text.diagnosis}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.interventionTitle}
        iconName="medical-outline"
        items={text.intervention}
        tone="info"
        themeMode={themeMode}
      />

      <ContentCard
        title={text.goalTitle}
        iconName="checkmark-circle-outline"
        items={text.goal}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
