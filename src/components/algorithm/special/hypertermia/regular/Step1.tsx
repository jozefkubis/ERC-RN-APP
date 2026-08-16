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
    badge: "Krok 1",
    title: "Posúďte potrebu KPR",
    description:
      "Rýchlo skontrolujte vedomie a normálne dýchanie. Pri zastavení krvného obehu postupujte podľa univerzálneho algoritmu ALS.",
    question: "Potrebuje KPR?",
    yes: "Áno",
    no: "Nie",
  },
  en: {
    badge: "Step 1",
    title: "Assess the need for CPR",
    description:
      "Quickly check responsiveness and normal breathing. In cardiac arrest, follow the universal ALS algorithm.",
    question: "Does the patient need CPR?",
    yes: "Yes",
    no: "No",
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

      <FlowConnector />

      <DecisionCard question={text.question} themeMode={themeMode} />

      <YesButton
        title={text.yes}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/adult-resuscitation/als/step1")
        }
      />
      <NoButton
        title={text.no}
        themeMode={themeMode}
        onPress={() =>
          router.push("/algorithms/special/hypertermia/regular/step2")
        }
      />
    </AlgorithmScreen>
  );
}
