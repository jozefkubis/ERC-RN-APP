import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "E",
    title: "Celkové vyšetrenie a expozícia",
    description: "Exposure",
    recognitionTitle: "Rozpoznanie",
    recognition: [
      "Špecifické okolnosti",
      "Odhalenie a fyzikálne vyšetrenie",
    ],
    monitoringTitle: "Monitoring a vyšetrenia",
    monitoring: ["Telesná teplota", "Anamnéza AMPLE"],
    therapyTitle: "Liečba a zváženie",
    therapy: [
      "Antibiotiká, antivirotiká",
      "Liečba a intervencie pri špecifických okolnostiach",
      "Predchádzanie a liečba hypotermie a hypertermie",
      "Zneužívanie a zanedbávanie detí",
    ],
    goalTitle: "Cieľ",
    goal: ["Identifikácia základnej príčiny"],
    highRiskTitle: "Vysoké riziko zastavenia krvného obehu",
    highRisk: ["Hypotermia, ťažká trauma, trombóza"],
  },
  en: {
    badge: "E",
    title: "Head-to-toe examination and exposure",
    description: "Exposure",
    recognitionTitle: "Recognition",
    recognition: ["Specific circumstances", "Exposure and physical examination"],
    monitoringTitle: "Monitoring and investigations",
    monitoring: ["Body temperature", "AMPLE history"],
    therapyTitle: "Treatment and considerations",
    therapy: [
      "Antibiotics, antivirals",
      "Treatment and interventions for specific circumstances",
      "Prevention and treatment of hypothermia and hyperthermia",
      "Child abuse and neglect",
    ],
    goalTitle: "Goal",
    goal: ["Identification of the underlying cause"],
    highRiskTitle: "High risk of cardiac arrest",
    highRisk: ["Hypothermia, severe trauma, thrombosis"],
  },
};

export default function EExposurePals() {
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
        title={text.monitoringTitle}
        iconName="eye-outline"
        items={text.monitoring}
        tone="info"
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
