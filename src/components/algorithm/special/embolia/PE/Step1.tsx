import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Krok 1",
    title: "Rozpoznajte pľúcnu embóliu",
    description:
      "Myslite na pľúcnu embóliu pri náhlom nástupe progresívnej dušnosti a včas identifikujte hemodynamickú nestabilitu.",
    recognitionTitle: "Kedy myslieť na pľúcnu embóliu",
    recognitionItems: [
      "Zvážte pľúcnu embóliu u všetkých pacientov s náhlym nástupom progresívnej dušnosti a bez známeho srdcového alebo pľúcneho ochorenia.",
    ],
    riskTitle: "Vyhodnoťte vysoké riziko",
    riskItems: [
      "Realizujte 12-zvodové EKG: vylúčte akútny koronárny syndróm a hľadajte preťaženie pravej komory.",
      "Identifikujte hemodynamickú nestabilitu a vysoko rizikovú pľúcnu embóliu.",
      "Vykonajte echokardiografiu pri lôžku.",
    ],
    continueTitle: "Pokračovať v diagnostike a liečbe",
    continueDescription: "Začnite antikoaguláciu a potvrďte diagnózu",
  },
  en: {
    badge: "Step 1",
    title: "Recognise pulmonary embolism",
    description:
      "Consider pulmonary embolism with sudden onset of progressive dyspnoea and identify haemodynamic instability early.",
    recognitionTitle: "When to consider pulmonary embolism",
    recognitionItems: [
      "Consider pulmonary embolism in all patients with sudden onset of progressive dyspnoea and no known cardiac or pulmonary disease.",
    ],
    riskTitle: "Assess high risk",
    riskItems: [
      "Obtain a 12-lead ECG: exclude acute coronary syndrome and look for right ventricular strain.",
      "Identify haemodynamic instability and high-risk pulmonary embolism.",
      "Perform bedside echocardiography.",
    ],
    continueTitle: "Continue diagnosis and treatment",
    continueDescription: "Start anticoagulation and confirm the diagnosis",
  },
};

export default function Step1() {
  const router = useRouter();
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
        tone="info"
        items={text.recognitionItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.riskTitle}
        iconName="pulse-outline"
        items={text.riskItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <FlowActionButton
        title={text.continueTitle}
        description={text.continueDescription}
        iconName="arrow-forward-circle-outline"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/embolia/PE/step2")
        }
      />
    </AlgorithmScreen>
  );
}
