import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";

const pageText = {
  sk: {
    badge: "Zastavenie obehu",
    title: "Pľúcna embólia počas KPR",
    description:
      "Pri predpokladanej alebo známej pľúcnej embólii pokračujte vo vysokokvalitnej KPR a súčasne začnite špecifickú liečbu.",
    diagnosticTitle: "Diagnostická stopa počas KPR",
    diagnosticItems: [
      "ETCO₂ < 1,7 kPa/13 mmHg počas vysokokvalitných kompresií hrudníka môže podporovať diagnózu pľúcnej embólie, ide však o nešpecifický znak.",
    ],
    suspectedEyebrow: "Predpokladaná príčina zastavenia obehu",
    suspectedTitle: "Použite fibrinolytiká",
    suspectedDescription:
      "Fibrinolytickú liečbu použite, keď je pľúcna embólia predpokladanou príčinou zastavenia krvného obehu.",
    knownTitle: "Ak je pľúcna embólia známou príčinou",
    knownItems: [
      "Použite fibrinolytiká, chirurgickú embolektómiu alebo perkutánnu mechanickú trombektómiu.",
    ],
    rescueTitle: "Záchranná terapia a rozhodovanie",
    rescueItems: [
      "Zvážte eKPR ako záchrannú terapiu pre vybraných pacientov, keď konvenčná KPR zlyháva a zariadenie ju môže poskytnúť.",
      "Zriaďte multidisciplinárny tím na rozhodovanie o manažmente vysokorizikovej pľúcnej embólie podľa miestnych zdrojov.",
    ],
  },
  en: {
    badge: "Cardiac arrest",
    title: "Pulmonary embolism during CPR",
    description:
      "For suspected or known pulmonary embolism, continue high-quality CPR and start specific treatment at the same time.",
    diagnosticTitle: "Diagnostic clue during CPR",
    diagnosticItems: [
      "ETCO₂ < 1.7 kPa/13 mmHg during high-quality chest compressions may support a diagnosis of pulmonary embolism, although it is a non-specific sign.",
    ],
    suspectedEyebrow: "Suspected cause of cardiac arrest",
    suspectedTitle: "Use fibrinolytic drugs",
    suspectedDescription:
      "Use fibrinolytic treatment when pulmonary embolism is the suspected cause of cardiac arrest.",
    knownTitle: "If pulmonary embolism is the known cause",
    knownItems: [
      "Use fibrinolytic drugs, surgical embolectomy, or percutaneous mechanical thrombectomy.",
    ],
    rescueTitle: "Rescue therapy and decision-making",
    rescueItems: [
      "Consider ECPR as a rescue therapy for selected patients when conventional CPR is failing in settings in which it is implemented.",
      "Establish a multidisciplinary team to guide the management of high-risk pulmonary embolism according to locally available resources.",
    ],
  },
};

export default function Step1() {
  const { language, themeMode } = useSettings();
  const text = pageText[language];

  return (
    <AlgorithmScreen themeMode={themeMode}>
      <StepHeader
        badge={text.badge}
        title={text.title}
        description={text.description}
        themeMode={themeMode}
        urgent
      />

      <ContentCard
        title={text.diagnosticTitle}
        iconName="analytics-outline"
        tone="info"
        items={text.diagnosticItems}
        themeMode={themeMode}
      />

      <HeroCard
        eyebrow={text.suspectedEyebrow}
        title={text.suspectedTitle}
        description={text.suspectedDescription}
        iconName="medical"
        themeMode={themeMode}
        danger
      />

      <ContentCard
        title={text.knownTitle}
        iconName="git-branch-outline"
        tone="danger"
        items={text.knownItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.rescueTitle}
        iconName="people-outline"
        items={text.rescueItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
