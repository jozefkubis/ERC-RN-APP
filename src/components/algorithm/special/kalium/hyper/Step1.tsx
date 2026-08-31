import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import FlowConnector from "@/src/components/ui/FlowConnector";
import HeroCard from "@/src/components/ui/HeroCard";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Krok 1",
    title: "Posúďte hyperkaliémiu",
    description:
      "Myslite na hyperkaliémiu pri rizikových stavoch, EKG zmenách alebo metabolickej príčine zastavenia obehu. Pri ťažkej hyperkaliémii konajte bez odkladu.",
    heroEyebrow: "Riziko arytmie a ZO",
    heroTitle: "K+ zvýšený alebo podozrenie",
    heroDescription:
      "Hľadajte slabosť, parestézie, brady-/tachyarytmie, široké QRS, vysoké T vlny a kontext zlyhania obličiek, crush syndrómu, lýzy buniek alebo liekov.",
    checkTitle: "Okamžite overte a zastavte prísun K+",
    checkItems: [
      "Monitorujte EKG a čo najskôr skontrolujte K+, glykémiu, krvné plyny a renálne funkcie.",
      "Zastavte exogénne zdroje draslíka vrátane infúzií alebo liekov, ktoré môžu zvyšovať K+.",
      "Pri EKG zmenách alebo klinickej nestabilite neliečte len číslo, ale toxicitu hyperkaliémie.",
    ],
    question: "Je pacient v zastavení krvného obehu?",
    questionDescription:
      "Ak nereaguje a nedýcha normálne, postupujte súčasne podľa ALS a liečte hyperkaliémiu ako reverzibilnú príčinu.",
    yes: "Áno",
    no: "Nie",
    yesDescription: "Prejsť na postup pri ZO z hyperkaliémie",
    noDescription: "Pokračovať v liečbe hyperkaliémie s obehom",
    alsTitle: "Otvoriť ALS",
    alsDescription:
      "Pri potvrdenom ZO prejdite priamo na okamžitú resuscitáciu",
  },
  en: {
    badge: "Step 1",
    title: "Assess hyperkalaemia",
    description:
      "Consider hyperkalaemia in risk conditions, ECG changes, or a metabolic cause of cardiac arrest. In severe hyperkalaemia, act without delay.",
    heroEyebrow: "Risk of arrhythmia and cardiac arrest",
    heroTitle: "Raised K+ or suspected",
    heroDescription:
      "Look for weakness, paraesthesia, brady-/tachyarrhythmias, wide QRS, tall T waves, and a context of renal failure, crush syndrome, cell lysis, or medicines.",
    checkTitle: "Confirm quickly and stop K+ intake",
    checkItems: [
      "Monitor ECG and check K+, glucose, blood gases, and renal function as soon as possible.",
      "Stop exogenous potassium sources including infusions or medicines that can raise K+.",
      "With ECG changes or clinical instability, treat hyperkalaemic toxicity, not just the number.",
    ],
    question: "Is the patient in cardiac arrest?",
    questionDescription:
      "If unresponsive and not breathing normally, follow ALS while treating hyperkalaemia as a reversible cause.",
    yes: "Yes",
    no: "No",
    yesDescription: "Go to cardiac arrest due to hyperkalaemia",
    noDescription: "Continue treatment of hyperkalaemia with circulation",
    alsTitle: "Open ALS",
    alsDescription:
      "For confirmed cardiac arrest, go directly to immediate resuscitation",
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
        urgent
        themeMode={themeMode}
      />

      <HeroCard
        eyebrow={text.heroEyebrow}
        title={text.heroTitle}
        description={text.heroDescription}
        iconName="add-circle"
        themeMode={themeMode}
      />

      <ContentCard
        title={text.checkTitle}
        iconName="analytics-outline"
        tone="info"
        items={text.checkItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <DecisionCard
        question={text.question}
        description={text.questionDescription}
        themeMode={themeMode}
      />

      <YesButton
        title={text.yes}
        description={text.yesDescription}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/kalium/hyper/cardiac-arrest")
        }
      />
      <NoButton
        title={text.no}
        description={text.noDescription}
        themeMode={themeMode}
        onPress={() => router.push("/algorithms/special/kalium/hyper/step2")}
      />

      <FlowActionButton
        title={text.alsTitle}
        description={text.alsDescription}
        iconName="heart-dislike-outline"
        variant="danger"
        themeMode={themeMode}
        onPress={() => router.push("/algorithms/adult-resuscitation/als/step2")}
      />
    </AlgorithmScreen>
  );
}
