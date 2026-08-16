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
    badge: "Krok 2",
    title: "Vyhodnoťte teplotu jadra",
    description:
      "Zmerajte teplotu telesného jadra a podľa výsledku zvoľte ďalší postup.",
    question: "Teplota jadra* > 40,5 °C?",
    questionDescription: "Použite teplotnú sondu.",
    yes: "Áno",
    no: "Nie",
  },
  en: {
    badge: "Step 2",
    title: "Assess core temperature",
    description:
      "Measure core body temperature and choose the next step according to the result.",
    question: "Core temperature* > 40.5 °C?",
    questionDescription: "Use a temperature probe.",
    yes: "Yes",
    no: "No",
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
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypertermia/regular/step3")
        }
      />
      <NoButton
        title={text.no}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypertermia/regular/step4")
        }
      />
    </AlgorithmScreen>
  );
}
