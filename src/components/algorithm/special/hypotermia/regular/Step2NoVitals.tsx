import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import ContentCard from "@/src/components/ui/ContentCard";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowActionButton from "@/src/components/ui/FlowActionButton";
import FlowConnector from "@/src/components/ui/FlowConnector";
import StepHeader from "@/src/components/ui/StepHeader";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Krok 2",
    title: "Posúďte dôvody na nezačatie alebo ukončenie KPR",
    description: "Pred pokračovaním vyhodnoťte všetky uvedené podmienky.",
    conditionsTitle: "Skontrolujte tieto podmienky",
    conditionsItems: [
      "Zjavné príznaky smrti.",
      "Platný pokyn nepokúšať sa o KPR.",
      "Podmienky nebezpečné pre záchrancu.",
      "Zasypanie lavínou dlhšie ako 60 minút, dýchacie cesty zaplnené snehom a asystólia.",
    ],
    question: "Je prítomná aspoň jedna z uvedených podmienok?",
    yesTitle: "Akákoľvek odpoveď áno",
    yesItems: ["Zvážte nezačatie alebo ukončenie KPR."],
    noTitle: "Všetky odpovede nie",
    noDescription: "Začnite KPR a pokračujte v postupe.",
  },
  en: {
    badge: "Step 2",
    title: "Assess reasons to withhold or terminate CPR",
    description: "Before proceeding, assess all the listed conditions.",
    conditionsTitle: "Check these conditions",
    conditionsItems: [
      "Obvious signs of death.",
      "A valid instruction not to attempt CPR.",
      "Conditions unsafe for the rescuer.",
      "Avalanche burial longer than 60 minutes, an airway filled with snow, and asystole.",
    ],
    question: "Is at least one of the listed conditions present?",
    yesTitle: "Any answer is yes",
    yesItems: ["Consider withholding or terminating CPR."],
    noTitle: "All answers are no",
    noDescription: "Start CPR and continue the pathway.",
  },
};

export default function Step2NoVitals() {
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

      <ContentCard
        title={text.conditionsTitle}
        iconName="warning-outline"
        tone="danger"
        items={text.conditionsItems}
        themeMode={themeMode}
      />

      <FlowConnector />

      <DecisionCard question={text.question} themeMode={themeMode} />

      <ContentCard
        title={text.yesTitle}
        iconName="hand-left-outline"
        tone="danger"
        items={text.yesItems}
        themeMode={themeMode}
      />

      <FlowActionButton
        title={text.noTitle}
        description={text.noDescription}
        iconName="checkmark-circle-outline"
        themeMode={themeMode}
        onPress={() =>
          router.push(
            "/algorithms/special/hypotermia/regular/step3-novitals",
          )
        }
      />
    </AlgorithmScreen>
  );
}
