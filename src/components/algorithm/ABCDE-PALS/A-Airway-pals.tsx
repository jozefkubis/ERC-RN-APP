import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "A",
    title: "Spriechodnenie a zabezpečenie dýchacích ciest",
    description: "Airway",
    recognitionTitle: "Rozpoznanie",
    recognition: [
      "Čiastočná alebo úplná obštrukcia dýchacích ciest",
      "Pozerajte-počúvajte-cíťte dych a zdvihnutie hrudníka",
    ],
    therapyTitle: "Liečba a zváženie",
    therapy: [
      "Odsatie, odstránenie cudzieho telesa, základné manévre pre polohovanie, orofaryngeálne alebo nazofaryngeálne vzduchovody, supraglottické pomôcky (intubácia, FONA)",
    ],
    goalTitle: "Cieľ",
    goal: [
      "Priechodnosť dýchacích ciest umožnujúca adekvátnu ventiláciu a oxygenáciu",
    ],
    highRiskTitle: "Vysoké riziko zastavenia krvného obehu",
    highRisk: ["Obštrukcia dýchacích ciest"],
  },
  en: {
    badge: "A",
    title: "Airway management and securing the airway",
    description: "Airway",
    recognitionTitle: "Recognition",
    recognition: [
      "Partial or complete airway obstruction",
      "Look-listen-feel for breath and chest rise",
    ],
    therapyTitle: "Treatment and considerations",
    therapy: [
      "Suctioning, removal of foreign body, basic positioning maneuvers, oropharyngeal or nasopharyngeal airways, supraglottic devices (intubation, FONA)",
    ],
    goalTitle: "Goal",
    goal: ["Airway patency allowing adequate ventilation and oxygenation"],
    highRiskTitle: "High risk of cardiac arrest",
    highRisk: ["Airway obstruction"],
  },
};

export default function AAirwayPals() {
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
        title={text.recognitionTitle}
        iconName="search-outline"
        items={text.recognition}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.therapyTitle}
        iconName="medkit-outline"
        items={text.therapy}
        tone="info"
        themeMode={themeMode}
      />

      <ContentCard
        title={text.goalTitle}
        iconName="flag-outline"
        items={text.goal}
        tone="info"
        themeMode={themeMode}
      />

      <ContentCard
        title={text.highRiskTitle}
        iconName="alert-circle-outline"
        items={text.highRisk}
        tone="warning"
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
