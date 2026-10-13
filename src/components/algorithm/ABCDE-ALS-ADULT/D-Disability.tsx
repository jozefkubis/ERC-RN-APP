import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "D",
    title: "Zhodnotenie neurologického stavu",
    description: "Disability",
    diagnosisTitle: "Diagnostika",
    diagnosis: [
      "AVPU / GCS",
      "Zrenice, fotoreakcia",
      "Neurologické vyšetrenie",
      "Glykémia",
      "Toxíny",
      "CT",
    ],
    interventionTitle: "Intervencia",
    intervention: ["Glukóza", "Antidotá"],
    goalTitle: "Cieľ",
    goal: ["Zhodnotenie neurologického stavu"],
  },
  en: {
    badge: "D",
    title: "Neurological assessment",
    description: "Disability",
    diagnosisTitle: "Assessment",
    diagnosis: [
      "AVPU / GCS",
      "Pupils, light response",
      "Neurological examination",
      "Blood glucose",
      "Toxins",
      "CT",
    ],
    interventionTitle: "Intervention",
    intervention: ["Glucose", "Antidotes"],
    goalTitle: "Goal",
    goal: ["Assessment of neurological status"],
  },
};

export default function DDisability() {
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
