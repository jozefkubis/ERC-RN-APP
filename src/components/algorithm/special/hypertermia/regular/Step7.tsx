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
    badge: "Krok 7",
    title: "Posúďte hydratáciu",
    description: "Skontrolujte, či sú prítomné známky závažnej dehydratácie.",
    question: "Silne dehydrovaný?",
    yes: "Áno",
    no: "Nie",
  },
  en: {
    badge: "Step 7",
    title: "Assess hydration",
    description: "Check for signs of severe dehydration.",
    question: "Severely dehydrated?",
    yes: "Yes",
    no: "No",
  },
};

export default function Step7() {
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
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypertermia/regular/step8")
        }
      />
      <NoButton
        title={text.no}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypertermia/regular/step9")
        }
      />
    </AlgorithmScreen>
  );
}
