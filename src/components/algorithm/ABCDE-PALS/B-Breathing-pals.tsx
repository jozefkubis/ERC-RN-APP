import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "B",
    title: "Vyšetrenie a podpora dýchania",
    description: "Breathing",
    recognitionTitle: "Rozpoznanie",
    recognition: [
      "Respiračné zlyhanie",
      "Dychová frekvencia, dychová práca, dychový objem, oxygenácia",
    ],
    monitoringTitle: "Monitoring a vyšetrenia",
    monitoring: ["SpO₂, EtCO₂, arteriálne krvné plyny, POCUS"],
    therapyTitle: "Liečba a zváženie",
    therapy: [
      "Kyslík + titrovanie FiO₂",
      "Ventilácia vakom a maskou",
      "Mechanická ventilácia",
      "ECMO",
    ],
    goalTitle: "Cieľ",
    goal: ["Adekvátna ventilácia", "Adekvátna oxygenácia"],
    highRiskTitle: "Vysoké riziko zastavenia krvného obehu",
    highRisk: ["Nestabilný alebo tichý hrudník, tenzný pneumotorax"],
  },
  en: {
    badge: "B",
    title: "Breathing assessment and support",
    description: "Breathing",
    recognitionTitle: "Recognition",
    recognition: [
      "Respiratory failure",
      "Respiratory rate, work of breathing, tidal volume, oxygenation",
    ],
    monitoringTitle: "Monitoring and investigations",
    monitoring: ["SpO₂, EtCO₂, arterial blood gases, POCUS"],
    therapyTitle: "Treatment and considerations",
    therapy: [
      "Oxygen with FiO₂ titration",
      "Bag-mask ventilation",
      "Mechanical ventilation",
      "ECMO",
    ],
    goalTitle: "Goal",
    goal: ["Adequate ventilation", "Adequate oxygenation"],
    highRiskTitle: "High risk of cardiac arrest",
    highRisk: ["Unstable or silent chest, tension pneumothorax"],
  },
};

export default function BBreathingPals() {
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
