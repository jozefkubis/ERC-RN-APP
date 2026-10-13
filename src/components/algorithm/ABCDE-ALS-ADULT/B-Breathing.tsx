import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "B",
    title: "Vyšetrenie a podpora dýchania",
    description: "Breathing",
    diagnosisTitle: "Diagnostika",
    diagnosis: [
      "Pohľad, pohmat, poklop, posluch",
      "Symetria, cyanóza, krčné žily, emfyzém, trachea",
      "Frekvencia dýchania",
      "Mechanika dýchania",
      "SpO₂, ETCO₂, USG, RTG, CT",
      "Arteriálne krvné plyny",
    ],
    interventionTitle: "Intervencia",
    intervention: [
      "Ventilácia",
      "O₂ podľa SpO₂",
      "Terapia PNO",
      "Inhalačná terapia",
    ],
    goalTitle: "Cieľ",
    goal: ["Adekvátna oxygenácia a ventilácia"],
  },
  en: {
    badge: "B",
    title: "Breathing assessment and support",
    description: "Breathing",
    diagnosisTitle: "Assessment",
    diagnosis: [
      "Inspection, palpation, percussion, auscultation",
      "Symmetry, cyanosis, jugular veins, emphysema, trachea",
      "Respiratory rate",
      "Breathing mechanics",
      "SpO₂, ETCO₂, ultrasound, X-ray, CT",
      "Arterial blood gases",
    ],
    interventionTitle: "Intervention",
    intervention: [
      "Ventilation",
      "O₂ according to SpO₂",
      "Pneumothorax treatment",
      "Inhalation therapy",
    ],
    goalTitle: "Goal",
    goal: ["Adequate oxygenation and ventilation"],
  },
};

export default function BBreathing() {
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
        title={text.diagnosisTitle}
        iconName="search-outline"
        items={text.diagnosis}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.interventionTitle}
        iconName="medical-outline"
        items={text.intervention}
        tone="danger"
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
