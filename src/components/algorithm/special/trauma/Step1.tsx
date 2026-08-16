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
    title:
      "Traumatické zastavenie krvného obehu / hroziace zastavenie krvného obehu",
    description:
      "Rýchlo určte, či ide o pravdepodobné netraumatické zastavenie obehu.",
    question: "Pravdepodobné netraumatické zastavenie obehu?",
    yes: "Áno",
    no: "Nie",
  },
  en: {
    badge: "Step 1",
    title: "Traumatic cardiac arrest / impending cardiac arrest",
    description:
      "Quickly determine whether this is likely to be a non-traumatic cardiac arrest.",
    question: "Likely non-traumatic cardiac arrest?",
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
        themeMode={themeMode}
        urgent
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
        onPress={() => router.push("/algorithms/special/trauma/step2")}
      />
    </AlgorithmScreen>
  );
}
