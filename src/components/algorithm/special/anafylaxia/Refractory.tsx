import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import HeroCard from "@/src/components/ui/HeroCard";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Refraktérna",
    title: "Refraktérna anafylaxia",
    description:
      "Pretrvávanie problémov s dýchaním alebo obehom napriek dvom správne podaným i.m. dávkam adrenalínu.",
    heroEyebrow: "Špecializovaná liečba",
    heroTitle: "Začnite i.v. infúziu adrenalínu",
    heroDescription:
      "Len skúsený špecialista v primerane monitorovanom prostredí. Infúziu titrujte podľa klinickej odpovede.",
    preparingTitle: "Kým sa pripraví infúzia",
    preparingItems: [
      "Pokračujte v i.m. adrenalíne každých 5 minút",
      "Privolajte seniornú a intenzivistickú pomoc",
      "Nepodávajte i.v. adrenalín ako nekontrolovaný bolus",
    ],
    abcTitle: "Optimalizujte ABC",
    abcItems: [
      "Zabezpečte dýchacie cesty včas a podávajte 100 % kyslík",
      "Pokračujte v bolusoch kryštaloidu podľa odpovede",
      "Kontinuálne monitorujte EKG, SpO2 a krvný tlak",
      "Pri liečbe betablokátorom a refraktérnom šoku zvážte glukagón podľa lokálneho protokolu",
    ],
    stableTitle: "Stav sa stabilizoval",
    stableDescription: "Pokračujte v monitorovaní a následnej starostlivosti",
    arrestTitle: "Zastavenie obehu",
    arrestDescription: "Okamžite začnite štandardný ALS postup",
  },
  en: {
    badge: "Refractory",
    title: "Refractory anaphylaxis",
    description:
      "Persistent breathing or circulation problems despite two correctly given IM adrenaline doses.",
    heroEyebrow: "Specialist treatment",
    heroTitle: "Start IV adrenaline infusion",
    heroDescription:
      "Only by an experienced specialist in an appropriately monitored setting. Titrate the infusion to clinical response.",
    preparingTitle: "While the infusion is prepared",
    preparingItems: [
      "Continue IM adrenaline every 5 minutes",
      "Call senior and intensive care help",
      "Do not give IV adrenaline as an uncontrolled bolus",
    ],
    abcTitle: "Optimise ABC",
    abcItems: [
      "Secure the airway early and give 100 % oxygen",
      "Continue crystalloid boluses according to response",
      "Continuously monitor ECG, SpO2, and blood pressure",
      "If the patient takes beta-blockers and shock is refractory, consider glucagon according to local protocol",
    ],
    stableTitle: "Condition stabilised",
    stableDescription: "Continue monitoring and aftercare",
    arrestTitle: "Cardiac arrest",
    arrestDescription: "Start the standard ALS algorithm immediately",
  },
};

export default function Refractory() {
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
        iconName="medkit"
        danger
        themeMode={themeMode}
      />

      <ContentCard
        title={text.preparingTitle}
        iconName="timer-outline"
        tone="danger"
        items={text.preparingItems}
        themeMode={themeMode}
      />

      <ContentCard
        title={text.abcTitle}
        iconName="options-outline"
        tone="info"
        items={text.abcItems}
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.stableTitle}
        description={text.stableDescription}
        iconName="checkmark-circle-outline"
        themeMode={themeMode}
        onPress={() => router.push("/algorithms/special/anafylaxia/aftercare")}
      />

      <FlowActionButton
        title={text.arrestTitle}
        description={text.arrestDescription}
        iconName="heart-dislike-outline"
        variant="danger"
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/anafylaxia/cardiac-arrest")
        }
      />
    </AlgorithmScreen>
  );
}
