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
    badge: "Krok 4",
    title: "Posúďte neurologický stav",
    description:
      "Pri teplote jadra najviac 40,5 °C skontrolujte prítomnosť zmätenosti alebo dezorientácie.",
    question: "Teplota jadra ≤ 40,5 °C a zmätenosť / dezorientácia?",
    questionDescription: "Použite teplotnú sondu.",
    yes: "Áno",
    no: "Nie",
    yesDescription: "Prejsť na rýchle aktívne chladenie",
    noDescription: "Pokračovať kontrolou sodíka",
  },
  en: {
    badge: "Step 4",
    title: "Assess neurological status",
    description:
      "If core temperature is no higher than 40.5 °C, check for confusion or disorientation.",
    question: "Core temperature ≤ 40.5 °C and confusion / disorientation?",
    questionDescription: "Use a temperature probe.",
    yes: "Yes",
    no: "No",
    yesDescription: "Go to rapid active cooling",
    noDescription: "Continue with sodium check",
  },
};

export default function Step4() {
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
          router.push("/algorithms/special/hypertermia/regular/step3")
        }
      />
      <NoButton
        title={text.no}
        description={text.noDescription}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypertermia/regular/step5")
        }
      />
    </AlgorithmScreen>
  );
}
