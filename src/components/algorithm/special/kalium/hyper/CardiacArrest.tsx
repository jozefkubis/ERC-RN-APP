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
    badge: "Hyperkaliemický ZO",
    title: "ALS + špecifická liečba K+",
    description:
      "Pokračujte vo vysoko kvalitnej KPR podľa ALS a súčasne liečte hyperkaliémiu ako reverzibilnú príčinu zastavenia obehu.",
    alsTitle: "Otvoriť ALS",
    alsDescription:
      "Začnite KPR, pripojte defibrilátor/monitor a postupujte podľa rytmu",
    heroEyebrow: "ERC 2025 pri hyperkaliemickom ZO",
    heroTitle: "10 ml 10 % CaCl2 i.v. + 50 mmol NaHCO3 i.v.",
    heroDescription:
      "Podajte chlorid vápenatý a bikarbonát sodný cez samostatné intravenózne vstupy alebo s preplachom medzi nimi.",
    shiftTitle: "Presuňte K+ do buniek",
    shiftItems: [
      "Podajte 10 jednotiek rýchlo pôsobiaceho inzulínu a 25 g glukózy i.v.",
      "Ak bola glykémia pred liečbou < 7 mmol/l, po úvodnej liečbe pokračujte 10 % glukózou 50 ml/h počas 5 hodín.",
      "Podajte nebulizovaný salbutamol 10-20 mg ako doplnok k inzulínu a glukóze.",
    ],
    removeTitle: "Odstráňte K+ a eskalujte",
    removeItems: [
      "Zvážte dialýzu pri refraktérnej ťažkej hyperkaliémii.",
      "Zvážte ECPR v súlade s miestnymi protokolmi, ak počiatočný pokus o resuscitáciu nie je úspešný.",
      "Po ROSC pokračujte v častom monitorovaní K+, glykémie a EKG.",
    ],
  },
  en: {
    badge: "Hyperkalaemic arrest",
    title: "ALS + specific K+ treatment",
    description:
      "Continue high-quality CPR according to ALS while treating hyperkalaemia as a reversible cause of cardiac arrest.",
    alsTitle: "Open ALS",
    alsDescription:
      "Start CPR, attach defibrillator/monitor, and follow the rhythm",
    heroEyebrow: "ERC 2025 in hyperkalaemic cardiac arrest",
    heroTitle: "10 ml 10 % CaCl2 IV + 50 mmol NaHCO3 IV",
    heroDescription:
      "Give calcium chloride and sodium bicarbonate through separate IV lines or flush between them.",
    shiftTitle: "Shift K+ into cells",
    shiftItems: [
      "Give 10 units of rapid-acting insulin and 25 g glucose IV.",
      "If glucose before treatment was < 7 mmol/l, continue 10 % glucose at 50 ml/h for 5 hours after initial treatment.",
      "Give nebulised salbutamol 10-20 mg as an adjunct to insulin and glucose.",
    ],
    removeTitle: "Remove K+ and escalate",
    removeItems: [
      "Consider dialysis in refractory severe hyperkalaemia.",
      "Consider ECPR according to local protocols if the initial resuscitation attempt is unsuccessful.",
      "After ROSC, continue frequent monitoring of K+, glucose, and ECG.",
    ],
  },
};

export default function CardiacArrest() {
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

      <FlowActionButton
        title={text.alsTitle}
        description={text.alsDescription}
        iconName="pulse"
        variant="danger"
        themeMode={themeMode}
        onPress={() => router.push("/algorithms/adult-resuscitation/als/step2")}
      />

      <HeroCard
        eyebrow={text.heroEyebrow}
        title={text.heroTitle}
        description={text.heroDescription}
        iconName="medical"
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
        iconName="git-branch-outline"
        tone="warning"
        items={text.removeItems}
        themeMode={themeMode}
      />
    </AlgorithmScreen>
  );
}
