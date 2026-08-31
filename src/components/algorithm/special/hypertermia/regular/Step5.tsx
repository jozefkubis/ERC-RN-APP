import AlgorithmScreen from "@/src/components/ui/AlgorithmScreen";
import DecisionCard from "@/src/components/ui/DecisionCard";
import FlowConnector from "@/src/components/ui/FlowConnector";
import NoButton from "@/src/components/ui/NoButton";
import StepHeader from "@/src/components/ui/StepHeader";
import YesButton from "@/src/components/ui/YesButton";
import { useSettings } from "@/src/context/settings-context";
import { useRouter } from "expo-router";

const pageText = {
  sk: {
    badge: "Krok 5",
    title: "Skontrolujte sodík v krvi",
    description:
      "Vyhodnoťte koncentráciu sodíka a podľa výsledku zvoľte ďalší postup.",
    question: "Sodík v krvi < 130 mEq·l⁻¹?",
    yes: "Áno",
    no: "Nie",
    yesDescription: "Prejsť na liečbu hyponatriémie",
    noDescription: "Pokračovať posúdením hydratácie",
  },
  en: {
    badge: "Step 5",
    title: "Check blood sodium",
    description:
      "Assess the sodium concentration and choose the next step according to the result.",
    question: "Blood sodium < 130 mEq·l⁻¹?",
    yes: "Yes",
    no: "No",
    yesDescription: "Go to hyponatraemia treatment",
    noDescription: "Continue with hydration assessment",
  },
};

export default function Step5() {
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

      <FlowConnector />

      <DecisionCard question={text.question} themeMode={themeMode} />

      <YesButton
        title={text.yes}
        description={text.yesDescription}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypertermia/regular/step6")
        }
      />
      <NoButton
        title={text.no}
        description={text.noDescription}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypertermia/regular/step7")
        }
      />
    </AlgorithmScreen>
  );
}
