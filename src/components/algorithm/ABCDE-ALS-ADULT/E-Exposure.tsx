import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "E",
    title: "Celkové vyšetrenie a expozícia",
    description: "Exposure",
    diagnosisTitle: "Diagnostika",
    diagnosis: [
      "Vyšetrenie od hlavy k päte",
      "Poranenia, opuchy",
      "Kožné zmeny",
      "Teplota",
      "Choroby",
      "Lieky",
      "Alergie",
      "Príjem potravy",
      "Etiológia",
    ],
    interventionTitle: "Intervencia",
    intervention: [
      "Terapia príčiny",
      "Termomanažment",
      "Žalúdočná sonda",
      "Močový katéter",
    ],
    goalTitle: "Cieľ",
    goal: ["Odhalenie ďalších príznakov a ďalšia starostlivosť"],
  },
  en: {
    badge: "E",
    title: "Head-to-toe examination and exposure",
    description: "Exposure",
    diagnosisTitle: "Assessment",
    diagnosis: [
      "Head-to-toe examination",
      "Injuries, swelling",
      "Skin changes",
      "Temperature",
      "Medical history",
      "Medications",
      "Allergies",
      "Food intake",
      "Aetiology",
    ],
    interventionTitle: "Intervention",
    intervention: [
      "Cause-specific treatment",
      "Temperature management",
      "Gastric tube",
      "Urinary catheter",
    ],
    goalTitle: "Goal",
    goal: ["Identification of additional findings and further care"],
  },
};

export default function EExposure() {
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
