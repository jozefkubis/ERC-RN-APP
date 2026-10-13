import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "C",
    title: "Vyšetrenie a stabilizácia krvného obehu",
    description: "Circulation",
    diagnosisTitle: "Diagnostika",
    diagnosis: [
      "Srdcová frekvencia",
      "TK, kapilárny návrat",
      "Auskultácia",
      "Krvácanie, farba kože",
      "Diuréza",
      "Laboratórne odbery",
      "EKG, USG, CT, RTG",
    ],
    interventionTitle: "Intervencia",
    intervention: [
      "Trendelenburgova poloha",
      "I.V. / I.O. prístup",
      "Tekutiny",
      "Kontrola krvácania",
      "Lieky",
      "Transfúzne deriváty",
    ],
    goalTitle: "Cieľ",
    goal: ["Stabilizácia krvného obehu"],
  },
  en: {
    badge: "C",
    title: "Circulation assessment and stabilisation",
    description: "Circulation",
    diagnosisTitle: "Assessment",
    diagnosis: [
      "Heart rate",
      "Blood pressure, capillary refill",
      "Auscultation",
      "Bleeding, skin colour",
      "Urine output",
      "Laboratory tests",
      "ECG, ultrasound, CT, X-ray",
    ],
    interventionTitle: "Intervention",
    intervention: [
      "Trendelenburg position",
      "I.V. / I.O. access",
      "Fluids",
      "Bleeding control",
      "Medications",
      "Blood products",
    ],
    goalTitle: "Goal",
    goal: ["Circulatory stabilisation"],
  },
};

export default function CCirculation() {
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
