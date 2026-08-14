import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import FlowConnector from "@/src/components/ui/FlowConnector";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Krok 2",
    title: "Liečte hyperkaliémiu bez ZO",
    description:
      "Podľa ERC 2025 sú ciele tri: presunúť draslík do buniek, antagonizovať účinok hyperkaliémie a odstrániť draslík z tela.",
    heroEyebrow: "Ťažká hyperkaliémia so zmenami na EKG",
    heroTitle: "10 ml 10 % CaCl2 i.v.",
    heroDescription:
      "Podajte chlorid vápenatý i.v. na stabilizáciu myokardu. Ak nie je dostupný, použite 30 ml 10 % glukonátu vápenatého podľa lokálneho protokolu.",
    shiftTitle: "Presuňte draslík do buniek",
    shiftItems: [
      "Podajte 10 jednotiek rýchlo pôsobiaceho inzulínu a 25 g glukózy i.v. pri stredne ťažkej a ťažkej hyperkaliémii.",
      "Ak je glykémia pred liečbou < 7 mmol/l, pokračujte infúziou 10 % glukózy 50 ml/h počas 5 hodín.",
      "Podajte nebulizovaný salbutamol 10-20 mg ako doplnok k inzulínu a glukóze.",
    ],
    removeTitle: "Odstráňte draslík z tela",
    removeItems: [
      "Podajte perorálne 10 g cyklosilikátu zirkónia sodného.",
      "Zvážte dialýzu pri refraktérnej ťažkej hyperkaliémii.",
      "Monitorujte K+, glykémiu a EKG; účinok presunu K+ do buniek je prechodný.",
    ],
    arrestTitle: "Zastavenie obehu",
    arrestDescription:
      "Prejdite na hyperkaliemický ZO a súčasne spustite ALS",
  },
  en: {
    badge: "Step 2",
    title: "Treat hyperkalaemia without cardiac arrest",
    description:
      "ERC 2025 treatment has three goals: shift potassium into cells, antagonise hyperkalaemic effects, and remove potassium from the body.",
    heroEyebrow: "Severe hyperkalaemia with ECG changes",
    heroTitle: "10 ml 10 % CaCl2 IV",
    heroDescription:
      "Give calcium chloride IV to stabilise the myocardium. If unavailable, use 30 ml of 10 % calcium gluconate according to local protocol.",
    shiftTitle: "Shift potassium into cells",
    shiftItems: [
      "Give 10 units of rapid-acting insulin and 25 g glucose IV for moderate and severe hyperkalaemia.",
      "If glucose before treatment is < 7 mmol/l, continue 10 % glucose infusion at 50 ml/h for 5 hours.",
      "Give nebulised salbutamol 10-20 mg as an adjunct to insulin and glucose.",
    ],
    removeTitle: "Remove potassium from the body",
    removeItems: [
      "Give 10 g sodium zirconium cyclosilicate orally.",
      "Consider dialysis in refractory severe hyperkalaemia.",
      "Monitor K+, glucose, and ECG; intracellular K+ shift is temporary.",
    ],
    arrestTitle: "Cardiac arrest",
    arrestDescription:
      "Go to hyperkalaemic cardiac arrest and start ALS at the same time",
  },
};

export default function Step2() {
  const router = useRouter();
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

      <HeroCard
        eyebrow={text.heroEyebrow}
        title={text.heroTitle}
        description={text.heroDescription}
        iconName="shield-checkmark"
        danger
        themeMode={themeMode}
      />

      <ContentCard
        title={text.shiftTitle}
        iconName="swap-vertical"
        tone="info"
        items={text.shiftItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <ContentCard
        title={text.removeTitle}
        iconName="exit-outline"
        items={text.removeItems}
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.arrestTitle}
        description={text.arrestDescription}
        iconName="heart-dislike-outline"
        variant="danger"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/kalium/hyper/cardiac-arrest")
        }
      />
    </AlgorithmScreen>
  );
}
